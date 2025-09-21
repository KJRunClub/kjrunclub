'use client';

import { useState } from 'react';
import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { AngledPanel } from '@/components/AngledPanel';
import { SessionStrip } from '@/components/SessionStrip';
import { EventList } from '@/components/EventList';
import { Barcode } from '@/components/Barcode';

type FilterType = 'week' | 'month' | 'all';

const filters: Array<{ value: FilterType; label: string }> = [
  { value: 'week', label: 'This Week' },
  { value: 'month', label: 'This Month' },
  { value: 'all', label: 'All Events' },
];

const philosophy = [
  {
    day: 'Tuesday',
    focus: 'Speed & Power',
    description: 'High-intensity intervals to prime threshold, top-end speed, and reaction.',
    code: 'SPEED-WORK',
  },
  {
    day: 'Friday',
    focus: 'Strength & Skills',
    description: 'Mobility, drills, and strength blocks engineered to keep runners iron-clad.',
    code: 'STRENGTH',
  },
  {
    day: 'Sunday',
    focus: 'Aerobic Base',
    description: 'Long runs that layer endurance, grit, and crew cohesion at conversational pace.',
    code: 'ENDURANCE',
  },
];

export default function Schedule() {
  const [filter, setFilter] = useState<FilterType>('all');

  return (
    <main className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <AngledPanel className="p-10 md:p-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-6">
              <Barcode label="Schedule" className="mb-2" />
              <AnimatedHeadline text="Training Schedule" className="text-[hsl(var(--foreground))]" />
              <p className="max-w-2xl text-lg leading-relaxed text-[hsl(var(--foreground))]/80">
                Consistency builds champions. Structured speedwork, endurance builders, and strength sessions keep
                the crew in motion while upcoming races and collabs stay on your radar.
              </p>
            </div>
            <div className="badge-frosted w-fit">Stay moving</div>
          </div>
        </AngledPanel>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-6">
        <div className="section-stack texture-paper">
          <SessionStrip />
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-6">
        <AngledPanel className="p-10 md:p-14" angle="tl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-6">
              <h2 className="font-bebas text-4xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))] md:text-5xl headline-wrap">
                Filter Events
              </h2>
              <p className="font-mono text-sm leading-relaxed text-[hsl(var(--foreground))]/60">
                Tune the feed to spotlight the races and sessions that matter most right now.
              </p>

              <div className="grid gap-3">
                {filters.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFilter(option.value)}
                    className={`rounded-2xl border border-white/12 px-5 py-4 text-left font-mono text-[11px] uppercase tracking-[0.35em] transition focus-brutal ${
                      filter === option.value
                        ? 'bg-white/20 text-[hsl(var(--foreground))]' 
                        : 'bg-white/5 text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <Barcode label="Event Filter" />
            </div>

            <div className="surface-panel border border-white/12 p-6">
              <EventList filter={filter} />
            </div>
          </div>
        </AngledPanel>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-6">
        <AngledPanel className="p-10 md:p-14" angle="both">
          <h2 className="font-bebas text-4xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))] md:text-5xl text-center headline-wrap">
            Training Philosophy
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {philosophy.map((session) => (
              <div key={session.code} className="surface-panel border border-white/12 p-6">
                <Barcode label={session.code} className="mb-4" />
                <h3 className="font-bebas text-2xl uppercase tracking-wide text-[hsl(var(--foreground))]">
                  {session.day}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/55">
                  {session.focus}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--foreground))]/70">{session.description}</p>
              </div>
            ))}
          </div>
        </AngledPanel>
      </section>
    </main>
  );
}
