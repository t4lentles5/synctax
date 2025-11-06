import Link from 'next/link';

import { NavItem } from './NavItem';
import { navItems } from '../lib/data';

export const Sidebar = () => {
  return (
    <div className='border-border fixed h-[calc(100vh-64px)] w-3xs border-r'>
      <div className='sticky flex h-full flex-col px-8 py-5'>
        <section className='border-border flex flex-col gap-5 border-b pb-5'>
          <nav className='flex flex-col gap-5'>
            {navItems.map((item) => (
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

        <section className='flex flex-col gap-3 pt-7'>
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
