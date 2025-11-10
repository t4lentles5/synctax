'use server';

import { createClient } from '@lib/supabase/server';

export interface User {
  username: string;
  avatar_url: string | null;
}

export async function getAuthenticatedUserPreview() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('username, avatar_url')
    .eq('id', user.id)
    .single<User>();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return profile;
}
