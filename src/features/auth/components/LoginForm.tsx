'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { LoginInput } from './LoginInput';
import { loginAction } from '../actions/login';
import { LoginFormInputs } from '../interfaces';

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setError,
    clearErrors,
  } = useForm<LoginFormInputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);
    clearErrors();
    try {
      const response = await loginAction(data);

      if (response?.type === 'error') {
        if (response.field) {
          setError(response.field, {
            type: 'manual',
            message: response.message,
          });
        }
        return;
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('password', {
        type: 'manual',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
      <LoginInput
        id='email'
        inputType='email'
        label='Email'
        icon='icon-[mage--email]'
        register={register}
        watch={watch}
        error={errors.email}
        pattern={{
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: 'Please enter a valid email address.',
        }}
      />

      <LoginInput
        id='password'
        inputType='password'
        label='Password'
        icon='icon-[solar--lock-password-outline]'
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
        disabled={!isValid || loading}
        className={`${
          isValid && !loading
            ? 'bg-primary hover:bg-primary-deep cursor-pointer'
            : 'bg-primary-muted cursor-default'
        } relative flex items-center justify-center gap-2 rounded-lg py-2 font-medium text-white transition-colors duration-300 ease-in-out`}
      >
        {loading ? (
          <>
            <span className='size-4 animate-spin rounded-full border-2 border-white border-t-transparent' />
            Signing in…
          </>
        ) : (
          'Sign In'
        )}
      </button>
    </form>
  );
};
