"use client";

import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import clubData from '@/content/club.json';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/team', label: 'Team' },
  { href: '/merch', label: 'Merch' },
  { href: '/contact', label: 'Contact' },
];

export function SiteNav() {
  const { club } = clubData;
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(prev => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex flex-col justify-center"
          onClick={closeMobile}
        >
          <span className="font-bebas text-2xl uppercase tracking-widest group-hover:underline">
            {club.name}
          </span>
          <span className="hidden text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 sm:block">
            {club.tagline}
          </span>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-xs uppercase tracking-wider transition-colors hover:text-black/60 focus-brutal"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded border border-black px-2 py-1 text-black md:hidden"
          onClick={toggleMobile}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Toggle navigation</span>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={clsx(
          'md:hidden border-t border-black/10 bg-white transition-all duration-200 ease-out',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        )}
      >
        <nav className="flex flex-col px-4 py-3 sm:px-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMobile}
              className="font-mono text-sm uppercase tracking-wider py-2 border-b border-black/10 last:border-b-0 focus-brutal"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
