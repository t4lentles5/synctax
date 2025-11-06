import Link from 'next/link';

import { getUser } from '../actions/get-user';

export const Header = async () => {
  const user = await getUser();

  if (!user) {
    return;
  }

  return (
    <header className='border-border bg-background/30 fixed z-10 flex h-16 w-full items-center justify-center border-b backdrop-blur-lg'>
      <div className='sticky flex w-full max-w-5xl items-center justify-between'>
        <Link href='/' className='flex items-center gap-2'>
          <img src='/synctax.svg' alt='Synctax logo' className='size-10' />
          <span className='font-plex text-2xl'>Synctax</span>
        </Link>

        <div className='relative'>
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

        <div>
          <button className='hover:bg-card text-muted-foreground hover:text-foreground rounded-lg p-2 transition'>
            <span
              className='icon-[solar--settings-linear] text-foreground-muted size-6'
              role='img'
              aria-hidden='true'
            />
          </button>

          <button className='hover:bg-card text-muted-foreground hover:text-foreground rounded-lg p-2 transition'>
            <img
              src={user.avatar_url!}
              className='size-6 rounded-full'
              alt={`${user.username} avatar`}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
