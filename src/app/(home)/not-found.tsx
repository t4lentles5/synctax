import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex h-[calc(100vh-64px)] items-center'>
      <div className='max-w-2xl space-y-6 text-center'>
        <div className='space-y-2'>
          <div className='bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-8xl font-bold text-transparent md:text-9xl'>
            404
          </div>
        </div>

        <div className='space-y-4'>
          <h1 className='text-3xl font-bold md:text-4xl'>Page Not Found</h1>

          <p className='text-foreground-muted mx-auto max-w-xl text-lg leading-relaxed'>
            Sorry, we couldn&apos;t find what you were looking for. The link may
            be broken, the page might have been moved, or the profile
            you&apos;re trying to view doesn&apos;t exist.
          </p>
        </div>

        <div className='pt-4'>
          <Link
            href='/'
            className='bg-primary hover:bg-primary-deep inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors duration-300 ease-in-out'
          >
            <span
              className='icon-[mage--chevron-left] size-5'
              role='img'
              aria-hidden='true'
            />
            Go back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
