import { redirect } from 'next/navigation';

import { Footer } from '@components/layout';
import { createClient } from '@lib/supabase/server';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/');
  }

  return (
    <div className='bg-background relative flex min-h-screen flex-col items-center justify-between overflow-hidden'>
      <main className='z-10 grid w-full grow place-items-center p-5'>
        <div className='bg-background border-border relative flex w-full max-w-md flex-col gap-4 rounded-2xl border p-8 shadow-xl backdrop-blur-lg'>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
