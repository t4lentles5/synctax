import Link from 'next/link';

import { mobileNavItems } from '@lib/data/navigation';
import { getAuthenticatedUserPreview } from '@actions/user/getAuthenticatedUserPreview';

export const MobileNav = async () => {
  const user = await getAuthenticatedUserPreview();

  if (!user) {
    return;
  }

  return (
    <div className='border-border fixed bottom-0 flex w-screen border-t md:hidden'>
      <nav className='flex w-full justify-evenly'>
        {mobileNavItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className='grid place-items-center p-3'
          >
            <span
              className={`${item.icon} size-6`}
              role='img'
              aria-hidden='true'
            />
          </Link>
        ))}

        <Link
          href={`/${user.username}`}
          className='grid place-items-center p-3'
        >
          <img
            src={user.avatar_url!}
            className={`${true && 'ring-primary ring-offset-background ring-2 ring-offset-3'} size-6 rounded-full`}
            alt={`${user.username} avatar`}
          />
        </Link>
      </nav>
    </div>
  );
};
