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
            className='bg-transparent border text-sm border-border rounded-lg pl-10 pr-4 py-2 w-full text-foreground placeholder:text-foreground-muted focus:ring-2 focus:ring-primary outline-none'
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
            className='bg-transparent border border-border text-sm rounded-lg pl-10 pr-4 py-2 w-full text-foreground placeholder:text-foreground-muted focus:ring-2 focus:ring-primary outline-none'
          />

          <button
            className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
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
          className='text-sm text-primary-deep hover:underline'
        >
          Forgot password?
        </Link>
      </div>

      <button
        type='submit'
        className='bg-primary hover:bg-primary-deep text-white py-2 rounded-lg font-medium transition-colors duration-300 ease-in-out cursor-pointer'
      >
        Sign in
      </button>
    </form>
  );
};
