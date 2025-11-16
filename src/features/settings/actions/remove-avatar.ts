'use server';

import { cloudinary } from '@lib/cloudinary/config';
import { createClient } from '@lib/supabase/server';

export async function removeAvatar(id: string, avatar_id?: string) {
  const supabase = await createClient();

  if (!avatar_id) {
    throw new Error('Missing public_id');
  }

  try {
    await cloudinary.uploader.destroy(avatar_id);
    await supabase
      .from('profiles')
      .update({ avatar_url: null, avatar_id: null })
      .eq('id', id);
  } catch (error) {
    throw new Error('Cloudinary did not confirm deletion.');
  }
}
