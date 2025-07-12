// ./app/book/page.tsx
"use client";

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { createBooking } from '@/app/actions';
import { motion } from 'framer-motion';

export const dynamic = 'force-dynamic';

const danceClasses = [
  'Hip-Hop',
  'Contemporary Dance',
  'African Dance',
  'Aerobics, Yoga & Dance Fitness',
  'Dancehall',
  'Foundational Dance (All Styles)',
];

export default function BookingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [classStyle, setClassStyle] = useState(danceClasses[0]);
  const [bookingDate, setBookingDate] = useState<Date | undefined>(new Date());
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setIsLoading(true);

    if (!bookingDate) {
      setError('Please select a date.');
      setIsLoading(false);
      return;
    }

    const formData = { name, email, phone, classStyle, bookingDate };
    const result = await createBooking(formData);
    
    setIsLoading(false);

    if (result.error) {
      setError(result.error);
    } else {
      setMessage('Booking successful! We will contact you shortly to confirm.');
      setName('');
      setEmail('');
      setPhone('');
      setBookingDate(new Date());
    }
  };

  return (
    <div className="py-24 text-white">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-brand-gold mb-4 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Book a Class
        </motion.h1>
        <motion.p 
          className="text-lg text-brand-neutral mb-12 max-w-2xl mx-auto text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Select your preferred class and date. We can't wait to dance with you!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-neutral">Full Name</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="input-style" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-neutral">Email Address</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input-style" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-neutral">Phone Number</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="input-style" />
            </div>
            <div>
              <label htmlFor="classStyle" className="block text-sm font-medium text-brand-neutral">Dance Style</label>
              <select id="classStyle" value={classStyle} onChange={(e) => setClassStyle(e.target.value)} required className="input-style">
                {danceClasses.map(style => (
                  // --- THIS IS THE FIX ---
                  // Added a className to the <option> tag to style it directly
                  <option key={style} value={style} className="bg-gray-800 text-white">
                    {style}
                  </option>
                ))}
              </select>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 px-4 bg-brand-gold text-brand-black font-semibold rounded-md hover:bg-yellow-400 transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit Booking Request'}
            </button>
            {message && <p className="text-green-500 text-center mt-4">{message}</p>}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </form>

          <div className="flex justify-center items-center bg-[#111] p-4 rounded-lg">
            <DayPicker
              mode="single"
              selected={bookingDate}
              onSelect={setBookingDate}
              className="text-white"
              disabled={{ before: new Date() }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
