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
      className='flex rounded-lg py-3 px-5 transition-colors ease-in-out duration-300 hover:bg-background-hover items-center w-56 gap-2'
    >
      <span className={`${icon} size-6`} role='img' aria-hidden='true' />
      <span className='text-lg'>{label}</span>
    </Link>
  );
};
