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
      className={`${isActive ? 'bg-primary lg:bg-transparent' : 'hover:bg-background-hover'} group text-foreground-muted flex size-12 items-center justify-center gap-3 rounded-lg transition-colors duration-300 ease-in-out lg:w-full lg:justify-start lg:px-3`}
    >
      <span
        className={`${isActive ? `${iconActive} lg:text-primary-deep text-black` : `${icon} group-hover:text-primary-deep`} size-6 transition-colors duration-300`}
        role='img'
        aria-hidden='true'
      />
      <span
        className={`${isActive && 'text-foreground'} group-hover:text-foreground hidden font-medium transition-colors duration-300 lg:block`}
      >
        {label}
      </span>
    </Link>
  );
};
