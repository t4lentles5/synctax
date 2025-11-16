import Avatar from 'boring-avatars';

interface Props {
  avatar_url: string;
  username: string;
  size: number;
  sm_size?: number;
  isOpen?: boolean;
  isActive?: boolean;
}

export const UserAvatar = ({
  avatar_url,
  username,
  size,
  sm_size,
  isOpen,
  isActive,
}: Props) => {
  return (
    <>
      {avatar_url ? (
        <img
          src={avatar_url}
          className={`${isOpen && 'ring-primary ring-offset-background ring-2 ring-offset-3'} ${isActive && 'ring-primary ring-offset-background ring-2 ring-offset-3'} size-${size} sm:size-${sm_size} rounded-full`}
          alt={`${username} avatar`}
        />
      ) : (
        <Avatar
          name={username}
          className={`${isOpen && 'ring-primary ring-offset-background ring-2 ring-offset-3'} ${isActive && 'ring-primary ring-offset-background ring-2 ring-offset-3'} sm:size-${sm_size} size-${size} rounded-full`}
          variant='beam'
        />
      )}
    </>
  );
};
