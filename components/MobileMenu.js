// ./components/MobileMenu.js
"use client"; // This is the interactive part

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/classes', label: 'Classes' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
];

// We receive the user's login status as a prop
export default function MobileMenu({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button (Hamburger) */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        )}
      </button>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-md shadow-lg"
          >
            <nav className="flex flex-col items-center space-y-4 py-8">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-lg hover:text-brand-gold transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gray-700 w-4/5 my-4"></div>
              {user ? (
                <>
                  <Link href="/account" className="text-lg hover:text-brand-gold transition-colors" onClick={() => setIsMenuOpen(false)}>My Account</Link>
                  {/* Note: The actual logout logic is in the LogoutButton component */}
                  <span className="text-lg text-red-500">Log Out</span>
                </>
              ) : (
                <Link href="/login" className="text-lg hover:text-brand-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Log In</Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}