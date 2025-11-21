'use client';

import Link from 'next/link';
import { useState } from 'react';
import AboutTeaser from './AboutTeaser'; // adjust if path changes

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="bg-midnight text-frost-100 px-6 py-4 flex items-center justify-between shadow-lg font-sans relative z-50">
      {/* Logo + About Hover */}
      <div
        className="font-bold text-2xl tracking-tight text-frost-50 relative cursor-pointer"
        onMouseEnter={() => setAboutOpen(true)}
        onMouseLeave={() => setAboutOpen(false)}
      >
        <Link href="/">William Zade</Link>
        {aboutOpen && (
          <div className="absolute left-0 top-full mt-2 z-50">
            <AboutTeaser />
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center text-sm tracking-wide uppercase">
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

      {/* Mobile Hamburger */}
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
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-midnight flex flex-col items-center gap-4 py-6 md:hidden z-40 text-sm tracking-wide uppercase">
          {['/about', '/projects', '/personal', '/music', '/store'].map((href) => (
            <Link
              key={href}
              href={href}
              className="hover:text-ember transition"
              onClick={() => setMenuOpen(false)}
            >
              {href.replace('/', '')}
            </Link>
          ))}
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
