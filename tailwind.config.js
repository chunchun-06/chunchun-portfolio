/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        cinzel:  ['Cinzel', 'Georgia', 'serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          950: '#020817',
          900: '#0a1628',
          800: '#0f2040',
        },
        accent: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        warm: '#F3E4C9',
        gold: '#D0A933',
      },
      screens: {
        xs: '475px',
      },
      animation: {
        'fade-in':    'fadeIn 0.8s ease-out forwards',
        'slide-up':   'slideUp 0.8s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'shine':      'shine 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shine: {
          '0%':   { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(150%)' },
        },
      },
    },
  },
  plugins: [],
};
