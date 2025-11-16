'use server';

import { type User } from '@features/user/interfaces';
import { createClient } from '@lib/supabase/server';

export async function getUserInfo() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, fullname, avatar_url, avatar_id, bio')
    .eq('id', user.id)
    .single<User>();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return data;
}
