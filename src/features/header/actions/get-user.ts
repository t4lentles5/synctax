'use server';

import { createClient } from '@lib/supabase/server';

export interface Profile {
  username: string;
  avatar_url: string | null;
}

export async function getUser() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('username, avatar_url')
    .eq('id', user.id)
    .single<Profile>();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return profile;
}
