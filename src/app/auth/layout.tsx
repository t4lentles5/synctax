export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-background relative flex min-h-screen items-center justify-center overflow-hidden'>
      <div className='bg-blob-violet absolute top-1/3 left-1/3 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px]' />
      <div className='bg-blob-pink absolute right-1/3 bottom-1/3 h-140 w-140 translate-x-1/2 translate-y-1/2 rounded-full opacity-30 blur-[140px]' />
      <div className='bg-blob-orange absolute top-1/4 right-1/4 h-100 w-100 translate-x-1/4 -translate-y-1/4 rounded-full opacity-20 blur-[160px]' />

      <main className='bg-background/30 border-border relative flex w-full max-w-sm flex-col gap-4 rounded-2xl border p-8 shadow-xl backdrop-blur-lg'>
        {children}
      </main>
    </div>
  );
}
