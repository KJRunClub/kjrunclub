"use client";

import { useEffect, useState } from 'react';

interface Session {
  id: string;
  day: string;
  name: string;
  time: string;
  location: string;
  description: string;
  skillOfTheWeek?: string;
}

export function SessionStrip() {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    fetch('/content/sessions.json')
      .then((res) => res.json())
      .then(setSessions)
      .catch(() => {
        setSessions([
          {
            id: 'tue-speedwork',
            day: 'Tuesday',
            name: 'Speedwork',
            time: '06:00',
            location: 'KLCC Park',
            description: 'Intervals and tempo runs',
          },
          {
            id: 'sun-lsd',
            day: 'Sunday',
            name: 'Long Slow Distance',
            time: '06:00',
            location: 'Bukit Jalil',
            description: 'Endurance building runs',
          },
          {
            id: 'fri-strength',
            day: 'Friday',
            name: 'Strength & Skills',
            time: '19:00',
            location: 'Taman Tun',
            description: 'Strength training and running skills',
            skillOfTheWeek: 'Single-leg hops',
          },
        ]);
      });
  }, []);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {sessions.map((session) => (
        <article
          key={session.id}
          className="flex h-full flex-col gap-6 rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 text-neutral-100 shadow-[0_16px_60px_rgba(0,0,0,0.4)]"
        >
          <header className="flex items-start justify-between">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-500">{session.day}</p>
              <h3 className="mt-2 font-bebas text-3xl uppercase tracking-[0.18em] text-neutral-50">{session.name}</h3>
            </div>
            <span className="rounded-full border border-neutral-100 bg-neutral-100 px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.35em] text-neutral-900">
              {session.time}
            </span>
          </header>

          <p className="text-sm leading-relaxed text-neutral-300">{session.description}</p>

          <div className="mt-auto space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-neutral-400">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.35em]">{session.location}</span>
              <span className="h-px flex-1 bg-neutral-800" />
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-neutral-500">#{session.id}</span>
            </div>

            {session.skillOfTheWeek && (
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 px-5 py-4">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-neutral-500">Skill Of The Week</p>
                <p className="mt-2 font-bebas text-2xl uppercase tracking-[0.18em] text-neutral-50">
                  {session.skillOfTheWeek}
                </p>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
