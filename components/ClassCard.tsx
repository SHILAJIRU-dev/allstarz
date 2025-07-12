// ./components/ClassCard.tsx
import Link from 'next/link';

// We define the 'props' that this component will accept
interface ClassCardProps {
  title: string;
  description: string;
}

const ClassCard = ({ title, description }: ClassCardProps) => {
  return (
    <div className="bg-[#111] p-6 rounded-lg border border-transparent hover:border-brand-gold transition-all group">
      {/* Icon */}
      <svg
        className="w-10 h-10 mb-4 text-brand-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.879 16.121A3 3 0 1014.12 11.88a3 3 0 00-4.242 4.242z"
        />
      </svg>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-brand-neutral mb-4">{description}</p>
      <Link
        href="/classes"
        className="text-brand-gold font-semibold group-hover:underline"
      >
        Learn More →
      </Link>
    </div>
  );
};

export default ClassCard;