import { SlideSection } from '@/components/SlideSection';
import { brand, homeSlides } from '@/lib/siteContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${brand.extendedName} — ${brand.tagline}`,
  description: brand.keyMessage,
};

export default function Home() {
  return (
    <main className="snap-y snap-mandatory">
      {homeSlides.map((slide, index) => (
        <SlideSection key={slide.id} slide={slide} index={index} />
      ))}
    </main>
  );
}
