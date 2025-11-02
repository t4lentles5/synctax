import Link from 'next/link';

interface Props {
  href: string;
  icon: string;
  iconActive: string;
  label: string;
}

export const NavItem = ({ href, icon, iconActive, label }: Props) => {
  return (
    <Link
      href={href}
      className='hover:bg-background-hover flex w-56 items-center gap-2 rounded-lg px-5 py-3 transition-colors duration-300 ease-in-out'
    >
      <span className={`${icon} size-6`} role='img' aria-hidden='true' />
      <span className='text-lg'>{label}</span>
    </Link>
  );
};
