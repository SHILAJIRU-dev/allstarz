// ./app/account/page.tsx
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import LogoutButton from '@/components/LogoutButton'

export const dynamic = 'force-dynamic';

export default async function AccountPage() {
  const supabase = createClient();

  // The user object is inside the 'data' property
  const { data, error: authError } = await supabase.auth.getUser();
  
  // Check using the correct path to the user object
  if (authError || !data?.user) {
    redirect('/login');
  }

  // Fetch the username from the profiles table
  // Renamed the second 'error' to 'profileError' to avoid conflict
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('username')
    .eq('id', data.user.id) // Use data.user.id to access the user's ID
    .single();

  return (
    <div className="py-24 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-brand-gold">Your Account</h1>
        <p className="mt-4 text-lg">
          Welcome back,{' '}
          <span className="font-bold">
            {/* Display the username, or fall back to the user's email */}
            {profile?.username || data.user.email}
          </span>
          !
        </p>
        
        <div className="mt-8">
          <LogoutButton />
        </div>

        <div className="mt-12 p-8 bg-[#111] rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">My Purchased Tutorials</h2>
            <p className="text-brand-neutral">Your purchased videos will appear here.</p>
        </div>
      </div>
    </div>
  );
}
