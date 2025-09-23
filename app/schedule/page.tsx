import type { Metadata } from 'next';
import { SlideSection } from '@/components/SlideSection';
import type { Slide } from '@/lib/siteContent';
import { brand } from '@/lib/siteContent';
import { ScheduleSections } from '@/components/ScheduleSections';

const scheduleSlide: Slide = {
  id: 'schedule-hero',
  eyebrow: 'Weekly Rhythm',
  title: 'Structure That Scales',
  body: 'Speedwork, long runs, recovery blocks, and hikes—each week is programmed so every runner finds their tempo.',
  image: 'https://images.unsplash.com/photo-1508604173470-fe70dced7837?auto=format&fit=crop&w=1600&q=80',
  layout: 'image-right',
  ctaPrimary: { label: 'Join a session', href: '/contact' },
};

export const metadata: Metadata = {
  title: `Schedule — ${brand.extendedName}`,
  description: brand.keyMessage,
};

export default function Schedule() {
  return (
    <main className="snap-y snap-mandatory">
      <SlideSection slide={scheduleSlide} index={0} />
      <ScheduleSections />
    </main>
  );
}
