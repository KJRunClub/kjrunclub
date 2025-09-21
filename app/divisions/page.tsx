import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { AngledPanel } from '@/components/AngledPanel';
import clubData from '@/content/club.json';
import Link from 'next/link';
import type { Metadata } from 'next';

const { divisions, club } = clubData;

const palette = [
  { solid: 'rgba(56, 196, 199, 1)', soft: 'rgba(56, 196, 199, 0.12)', border: 'rgba(56, 196, 199, 0.45)' },
  { solid: 'rgba(66, 178, 186, 1)', soft: 'rgba(66, 178, 186, 0.12)', border: 'rgba(66, 178, 186, 0.45)' },
  { solid: 'rgba(46, 160, 168, 1)', soft: 'rgba(46, 160, 168, 0.12)', border: 'rgba(46, 160, 168, 0.45)' },
  { solid: 'rgba(86, 208, 210, 1)', soft: 'rgba(86, 208, 210, 0.12)', border: 'rgba(86, 208, 210, 0.45)' },
  { solid: 'rgba(32, 166, 175, 1)', soft: 'rgba(32, 166, 175, 0.12)', border: 'rgba(32, 166, 175, 0.45)' },
  { solid: 'rgba(24, 146, 155, 1)', soft: 'rgba(24, 146, 155, 0.12)', border: 'rgba(24, 146, 155, 0.45)' },
  { solid: 'rgba(40, 180, 194, 1)', soft: 'rgba(40, 180, 194, 0.12)', border: 'rgba(40, 180, 194, 0.45)' },
  { solid: 'rgba(30, 170, 184, 1)', soft: 'rgba(30, 170, 184, 0.12)', border: 'rgba(30, 170, 184, 0.45)' },
];

const slugFromName = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'profile';

const initialsFromName = (value: string) =>
  value
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 3)
    .join('')
    .toUpperCase();

export const metadata: Metadata = {
  title: `Divisions - ${club.name}`,
  description: 'Explore every division within KJ Run Club and meet the crew captains keeping the sessions moving.',
};

export default function DivisionsPage() {
  return (
    <main className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <div className="section-stack texture-paper">
          <div className="headline-accent w-fit">Crew Divisions</div>
          <AnimatedHeadline text="Division Directory" className="text-[hsl(var(--foreground))]" />
          <p className="max-w-3xl text-base leading-relaxed text-[hsl(var(--foreground))]/75">
            Every division keeps the KJRC rhythm alive—from track to trail, city streets to long hauls. Tap into the sessions
            that match your energy and connect with the leads guiding each crew.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {divisions.map((division, index) => {
            const color = palette[index % palette.length];
            const hasPeople = Boolean(division.people?.length);

            return (
              <AngledPanel
                key={division.name}
                angle="none"
                border={false}
                className="p-8"
              >
                <div
                  className="rounded-3xl border p-6"
                  style={{
                    backgroundColor: color.soft,
                    borderColor: color.border,
                    boxShadow: `0 0 0 1px ${color.border}`,
                  }}
                >
                  <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="division-emblem h-16 w-16"
                        style={{ backgroundColor: color.solid, borderColor: color.border }}
                      >
                        <span>{initialsFromName(division.name.replace(/dvsn/i, ''))}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/55">
                          Division
                        </span>
                        <h2 className="font-bebas text-4xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))] headline-wrap">
                          {division.name}
                        </h2>
                      </div>
                    </div>
                    {division.description && (
                      <p className="text-sm leading-relaxed text-[hsl(var(--foreground))]/70">
                        {division.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 space-y-4">
                    {hasPeople ? (
                      division.people!.map((person) => {
                        const profileSlug = person.slug ?? slugFromName(person.name);
                        return (
                          <Link
                            key={person.name}
                            href={`/team/${profileSlug}`}
                            className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 transition hover:border-white/25"
                          >
                            <div>
                              <p className="font-bebas text-xl uppercase tracking-wide text-[hsl(var(--foreground))]">
                                {person.name}
                              </p>
                              {person.role && (
                                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/55">
                                  {person.role}
                                </p>
                              )}
                            </div>
                            <span
                              className="font-mono text-[9px] uppercase tracking-[0.35em]"
                              style={{ color: color.solid }}
                            >
                              View
                            </span>
                          </Link>
                        );
                      })
                    ) : (
                      <p className="rounded-2xl border border-dashed border-white/15 bg-white/5 px-5 py-4 text-sm text-[hsl(var(--foreground))]/60">
                        Crew leads will be announced soon. Stay tuned!
                      </p>
                    )}
                  </div>
                </div>
              </AngledPanel>
            );
          })}
        </div>
      </section>
    </main>
  );
}
