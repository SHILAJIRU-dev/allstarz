// ./app/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import WhatsAppWidget from '@/components/WhatsappWidget'; // Corrected casing
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InactivityTimeout from '@/components/InactivityTimeout';
import React from 'react';

// This line is important to solve the auth error
export const dynamic = 'force-dynamic';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'All Starz Dance',
  description: "Kenya's number one spot for dance classes and tutorials.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* The new Poppins font class is applied, and bg-brand-black is removed */}
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
        <InactivityTimeout />
      </body>
    </html>
  );
}