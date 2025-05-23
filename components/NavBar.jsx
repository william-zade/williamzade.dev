'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-midnight text-frost-100 px-6 py-4 flex items-center justify-between shadow-lg font-sans">
      {/* Brand/Logo */}
      <div className="font-bold text-2xl tracking-tight text-frost-50">
        <Link href="/">HoarFrost</Link>
      </div>
      {/* Desktop navigation */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link href="/about" className="hover:text-ember transition">About</Link>
        <Link href="/projects" className="hover:text-ember transition">Projects</Link>
        <Link href="/personal" className="hover:text-ember transition">Personal</Link>
        <Link href="/music" className="hover:text-ember transition">Music</Link>
        <Link href="/store" className="hover:text-ember transition">Store</Link>
        <Link href="/contact">
          <button className="bg-ember hover:bg-frost-500 text-midnight px-4 py-2 rounded font-semibold transition">
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
        <div className="absolute top-16 left-0 w-full bg-midnight flex flex-col items-center space-y-2 py-4 md:hidden z-50 font-sans">
          <Link href="/about" className="hover:text-ember transition" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/projects" className="hover:text-ember transition" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/personal" className="hover:text-ember transition" onClick={() => setMenuOpen(false)}>Personal</Link>
          <Link href="/music" className="hover:text-ember transition" onClick={() => setMenuOpen(false)}>Music</Link>
          <Link href="/store" className="hover:text-ember transition" onClick={() => setMenuOpen(false)}>Store</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button className="bg-ember hover:bg-frost-500 text-midnight px-4 py-2 rounded font-semibold transition">
              Contact
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
