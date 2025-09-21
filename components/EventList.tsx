"use client";

import { useEffect, useState } from 'react';
import { format } from 'date-fns';

interface Event {
  start: string;
  end: string;
  title: string;
  location?: string;
  url?: string;
}

interface EventListProps {
  filter?: 'week' | 'month' | 'all';
}

export function EventList({ filter = 'all' }: EventListProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/ical')
      .then(res => res.json())
      .then(data => {
        setEvents(data.events || []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid gap-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="surface-panel p-5 animate-pulse">
            <div className="h-3.5 w-24 rounded-full bg-white/10" />
            <div className="mt-3 h-2.5 w-3/4 rounded-full bg-white/8" />
            <div className="mt-2 h-2 w-2/4 rounded-full bg-white/6" />
          </div>
        ))}
      </div>
    );
  }

  if (error || events.length === 0) {
    return (
      <div className="surface-panel p-6">
        <h3 className="font-bebas text-2xl uppercase tracking-wide text-[hsl(var(--foreground))]">
          Running Events
        </h3>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=en.malaysia%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKuala_Lumpur"
          style={{ border: 0 }}
          width="100%"
          height="400"
          frameBorder={0}
          scrolling="no"
          className="mt-6 rounded-3xl border border-white/10"
          title="Malaysia Running Events Calendar"
        ></iframe>
      </div>
    );
  }

  const filteredEvents = events
    .filter((event) => {
      if (filter === 'all') return true;
      const eventDate = new Date(event.start);
      const now = new Date();
      const diffInDays = (eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

      if (filter === 'week') {
        return diffInDays >= 0 && diffInDays <= 7;
      }

      if (filter === 'month') {
        return diffInDays >= 0 && diffInDays <= 30;
      }

      return true;
    })
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

  return (
    <div className="grid gap-4">
      {filteredEvents.slice(0, 6).map((event, index) => {
        const descriptor = format(new Date(event.start), 'MMM dd, yyyy • HH:mm');

        return (
          <div
            key={index}
            className="surface-panel border border-white/12 p-5 transition duration-300 hover:translate-y-[-4px] hover:border-white/25"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/55">
                  {descriptor}
                </p>
                <h4 className="text-lg font-semibold leading-tight text-[hsl(var(--foreground))] md:text-xl">
                  {event.title}
                </h4>
                {event.location && (
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--foreground))]/45">
                    {event.location}
                  </p>
                )}
              </div>

              {event.url && (
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-framer px-6 py-3 text-[8px]"
                >
                  <span>Details</span>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
