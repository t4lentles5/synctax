import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  getAuthenticatedUser,
  getUserByUsername,
} from '@features/user/actions';
import { AvatarClient } from '@features/user/components';

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const authenticatedUser = await getAuthenticatedUser();
  const userByUsername = await getUserByUsername(username);

  if (!userByUsername || !authenticatedUser) {
    throw Error('User not found');
  }

  const user =
    userByUsername.username === authenticatedUser.username
      ? authenticatedUser
      : userByUsername;

  return {
    title: `${user.fullname} (@${user.username}) • Synctax`,
    description: `${user.fullname} (@${user.username}) • Synctax`,
  };
}

type Params = Promise<{ username: string }>;

export default async function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { username } = await params;

  const [authenticatedUser, userByUsername] = await Promise.all([
    getAuthenticatedUser(),
    getUserByUsername(username),
  ]);

  if (!userByUsername || !authenticatedUser) {
    notFound();
  }

  const isAuthenticatedUser =
    userByUsername.username === authenticatedUser.username;

  return (
    <div className='flex w-full max-w-3xl flex-col gap-5 p-10 lg:max-w-4xl'>
      <main className='flex w-full gap-5 sm:gap-10'>
        <AvatarClient
          id={userByUsername.id}
          avatar_url={userByUsername.avatar_url}
          avatar_id={userByUsername.avatar_id}
          username={userByUsername.username}
          isAuthenticatedUser={isAuthenticatedUser}
        />

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-10 lg:gap-20'>
              <h3 className='text-2xl font-semibold lg:text-3xl'>
                {userByUsername.fullname}
              </h3>

              <div className='hidden md:block'>
                {isAuthenticatedUser ? (
                  <Link
                    href='/settings'
                    className='hover:bg-background-secondary-hover bg-background-secondary ml-5 rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300 ease-in-out'
                  >
                    Edit Profile
                  </Link>
                ) : (
                  <>
                    <button className='hover:bg-background-secondary-hover bg-background-secondary cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300 ease-in-out'>
                      Follow
                    </button>
                    <button className='hover:bg-primary-deep bg-primary ml-5 cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300 ease-in-out'>
                      Message
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <h4 className='text-foreground-muted'>
                @{userByUsername.username}
              </h4>
              <p className='hidden text-sm sm:block'>{userByUsername.bio}</p>
            </div>
          </div>

          <div className='hidden gap-5 sm:flex'>
            <p className='flex gap-2 text-sm'>
              <span className='text-primary font-medium'>42</span>{' '}
              <span className='text-foreground-muted'>Projects</span>
            </p>

            <button className='flex gap-2 text-sm'>
              <span className='text-primary font-medium'>1.2k</span>{' '}
              <span className='text-foreground-muted'>Followers</span>
            </button>
            <button className='flex gap-2 text-sm'>
              <span className='text-primary font-medium'>1.2k</span>{' '}
              <span className='text-foreground-muted'>Following</span>
            </button>
          </div>
        </div>
      </main>

      <p className='block text-sm sm:hidden'>{userByUsername.bio}</p>

      <div className='border-border flex justify-between gap-3 border-y p-3 sm:hidden'>
        <button className='flex flex-col gap-2 text-sm'>
          <span className='text-primary font-medium'>42</span>{' '}
          <span className='text-foreground-muted'>Projects</span>
        </button>

        <button className='flex flex-col gap-2 text-sm'>
          <span className='text-primary font-medium'>1.2k</span>{' '}
          <span className='text-foreground-muted'>Followers</span>
        </button>
        <button className='flex flex-col gap-2 text-sm'>
          <span className='text-primary font-medium'>1.2k</span>{' '}
          <span className='text-foreground-muted'>Following</span>
        </button>
      </div>

      <section className='flex justify-center gap-5 sm:justify-start'>
        <Link href=''>
          <span
            className='icon-[mage--github] hover:text-primary text-foreground-muted size-6 transition-colors duration-300 ease-in-out'
            role='img'
            aria-hidden='true'
          />
        </Link>

        <Link href=''>
          <span
            className='icon-[mage--linkedin] hover:text-primary text-foreground-muted size-6 transition-colors duration-300 ease-in-out'
            role='img'
            aria-hidden='true'
          />
        </Link>

        <Link href=''>
          <span
            className='icon-[mdi--web] hover:text-primary text-foreground-muted size-6 transition-colors duration-300 ease-in-out'
            role='img'
            aria-hidden='true'
          />
        </Link>
      </section>

      <div className='flex gap-5 md:hidden'>
        {isAuthenticatedUser ? (
          <Link
            href='/settings'
            className='hover:bg-background-secondary-hover bg-background-secondary w-full rounded-lg py-2 text-center text-sm font-semibold transition-colors duration-300 ease-in-out'
          >
            Edit Profile
          </Link>
        ) : (
          <>
            <button className='hover:bg-background-secondary-hover bg-background-secondary w-full cursor-pointer rounded-lg py-2 text-sm font-semibold transition-colors duration-300 ease-in-out'>
              Follow
            </button>
            <button className='hover:bg-primary-deep bg-primary w-full cursor-pointer rounded-lg py-2 text-sm font-semibold transition-colors duration-300 ease-in-out'>
              Message
            </button>
          </>
        )}
      </div>

      {children}
    </div>
  );
}
