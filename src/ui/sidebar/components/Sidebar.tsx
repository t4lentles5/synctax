import Link from 'next/link';

import { NavItem } from './NavItem';
import { sidebarNavItems } from '@lib/data/navigation';

export const Sidebar = () => {
  return (
    <div className='border-border fixed hidden h-[calc(100vh-64px)] w-20 border-r md:block lg:w-3xs'>
      <div className='sticky flex h-full flex-col py-6 lg:px-5'>
        <section className='border-border flex flex-col gap-5 pb-3 lg:border-b'>
          <nav className='flex flex-col items-center gap-3'>
            {sidebarNavItems.map((item) => (
              <NavItem
                key={item.label}
                href={item.href}
                icon={item.icon}
                iconActive={item.iconActive}
                label={item.label}
              />
            ))}
          </nav>
        </section>

        <section className='hidden flex-col gap-3 p-3 pt-7 lg:flex'>
          <h3 className='text-foreground-muted text-xs font-semibold tracking-wider uppercase'>
            Trending
          </h3>
          {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((tag) => (
            <Link
              key={tag}
              href={tag}
              className='text-foreground-muted hover:text-foreground w-full rounded px-3 py-2 text-left text-sm transition-colors duration-300 ease-in-out'
            >
              #{tag}
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};
