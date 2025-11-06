import { redirect } from 'next/navigation';

import { createClient } from '@lib/supabase/server';
import { Sidebar } from '@features/sidebar';

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
    <div className='flex'>
      <Sidebar />
      {children}
    </div>
  );
}
