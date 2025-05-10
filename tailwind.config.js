/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37', // Gold
          dark: '#B38E2C',
          light: '#E5C158',
        },
        secondary: {
          DEFAULT: '#000000', // Black
          light: '#333333',
        },
        accent: {
          DEFAULT: '#FFFFFF', // White
          dark: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
}

