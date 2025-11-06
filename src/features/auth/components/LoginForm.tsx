'use client';

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { createClient } from '@lib/supabase/client';
import { LoginInput } from './LoginInput';

export interface LoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const supabase = createClient();
    const { email, password } = data;

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          setError('password', {
            type: 'manual',
            message: 'Invalid email or password.',
          });
          return;
        }
        throw error;
      }

      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
      <LoginInput
        id={'email'}
        inputType={'email'}
        label={'Email'}
        icon={'icon-[mage--email]'}
        register={register}
        watch={watch}
        error={errors.email}
        pattern={{
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: 'Please enter a valid email address.',
        }}
      />

      <LoginInput
        id={'password'}
        inputType={'password'}
        label={'Password'}
        icon={'icon-[solar--lock-password-outline]'}
        isPassword={true}
        register={register}
        watch={watch}
        error={errors.password}
        minLength={{
          value: 6,
          message: 'Password must have at least 6 characters.',
        }}
      />

      <div className='flex items-center justify-end'>
        <Link
          href='/auth/forgot-password'
          className='text-primary-deep text-sm hover:underline'
        >
          Forgot password?
        </Link>
      </div>

      <button
        type='submit'
        className='bg-primary hover:bg-primary-deep cursor-pointer rounded-lg py-2 font-medium text-white transition-colors duration-300 ease-in-out'
      >
        Sign in
      </button>
    </form>
  );
};
