// ./app/events/[slug]/page.js
import { eventsData } from '@/lib/event-data';
import EventGallery from '@/components/EventGallery';
import { notFound } from 'next/navigation';

// No TypeScript types are needed in a .js file
export default function EventDetailPage({ params }) {
  const { slug } = params;
  const event = eventsData[slug];

  // If no event is found for the given slug, show a 404 page
  if (!event) {
    notFound();
  }

  // Pass the found event data as a prop to the client component
  return <EventGallery event={event} />;
}