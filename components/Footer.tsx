// ./components/Footer.tsx
import Link from 'next/link';

// SVG components for icons to keep the main component cleaner
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
const TikTokIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.162 8.192s.013-4.134-4.144-4.146c-2.062 0-3.647 1.238-4.444 2.373v-2.106s-2.062 0-2.062 8.248c0 4.122 2.062 6.185 4.123 6.185s4.123-2.063 4.123-6.185c0-1.03-.092-2.062-.275-3.094s-.92-.687-.92-.687s.92 0 2.483-1.554c1.287-1.288 1.15-2.063 1.15-2.063Z"></path></svg>;
const WhatsAppIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.89 7.89 0 0 0 13.6 2.326zM7.994 14.521a6.57 6.57 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>;
const FacebookIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" clipRule="evenodd"></path></svg>;

const Footer = () => {
  return (
    <footer className="bg-[#111] text-brand-neutral pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Brand & Socials */}
          <div>
            <h3 className="text-2xl font-bold text-brand-gold mb-2">All Starz</h3>
            <p className="mb-4 text-sm">Unleash your rhythm. Find your beat.</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FacebookIcon /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><InstagramIcon /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><TikTokIcon /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><WhatsAppIcon /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><Link href="/" className="hover:text-brand-gold">Home</Link></li>
              <li className="mb-2"><Link href="/classes" className="hover:text-brand-gold">Classes</Link></li>
              <li className="mb-2"><Link href="/tutorials" className="hover:text-brand-gold">Tutorials</Link></li>
              <li className="mb-2"><Link href="/about" className="hover:text-brand-gold">About</Link></li>
              <li className="mb-2"><Link href="/gallery" className="hover:text-brand-gold">Gallery</Link></li>
              <li className="mb-2"><Link href="/schedules" className="hover:text-brand-gold">Schedules</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <p>Olympia, Nyahururu</p>
            <p>contact@allstarz.co.ke</p>
            <p>+254 711 154 5673</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} All Starz Dance. All Rights Reserved.</p>
          <p className="mt-2">
            Developed by <a href="http://www.jay1.buzz" target="_blank" rel="noopener noreferrer" className="text-brand-gold font-semibold hover:underline">Jay Tech</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;