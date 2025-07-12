// ./app/login/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supaBaseClient'; // <-- CRITICAL FIX: Corrected casing from supaBaseClient
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); 
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const logoutMessage = searchParams.get('message');
    if (logoutMessage) {
      setMessage(logoutMessage);
    }
  }, [searchParams]);

  const handleSignUp = async () => {
    setError(null);
    setMessage(null);
    setIsLoading(true);

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setIsLoading(false);
      return;
    }

    // This will now work correctly because the import is fixed
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username,
        },
      },
    });

    setIsLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setMessage('Check your email for the confirmation link!');
    }
  };

  const handleSignIn = async () => {
    setError(null);
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
    } else {
      router.push('/account');
      router.refresh();
    }
  };

  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#111] rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-brand-gold">Sign In or Sign Up</h1>
        
        {error && <p className="text-red-500 bg-red-500/10 p-3 rounded-md text-center">{error}</p>}
        {message && <p className="text-green-500 bg-green-500/10 p-3 rounded-md text-center">{message}</p>}

        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-brand-neutral">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-neutral">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-brand-neutral">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleSignIn}
            className="w-full py-2 px-4 bg-brand-gold text-brand-black font-semibold rounded-md hover:bg-yellow-400 transition-colors disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
          <button
            onClick={handleSignUp}
            className="w-full py-2 px-4 border border-brand-gold text-brand-gold font-semibold rounded-md hover:bg-brand-gold/10 transition-colors disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}
