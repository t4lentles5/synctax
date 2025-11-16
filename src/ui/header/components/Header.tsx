import Link from 'next/link';

import { UserOptions } from './UserOptions';
import { getAuthenticatedUserPreview } from '@features/user/actions';

export const Header = async () => {
  const user = await getAuthenticatedUserPreview();

  if (!user) {
    return;
  }

  return (
    <header className='border-border bg-background/30 fixed z-10 flex h-16 w-full items-center justify-center border-b px-10 backdrop-blur-lg'>
      <div className='sticky flex w-full max-w-5xl items-center justify-between'>
        <Link href='/' className='flex items-center gap-2'>
          <img src='/synctax.svg' alt='Synctax logo' className='size-10' />

          <span className='font-plex text-2xl'>Synctax</span>
        </Link>

        <div className='relative hidden md:block'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <span
              className='icon-[fluent--search-24-regular] text-foreground-muted'
              role='img'
              aria-hidden='true'
            />
          </div>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='Search'
            className={`text-foreground border-border focus:ring-primary placeholder:text-foreground-muted w-2xs rounded-lg border bg-transparent py-2 pr-4 pl-10 text-sm outline-none focus:ring-2`}
          />
        </div>

        <div className='relative flex items-center justify-center'>
          <button className='group hover:bg-background-hover grid cursor-pointer place-items-center rounded-full p-2 transition-colors duration-300 ease-in-out'>
            <span
              className='icon-[solar--bell-bing-outline] text-foreground-muted group-hover:text-foreground size-6 transition-colors duration-300 ease-in-out'
              role='img'
              aria-hidden='true'
            />
          </button>

          <UserOptions username={user.username} avatar_url={user.avatar_url!} />
        </div>
      </div>
    </header>
  );
};
