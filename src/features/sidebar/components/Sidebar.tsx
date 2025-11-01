import Link from 'next/link';
import { NavItem } from './NavItem';
import { MoreOptionsButton } from './MoreOptionsButton';

const navItems = [
  {
    href: '/',
    icon: 'icon-[solar--home-smile-outline]',
    iconActive: 'icon-[solar--home-smile-bold]',
    label: 'Home',
  },
  {
    href: '/search',
    icon: 'icon-[fluent--search-24-regular]',
    iconActive: 'icon-[fluent--search-12-filled]',
    label: 'Search',
  },
  {
    href: '/notifications',
    icon: 'icon-[solar--bell-bing-outline]',
    iconActive: 'icon-[solar--bell-bing-bold]',
    label: 'Notifications',
  },
  {
    href: '/messages',
    icon: 'icon-[mage--direction-up-right-2]',
    iconActive: 'icon-[mage--direction-up-right-2-fill]',
    label: 'Messages',
  },
  {
    href: '/create',
    icon: 'icon-[mage--star-circle]',
    iconActive: 'icon-[mage--star-circle-fill]',
    label: 'Create',
  },
  {
    href: '/profile',
    icon: 'icon-[mage--user-circle]',
    iconActive: 'icon-[mage--user-circle-fill]',
    label: 'Profile',
  },
];

export const Sidebar = () => {
  return (
    <div className='flex flex-col py-8 h-screen justify-between border-r border-border'>
      <section className='gap-5 flex flex-col'>
        <Link href='/' className='text-2xl px-8 font-plex italic'>
          Synctax
        </Link>

        <nav className='pt-5 px-3 gap-3 flex flex-col'>
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

      <section className='px-3'>
        <MoreOptionsButton />
      </section>
    </div>
  );
};
