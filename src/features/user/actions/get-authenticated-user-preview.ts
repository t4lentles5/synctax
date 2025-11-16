'use server';

import { type User } from '@features/user/interfaces';
import { createClient } from '@lib/supabase/server';

type UserPreview = Pick<User, 'username' | 'avatar_url'>;

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
    .single<UserPreview>();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return profile;
}
