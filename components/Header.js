// ./components/Header.js
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import LogoutButton from './LogoutButton';
import MobileMenu from './MobileMenu'; // <-- Import the new client component

export default async function Header() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <header className="bg-brand-black/80 backdrop-blur-sm text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-brand-gold">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span>All Starz Dance Company</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <Link href="/classes" className="hover:text-brand-gold transition-colors">Classes</Link>
          <Link href="/tutorials" className="hover:text-brand-gold transition-colors">Tutorials</Link>
          <Link href="/schedule" className="hover:text-brand-gold transition-colors">Schedule</Link>
          <Link href="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link>
          <Link href="/about" className="hover:text-brand-gold transition-colors">About</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link href="/account" className="font-semibold hover:text-brand-gold transition-colors">My Account</Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login" className="bg-brand-gold text-brand-black font-bold py-2 px-4 rounded text-sm hover:bg-yellow-400 transition-colors">
                  Log In
              </Link>
              <Link href="/book" className="bg-white text-brand-black font-bold py-2 px-4 rounded text-sm hover:bg-neutral-200 transition-colors">
                  Book Now
              </Link>
            </>
          )}
        </div>
        
        {/* --- THIS IS THE FIX --- */}
        {/* Render the MobileMenu component, passing the user's status to it */}
        <MobileMenu user={user} />
      </div>
    </header>
  );
}