import { redirect } from 'next/navigation';

import { createClient } from '@lib/supabase/server';
import { Sidebar } from '@ui/sidebar/components';
import { Header } from '@ui/header/components';
import { MobileNav } from '@ui/mobile-nav/components';

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
      <div className='flex pt-16 pb-12'>
        <Sidebar />
        <div className='flex grow justify-center md:pl-20 lg:pl-64'>
          {children}
        </div>

        <MobileNav />
      </div>
    </div>
  );
}
