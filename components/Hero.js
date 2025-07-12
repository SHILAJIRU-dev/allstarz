// ./components/Hero.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

// Create a motion-compatible version of the Next.js Link component
const MotionLink = motion(Link);

const Hero = () => {
  return (
    <div className="relative bg-brand-black text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wider">
  Unleash Your <span className="bg-gradient-to-r from-yellow-300 to-brand-gold text-transparent bg-clip-text">Rhythm</span>
</h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-brand-neutral">
          From beginners to pros, find your beat at Kenya's leading dance studio.
          Join a class or learn online at your own pace.
        </p>
        
        <MotionLink
          href="/classes"
          className="mt-8 bg-brand-gold text-brand-black font-bold py-3 px-8 rounded text-lg hover:bg-yellow-400 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Classes
        </MotionLink>
      </div>
    </div>
  );
};

export default Hero;