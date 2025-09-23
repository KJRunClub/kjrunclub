import type { Metadata } from 'next';
import { SlideSection } from '@/components/SlideSection';
import { DivisionSlide } from '@/components/DivisionSlide';
import { brand, divisionSlides, divisions } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: `Divisions — ${brand.extendedName}`,
  description: 'Explore every division within KJRC and meet the captains guiding each session.',
};

export default function DivisionsPage() {
  return (
    <main className="snap-y snap-mandatory">
      {divisionSlides.map((slide, index) => (
        <SlideSection key={slide.id} slide={slide} index={index} />
      ))}

      {divisions.map((division, index) => (
        <DivisionSlide key={division.name} division={division} index={index} />
      ))}
    </main>
  );
}
