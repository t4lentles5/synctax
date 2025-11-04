import { Footer } from '@components/layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-background relative flex min-h-screen flex-col items-center justify-between overflow-hidden'>
      <div className='bg-blob-violet absolute top-1/6 left-1/6 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px] lg:top-1/3 lg:left-1/3 lg:h-120 lg:w-120' />
      <div className='bg-blob-pink absolute right-1/6 bottom-1/6 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full opacity-30 blur-[140px] lg:right-1/3 lg:bottom-1/3 lg:h-120 lg:w-120' />
      <div className='bg-blob-orange absolute top-1/4 right-1/4 h-100 w-100 translate-x-1/4 -translate-y-1/4 rounded-full opacity-20 blur-[160px]' />

      <main className='z-10 grid w-full grow place-items-center p-5'>
        <div className='bg-background/30 border-border relative flex w-full max-w-md flex-col gap-4 rounded-2xl border p-8 shadow-xl backdrop-blur-lg'>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
