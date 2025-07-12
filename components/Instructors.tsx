// ./components/Instructors.tsx
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const instructors = [
  {
    name: 'Victor M.',
    style: 'Lead Hip-Hop Instructor',
    image: '/img/instructor-1.jpg',
    socials: {
      whatsapp: 'https://wa.me/254700000001',
      instagram: 'https://instagram.com/vmw_dance',
      tiktok: 'https://tiktok.com/@kenj_dance',
    },
  },
  {
    name: 'Joy Ke',
    style: 'Dancehall/Tiktok',
    image: '/img/instructor-2.jpg',
    socials: {
      whatsapp: 'https://wa.me/254700000002',
      instagram: 'https://instagram.com/joy_ke',
      tiktok: 'https://tiktok.com/@joy_ke',
    },
  },
  {
    name: 'Madau Ke.',
    style: 'Afro-Dance Specialist/Dancehall',
    image: '/img/instructor-3.jpg',
    socials: {
      whatsapp: 'https://wa.me/254700000003',
      instagram: 'https://instagram.com/samira_afro',
      tiktok: 'https://tiktok.com/@samira_afro',
    },
  },
  {
    name: 'PG Allstarz',
    style: 'Lines and Tutting',
    image: '/img/instructor-4.jpg',
    socials: {
      whatsapp: 'https://wa.me/254700000004',
      instagram: 'https://instagram.com/leoflex',
      tiktok: 'https://tiktok.com/@leoflex',
    },
  },
  {
    name: 'Icy Allstarz',
    style: 'Vogue & Lingala',
    image: '/img/instructor-5.jpg',
    socials: {
      whatsapp: 'https://wa.me/254700000004',
      instagram: 'https://instagram.com/leoflex',
      tiktok: 'https://tiktok.com/@leoflex',
    },
  },
  {
    name: 'Kevo Allstarz',
    style: 'Hip Hop/BBoy/Flips & Stunts',
    image: '/img/instructor-6.jpg',
    socials: {
      whatsapp: 'https://wa.me/254700000004',
      instagram: 'https://instagram.com/leoflex',
      tiktok: 'https://tiktok.com/@leoflex',
    },
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // Each child will animate 0.2s after the previous one
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Instructors = () => {
  return (
    <section className="bg-brand-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Instructors
        </motion.h2>
        <motion.p 
          className="text-lg text-brand-neutral mb-12 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Learn from the best in the industry. Our team is dedicated to your growth.
        </motion.p>
        
        {/* This is the animation container for the grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* --- THIS IS THE FIX --- */}
          {/* The instructor mapping is now correctly placed INSIDE the motion.div container */}
          {instructors.map((instructor) => (
            <motion.div key={instructor.name} className="group text-left" variants={itemVariants}>
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src={instructor.image}
                  alt={`Photo of ${instructor.name}`}
                  width={400}
                  height={500}
                  className="object-cover w-full h-96 transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">{instructor.name}</h3>
              <p className="text-brand-gold mb-3">{instructor.style}</p>
              
              <div className="flex items-center space-x-4">
                <a href={instructor.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18.425 5.575a9.834 9.834 0 0 0-13.908 13.908 9.834 9.834 0 0 0 13.908-13.908ZM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-5.467 4.88-2.13-1.092a.511.511 0 0 0-.585.111l-.816.98a6.34 6.34 0 0 1-2.921-2.921l.98-.816a.511.511 0 0 0 .111-.585L9.12 9.467a.511.511 0 0 0-.57-.423l-2.285.462a.512.512 0 0 0-.417.498 3.999 3.999 0 0 0 4.022 4.022.512.512 0 0 0 .498-.417l.462-2.285a.511.511 0 0 0-.423-.57Z" clipRule="evenodd"></path></svg>
                </a>
                <a href={instructor.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href={instructor.socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.162 8.192s.013-4.134-4.144-4.146c-2.062 0-3.647 1.238-4.444 2.373v-2.106s-2.062 0-2.062 8.248c0 4.122 2.062 6.185 4.123 6.185s4.123-2.063 4.123-6.185c0-1.03-.092-2.062-.275-3.094s-.92-.687-.92-.687s.92 0 2.483-1.554c1.287-1.288 1.15-2.063 1.15-2.063Z"></path></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Instructors;