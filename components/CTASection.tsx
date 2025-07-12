// ./components/CTASection.tsx
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="bg-brand-gold">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-brand-black mb-4">
          Ready to Start Dancing?
        </h2>
        <p className="text-lg text-black/80 mb-8 max-w-xl mx-auto">
          Your first step towards a more confident, rhythmic you is just a click away.
          Book your class today!
        </p>
        <Link
          href="/book"
          className="bg-brand-black text-white font-bold py-3 px-8 rounded text-lg hover:bg-gray-800 transition-colors"
        >
          Book a Class
        </Link>
      </div>
    </section>
  );
};

export default CTASection;