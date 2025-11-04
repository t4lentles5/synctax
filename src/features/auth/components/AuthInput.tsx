'use client';

import { useState } from 'react';

interface Props {
  id: string;
  inputType: 'text' | 'email' | 'password';
  label: string;
  icon: string;
  isPassword?: boolean;
}

export const AuthInput = ({
  id,
  inputType,
  label,
  icon,
  isPassword,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const type = isPassword && showPassword ? 'text' : inputType;

  return (
    <div>
      <label htmlFor={id} className='sr-only'>
        {label}
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
          <span className={icon} role='img' aria-hidden='true' />
        </div>

        <input
          id={id}
          type={type}
          placeholder={label}
          className='border-border text-foreground placeholder:text-foreground-muted focus:ring-primary w-full rounded-lg border bg-transparent py-2 pr-4 pl-10 text-sm outline-none focus:ring-2'
        />

        {isPassword && (
          <button
            type='button'
            className='absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3'
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={
              showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
            }
          >
            <span
              className={
                showPassword
                  ? 'icon-[solar--eye-broken]'
                  : 'icon-[solar--eye-closed-broken]'
              }
              role='img'
              aria-hidden='true'
            />
          </button>
        )}
      </div>
    </div>
  );
};
