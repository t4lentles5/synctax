'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  icon: string;
  iconActive: string;
}

export const MobileNavItem = ({ href, icon, iconActive }: Props) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} key={href} className='grid place-items-center p-3'>
      <span
        className={`${isActive ? `${iconActive} text-primary` : icon} size-6`}
        role='img'
        aria-hidden='true'
      />
    </Link>
  );
};
