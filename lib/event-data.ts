// ./lib/event-data.ts

// The main data structure for all events
export const eventsData = {
  'corporate-performances': {
    name: 'Corporate Performances',
    thumbnail: '/img/events/corporate-thumb.jpg',
    description: 'Bringing energy and professionalism to every corporate stage.',
    images: [
      { id: 1, src: '/img/events/corporate/corp-1.jpg', alt: 'Dancing at a corporate gala' },
      { id: 2, src: '/img/events/corporate/corp-2.jpg', alt: 'High-energy performance for a product launch' },
      { id: 3, src: '/img/events/corporate/corp-3.jpg', alt: 'Synchronized routine at a company dinner' },
      { id: 4, src: '/img/events/corporate/corp-4.jpg', alt: 'Interacting with the crowd during a performance' },
    ],
  },
  'team-building': {
    name: 'Team Building & Stage Performances',
    thumbnail: '/img/events/teambuilding-thumb.jpg',
    description: 'Uniting teams through the power of coordinated movement and rhythm.',
    images: [
      { id: 1, src: '/img/events/teambuilding/team-1.jpg', alt: 'A corporate team learning a dance routine' },
      { id: 2, src: '/img/events/teambuilding/team-2.jpg', alt: 'Group photo of a successful team building session' },
      { id: 3, src: '/img/events/teambuilding/team-3.jpg', alt: 'Team members performing on stage together' },
      { id: 4, src: '/img/events/teambuilding/team-4.jpg', alt: 'Team members performing on stage together' },
      { id: 5, src: '/img/events/teambuilding/team-5.jpg', alt: 'Team members performing on stage together' },
      { id: 6, src: '/img/events/teambuilding/team-6.jpg', alt: 'Team members performing on stage together' },
    ],
  },
  'stage-members': {
    name: 'Team Members and Stage Performances',
    thumbnail: '/img/events/members-thumb.jpg',
    description: 'Our talented crew, both behind the scenes and in the spotlight.',
    images: [
      { id: 1, src: '/img/events/members/member-1.jpg', alt: 'An All Starz team member posing' },
      { id: 2, src: '/img/events/members/member-2.jpg', alt: 'The full crew on stage' },
      { id: 3, src: '/img/events/members/member-3.jpg', alt: 'Candid shot during rehearsal' },
      { id: 4, src: '/img/events/members/member-4.jpg', alt: 'Celebrating a successful performance backstage' },
      { id: 5, src: '/img/events/members/member-5.jpg', alt: 'Celebrating a successful performance backstage' },
      { id: 6, src: '/img/events/members/member-6.jpg', alt: 'Celebrating a successful performance backstage' },
    ],
  },
  'roadshow': {
    name: 'Roadshow',
    thumbnail: '/img/events/roadshow-thumb.jpg',
    description: 'Taking dance to the streets and communities across the city.',
    images: [
      { id: 1, src: '/img/events/roadshow/road-1.jpg', alt: 'Street performance with a large crowd' },
      { id: 2, src: '/img/events/roadshow/road-2.jpg', alt: 'Flash mob in a public square' },
      { id: 3, src: '/img/events/roadshow/road-3.jpg', alt: 'Dancers on a branded truck during a roadshow' },
      { id: 4, src: '/img/events/roadshow/road-4.jpg', alt: 'Dancers on a branded truck during a roadshow' },
      { id: 5, src: '/img/events/roadshow/road-5.jpg', alt: 'Dancers on a branded truck during a roadshow' },
      { id: 6, src: '/img/events/roadshow/road-6.jpg', alt: 'Dancers on a branded truck during a roadshow' },
    ],
  },
  'birdwatching': {
    name: 'Birdwatching',
    thumbnail: '/img/events/birdwatching-thumb.jpg',
    description: 'Unique performances inspired by the grace and movement of nature.',
    images: [
      { id: 1, src: '/img/events/birdwatching/bird-1.jpg', alt: 'A dancer in a costume inspired by a crane' },
      { id: 2, src: '/img/events/birdwatching/bird-2.jpg', alt: 'Flowing movements mimicking birds in flight' },
      { id: 3, src: '/img/events/birdwatching/bird-3.jpg', alt: 'Flowing movements mimicking birds in flight' },
      { id: 4, src: '/img/events/birdwatching/bird-4.jpg', alt: 'Flowing movements mimicking birds in flight' },
      { id: 5, src: '/img/events/birdwatching/bird-5.jpg', alt: 'Flowing movements mimicking birds in flight' },
      { id: 6, src: '/img/events/birdwatching/bird-6.jpg', alt: 'Flowing movements mimicking birds in flight' },
    ],
  },
};

// A helper to get all events in an array format
export const allEvents = Object.entries(eventsData).map(([slug, event]) => ({
  slug,
  ...event,
}));