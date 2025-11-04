import Link from 'next/link';
import { LoginForm } from '@features/auth';

export const metadata = { title: 'Login • Synctax' };

export default function LoginPage() {
  return (
    <>
      <h1 className='font-plex text-center text-2xl italic'>Synctax</h1>

      <LoginForm />

      <p className='text-foreground-muted text-center text-sm'>
        Don’t have an account?{' '}
        <Link
          href='/auth/register'
          className='text-primary-deep font-semibold hover:underline'
        >
          Sign Up
        </Link>
      </p>
    </>
  );
}
