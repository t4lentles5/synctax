import { redirect } from 'next/navigation';

import { createClient } from '@lib/supabase/server';
import { Sidebar } from '@ui/sidebar';
import { Header } from '@ui/header';
import { MobileNav } from '@ui/mobile-nav';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex pt-16'>
        <Sidebar />
        <div className='flex grow justify-center md:pl-20 lg:pl-64'>
          {children}
        </div>

        <MobileNav />
      </div>
    </div>
  );
}
