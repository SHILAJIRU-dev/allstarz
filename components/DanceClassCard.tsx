// ./components/DanceClassCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define the props for this component
interface DanceClassCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

// Animation variant for each card
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const DanceClassCard = ({ title, description, imageUrl }: DanceClassCardProps) => {
  return (
    <motion.div 
      className="bg-[#111] rounded-lg border border-gray-800 flex flex-col overflow-hidden group"
      variants={itemVariants}
    >
      {/* Image Holder */}
      <div className="relative w-full aspect-video">
        <Image
          src={imageUrl}
          alt={`Image for ${title} class`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-brand-neutral mb-6 flex-grow">{description}</p>
        <Link 
          href="/book" 
          className="mt-auto text-center bg-brand-gold text-brand-black font-semibold py-2 px-5 rounded-md hover:bg-yellow-400 transition-colors w-full"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  );
};

export default DanceClassCard;