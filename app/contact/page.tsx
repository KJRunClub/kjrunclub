import type { Metadata } from 'next';
import { SlideSection } from '@/components/SlideSection';
import { ContactFormSlide } from '@/components/ContactFormSlide';
import { brand, contactSlides } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: `Contact — ${brand.extendedName}`,
  description: brand.keyMessage,
};

export default function Contact() {
  return (
    <main className="snap-y snap-mandatory">
      {contactSlides.map((slide, index) => (
        <SlideSection key={slide.id} slide={slide} index={index} />
      ))}
      <ContactFormSlide />
    </main>
  );
}
