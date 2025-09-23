import type { Metadata } from 'next';
import { SlideSection } from '@/components/SlideSection';
import { aboutSlides, brand } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: `About ${brand.extendedName}`,
  description: brand.keyMessage,
};

export default function About() {
  return (
    <main className="snap-y snap-mandatory">
      {aboutSlides.map((slide, index) => (
        <SlideSection key={slide.id} slide={slide} index={index} />
      ))}
    </main>
  );
}
