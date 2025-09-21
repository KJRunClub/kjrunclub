import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { AngledPanel } from '@/components/AngledPanel';
import { Barcode } from '@/components/Barcode';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Merch - KJ Run Club',
  description: 'Official KJ Run Club merchandise. Represent the club with premium running gear.',
};

const products = [
  {
    id: 'KJRC-TEE-001',
    name: 'Training Tee',
    price: 'RM 85',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    description: 'Moisture-wicking performance tee with club logo.',
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
    <main className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <AngledPanel className="p-10 md:p-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-6">
              <Barcode label="Merch Store" className="mb-2" />
              <AnimatedHeadline text="Official Gear" className="text-[hsl(var(--foreground))]" />
              <p className="max-w-2xl text-lg leading-relaxed text-[hsl(var(--foreground))]/80">
                Represent the crew with performance pieces stress-tested on track, trail, and city streets. Built for
                runners who want to move loud.
              </p>
            </div>
            <div className="badge-frosted w-fit">Limited Drops</div>
          </div>
        </AngledPanel>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-6">
        <AngledPanel className="p-10 md:p-14" angle="both">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="surface-panel border border-white/12">
                <div className="relative overflow-hidden">
                  <div className="grainy-image relative aspect-square">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="absolute left-4 top-4">
                    <Barcode label={product.id} width={1} height={22} />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bebas text-2xl uppercase tracking-wide text-[hsl(var(--foreground))]">
                        {product.name}
                      </h3>
                      <p className="font-mono text-sm uppercase tracking-[0.3em] text-[hsl(var(--foreground))]/55">
                        {product.price}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--foreground))]/70">
                    {product.description}
                  </p>
                  <a
                    href={product.buyUrl}
                    className="btn-framer mt-6 block text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Buy Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </AngledPanel>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-6">
        <AngledPanel className="p-10 md:p-14" angle="tl">
          <h2 className="font-bebas text-4xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))] md:text-5xl text-center headline-wrap">
            Size Guide
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/12">
            <table className="min-w-full divide-y divide-white/10 text-left">
              <thead>
                <tr className="bg-white/10 text-[hsl(var(--foreground))]">
                  <th className="px-6 py-4 font-mono text-[10px] uppercase tracking-[0.35em]">Size</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase tracking-[0.35em]">Chest</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase tracking-[0.35em]">Waist</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase tracking-[0.35em]">Length</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row, index) => (
                  <tr key={row.size} className={index % 2 === 0 ? 'bg-white/5' : 'bg-white/2'}>
                    <td className="px-6 py-4 font-bebas text-lg uppercase tracking-wide text-[hsl(var(--foreground))]">
                      {row.size}
                    </td>
                    <td className="px-6 py-4 font-mono text-sm text-[hsl(var(--foreground))]/70">{row.chest}</td>
                    <td className="px-6 py-4 font-mono text-sm text-[hsl(var(--foreground))]/70">{row.waist}</td>
                    <td className="px-6 py-4 font-mono text-sm text-[hsl(var(--foreground))]/70">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <Barcode label="Size Guide" />
          </div>
        </AngledPanel>
      </section>
    </main>
  );
}
