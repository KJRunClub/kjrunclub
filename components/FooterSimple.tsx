import Link from 'next/link';
import Image from 'next/image';
import { brand, contact, navigation } from '@/lib/siteContent';

export function FooterSimple() {
  return (
    <footer className="relative mt-24 border-t border-neutral-900 bg-neutral-950/95 text-neutral-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/80">
                <Image src="/logo-kjrc.png" alt={`${brand.shortName} logo`} fill sizes="56px" className="object-contain p-1 grayscale" />
              </span>
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-neutral-500">Crew</p>
                <h3 className="font-bebas text-4xl uppercase tracking-[0.2em] text-neutral-50">{brand.shortName}</h3>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-400">
              {brand.mission}
            </p>
          </div>

          <div className="grid gap-10 text-sm sm:grid-cols-2 lg:col-span-7">
            <div>
              <h4 className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-neutral-500">Navigate</h4>
              <nav className="mt-5 grid gap-3">
                {navigation.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-3 rounded-full border border-transparent px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-400 transition hover:border-neutral-700 hover:text-neutral-50"
                  >
                    <span className="h-px w-6 bg-neutral-700" />
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-neutral-500">Connect</h4>
              <div className="mt-5 grid gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 rounded-full border border-transparent px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-400 transition hover:border-neutral-700 hover:text-neutral-50"
                >
                  <span className="h-px w-6 bg-neutral-700" />
                  {contact.email}
                </a>
                {contact.social.map(({ platform, url, handle }) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/70 px-5 py-4 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-300 transition hover:border-neutral-600 hover:text-neutral-50"
                  >
                    <span className="font-bebas text-xl uppercase tracking-[0.2em] text-neutral-50">{platform}</span>
                    <span>{handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-900 pt-6 text-center text-neutral-500 sm:flex-row">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} {brand.extendedName}
          </p>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.4em]">Kuala Lumpur • Malaysia</p>
        </div>
      </div>
    </footer>
  );
}
