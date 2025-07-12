// ./app/about/page.tsx
"use client"; // Required for animations

import { motion } from 'framer-motion';
import Image from 'next/image';
import Instructors from '@/components/Instructors'; // We will reuse the instructors component

export default function AboutPage() {
  return (
    <div className="py-24 text-white">
      {/* Section 1: Hero */}
      <div className="container mx-auto px-4 text-center mb-20">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-brand-gold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Story
        </motion.h1>
        <motion.p 
          className="text-lg text-brand-neutral max-w-3xl mx-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          All Starz was born from a simple idea: to create a space where anyone can discover the joy and power of dance, regardless of their age or skill level.
        </motion.p>
      </div>

      {/* Section 2: Mission & Vision */}
      <div className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="w-full h-96 relative rounded-lg overflow-hidden"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image 
              src="/img/about-studio.jpg" // Placeholder - create this image
              alt="All Starz Dance Studio Interior"
              fill
              className="object-cover"
            />
          </motion.div>
          
          {/* Text Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-brand-gold mb-4">Our Mission</h2>
            <p className="text-brand-neutral mb-6">
              To provide world-class dance education that inspires creativity, builds confidence, and fosters a vibrant, inclusive community. We believe dance is a universal language that connects us all.
            </p>
            <h2 className="text-3xl font-bold text-brand-gold mb-4">Our Vision</h2>
            <p className="text-brand-neutral">
              To be the leading hub for dance culture in East Africa, known for our exceptional talent, innovative choreography, and unwavering passion for the art of movement.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Section 3: Why Choose Us (Metrics) */}
      <div className="bg-[#111] py-20 mb-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Why Dance With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-4">
              <div className="text-5xl font-extrabold text-brand-gold mb-2">10+</div>
              <div className="text-lg text-brand-neutral">Dance Styles</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-extrabold text-brand-gold mb-2">500+</div>
              <div className="text-lg text-brand-neutral">Happy Students</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-extrabold text-brand-gold mb-2">24/7</div>
              <div className="text-lg text-brand-neutral">Online Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Reuse the Instructors Component */}
      <Instructors />

    </div>
  );
}
