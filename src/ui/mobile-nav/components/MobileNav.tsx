import { mobileNavItems } from '@lib/data/navigation';
import { getAuthenticatedUserPreview } from '@features/user/actions';
import { MobileNavItem } from './MobileNavItem';
import { UserAvatarLink } from './UserAvatarLink ';

export const MobileNav = async () => {
  const user = await getAuthenticatedUserPreview();

  if (!user) {
    return;
  }

  return (
    <div className='border-border bg-background/30 fixed bottom-0 z-10 flex w-screen border-t backdrop-blur-lg md:hidden'>
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
