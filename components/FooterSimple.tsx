import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/team', label: 'Team' },
  { href: '/merch', label: 'Merch' },
  { href: '/contact', label: 'Contact' },
];

export function FooterSimple() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black/40">
      <div className="absolute inset-0 opacity-35" aria-hidden>
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\' viewBox=\'0 0 200 200\'%3E%3Cpath d=\'M0 200 L200 0\' stroke=\'rgba(255,255,255,0.04)\' stroke-width=\'1.2\' stroke-dasharray=\'18 40\'/%3E%3C/svg%3E')]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-2xl border border-white/12 bg-black/60">
              <Image src="/logo-kjrc.png" alt="KJ Run Club logo" fill sizes="64px" className="object-contain p-1" />
            </div>
            <h3 className="font-bebas text-5xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))]">
              KJ Run Club
            </h3>
            <p className="mt-4 max-w-sm font-mono text-[11px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/60">
              Sporty. Raw. Unapologetic. Sessions engineered for runners who want to move with grit.
            </p>
          </div>

          <div className="grid gap-10 text-sm sm:grid-cols-2 lg:col-span-7">
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/60">
                Navigate
              </h4>
              <nav className="mt-6 grid gap-3">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="relative inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/70 transition hover:text-[hsl(var(--foreground))]"
                  >
                    <span className="h-px w-8 bg-[hsl(var(--foreground))]/25" />
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/60">
                Connect
              </h4>
              <div className="mt-6 grid gap-3">
                {[
                  { href: 'https://instagram.com/kjrunclub', label: 'Instagram' },
                  { href: 'https://strava.com/clubs/kjrunclub', label: 'Strava' },
                  { href: 'mailto:hello@kjrunclub.com', label: 'Email' },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="relative inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/70 transition hover:text-[hsl(var(--foreground))]"
                  >
                    <span className="h-px w-8 bg-[hsl(var(--foreground))]/25" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/50">
            © {new Date().getFullYear()} KJ Run Club. Built for motion.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/30">
            Kuala Lumpur • Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
