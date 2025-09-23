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
      .then((res) => res.json())
      .then((data) => {
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
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-5">
            <div className="h-3.5 w-24 rounded-full bg-neutral-800" />
            <div className="mt-3 h-2.5 w-3/4 rounded-full bg-neutral-800/80" />
            <div className="mt-2 h-2 w-2/4 rounded-full bg-neutral-800/70" />
          </div>
        ))}
      </div>
    );
  }

  if (error || events.length === 0) {
    return (
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 text-neutral-200">
        <h3 className="font-bebas text-3xl uppercase tracking-[0.18em] text-neutral-50">Running Events</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          Live calendar unavailable. View the Malaysia public calendar below.
        </p>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=en.malaysia%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKuala_Lumpur"
          style={{ border: 0 }}
          width="100%"
          height="400"
          frameBorder={0}
          scrolling="no"
          className="mt-6 rounded-3xl border border-neutral-800"
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
          <article
            key={`${event.title}-${index}`}
            className="flex flex-col gap-4 rounded-3xl border border-neutral-800 bg-neutral-950/60 p-6 transition hover:border-neutral-600"
          >
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-500">{descriptor}</p>
              <h4 className="text-lg font-semibold leading-tight text-neutral-50 md:text-xl">{event.title}</h4>
              {event.location && (
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-neutral-500">{event.location}</p>
              )}
            </div>

            {event.url && (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full border border-neutral-100 bg-neutral-100 px-6 py-3 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-900 transition hover:bg-neutral-300"
              >
                Details
              </a>
            )}
          </article>
        );
      })}
    </div>
  );
}
