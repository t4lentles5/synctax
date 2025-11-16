'use client';

import { AvatarModal } from '@features/settings/components';
import { useAvatarManager } from '../hooks';
import { UserAvatar } from './UserAvatar';

interface Props {
  id: string;
  avatar_url: string;
  avatar_id: string;
  username: string;
  isAuthenticatedUser: boolean;
}

export const AvatarClient = ({
  id,
  avatar_url,
  avatar_id,
  username,
  isAuthenticatedUser,
}: Props) => {
  const {
    isModalOpen,
    setIsModalOpen,
    fileInputRef,
    handleRemoveAvatar,
    handleUploadAvatar,
    avatarId,
  } = useAvatarManager(id, avatar_id);

  return (
    <>
      <AvatarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fileInputRef={fileInputRef}
        onRemove={handleRemoveAvatar}
        avatarId={avatarId}
      />

      <input
        ref={fileInputRef}
        type='file'
        accept='image/*'
        className='hidden'
        onChange={handleUploadAvatar}
      />

      <button
        onClick={() => {
          if (isAuthenticatedUser) {
            setIsModalOpen(true);
          }
        }}
        className='cursor-pointer'
      >
        <UserAvatar
          avatar_url={avatar_url}
          username={username}
          size={24}
          sm_size={40}
        />
      </button>
    </>
  );
};
