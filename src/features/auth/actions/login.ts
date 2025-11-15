'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@lib/supabase/server';
import { LoginFormInputs, loginSchema } from '../interfaces';

type LoginActionResponse = {
  type: 'error';
  message: string;
  field?: keyof LoginFormInputs;
} | void;

export async function loginAction(
  formData: LoginFormInputs,
): Promise<LoginActionResponse> {
  const supabase = await createClient();

  const parsed = loginSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      type: 'error',
      field: parsed.error.issues[0].path[0] as keyof LoginFormInputs,
      message: parsed.error.issues[0].message,
    };
  }

  const { email, password } = parsed.data;

  try {
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      if (loginError.message.includes('Invalid login credentials')) {
        return {
          type: 'error',
          message: 'Invalid email or password.',
          field: 'password',
        };
      }
      throw loginError;
    }

    redirect('/');
  } catch (error) {
    console.error(error);

    return {
      type: 'error',
      message: 'Unexpected server error. Try again later.',
    };
  }
}
