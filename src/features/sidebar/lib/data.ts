export interface NavItem {
  href: string;
  icon: string;
  iconActive: string;
  label: string;
}

export const navItems: NavItem[] = [
  {
    href: '/',
    icon: 'icon-[solar--home-smile-outline]',
    iconActive: 'icon-[solar--home-smile-bold]',
    label: 'Home',
  },
  {
    href: '/explore',
    icon: 'icon-[mage--compass]',
    iconActive: 'icon-[mage--compass-fill]',
    label: 'Explore',
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
    href: '/saved',
    icon: 'icon-[solar--bookmark-outline]',
    iconActive: 'i-solar-bookmark-bold',
    label: 'Saved',
  },
];
