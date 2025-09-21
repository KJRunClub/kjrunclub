import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { AngledPanel } from '@/components/AngledPanel';
import { Barcode } from '@/components/Barcode';
import clubData from '@/content/club.json';
import Image from 'next/image';
import { Metadata } from 'next';

const { club: clubInfo, impact, identity, leadership, keyMessage } = clubData;

export const metadata: Metadata = {
  title: `About ${clubInfo.name}`,
  description: keyMessage,
};

const heroImage =
  'https://images.unsplash.com/photo-1526403227023-8eba3be78d2c?auto=format&fit=crop&w=1600&q=80';

export default function About() {
  return (
    <main className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <div className="section-stack texture-paper">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-12">
            <div className="space-y-8">
              <div className="badge-frosted w-fit">Identity</div>
              <AnimatedHeadline text={clubInfo.tagline} className="text-[hsl(var(--foreground))]" />
              <p className="text-lg leading-relaxed text-[hsl(var(--foreground))]/80">{keyMessage}</p>
              <p className="font-mono text-sm leading-relaxed text-[hsl(var(--foreground))]/55">{clubInfo.mission}</p>
              <div className="surface-panel border border-white/12 p-8">
                <Barcode label="Vision" className="mb-4" />
                <h3 className="font-bebas text-2xl uppercase tracking-wide text-[hsl(var(--foreground))]">
                  What We Envision
                </h3>
                <ul className="mt-4 space-y-3 font-mono text-sm leading-relaxed text-[hsl(var(--foreground))]/65">
                  {clubInfo.vision.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 block h-1 w-6 bg-[hsl(var(--foreground))]/30" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="surface-panel border border-white/12 p-4">
              <div className="grainy-image relative aspect-[4/5]">
                <Image src={heroImage} alt="KJ Run Club training session" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-6">
        <AngledPanel className="p-10 md:p-14" angle="tl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Programmes', title: impact.programmes, value: 'Every Week' },
              { label: 'Events', title: 'Events Hosted', value: impact.eventsHosted },
              { label: 'Runners', title: 'Runners Engaged', value: impact.runnersEngaged },
              { label: 'Collabs', title: 'Collaborations', value: impact.collaborations },
            ].map((item) => (
              <div key={item.label} className="surface-panel border border-white/12 p-6 text-center">
                <Barcode label={item.label.toUpperCase()} className="mb-4" />
                <h3 className="font-bebas text-2xl uppercase tracking-wide text-[hsl(var(--foreground))]">
                  {item.title}
                </h3>
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.3em] text-[hsl(var(--foreground))]/70">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </AngledPanel>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-6">
        <AngledPanel className="p-10 md:p-14" angle="both">
          <h2 className="font-bebas text-4xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))] md:text-6xl headline-wrap">
            Leadership & Identity
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { label: 'Captain', ...leadership.captain },
                { label: 'Co-Captain', ...leadership.coCaptain },
              ].map((leader) => (
                <div key={leader.label} className="surface-panel border border-white/12 p-6">
                  <Barcode label={leader.label.toUpperCase()} className="mb-4" />
                  <h3 className="font-bebas text-2xl uppercase tracking-wide text-[hsl(var(--foreground))]">
                    {leader.name}
                  </h3>
                  <p className="mt-2 font-mono text-sm leading-relaxed text-[hsl(var(--foreground))]/65">
                    {leader.role}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-6">
              <div className="surface-panel border border-white/12 p-6">
                <Barcode label="Registration" className="mb-4" />
                <h3 className="font-bebas text-2xl uppercase tracking-wide text-[hsl(var(--foreground))]">
                  {identity.registeredName}
                </h3>
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.3em] text-[hsl(var(--foreground))]/65">
                  Reg No: {identity.regNo}
                </p>
              </div>

              <div className="surface-panel border border-white/12 p-6">
                <Barcode label="Core Roles" className="mb-4" />
                <h3 className="font-bebas text-2xl uppercase tracking-wide text-[hsl(var(--foreground))]">
                  Key Positions
                </h3>
                <ul className="mt-4 space-y-2 font-mono text-sm leading-relaxed text-[hsl(var(--foreground))]/65">
                  {identity.roles.map((role) => (
                    <li key={role} className="flex items-center gap-3">
                      <span className="h-px w-6 bg-[hsl(var(--foreground))]/25" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AngledPanel>
      </section>
    </main>
  );
}
