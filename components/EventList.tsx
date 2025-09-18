'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Barcode } from './Barcode';

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
      <div className="brutal-border-thin bg-gray-50 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (error || events.length === 0) {
    return (
      <div className="brutal-border-thin bg-gray-50 p-6">
        <h3 className="font-bebas text-xl uppercase mb-4">Running Events</h3>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=en.malaysia%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKuala_Lumpur"
          style={{ border: 0 }}
          width="100%"
          height="400"
          frameBorder={0}
          scrolling="no"
          className="brutal-border-thin"
          title="Malaysia Running Events Calendar"
        ></iframe>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bebas text-xl uppercase">Upcoming Events</h3>
        <Barcode label="EVENTS" width={1} height={25} />
      </div>
      
      {events.slice(0, 6).map((event, index) => (
        <div key={index} className="brutal-border-thin bg-white p-4 hover:bg-gray-50 transition-colors">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h4 className="font-medium mb-1">{event.title}</h4>
              <p className="font-mono text-sm text-gray-600 mb-1">
                {format(new Date(event.start), 'MMM dd, yyyy • HH:mm')}
              </p>
              {event.location && (
                <p className="text-sm text-gray-500">{event.location}</p>
              )}
            </div>
            {event.url && (
              <a 
                href={event.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider hover:underline focus-brutal"
              >
                Details
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}