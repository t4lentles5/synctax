import { redirect } from 'next/navigation';

import { createClient } from '@lib/supabase/server';
import { Sidebar } from '@features/sidebar';
import { Header } from '@features/header';

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
        <div className='pl-64'>{children}</div>
      </div>
    </div>
  );
}
