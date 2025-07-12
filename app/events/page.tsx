// ./app/events/page.tsx
"use client";

import { motion } from 'framer-motion';
import { allEvents } from '@/lib/event-data';
import Link from 'next/link';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function EventsPage() {
  return (
    <div className="py-24 text-white">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-brand-gold mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Event Galleries
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allEvents.map((event) => (
            <motion.div key={event.slug} variants={itemVariants}>
              <Link href={`/events/${event.slug}`} className="group block">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={event.thumbnail}
                    alt={`Thumbnail for ${event.name}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4 group-hover:text-brand-gold transition-colors">
                  {event.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}