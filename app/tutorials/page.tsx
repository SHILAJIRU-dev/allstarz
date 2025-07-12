// ./app/tutorials/page.tsx
import { createClient } from '@/utils/supabase/server';
import TutorialsList from '@/components/TutorialsList';

// --- THIS IS THE FIX ---
// This line ensures the page is never cached and always fetches the latest user session.
export const dynamic = 'force-dynamic';

export default async function TutorialsPage() {
  const supabase = createClient();

  // 1. Fetch all videos
  const { data: videos, error: videosError } = await supabase
    .from('videos')
    .select('*')
    .order('created_at', { ascending: false });

  // 2. Get the current logged-in user
  const { data: { user } } = await supabase.auth.getUser();

  // 3. Fetch the user's purchases if they are logged in
  let purchasedVideoIds = new Set<number>();
  if (user) {
    const { data: purchases } = await supabase
      .from('user_purchases')
      .select('video_id')
      .eq('user_id', user.id);
    
    if (purchases) {
      purchasedVideoIds = new Set(purchases.map(p => p.video_id));
    }
  }

  if (videosError || !videos) {
    return <p className="text-white text-center py-20">Could not fetch tutorials. Please try again later.</p>;
  }

  // 4. Pass the fetched data as props to the client component
  return <TutorialsList videos={videos} purchasedVideoIds={purchasedVideoIds} user={user} />;
}