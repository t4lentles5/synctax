'use server';

import { cloudinary } from '@lib/cloudinary/config';
import { createClient } from '@lib/supabase/server';
import { removeAvatar } from './remove-avatar';

export async function uploadAvatar(
  id: string,
  base64Image: string,
  avatar_id?: string,
) {
  const supabase = await createClient();

  try {
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${base64Image}`,
      {
        format: 'webp',
        folder: process.env.CLOUDINARY_FOLDER,
        transformation: [
          {
            width: 320,
            height: 320,
            crop: 'fill',
            gravity: 'auto',
          },
        ],
      },
    );

    if (!result) {
      throw new Error('Failed to upload image to Cloudinary');
    }

    if (avatar_id) {
      await removeAvatar(id, avatar_id);
    }

    await supabase
      .from('profiles')
      .update({ avatar_url: result.secure_url, avatar_id: result.public_id })
      .eq('id', id);
  } catch (error) {
    console.error(error);
  }
}
