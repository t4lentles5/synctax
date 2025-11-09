import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getAuthenticatedUser } from '@features/user/actions/get-authenticated-user';
import { getUserByUsername } from '@features/user/actions/get-user-by-username';

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const authenticatedUser = await getAuthenticatedUser();
  const userByUsername = await getUserByUsername(username);

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
    <div className='flex w-full max-w-4xl flex-col gap-10 pt-10'>
      <main className='flex w-full gap-10'>
        <img
          src={userByUsername.avatar_url}
          alt=''
          className='size-40 rounded-full'
        />
        <div className='flex flex-col gap-5'>
          <div className='flex gap-20'>
            <div className='flex flex-col gap-1'>
              <h3 className='text-3xl font-semibold'>
                {userByUsername.fullname}
              </h3>
              <h4 className='text-foreground-muted'>
                @{userByUsername.username}
              </h4>
              <p>{userByUsername.bio}</p>
            </div>

            <div className=''>
              <button className='hover:border-primary border-background cursor-pointer rounded-lg border px-3 py-2 transition-colors duration-300 ease-in-out'>
                Follow
              </button>
              <button className='hover:bg-primary-deep bg-primary ml-5 cursor-pointer rounded-lg px-3 py-2 transition-colors duration-300 ease-in-out'>
                Message
              </button>
            </div>
          </div>

          <div className='flex gap-3'>
            <p className='flex flex-col gap-2 text-sm md:flex-row'>
              <span className='text-primary font-medium'>42</span>{' '}
              <span className='text-foreground-muted'>Projects</span>
            </p>

            <button className='flex flex-col gap-2 text-sm md:flex-row'>
              <span className='text-primary font-medium'>1.2k</span>{' '}
              <span className='text-foreground-muted'>Followers</span>
            </button>
            <button className='flex flex-col gap-2 text-sm md:flex-row'>
              <span className='text-primary font-medium'>1.2k</span>{' '}
              <span className='text-foreground-muted'>Following</span>
            </button>
          </div>
        </div>
      </main>

      <section className='flex gap-5'>
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

      {children}
    </div>
  );
}
