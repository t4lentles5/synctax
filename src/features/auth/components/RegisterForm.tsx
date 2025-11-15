'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RegisterInput } from './RegisterInput';
import { registerAction } from '../actions/register';
import { RegisterFormInputs } from '../interfaces';

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setError,
    clearErrors,
  } = useForm<RegisterFormInputs>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    setLoading(true);
    clearErrors();

    try {
      const response = await registerAction(data);

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
      console.error('Register error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
      <RegisterInput
        id='email'
        inputType='email'
        label='Email'
        icon='icon-[mage--email]'
        register={register}
        watch={watch}
        pattern={{
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: 'Please enter a valid email address.',
        }}
        error={errors.email}
      />

      <RegisterInput
        id='fullname'
        inputType='text'
        label='Fullname'
        icon='icon-[mage--id-card]'
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
        id='username'
        inputType='text'
        label='Username'
        icon='icon-[solar--user-broken]'
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
        id='password'
        inputType='password'
        label='Password'
        icon='icon-[solar--lock-password-outline]'
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
        id='confirm_password'
        inputType='password'
        label='Confirm Password'
        icon='icon-[solar--lock-password-outline]'
        isPassword={true}
        register={register}
        watch={watch}
        error={errors.confirm_password}
      />

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
            Signing up…
          </>
        ) : (
          'Sign Up'
        )}
      </button>
    </form>
  );
};
