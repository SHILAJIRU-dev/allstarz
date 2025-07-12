// ./components/InactivityTimeout.tsx
"use client";

import { useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supaBaseClient';

const InactivityTimeout = () => {
  const router = useRouter();
  // --- THIS IS THE FIX ---
  // Initialize useRef with null so TypeScript knows its starting value.
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // The function to log the user out
  const logout = useCallback(() => {
    supabase.auth.signOut().then(() => {
      // Redirect to login page with a message
      router.push('/login?message=You have been logged out due to inactivity.');
      router.refresh();
    });
  }, [router]);

  // The function to reset the timer
  const resetTimer = useCallback(() => {
    // Clear the previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // Set a new timer for 10 minutes (600,000 milliseconds)
    timerRef.current = setTimeout(logout, 10 * 60 * 1000);
  }, [logout]);

  useEffect(() => {
    // List of events that count as user activity
    const activityEvents: (keyof WindowEventMap)[] = [
      'mousemove',
      'mousedown',
      'keypress',
      'scroll',
      'touchstart',
    ];

    const startTimerAndListeners = async () => {
      // First, check if a user is actually logged in on the client
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        // If logged in, reset the timer and add event listeners
        resetTimer();
        activityEvents.forEach(event => {
          window.addEventListener(event, resetTimer);
        });
      }
    };

    startTimerAndListeners();

    // Cleanup function to run when the component unmounts
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      activityEvents.forEach(event => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [resetTimer]); // Rerun effect if resetTimer changes

  // This component does not render anything visible
  return null;
};

export default InactivityTimeout;