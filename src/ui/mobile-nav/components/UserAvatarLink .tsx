'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  username: string;
  avatar_url: string;
}

export const UserAvatarLink = ({ username, avatar_url }: Props) => {
  const pathaname = usePathname();

  const isActive = pathaname === `/${username}`;

  return (
    <Link href={`/${username}`} className='grid place-items-center p-3'>
      <img
        src={avatar_url!}
        className={`${isActive && 'ring-primary ring-offset-background ring-2 ring-offset-3'} size-6 rounded-full`}
        alt={`${username} avatar`}
      />
    </Link>
  );
};
