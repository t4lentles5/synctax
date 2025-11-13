'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { settingsNavItems } from '@lib/data/navigation';

export const MobileSettingsNavItem = () => {
  const pathname = usePathname();

  return (
    <nav className='flex grow flex-col gap-3 md:hidden'>
      {settingsNavItems.map((item) => (
        <Link
          href={`/settings/${item.tab}`}
          key={item.tab}
          className={`${pathname === `/settings/${item.tab}` ? 'bg-primary text-foreground' : 'hover:bg-background-hover text-foreground-muted'} border-border flex h-12 cursor-pointer items-center gap-3 rounded-lg border px-4 transition-colors duration-300 ease-in-out`}
        >
          <span
            className={`${item.icon} size-5`}
            role='img'
            aria-hidden='true'
          />
          <span className='font-medium capitalize'>{item.tab}</span>
        </Link>
      ))}
    </nav>
  );
};
