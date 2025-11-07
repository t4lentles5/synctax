'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { createClient } from '@lib/supabase/client';

interface Props {
  username: string;
  avatar_url: string;
}

export const UserOptions = ({ username, avatar_url }: Props) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();

    router.push('/auth/login');
  };

  return (
    <div className='relative'>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className='hover:bg-background-hover cursor-pointer rounded-full p-2 transition-colors duration-300 ease-in-out'
      >
        <img
          src={avatar_url}
          className={`${isOpen && 'ring-primary ring-offset-background ring-2 ring-offset-3'} size-6 rounded-full`}
          alt={`${username} avatar`}
        />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className='bg-background border-border absolute top-11 right-0 flex w-44 flex-col overflow-hidden rounded-lg border'
        >
          <Link
            href={`/${username}`}
            className='hover:bg-background-hover px-4 py-2 text-left transition-colors duration-300 ease-in-out'
            onClick={() => setIsOpen(false)}
          >
            View Profile
          </Link>

          <Link
            href='/settings'
            className='hover:bg-background-hover border-border border-b px-4 py-2 text-left transition-colors duration-300 ease-in-out'
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>

          <button
            onClick={handleLogout}
            className='hover:bg-background-hover cursor-pointer px-4 py-2 text-left transition-colors duration-300 ease-in-out'
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
