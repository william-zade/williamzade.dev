/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#1B1B1B',
        ember: '#E24B1A',
        frost: {
          100: '#D8DEE9',
          500: '#88C0D0',
          800: '#2E3440',
        },
        steel: '#4C566A',
        bone: '#ECEFF4',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
