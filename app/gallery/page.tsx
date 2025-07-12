// ./app/gallery/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; 

// Mock data now includes a 'description' for each image
const galleryImages = [
  { id: 1, src: '/img/gallery-1.jpg', alt: 'Dancer mid-air during a contemporary performance', description: 'Annual Showcase 2024' },
  { id: 2, src: '/img/gallery-2.jpg', alt: 'A group of students in a hip-hop class', description: 'Weekly Hip-Hop Class' },
  { id: 3, src: '/img/gallery-3.jpg', alt: 'Close-up of a dancer\'s intricate footwork', description: 'Advanced Technique Workshop' },
  { id: 4, src: '/img/gallery-4.jpg', alt: 'The entire All Starz crew posing after a show', description: 'End of Year Cypher' },
  { id: 5, src: '/img/gallery-5.jpg', alt: 'A student practicing yoga for flexibility', description: 'Yoga for Dancers Session' },
  { id: 6, src: '/img/gallery-6.jpg', alt: 'Energetic dancehall session in progress', description: 'Dancehall Queen Competition' },
  { id: 7, src: '/img/gallery-7.jpg', alt: 'A powerful solo performance', description: 'Freestyle Friday Spotlight' },
  { id: 8, src: '/img/gallery-8.jpg', alt: 'The studio space, empty and ready for a class', description: 'Our Nairobi Studio' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-24 text-white">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-brand-gold mb-4 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Gallery
        </motion.h1>
        <motion.p 
          className="text-lg text-brand-neutral mb-12 max-w-2xl mx-auto text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A glimpse into the energy, passion, and community at All Starz Dance.
        </motion.p>
        
        <div className="text-center mb-12">
          <Link href="/events" className="bg-brand-gold text-brand-black font-bold py-3 px-6 rounded hover:bg-yellow-400 transition-colors">
            View Event Galleries
          </Link>
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group" // Added 'group' for hover effect
              onClick={() => setSelectedImage(image.src)}
              layoutId={`image-${image.id}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              {/* --- NEW: Description Overlay --- */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-sm">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              layoutId={`image-${galleryImages.find(img => img.src === selectedImage)?.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
                <Image
                  src={selectedImage}
                  alt="Selected image"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-4xl"
              >
                &times;
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}