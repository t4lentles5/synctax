'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { createClient } from '@lib/supabase/client';
import { RegisterInput } from './RegisterInput';

export interface RegisterFormInputs {
  email: string;
  fullname: string;
  username: string;
  password: string;
  confirm_password: string;
}

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setError,
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    const supabase = createClient();
    const { email, fullname, username, password, confirm_password } = data;

    if (password !== confirm_password) {
      setError('confirm_password', {
        type: 'manual',
        message: 'Passwords do not match',
      });
      return;
    }

    try {
      const { data: existingUsername } = await supabase
        .from('profiles')
        .select('id')
        .eq('username', username)
        .maybeSingle();

      if (existingUsername) {
        setError('username', {
          type: 'manual',
          message: 'This username is already taken.',
        });
        return;
      }

      const { data: existingEmail, error: emailCheckError } =
        await supabase.rpc('check_email_exists', { email_to_check: email });

      if (emailCheckError) {
        console.error(emailCheckError);
      } else if (existingEmail) {
        setError('email', {
          type: 'manual',
          message: 'This email is already registered.',
        });
        return;
      }

      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
          },
        });

      if (signUpError) throw signUpError;

      const user = signUpData.user;
      if (!user) return;

      const { error: insertError } = await supabase.from('profiles').insert({
        id: user.id,
        fullname,
        username,
        email,
      });

      if (insertError) throw insertError;

      console.log('User and profile created successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
      <RegisterInput
        id={'email'}
        inputType={'email'}
        label={'Email'}
        icon={'icon-[mage--email]'}
        register={register}
        watch={watch}
        pattern={{
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: 'Please enter a valid email address.',
        }}
        error={errors.email}
      />

      <RegisterInput
        id={'fullname'}
        inputType={'text'}
        label={'Fullname'}
        icon={'icon-[mage--id-card]'}
        register={register}
        watch={watch}
        pattern={{
          value: /^[a-zA-Z\s]+$/,
          message: 'Fullname can only contain letters and spaces.',
        }}
        minLength={{
          value: 3,
          message: 'Fullname must be at least 3 characters long.',
        }}
        maxLength={{
          value: 20,
          message: 'Fullname cannot exceed 20 characters.',
        }}
        error={errors.fullname}
      />

      <RegisterInput
        id={'username'}
        inputType={'text'}
        label={'Username'}
        icon={'icon-[solar--user-broken]'}
        register={register}
        watch={watch}
        pattern={{
          value: /^[a-zA-Z0-9._]+$/,
          message:
            'Username can only contain letters, numbers, dots and underscores. It cannot start or end with a special character.',
        }}
        minLength={{
          value: 3,
          message: 'Username must be at least 3 characters long.',
        }}
        maxLength={{
          value: 20,
          message: 'Username cannot exceed 20 characters.',
        }}
        error={errors.username}
      />

      <RegisterInput
        id={'password'}
        inputType={'password'}
        label={'Password'}
        icon={'icon-[solar--lock-password-outline]'}
        isPassword={true}
        register={register}
        watch={watch}
        minLength={{
          value: 6,
          message: 'Password must have at least 6 characters.',
        }}
        error={errors.password}
      />

      <RegisterInput
        id={'confirm_password'}
        inputType={'password'}
        label={'Confirm Password'}
        icon={'icon-[solar--lock-password-outline]'}
        isPassword={true}
        register={register}
        watch={watch}
        error={errors.confirm_password}
      />

      <button
        type='submit'
        disabled={!isValid}
        className={`${isValid ? 'bg-primary hover:bg-primary-deep cursor-pointer' : 'bg-primary-muted cursor-default'} rounded-lg py-2 font-medium text-white transition-colors duration-300 ease-in-out`}
      >
        Sign Up
      </button>
    </form>
  );
};
