'use client';

import { useState } from 'react';
import { EventList } from '@/components/EventList';

type FilterType = 'week' | 'month' | 'all';

const filters: Array<{ value: FilterType; label: string }> = [
  { value: 'week', label: 'This Week' },
  { value: 'month', label: 'This Month' },
  { value: 'all', label: 'All' },
];

export function ScheduleSections() {
  const [filter, setFilter] = useState<FilterType>('all');

  return (
    <section className="relative flex min-h-screen snap-start flex-col justify-center bg-neutral-950 px-4 py-24 text-neutral-100 sm:px-6 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_65%)]" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
            <div className="flex flex-col justify-center">
              <div className="rounded-3xl border border-neutral-800 bg-neutral-900/85 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-10">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">Events</p>
                <h2 className="mt-3 font-bebas text-5xl uppercase tracking-[0.18em] text-neutral-50 md:text-6xl">
                  Race Calendar
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-300">
                  Filter the upcoming events feed to plan your next race, shakeout, or crew collab.
                </p>
                <div className="mt-6 grid gap-3">
                  {filters.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFilter(option.value)}
                      className={`rounded-2xl border px-5 py-4 text-left font-mono text-[0.65rem] uppercase tracking-[0.35em] transition ${
                        filter === option.value
                          ? 'border-neutral-100 bg-neutral-100/90 text-neutral-900'
                          : 'border-neutral-800 bg-neutral-950/60 text-neutral-300 hover:border-neutral-600 hover:text-neutral-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <EventList filter={filter} />
            </div>
          </div>
        </div>
    </section>
  );
}
