import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SlideSection } from '@/components/SlideSection';
import { brand, galleryCards, gallerySlides } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: `Gallery — ${brand.extendedName}`,
  description: brand.keyMessage,
};

export default function Gallery() {
  return (
    <main className="snap-y snap-mandatory">
      {gallerySlides.map((slide, index) => (
        <SlideSection key={slide.id} slide={slide} index={index} />
      ))}

      <section className="relative flex min-h-screen snap-start flex-col justify-center bg-neutral-950 px-4 py-24 text-neutral-100 sm:px-6 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-4 text-left sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">Download</p>
              <h2 className="mt-3 font-bebas text-5xl uppercase tracking-[0.18em] text-neutral-50 md:text-6xl">
                Google Drive Collections
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-300">
                Each card opens the shared Google Drive folder so you can grab full-resolution shots for social, press, or
                personal keepsakes.
              </p>
            </div>
            <Link
              href="https://drive.google.com/drive/folders/kjrunclub-gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full border border-neutral-100 bg-neutral-100 px-8 py-3 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-900 transition hover:bg-neutral-300"
            >
              Open Folder
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryCards.map((card) => (
              <article
                key={card.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/85 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.04] grayscale"
                  />
                  <div className="absolute inset-0 border border-white/5 mix-blend-overlay" />
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div className="space-y-2">
                    <h3 className="font-bebas text-3xl uppercase tracking-[0.18em] text-neutral-50">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-300">{card.description}</p>
                  </div>

                  <Link
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-100 bg-neutral-100 px-6 py-3 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-900 transition hover:bg-neutral-300"
                  >
                    View Folder
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
