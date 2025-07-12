// ./app/tutorials/page.tsx
import { createClient } from '@/utils/supabase/server';
import TutorialsList from '@/components/TutorialsList';

export const dynamic = 'force-dynamic';

export default async function TutorialsPage() {
  const supabase = await createClient(); // <-- Added await

  const { data: videos, error: videosError } = await supabase
    .from('videos')
    .select('*')
    .order('created_at', { ascending: false });

  const { data: { user } } = await supabase.auth.getUser();

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

  return <TutorialsList videos={videos} purchasedVideoIds={purchasedVideoIds} user={user} />;
}