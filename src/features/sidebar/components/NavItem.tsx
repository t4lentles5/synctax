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
      className='group text-foreground-muted flex items-center gap-2 py-2 transition-colors duration-300 ease-in-out'
    >
      <span
        className={`${icon} group-hover:text-primary-deep size-6 transition-colors duration-300`}
        role='img'
        aria-hidden='true'
      />
      <span className='group-hover:text-foreground font-medium transition-colors duration-300'>
        {label}
      </span>
    </Link>
  );
};
