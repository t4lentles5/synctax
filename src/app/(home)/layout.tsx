import { Sidebar } from '@features/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex'>
      <Sidebar />
      {children}
    </div>
  );
}
