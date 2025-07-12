// ./components/PaystackButton.tsx
"use client";

import { usePaystackPayment } from 'react-paystack';
import { recordPurchase } from '@/app/actions';
import { useRouter } from 'next/navigation';

// Define the types for the props this component will receive
type Video = {
  id: number;
  title: string;
  price: number;
};

interface User {
  id: string;
  email?: string;
}

interface PaystackButtonProps {
  video: Video;
  user: User | null;
}

const PaystackButton = ({ video, user }: PaystackButtonProps) => {
  const router = useRouter();

  // The configuration for the Paystack payment
  const config = {
    reference: `allstarz_${user?.id}_${video.id}_${new Date().getTime()}`,
    email: user?.email || '',
    amount: video.price * 100, // Paystack expects amount in the smallest currency unit
    currency: 'KES',
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY!,
    metadata: {
      user_id: user?.id,
      video_id: video.id,
    }
  };

  // Initialize the payment hook
  const initializePayment = usePaystackPayment(config);

  // Define what happens on successful payment
  const onSuccess = (reference: any) => {
    if (user) {
      recordPurchase(user.id, video.id).then(result => {
        if (result.error) {
          alert(`Payment successful, but we couldn't update your account. Please contact support.`);
        } else {
          alert('Purchase successful! You now have access to this tutorial.');
        }
      });
    }
  };

  // Define what happens when the modal is closed
  const onClose = () => {
    console.log('Payment modal closed.');
  };

  // The main function to call when the button is clicked
  const handlePayment = () => {
    if (!user) {
      router.push('/login');
      return;
    }
    initializePayment({ onSuccess, onClose });
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-brand-gold text-brand-black font-semibold py-2 px-5 rounded-md hover:bg-yellow-400 transition-colors"
    >
      Buy Now
    </button>
  );
};

export default PaystackButton;
