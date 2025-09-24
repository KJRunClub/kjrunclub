"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { navigation, brand } from '@/lib/siteContent';
import { usePathname } from 'next/navigation';

const linkBase =
  'relative font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400 transition hover:text-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950';

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <div className="w-full rounded-full border border-neutral-800 bg-neutral-950/85 px-4 shadow-[0_16px_60px_rgba(0,0,0,0.45)] backdrop-blur">
        <div className="flex h-16 max-w-7xl items-center justify-center gap-6">
          <Link href="/" className="flex items-center gap-3" onClick={close}>
            <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden ">
              <Image
                src="/logo-kjrc.png"
                alt={`${brand.shortName} logo`}
                fill
                sizes="48px"
                className="object-contain p-1 grayscale"
                priority
              />
            </span>
            <span className="hidden font-bebas text-3xl uppercase tracking-[0.28em] text-neutral-100 sm:block">
              {brand.shortName}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map(({ href, label }) => {
              const active = pathname === href || (href !== '/' && pathname?.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(linkBase, active && 'text-neutral-50')}
                  onClick={close}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/70 text-neutral-200 md:hidden"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">Toggle navigation</span>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div
          id="mobile-nav"
          className={clsx(
            'md:hidden',
            open ? 'max-h-[24rem] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="overflow-hidden pt-2">
            <nav className="flex flex-col gap-2 rounded-3xl bg-neutral-900/85 px-4 py-4">
              {navigation.map(({ href, label }) => {
                const active = pathname === href || (href !== '/' && pathname?.startsWith(href));
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={close}
                    className={clsx(
                      'rounded-2xl px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.35em] transition',
                      active
                        ? 'border border-neutral-100 bg-neutral-100 text-neutral-900'
                        : 'border border-transparent text-neutral-300 hover:border-neutral-700 hover:text-neutral-50'
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
