// ./components/TutorialsList.tsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import PaystackButton from './PaystackButton'; 

// Define the types for the props we'll receive
type Video = {
  id: number;
  title: string;
  description: string | null;
  price: number;
  image_url: string | null;
};

interface User {
  id: string;
  email?: string;
}

interface TutorialsListProps {
  videos: Video[];
  purchasedVideoIds: Set<number>;
  user: User | null;
}

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

const TutorialsList = ({ videos, purchasedVideoIds, user }: TutorialsListProps) => {
  return (
    <>
      <div className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl font-bold text-brand-gold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Video Tutorials
          </motion.h1>
          <motion.p 
            className="text-lg text-brand-neutral mb-12 max-w-2xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn at your own pace with our collection of high-quality dance tutorials.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {videos?.map((video) => {
              const isPurchased = purchasedVideoIds.has(video.id);
              return (
                <motion.div 
                  key={video.id} 
                  className="bg-[#111] rounded-lg border border-gray-800 flex flex-col overflow-hidden"
                  variants={itemVariants}
                >
                  {video.image_url && (
                    <div className="relative w-full aspect-video">
                      <Image
                        src={video.image_url}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-white">{video.title}</h3>
                    <p className="text-brand-neutral mb-4 flex-grow">{video.description}</p>
                    
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-2xl font-bold text-brand-gold">Ksh.{video.price}</span>
                      {isPurchased ? (
                        <button 
                          className="bg-green-600 text-white font-semibold py-2 px-5 rounded-md"
                          disabled
                        >
                          Purchased
                        </button>
                      ) : (
                        <PaystackButton video={video} user={user} />
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* --- NEW: Support Section --- */}
      <div className="border-t border-gray-800 mt-24">
        <div className="container mx-auto px-4 py-16 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Are you stuck?</h2>
          <p className="text-brand-neutral mb-8">
            Reach out to our support team now for immediate assistance with payments or access issues.
          </p>
          <form
            action="https://formspree.io/f/xldnqgbp" // <-- PASTE YOUR FORMSPREE URL HERE
            method="POST"
            className="space-y-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              className="input-style w-full"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Describe your issue..."
              required
              className="input-style w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-brand-gold text-brand-black font-semibold py-2 px-5 rounded-md hover:bg-yellow-400 transition-colors"
            >
              Get Help
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TutorialsList;
