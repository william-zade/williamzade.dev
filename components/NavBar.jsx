'use client';

import Link from 'next/link';
import { useState } from 'react';
import AboutTeaser from './AboutTeaser';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="bg-obsidian text-chalk px-6 py-4 flex items-center justify-between shadow-neo font-press relative z-50">
      {/* Logo / About */}
      <div
        className="text-xl tracking-wide text-chalk hover:text-retro transition duration-300 cursor-pointer"
        onMouseEnter={() => setAboutOpen(true)}
        onMouseLeave={() => setAboutOpen(false)}
      >
        <Link href="/">William Zade</Link>
        {aboutOpen && (
          <div className="absolute left-0 top-full mt-2 z-50 animate-slideIn">
            <AboutTeaser />
          </div>
        )}
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6 items-center text-base">
        {['about', 'projects', 'personal', 'music', 'store'].map((page) => (
          <Link
            key={page}
            href={`/${page}`}
            className="hover:text-retro transition duration-200 hover:animate-pulseSlow"
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </Link>
        ))}

        <Link href="/contact">
          <button className="bg-retro hover:bg-slateblue text-obsidian px-4 py-2 rounded shadow-neo font-bold uppercase tracking-wider transition-all duration-300">
            Start
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center text-chalk"
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

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-obsidian text-chalk flex flex-col items-center space-y-2 py-4 md:hidden shadow-xl animate-slideIn">
          {['about', 'projects', 'personal', 'music', 'store'].map((page) => (
            <Link
              key={page}
              href={`/${page}`}
              className="hover:text-retro transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button className="bg-retro hover:bg-slateblue text-obsidian px-4 py-2 rounded shadow-neo font-bold uppercase tracking-wider">
              Start
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
