// components/Footer.jsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Branding/Logo */}
        <div className="mb-4 md:mb-0 font-bold text-lg">
          William Zade
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-6 text-sm">
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link href="/cta" className="hover:underline">
            Call to Action
          </Link>
          {/* Add more links as needed */}
        </nav>

        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} William Zade. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
