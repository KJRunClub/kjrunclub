import Image from 'next/image';
import Link from 'next/link';
import type { Division } from '@/lib/siteContent';

interface DivisionSlideProps {
  division: Division;
  index: number;
}

const slugFromName = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'profile';

const initialsFromName = (value: string) =>
  value
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 3)
    .join('')
    .toUpperCase();

export function DivisionSlide({ division, index }: DivisionSlideProps) {
  return (
    <section
      id={slugFromName(division.name)}
      className="relative flex min-h-screen snap-start flex-col justify-center bg-neutral-950 px-4 py-24 text-neutral-100 sm:px-6 lg:px-12"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={division.image}
          alt={division.name}
          fill
          sizes="100vw"
          className="object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-neutral-950/80" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center">
        <div className="grid min-h-[70vh] gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
          <div className="order-last flex flex-col justify-center md:order-none">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/85 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-10">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">Division</p>
              <h2 className="mt-3 font-bebas text-5xl uppercase tracking-[0.18em] text-neutral-50 md:text-6xl">
                {division.name}
              </h2>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.35em] text-neutral-400">
                {division.nickname}
              </p>
              <p className="mt-6 text-base leading-relaxed text-neutral-300">
                {division.focus}
              </p>

              <div className="mt-8 space-y-4">
                {division.people.map((person) => {
                  const slug = person.slug ?? slugFromName(person.name);
                  return (
                    <Link
                      key={person.name}
                      href={`/team/${slug}`}
                      className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-950/60 px-5 py-4 transition hover:border-neutral-600"
                    >
                      <div>
                        <p className="font-bebas text-2xl uppercase tracking-[0.18em] text-neutral-50">
                          {person.name}
                        </p>
                        {person.role && (
                          <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-500">
                            {person.role}
                          </p>
                        )}
                      </div>
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-neutral-400">
                        View
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid gap-6">
              <figure className="relative h-[480px] w-full max-w-lg overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/70 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src={division.image}
                  alt={division.name}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 90vw"
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 border border-white/5 mix-blend-overlay" />
              </figure>

              <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 px-6 py-4 text-center font-mono text-xs uppercase tracking-[0.35em] text-neutral-400">
                {initialsFromName(division.nickname)} • Division {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
        <span className="rounded-full border border-neutral-800 bg-neutral-900/70 px-4 py-1 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-neutral-500">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
