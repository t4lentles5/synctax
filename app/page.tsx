export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black'>
      <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
        <div className='flex gap-5 items-center'>
          <img src='/syntax.svg' alt='' width={100} />
          <h1 className='text-6xl text-white'>Syntax</h1>
        </div>

        <h2 className='text-2xl text-white font-light'>
          Synctax - Where developers connect. Share your code, find
          collaborators, and join a global community focused on programming and
          technology.
        </h2>
      </main>
    </div>
  );
}
