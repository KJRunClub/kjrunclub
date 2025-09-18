'use client';

import { useEffect, useState } from 'react';
import { AngledPanel } from './AngledPanel';
import { Barcode } from './Barcode';

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
    <AngledPanel className="p-8 md:p-12">
      <div className="mb-8">
        <h2 className="font-bebas text-4xl md:text-6xl uppercase mb-2">Weekly Sessions</h2>
        <Barcode label="TRAINING-SCHEDULE" className="mb-6" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sessions.map((session) => (
          <div key={session.id} className="brutal-border-thin bg-gray-50 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bebas text-2xl uppercase">{session.day}</h3>
                <p className="font-mono text-lg font-medium">{session.time}</p>
              </div>
              <Barcode label={session.id.toUpperCase()} width={1} height={30} />
            </div>
            
            <h4 className="font-bebas text-xl uppercase mb-2">{session.name}</h4>
            <p className="text-gray-700 mb-2">{session.description}</p>
            <p className="font-mono text-sm text-gray-600 mb-4">{session.location}</p>
            
            {session.skillOfTheWeek && (
              <div className="brutal-border-thin bg-white p-3 mt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500 mb-1">
                  Skill of the Week
                </p>
                <p className="font-medium">{session.skillOfTheWeek}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </AngledPanel>
  );
}