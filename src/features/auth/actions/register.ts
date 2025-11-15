'use server';

import { redirect } from 'next/navigation';

import { createClient } from '@lib/supabase/server';
import { RegisterFormInputs, registerSchema } from '../interfaces';

type RegisterActionResponse = {
  type: 'error';
  message: string;
  field?: keyof RegisterFormInputs;
} | void;

export async function registerAction(
  formData: RegisterFormInputs,
): Promise<RegisterActionResponse> {
  const supabase = await createClient();

  const parsed = registerSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      type: 'error',
      field: parsed.error.issues[0].path[0] as keyof RegisterFormInputs,
      message: parsed.error.issues[0].message,
    };
  }

  const { email, fullname, username, password, confirm_password } = parsed.data;

  if (password !== confirm_password) {
    return {
      type: 'error',
      field: 'confirm_password',
      message: 'Passwords do not match',
    };
  }

  try {
    const { data: existingUsername } = await supabase
      .from('profiles')
      .select('id')
      .eq('username', username)
      .maybeSingle();

    if (existingUsername) {
      return {
        type: 'error',
        field: 'username',
        message: 'This username is already taken.',
      };
    }

    const { data: existingEmail, error: emailCheckError } = await supabase.rpc(
      'check_email_exists',
      {
        email_to_check: email,
      },
    );

    if (emailCheckError) {
      console.error(emailCheckError);
    } else if (existingEmail) {
      return {
        type: 'error',
        field: 'email',
        message: 'This email is already registered.',
      };
    }

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email,
        password,
        options: {
          emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/`,
        },
      },
    );

    if (signUpError) throw signUpError;

    const user = signUpData.user;
    if (!user) {
      return {
        type: 'error',
        message: 'Failed to create user.',
      };
    }

    const { error: insertError } = await supabase.from('profiles').insert({
      id: user.id,
      fullname,
      username,
      email,
    });

    if (insertError) throw insertError;

    redirect('/');
  } catch (error) {
    console.error(error);

    return {
      type: 'error',
      message: 'Unexpected server error. Try again later.',
    };
  }
}
