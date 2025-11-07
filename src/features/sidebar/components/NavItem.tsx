'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  icon: string;
  iconActive: string;
  label: string;
}

export const NavItem = ({ href, icon, iconActive, label }: Props) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className='group text-foreground-muted flex items-center gap-2 py-2 transition-colors duration-300 ease-in-out'
    >
      <span
        className={`${isActive ? `${iconActive} text-primary-deep` : icon} group-hover:text-primary-deep size-6 transition-colors duration-300`}
        role='img'
        aria-hidden='true'
      />
      <span
        className={`${isActive && 'text-foreground'} group-hover:text-foreground font-medium transition-colors duration-300`}
      >
        {label}
      </span>
    </Link>
  );
};
