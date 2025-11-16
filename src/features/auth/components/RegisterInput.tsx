import { useState } from 'react';
import { FieldError, UseFormRegister, UseFormWatch } from 'react-hook-form';

import { RegisterFormInputs } from '../interfaces';

interface Props {
  id: 'email' | 'password' | 'fullname' | 'username' | 'confirm_password';
  inputType: 'text' | 'email' | 'password';
  label: string;
  icon: string;
  isPassword?: boolean;
  register: UseFormRegister<RegisterFormInputs>;
  watch: UseFormWatch<RegisterFormInputs>;
  pattern?: {
    value: RegExp;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: { value: number; message: string };
  error: FieldError | undefined;
}

export const RegisterInput = ({
  id,
  inputType,
  label,
  icon,
  isPassword,
  register,
  watch,
  pattern,
  minLength,
  maxLength,
  error,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const type = isPassword && showPassword ? 'text' : inputType;
  watch(id);

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
          {...register(id, {
            required: {
              value: true,
              message: `${label} is required.`,
            },
            pattern: pattern,
            minLength: minLength,
            maxLength: maxLength,
          })}
          className={`text-foreground placeholder:text-foreground-muted ring-border w-full rounded-lg border bg-transparent py-2 pr-4 pl-10 text-sm ring outline-none focus:ring-2 ${
            error
              ? 'border-red-400 focus:ring-red-400'
              : 'border-border focus:ring-primary'
          }`}
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

      {error && (
        <div className='px-2 pt-2 text-xs text-red-400'>
          <span>{error.message}</span>
        </div>
      )}
    </div>
  );
};
