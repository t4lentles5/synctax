'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { uploadAvatar, removeAvatar } from '@features/settings/actions';

export function useAvatarManager(id: string, avatar_id?: string) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const avatarId = avatar_id ?? undefined;

  const handleUploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      const buffer = await file.arrayBuffer();
      const base64Image = Buffer.from(buffer).toString('base64');

      setIsModalOpen(false);
      await uploadAvatar(id, base64Image, avatarId);

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      router.refresh();
    } catch (error) {
      console.error('Error uploading avatar:', error);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleRemoveAvatar = async () => {
    setIsModalOpen(false);
    await removeAvatar(id, avatarId);

    router.refresh();
  };

  return {
    isModalOpen,
    setIsModalOpen,
    fileInputRef,
    handleRemoveAvatar,
    handleUploadAvatar,
    avatarId,
  };
}
