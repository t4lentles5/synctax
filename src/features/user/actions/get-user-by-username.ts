'use server';

import { createClient } from '@lib/supabase/server';

export async function getUserByUsername(username: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return data;
}
