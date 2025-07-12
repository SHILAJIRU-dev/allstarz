// ./app/events/[slug]/page.tsx
import { eventsData } from '@/lib/event-data';
import EventGallery from '@/components/EventGallery'; // Import the new client component
import { notFound } from 'next/navigation';

// Define the types for the page's props
type PageProps = {
  params: {
    slug: string;
  };
};

export default function EventDetailPage({ params }: PageProps) {
  const { slug } = params;
  const event = eventsData[slug as keyof typeof eventsData];

  // If no event is found for the given slug, show a 404 page
  if (!event) {
    notFound();
  }

  // Pass the found event data as a prop to the client component
  return <EventGallery event={event} />;
}
