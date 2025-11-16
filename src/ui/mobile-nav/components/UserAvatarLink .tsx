'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { type User } from '@features/user/interfaces';
import { UserAvatar } from '@features/user/components';

type Props = Pick<User, 'username' | 'avatar_url'>;

export const UserAvatarLink = ({ username, avatar_url }: Props) => {
  const pathaname = usePathname();

  const isActive = pathaname === `/${username}`;

  return (
    <Link href={`/${username}`} className='grid place-items-center p-3'>
      <UserAvatar
        avatar_url={avatar_url}
        username={username}
        size={6}
        isActive={isActive}
      />
    </Link>
  );
};
