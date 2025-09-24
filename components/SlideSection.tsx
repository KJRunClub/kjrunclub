import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import type { Slide } from '@/lib/siteContent';

interface SlideSectionProps {
  slide: Slide;
  index: number;
}

const layoutImageFirst = (layout?: string) => layout === 'image-left';
const layoutCentered = (layout?: string) => layout === 'text-center';

export function SlideSection({ slide, index }: SlideSectionProps) {
  const imageFirst = layoutImageFirst(slide.layout);
  const centered = layoutCentered(slide.layout);

  return (
    <section
      id={slide.id}
      className="relative flex min-h-screen snap-start flex-col justify-center bg-neutral-950 px-4 py-24 text-neutral-100 sm:px-6 lg:px-12"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority={index === 0}
          sizes="100vw"
          className={clsx(
            'object-cover transition-opacity duration-700 ease-out grayscale',
            centered ? 'opacity-30' : 'opacity-20'
          )}
        />
        <div className="absolute inset-0 bg-neutral-950/75 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
        <div
          className={clsx(
            'grid min-h-[70vh] gap-8 md:gap-12',
            centered ? 'justify-items-center' : 'md:grid-cols-2'
          )}
        >
          {!centered && imageFirst && (
            <div className="order-1 flex items-center justify-center md:order-none">
              <figure className="group relative h-[420px] w-full max-w-lg overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/70 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.02] grayscale"
                />
                <div className="absolute inset-0 border border-white/5 mix-blend-overlay" />
              </figure>
            </div>
          )}

          <div
            className={clsx(
              'relative flex h-full flex-col justify-center',
              centered ? 'items-center text-center' : imageFirst ? 'md:pl-4' : 'md:pr-4'
            )}
          >
            <div className="w-full max-w-2xl rounded-3xl border border-neutral-800 bg-neutral-900/85 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-10">
              {slide.eyebrow && (
                <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
                  {slide.eyebrow}
                </p>
              )}
              <h2 className="text-balance font-bebas text-5xl uppercase tracking-[0.18em] text-neutral-50 md:text-6xl">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.35em] text-neutral-400">
                  {slide.subtitle}
                </p>
              )}
              {slide.body && (
                <p className="mt-5 text-base leading-relaxed text-neutral-300">
                  {slide.body}
                </p>
              )}

              {slide.stats && slide.stats.length > 0 && (
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {slide.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-neutral-800 bg-neutral-950/60 px-5 py-4 text-center text-ellipsis overflow-hidden"
                    >
                      <p className="font-bebas text-3xl uppercase tracking-[0.18em] text-neutral-50">
                        {stat.value}
                      </p>
                      <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {slide.bullets && slide.bullets.length > 0 && (
                <ul className="mt-8 space-y-3 text-sm text-neutral-300">
                  {slide.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[0.35rem] block h-2 w-2 rounded-full bg-neutral-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

          {slide.schedule && slide.schedule.length > 0 && (
            <div className="mt-8 space-y-3">
              {slide.schedule.map((session) => (
                <div
                  key={session.day}
                      className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-950/60 px-5 py-4"
                    >
                      <div>
                        <p className="font-bebas text-2xl uppercase tracking-[0.18em] text-neutral-50">
                          {session.day}
                        </p>
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-500">
                          {session.focus}
                        </p>
                      </div>
                      <p className="font-mono text-xs uppercase tracking-[0.35em] text-neutral-400">
                        {session.time}
                      </p>
                    </div>
              ))}
            </div>
          )}

          {slide.partners && slide.partners.length > 0 && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {slide.partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center border border-neutral-800 bg-neutral-950/60 px-6 py-8"
                >
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="relative h-20 w-36">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        sizes="144px"
                        className="object-contain grayscale"
                      />
                    </div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-400">
                      {partner.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {slide.ctaPrimary && (
              <Link
                href={slide.ctaPrimary.href}
                    className="inline-flex items-center justify-center rounded-full border border-neutral-100 bg-neutral-100 px-8 py-3 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-900 transition hover:bg-neutral-300"
                  >
                    {slide.ctaPrimary.label}
                  </Link>
                )}
                {slide.ctaSecondary && (
                  <Link
                    href={slide.ctaSecondary.href}
                    className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-8 py-3 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
                  >
                    {slide.ctaSecondary.label}
                  </Link>
                )}
                {slide.link && !slide.ctaSecondary && (
                  <Link
                    href={slide.link.href}
                    className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-8 py-3 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
                  >
                    {slide.link.label}
                  </Link>
                )}
              </div>
            </div>
          </div>

          {!centered && !imageFirst && (
            <div className="order-first flex items-center justify-center md:order-none">
              <figure className="group relative h-[420px] w-full max-w-lg overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/70 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.02] grayscale"
                />
                <div className="absolute inset-0 border border-white/5 mix-blend-overlay" />
              </figure>
            </div>
          )}
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
