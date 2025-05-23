/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        frost: {
          50:  '#F4F9FB',
          100: '#EDF5F8',
          200: '#DBECF0',
          300: '#C5E0E7',
          400: '#B3D7E0',
          500: '#A9D6E5',
          600: '#6BB0C2',
          700: '#428C9F',
          800: '#2D606C',
          900: '#163036'
        },
        midnight: '#22223B',
        ember: '#FF6F3C',
        ice: '#F7F7FF',
        slate: '#4A4E69',
      },
    },
  },
  plugins: [],
};
