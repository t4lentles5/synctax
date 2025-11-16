'use server';

import { createClient } from '@lib/supabase/server';
import { User } from '../interfaces';

export async function getUserByUsername(username: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single<User>();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return data;
}
