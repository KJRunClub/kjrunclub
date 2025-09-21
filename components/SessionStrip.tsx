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
    // Load sessions data
    fetch('/content/sessions.json')
      .then(res => res.json())
      .then(setSessions)
      .catch(() => {
        // Fallback data
        setSessions([
          {
            id: 'tue-speedwork',
            day: 'Tuesday',
            name: 'Speedwork',
            time: '06:00',
            location: 'KLCC Park',
            description: 'Intervals and tempo runs'
          },
          {
            id: 'sun-lsd',
            day: 'Sunday',
            name: 'Long Slow Distance',
            time: '06:00',
            location: 'Bukit Jalil',
            description: 'Endurance building runs'
          },
          {
            id: 'fri-strength',
            day: 'Friday',
            name: 'Strength & Skills',
            time: '19:00',
            location: 'Taman Tun',
            description: 'Strength training and running skills',
            skillOfTheWeek: 'Single-leg hops'
          }
        ]);
      });
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {sessions.map((session) => (
        <div key={session.id} className="surface-panel p-6 md:p-7">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/60">
                {session.day}
              </p>
              <p className="font-bebas text-3xl uppercase tracking-wide text-[hsl(var(--foreground))]">
                {session.name}
              </p>
            </div>
            <span className="badge-frosted text-[8px] uppercase tracking-[0.4em]">
              {session.time}
            </span>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-[hsl(var(--foreground))]/75">
            {session.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/50">
              {session.location}
            </div>
            <div className="h-px flex-1 bg-[hsl(var(--foreground))]/15" />
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/40">
              #{session.id}
            </span>
          </div>

          {session.skillOfTheWeek && (
            <div className="mt-6 rounded-xl border border-white/10 bg-white/4 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/60">
                Skill Of The Week
              </p>
              <p className="mt-2 font-bebas text-2xl uppercase tracking-wide text-[hsl(var(--foreground))]">
                {session.skillOfTheWeek}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
