// ./components/Testimonials.tsx
"use client"; // This marks the component as a Client Component

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

// Mock data for testimonials
const testimonials = [
  {
    quote: "All Starz transformed my two left feet into a passion for dance. The instructors are patient, skilled, and make every class fun!",
    name: "Amina Yusuf",
    title: "Hip-Hop Student",
  },
  {
    quote: "The online tutorials are a game-changer. I can learn complex routines from the comfort of my home, anytime I want. Worth every shilling.",
    name: "David Otieno",
    title: "Online Subscriber",
  },
  {
    quote: "I've been to many studios in Nairobi, but the community vibe at All Starz is unmatched. It feels like a family that dances together.",
    name: "Christine Waweru",
    title: "Contemporary Dancer",
  },
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-brand-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Dancers Say</h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div className="flex-grow-0 flex-shrink-0 basis-full min-w-0 px-4" key={index}>
                <div className="bg-[#111] p-8 rounded-lg max-w-3xl mx-auto">
                  <p className="text-xl italic text-brand-neutral mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="font-bold text-lg text-brand-gold">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={scrollPrev}
            className="bg-brand-gold text-brand-black rounded-full p-3 hover:bg-yellow-400 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="bg-brand-gold text-brand-black rounded-full p-3 hover:bg-yellow-400 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;