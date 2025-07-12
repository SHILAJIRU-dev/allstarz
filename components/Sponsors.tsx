// ./components/Sponsors.tsx
"use client";

import Image from 'next/image';

// Add your sponsor logo paths here. For best results, use SVG or transparent PNG files.
const sponsors = [
  { name: 'Sponsor 1', logo: '/img/sponsors/logo1.svg' },
  { name: 'Sponsor 2', logo: '/img/sponsors/logo2.svg' },
  { name: 'Sponsor 3', logo: '/img/sponsors/logo3.svg' },
  { name: 'Sponsor 4', logo: '/img/sponsors/logo4.svg' },
  { name: 'Sponsor 5', logo: '/img/sponsors/logo5.svg' },
  { name: 'Sponsor 6', logo: '/img/sponsors/logo6.svg' },
];

export const Sponsors = () => {
  // We duplicate the logos to create a seamless loop
  const extendedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="bg-[#111] py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Our Partners & Sponsors</h2>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
          }}
        >
          <div className="flex animate-scroller">
            {extendedSponsors.map((sponsor, index) => (
              <div key={index} className="flex-shrink-0 mx-8" style={{ width: '150px' }}>
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={150}
                  height={60}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;