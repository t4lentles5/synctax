export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden bg-background'>
      <div className='absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-blob-violet rounded-full blur-[120px] opacity-40' />
      <div className='absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2 w-140 h-140 bg-blob-pink rounded-full blur-[140px] opacity-30' />
      <div className='absolute top-1/4 right-1/4 translate-x-1/4 -translate-y-1/4 w-100 h-100 bg-blob-orange rounded-full blur-[160px] opacity-20' />

      <main className='relative flex flex-col gap-4 bg-background/30 p-8 rounded-2xl shadow-xl w-full max-w-sm backdrop-blur-lg border border-border'>
        {children}
      </main>
    </div>
  );
}
