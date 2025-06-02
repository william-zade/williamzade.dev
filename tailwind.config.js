// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f11",
        card: "#1a1a1e",
        accent: "#5c7cfa",
        muted: "#9ca3af",
      },
      fontFamily: {
        sans: ["InterVariable", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
