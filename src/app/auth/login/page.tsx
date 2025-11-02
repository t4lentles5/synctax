import { LoginForm } from '@/features/auth';
import Link from 'next/link';

export const metadata = { title: 'Login • Synctax' };

export default function LoginPage() {
  return (
    <>
      <h1 className='text-2xl text-center font-plex italic'>Synctax</h1>

      <LoginForm />

      <p className='text-center text-sm text-foreground-muted'>
        Don’t have an account?{' '}
        <Link
          href='/auth/register'
          className='text-primary-deep hover:underline'
        >
          Sign Up
        </Link>
      </p>
    </>
  );
}
