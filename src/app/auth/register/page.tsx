import { RegisterForm } from '@/features/auth';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <>
      <h1 className='font-plex text-center text-2xl italic'>Synctax</h1>

      <RegisterForm />

      <p className='text-foreground-muted text-center text-sm'>
        Already have an account?{' '}
        <Link href='/auth/login' className='text-primary-deep hover:underline'>
          Sign In
        </Link>
      </p>
    </>
  );
}
