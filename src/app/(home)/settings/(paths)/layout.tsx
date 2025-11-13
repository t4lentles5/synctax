import Link from 'next/link';

export default function SettingsPathsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex w-full flex-col gap-5 p-10'>
      <Link href='/settings' className='text-primary flex items-center gap-2'>
        <span
          className='icon-[mage--chevron-left] size-5'
          role='img'
          aria-hidden='true'
        />
        <span className='font-medium'>Back</span>
      </Link>

      <div className='border-border grow rounded-lg border p-8'>{children}</div>
    </div>
  );
}
