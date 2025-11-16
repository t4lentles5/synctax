'use client';

import { RefObject } from 'react';

interface AvatarModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileInputRef: RefObject<HTMLInputElement | null>;
  onRemove: () => void;
  avatarId: string | undefined;
}

export function AvatarModal({
  isOpen,
  onClose,
  fileInputRef,
  onRemove,
  avatarId,
}: AvatarModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className='bg-background/50 fixed inset-0 z-40' onClick={onClose} />

      <div className='fixed top-1/2 left-1/2 z-50 mx-4 w-full max-w-sm -translate-x-1/2 -translate-y-1/2'>
        <div className='bg-background border-border rounded-lg border shadow-lg'>
          <div className='border-border flex items-center justify-between border-b p-6'>
            <h2 className='text-foreground text-lg font-semibold'>
              Change Avatar
            </h2>
            <button
              onClick={onClose}
              className='hover:bg-background-secondary text-foreground-muted hover:text-foreground grid cursor-pointer place-items-center rounded-lg p-1 transition-colors duration-300 ease-in-out'
              aria-label='Close modal'
            >
              <span
                className='icon-[tabler--x] size-5'
                role='img'
                aria-hidden='true'
              />
            </button>
          </div>

          <div className='space-y-3 p-6'>
            <button
              onClick={() => {
                fileInputRef.current?.click();
              }}
              className='bg-primary hover:bg-primary-deep w-full cursor-pointer rounded-lg px-4 py-2.5 font-medium transition-colors duration-300 ease-in-out'
            >
              Upload Avatar
            </button>

            {avatarId && (
              <button
                onClick={onRemove}
                className='border-border hover:bg-background-hover w-full cursor-pointer rounded-lg border px-4 py-2.5 font-medium text-red-400 transition-colors duration-300 ease-in-out'
              >
                Remove Current Avatar
              </button>
            )}

            <button
              onClick={onClose}
              className='border-border hover:bg-muted/50 text-foreground hover:bg-background-hover w-full cursor-pointer rounded-lg border bg-transparent px-4 py-2.5 font-medium transition-colors duration-300 ease-in-out'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
