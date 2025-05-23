'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <div className="font-bold text-2xl tracking-tight">
        <Link href="/">William Zade</Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/personal">Personal</Link>
        <Link href="/music">Music</Link>
        <Link href="/store">Store</Link>
        <Link href="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold">
            Contact
          </button>
        </Link>
      </div>
      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center space-y-2 py-4 md:hidden z-50">
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/personal" onClick={() => setMenuOpen(false)}>Personal</Link>
          <Link href="/music" onClick={() => setMenuOpen(false)}>Music</Link>
          <Link href="/store" onClick={() => setMenuOpen(false)}>Store</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold">
              Contact
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
