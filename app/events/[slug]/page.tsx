// ./app/events/[slug]/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { eventsData } from '@/lib/event-data';
import Link from "next/link";

// --- THIS IS THE FIX ---
// Instead of creating a separate 'PageProps' type, we define the props inline.
// This avoids conflicts with Next.js's auto-generated types during the build.
export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const event = eventsData[params.slug as keyof typeof eventsData];

  if (!event) {
    return <div className="text-white text-center py-40">Event not found.</div>;
  }

  return (
    <div className="py-24 text-white">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-brand-gold mb-4 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {event.name}
        </motion.h1>
        <motion.p 
          className="text-lg text-brand-neutral mb-12 max-w-2xl mx-auto text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {event.description}
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {event.images.map((image) => (
            <motion.div
              key={image.id}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.src)}
              layoutId={`image-${image.id}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
                <Image src={selectedImage} alt="Selected image" fill className="object-contain" />
              </div>
              <button onClick={() => setSelectedImage(null)} className="absolute top-5 right-5 text-white text-4xl">&times;</button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="text-center mt-16">
            <Link href="/gallery" className="text-brand-gold hover:underline">
                &larr; Back to Galleries
            </Link>
        </div>
      </div>
    </div>
  );
}
