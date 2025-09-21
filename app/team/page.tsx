import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { TeamDivision } from '@/components/TeamDivision';
import clubData from '@/content/club.json';
import { Metadata } from 'next';

const { club: clubInfo, leadership, divisions, keyMessage } = clubData;

export const metadata: Metadata = {
  title: `Team - ${clubInfo.name}`,
  description: keyMessage,
};

export default function Team() {
  return (
    <main className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <div className="section-stack texture-paper">
          <div className="headline-accent w-fit">The Crew</div>
          <AnimatedHeadline text="Crew Roster" className="text-[hsl(var(--foreground))]" />
          <p className="max-w-3xl text-lg leading-relaxed text-[hsl(var(--foreground))]/80">
            {keyMessage}
          </p>
          <p className="max-w-2xl font-mono text-sm leading-relaxed text-[hsl(var(--foreground))]/60">
            {clubInfo.mission}
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-6">
        <div className="section-stack texture-paper">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="headline-accent mb-4">Leadership</div>
              <h2 className="font-bebas text-5xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))] md:text-6xl headline-wrap">
                Captains In Motion
              </h2>
            </div>
            <p className="max-w-xl font-mono text-sm leading-relaxed text-[hsl(var(--foreground))]/60">
              The pulse behind every session, relentlessly building routes, paces, and culture.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { label: 'Captain', ...leadership.captain },
              { label: 'Co-Captain', ...leadership.coCaptain },
            ].map((leader) => (
              <div key={leader.label} className="surface-panel border border-white/12 p-8">
                <div className="badge-frosted mb-6 w-fit">{leader.label}</div>
                <h3 className="font-bebas text-3xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))]">
                  {leader.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--foreground))]/70">
                  {leader.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-6">
        <div className="grid gap-10">
          {divisions.map((division, index) => (
            <TeamDivision
              key={division.name}
              division={division.name}
              description={division.description}
              people={division.people}
              accentIndex={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
