"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import clubData from '@/content/club.json';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/team', label: 'Team' },
  { href: '/merch', label: 'Merch' },
  { href: '/contact', label: 'Contact' },
];

const linkClass =
  'relative font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/60 transition hover:text-[hsl(var(--foreground))] focus-brutal';

export function SiteNav() {
  const { club } = clubData;
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative mt-6 flex h-16 items-center justify-between rounded-3xl border border-white/10 bg-black/40 px-5 backdrop-blur-xl">
          <Link href="/" className="group flex items-center gap-4" onClick={closeMobile}>
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-black/60">
              <Image src="/logo-kjrc.png" alt={`${club.name} logo`} fill sizes="48px" className="object-contain p-1" priority />
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-2xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))]">
                {club.name}
              </span>
              <span className="hidden text-[10px] font-mono uppercase tracking-[0.38em] text-[hsl(var(--foreground))]/50 sm:block">
                {club.tagline}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    linkClass,
                    isActive &&
                      "text-[hsl(var(--foreground))] after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-full after:bg-[hsl(var(--foreground))] after:content-['']"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn-framer hidden text-[9px] md:inline-flex">
              <span>Join</span>
            </Link>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[hsl(var(--foreground))] md:hidden"
              onClick={toggleMobile}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span className="sr-only">Toggle navigation</span>
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={clsx(
          'mx-auto max-w-7xl px-4 sm:px-6 md:hidden',
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <div
          className={clsx(
            'mt-3 overflow-hidden rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl transition-all duration-300',
            mobileOpen ? 'max-h-[24rem] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="flex flex-col gap-1 px-6 py-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMobile}
                className={clsx(
                  'rounded-2xl px-4 py-3 font-mono text-[11px] uppercase tracking-[0.38em] text-[hsl(var(--foreground))]/70 transition hover:bg-white/8',
                  (pathname === href || (href !== '/' && pathname.startsWith(href))) && 'bg-white/10 text-[hsl(var(--foreground))]'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
