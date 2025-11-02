'use client';

import { useState } from 'react';
import Link from 'next/link';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className='flex flex-col gap-4'>
      <div>
        <label htmlFor='username' className='sr-only'>
          Username
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <span
              className='icon-[solar--user-broken]'
              role='img'
              aria-hidden='true'
            />
          </div>
          <input
            id='username'
            type='text'
            placeholder='Username'
            className='border-border text-foreground placeholder:text-foreground-muted focus:ring-primary w-full rounded-lg border bg-transparent py-2 pr-4 pl-10 text-sm outline-none focus:ring-2'
          />
        </div>
      </div>

      <div>
        <label htmlFor='password' className='sr-only'>
          Password
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <span
              className='icon-[solar--lock-password-outline]'
              role='img'
              aria-hidden='true'
            />
          </div>

          <input
            id='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            className='border-border text-foreground placeholder:text-foreground-muted focus:ring-primary w-full rounded-lg border bg-transparent py-2 pr-4 pl-10 text-sm outline-none focus:ring-2'
          />

          <button
            className='absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3'
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? (
              <span
                className='icon-[solar--eye-broken]'
                role='img'
                aria-hidden='true'
              />
            ) : (
              <span
                className='icon-[solar--eye-closed-broken]'
                role='img'
                aria-hidden='true'
              />
            )}
          </button>
        </div>
      </div>

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
