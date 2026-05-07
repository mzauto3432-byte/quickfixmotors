/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E31937',
          'red-dark': '#B8132C',
          'red-light': '#FF2D4B',
          black: '#0A0A0A',
          'black-light': '#141414',
          'black-card': '#1A1A1A',
          'black-hover': '#222222',
          white: '#FFFFFF',
          gray: '#A0A0A0',
          'gray-dark': '#666666',
        },
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(227, 25, 55, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(227, 25, 55, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
