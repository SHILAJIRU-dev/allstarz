// ./app/account/page.tsx
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import LogoutButton from '@/components/LogoutButton'

export const dynamic = 'force-dynamic';

export default async function AccountPage() {
  const supabase = createClient();
  const { data, error: authError } = await supabase.auth.getUser();
  
  if (authError || !data?.user) {
    redirect('/login');
  }

  // --- FIX: Removed the unused 'error' variable completely ---
  const { data: profile } = await supabase
    .from('profiles')
    .select('username')
    .eq('id', data.user.id)
    .single();

  return (
    <div className="py-24 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-brand-gold">Your Account</h1>
        <p className="mt-4 text-lg">
          Welcome back,{' '}
          <span className="font-bold">
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