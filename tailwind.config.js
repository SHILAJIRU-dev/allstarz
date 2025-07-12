/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#000000',
        'brand-gold': '#FFD700',
        'brand-neutral': '#F5F5F5',
      },
      // --- This is the new block you need to add ---
      animation: {
        scroller: 'scroller 40s linear infinite',
      },
      keyframes: {
        scroller: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};