import { AuthInput } from './AuthInput';

export const RegisterForm = () => {
  return (
    <form className='flex flex-col gap-4'>
      <AuthInput
        id={'email'}
        inputType={'email'}
        label={'Email'}
        icon={'icon-[mage--email]'}
      />

      <AuthInput
        id={'username'}
        inputType={'text'}
        label={'Username'}
        icon={'icon-[solar--user-broken]'}
      />

      <AuthInput
        id={'password'}
        inputType={'password'}
        label={'Password'}
        icon={'icon-[solar--lock-password-outline]'}
        isPassword={true}
      />

      <AuthInput
        id={'confirm-password'}
        inputType={'password'}
        label={'Confirm Password'}
        icon={'icon-[solar--lock-password-outline]'}
        isPassword={true}
      />

      <button
        type='submit'
        className='bg-primary hover:bg-primary-deep cursor-pointer rounded-lg py-2 font-medium text-white transition-colors duration-300 ease-in-out'
      >
        Sign Up
      </button>
    </form>
  );
};
