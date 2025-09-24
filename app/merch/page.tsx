import type { Metadata } from 'next';
import Image from 'next/image';
import type { Slide } from '@/lib/siteContent';
import { SlideSection } from '@/components/SlideSection';
import { brand } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: `Merch — ${brand.extendedName}`,
  description: 'Official KJRC pieces for training days and podium nights.',
};

const heroSlide: Slide = {
  id: 'merch-hero',
  eyebrow: 'Crew Uniform',
  title: 'Utility Pieces Built For Miles',
  body: 'Monochrome staples to layer over any session—tested on track, trails, and city streets.',
  image: 'https://images.unsplash.com/photo-1511749278358-412b4690ee26?auto=format&fit=crop&w=1600&q=80',
  layout: 'image-left',
  ctaPrimary: { label: 'Join The Crew', href: '/contact' },
};

const products = [
  {
    id: 'KJRC-TEE-001',
    name: 'Training Tee',
    price: 'RM 85',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    description: 'Moisture-wicking performance tee with tonal club mark.',
    buyUrl: '#',
  },
  {
    id: 'KJRC-SHORTS-001',
    name: 'Racing Shorts',
    price: 'RM 65',
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=800&q=80',
    description: '5-inch inseam with built-in compression liner.',
    buyUrl: '#',
  },
  {
    id: 'KJRC-CAP-001',
    name: 'Training Cap',
    price: 'RM 45',
    image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight cap with reflective details.',
    buyUrl: '#',
  },
  {
    id: 'KJRC-JACKET-001',
    name: 'Wind Jacket',
    price: 'RM 145',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80',
    description: 'Packable wind-resistant shell for all weather.',
    buyUrl: '#',
  },
  {
    id: 'KJRC-BOTTLE-001',
    name: 'Water Bottle',
    price: 'RM 25',
    image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=800&q=80',
    description: '750ml insulated stainless steel bottle.',
    buyUrl: '#',
  },
  {
    id: 'KJRC-SOCKS-001',
    name: 'Racing Socks',
    price: 'RM 35',
    image: 'https://images.unsplash.com/photo-1511749278358-412b4690ee26?auto=format&fit=crop&w=800&q=80',
    description: 'Merino blend with cushioned sole for race days.',
    buyUrl: '#',
  },
];

const sizeRows = [
  { size: 'XS', chest: '86-89cm', waist: '71-74cm', length: '66cm' },
  { size: 'S', chest: '91-94cm', waist: '76-79cm', length: '68cm' },
  { size: 'M', chest: '96-99cm', waist: '81-84cm', length: '70cm' },
  { size: 'L', chest: '104-107cm', waist: '89-92cm', length: '72cm' },
  { size: 'XL', chest: '112-115cm', waist: '97-100cm', length: '74cm' },
];

export default function Merch() {
  return (
    <main className="snap-y snap-mandatory">
      <SlideSection slide={heroSlide} index={0} />

      <section className="relative flex min-h-screen snap-start flex-col justify-center bg-neutral-950 px-4 py-24 text-neutral-100 sm:px-6 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_60%)]" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">Drop</p>
              <h2 className="font-bebas text-5xl uppercase tracking-[0.18em] text-neutral-50 md:text-6xl">
                Current Essentials
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-300">
                Monochrome palette, reflective hits, and lightweight fabrics built for humid miles.
              </p>
            </div>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/70 px-6 py-2 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
              Limited Run
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 40vw, 90vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.04] grayscale"
                  />
                  <div className="absolute inset-0 border border-white/5 mix-blend-overlay" />
                  <span className="absolute left-4 top-4 rounded-full border border-neutral-200/60 bg-neutral-200/70 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-neutral-900">
                    {product.id}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div className="space-y-2">
                    <h3 className="font-bebas text-3xl uppercase tracking-[0.18em] text-neutral-50">
                      {product.name}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-400">{product.price}</p>
                    <p className="text-sm leading-relaxed text-neutral-300">{product.description}</p>
                  </div>

                  <a
                    href={product.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-100 bg-neutral-100 px-6 py-3 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-900 transition hover:bg-neutral-300"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen snap-start flex-col justify-center bg-neutral-950 px-4 py-24 text-neutral-100 sm:px-6 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_65%)]" />
        <div className="relative z-10 mx-auto w-full max-w-4xl">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/85 p-10 text-neutral-100 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">Fit</p>
            <h2 className="mt-3 text-center font-bebas text-5xl uppercase tracking-[0.18em] text-neutral-50 md:text-6xl">
              Size Guide
            </h2>

            <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-800">
              <table className="min-w-full divide-y divide-neutral-800 text-left text-neutral-200">
                <thead className="bg-neutral-900/80 text-neutral-200">
                  <tr>
                    <th className="px-6 py-4 font-mono text-[0.65rem] uppercase tracking-[0.35em]">Size</th>
                    <th className="px-6 py-4 font-mono text-[0.65rem] uppercase tracking-[0.35em]">Chest</th>
                    <th className="px-6 py-4 font-mono text-[0.65rem] uppercase tracking-[0.35em]">Waist</th>
                    <th className="px-6 py-4 font-mono text-[0.65rem] uppercase tracking-[0.35em]">Length</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeRows.map((row, index) => (
                    <tr key={row.size} className={index % 2 === 0 ? 'bg-neutral-950/80' : 'bg-neutral-900/70'}>
                      <td className="px-6 py-4 font-bebas text-2xl uppercase tracking-[0.18em] text-neutral-50">
                        {row.size}
                      </td>
                      <td className="px-6 py-4 font-mono text-sm text-neutral-300">{row.chest}</td>
                      <td className="px-6 py-4 font-mono text-sm text-neutral-300">{row.waist}</td>
                      <td className="px-6 py-4 font-mono text-sm text-neutral-300">{row.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 flex justify-center">
              <span className="rounded-full border border-neutral-800 bg-neutral-900/70 px-6 py-2 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
                Measurements In CM
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
