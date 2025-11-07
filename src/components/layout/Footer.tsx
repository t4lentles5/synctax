import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='text-foreground-muted z-10 py-5 text-center text-sm'>
      Made with 💜 by{' '}
      <Link
        href='https://github.com/t4lentles5'
        rel='noopener noreferrer'
        target='_blank'
        className='bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text font-medium text-transparent transition-colors hover:underline hover:decoration-pink-400'
      >
        @t4lentles5
      </Link>
    </footer>
  );
};
