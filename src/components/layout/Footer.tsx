import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='text-foreground-muted z-10 py-5 text-center text-sm'>
      Made with 💜 by{' '}
      <Link
        href='https://github.com/t4lentles5'
        rel='noopener noreferrer'
        target='_blank'
        className='from-blob-purple to-blob-pink hover:decoration-blob-pink bg-linear-to-r bg-clip-text font-medium text-transparent transition-colors hover:underline'
      >
        @t4lentles5
      </Link>
    </footer>
  );
};
