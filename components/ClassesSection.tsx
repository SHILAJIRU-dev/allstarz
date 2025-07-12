// ./components/ClassesSection.tsx
"use client";

import ClassCard from './ClassCard';
import { motion } from 'framer-motion'; // Import for animations

// This is temporary mock data. Later, this will come from your Supabase database.
const featuredClasses = [
  {
    title: 'Hip-Hop Fundamentals',
    description: 'Master the basics of rhythm, bounce, and flow in this high-energy introductory class.',
  },
  {
    title: 'Contemporary Flow',
    description: 'Explore expressive movement and storytelling through fluid, modern dance techniques.',
  },
  {
    title: 'Afro-Dance Fusion',
    description: 'Feel the beat with a vibrant mix of traditional African dance styles and modern street moves.',
  },
];

const ClassesSection = () => {
  return (
    <section className="bg-brand-black text-white py-20">
      {/* This motion.div wraps the entire section's content to animate it */}
      <motion.div 
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }} // Start invisible and 50px down
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
        viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 30% of it is in view
        transition={{ duration: 0.5 }} // Animation lasts 0.5 seconds
      >
        <h2 className="text-4xl font-bold mb-4">Explore Our Top Classes</h2>
        <p className="text-lg text-brand-neutral mb-12 max-w-2xl mx-auto">
          We offer a diverse range of styles for all skill levels. Find the one that moves you.
        </p>

        {/* Grid for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredClasses.map((danceClass) => (
            <ClassCard
              key={danceClass.title}
              title={danceClass.title}
              description={danceClass.description}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ClassesSection;