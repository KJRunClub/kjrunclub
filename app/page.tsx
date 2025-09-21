import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { SessionStrip } from '@/components/SessionStrip';
import { EventList } from '@/components/EventList';
import { InstagramFeed } from '@/components/InstagramFeed';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import clubData from '@/content/club.json';

const { club: clubInfo, identity, keyMessage, impact } = clubData;

export const metadata: Metadata = {
  title: `${clubInfo.name} - ${clubInfo.tagline}`,
  description: keyMessage,
};

const heroImages = [
  'https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1545060894-0f4d4e953efb?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80'
];

export default function Home() {
  return (
    <main className="pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImages[0]}
            alt="Sprinter exploding from the starting line"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col px-6 py-24 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
          <div className="space-y-10 text-left">
            <div className="badge-frosted w-fit">
              Club Reg: {identity.regNo}
            </div>

            <AnimatedHeadline text={clubInfo.name} className="drop-shadow-[0_12px_32px_rgba(0,0,0,0.55)]" />

            <div className="space-y-6">
              <p className="tagline-grid text-[hsl(var(--accent-foreground))]/70">
                <span>speed</span>
                <span>community</span>
                <span>consistency</span>
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-[hsl(var(--foreground))]/80 md:text-xl">
                {clubInfo.tagline}
              </p>
              <p className="max-w-3xl font-mono text-sm leading-relaxed text-[hsl(var(--foreground))]/65 md:text-base">
                {keyMessage}
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-framer">
                <span>Join The Crew</span>
              </Link>
              <Link
                href="/schedule"
                className="font-mono text-xs uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/60 transition hover:text-[hsl(var(--foreground))]"
              >
                See sessions →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[impact.eventsHosted, impact.runnersEngaged, impact.collaborations].map((stat, index) => {
                const labels = ['Events Hosted', 'Runners Engaged', 'Collabs'];
                return (
                  <div key={labels[index]} className="stat-tile">
                    <p className="font-bebas text-3xl uppercase tracking-wider text-[hsl(var(--foreground))]">
                      {stat}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/55">
                      {labels[index]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-16 grid gap-6 lg:mt-0">
            <div className="surface-panel p-6">
              <div className="absolute inset-x-6 top-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.4em] text-[hsl(var(--foreground))]/55">
                <span>Weekly divisions</span>
                <span>Train harder</span>
              </div>
              <div className="grid gap-4 pt-14">
                {heroImages.map((src, index) => (
                  <div key={src} className="grainy-image aspect-[16/10] overflow-hidden">
                    <Image src={src} alt={`Crew highlight ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <section className="relative z-10 mx-auto mt-16 max-w-7xl px-6">
        <div className="section-stack texture-paper">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="headline-accent mb-4">Weekly Rhythm</div>
              <h2 className="font-bebas text-5xl uppercase tracking-[0.1em] text-[hsl(var(--foreground))] md:text-6xl headline-wrap">
                Sessions That Keep You Moving
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-[hsl(var(--foreground))]/70 md:text-base">
              Structured training built for pace, endurance, recovery, and grit. Slide into a session that matches your fire.
            </p>
          </div>

          <SessionStrip />
        </div>
      </section>

      {/* Upcoming events */}
      <section className="relative z-10 mx-auto mt-16 max-w-7xl px-6">
        <div className="section-stack texture-paper">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="headline-accent mb-4">Next Up</div>
              <h2 className="font-bebas text-5xl uppercase tracking-[0.1em] text-[hsl(var(--foreground))] md:text-6xl headline-wrap">
                Upcoming Events & Collaborations
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[hsl(var(--foreground))]/70 md:text-base">
              {clubInfo.mission} Our {impact.programmes.toLowerCase()} fuel the culture, and our collaborations keep the city buzzing.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="surface-panel p-8">
              <EventList />
            </div>

            <div className="surface-panel p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/65">
                Impact Pulse
              </h3>
              <div className="mt-6 grid gap-5">
                {[
                  { label: 'Weekly Programmes', value: impact.programmes },
                  { label: 'Identity', value: identity.registeredName },
                  { label: 'Contact', value: identity.contact },
                ].map((item) => (
                  <div key={item.label} className="stat-tile">
                    <p className="font-bebas text-2xl uppercase tracking-wide text-[hsl(var(--foreground))]">
                      {item.value}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/55">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In Action */}
      <section className="relative z-10 mx-auto mt-16 max-w-7xl px-6">
        <div className="section-stack texture-paper">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="headline-accent mb-4">Crew Energy</div>
              <h2 className="font-bebas text-5xl uppercase tracking-[0.1em] text-[hsl(var(--foreground))] md:text-6xl headline-wrap">
                In Action
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[hsl(var(--foreground))]/70 md:text-base">
              Night runs, sunrise LSDs, trackside cheers. Each frame is a pulse from the KJRC collective.
            </p>
          </div>

          <InstagramFeed />
        </div>
      </section>
    </main>
  );
}
