// ./app/classes/page.tsx
"use client"; // Required for animations

import { motion } from 'framer-motion';
import DanceClassCard from '@/components/DanceClassCard';

// The list of classes you provided
const all_classes = [
  {
    title: 'Hip-Hop',
    description: 'Master urban moves, from old-school freezes to new-school choreography.',
    imageUrl: '/img/class-hiphop.jpg', // Placeholder image
  },
  {
    title: 'Contemporary Dance',
    description: 'Express emotion through fluid movements and modern dance techniques.',
    imageUrl: '/img/class-contemporary.jpg', // Placeholder image
  },
  {
    title: 'African Dance',
    description: 'Connect with the rhythm and energy of diverse traditional and modern African styles.',
    imageUrl: '/img/class-afro.jpg', // Placeholder image
  },
  {
    title: 'Aerobics, Yoga & Dance Fitness',
    description: 'A high-energy blend of fitness routines designed to improve stamina and flexibility.',
    imageUrl: '/img/class-fitness.jpg', // Placeholder image
  },
  {
    title: 'Dancehall',
    description: 'Learn the vibrant and energetic moves of Jamaican Dancehall culture.',
    imageUrl: '/img/class-dancehall.jpg', // Placeholder image
  },
  {
    title: 'Foundational Dance (All Styles)',
    description: 'Perfect for beginners, this class covers the core principles of balance, rhythm, and form.',
    imageUrl: '/img/class-foundational.jpg', // Placeholder image
  },
];

// Animation variants for the grid container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ClassesPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          className="text-5xl font-bold text-brand-gold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Classes
        </motion.h1>
        <motion.p 
          className="text-lg text-brand-neutral mb-12 max-w-2xl mx-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Find the style that moves you. We offer classes for every skill level, from absolute beginners to seasoned pros.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {all_classes.map((danceClass) => (
            <DanceClassCard
              key={danceClass.title}
              title={danceClass.title}
              description={danceClass.description}
              imageUrl={danceClass.imageUrl}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}