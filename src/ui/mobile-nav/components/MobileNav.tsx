import { mobileNavItems } from '@lib/data/navigation';
import { getAuthenticatedUserPreview } from '@actions/user/getAuthenticatedUserPreview';
import { MobileNavItem } from './MobileNavItem';
import { UserAvatarLink } from './UserAvatarLink ';

export const MobileNav = async () => {
  const user = await getAuthenticatedUserPreview();

  if (!user) {
    return;
  }

  return (
    <div className='border-border fixed bottom-0 flex w-screen border-t md:hidden'>
      <nav className='flex w-full justify-evenly'>
        {mobileNavItems.map((item) => (
          <MobileNavItem
            href={item.href}
            icon={item.icon}
            iconActive={item.iconActive}
            key={item.href}
          />
        ))}

        <UserAvatarLink
          username={user.username}
          avatar_url={user.avatar_url!}
        />
      </nav>
    </div>
  );
};
