'use client';

import { useState } from 'react';
import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { AngledPanel } from '@/components/AngledPanel';
import { SessionStrip } from '@/components/SessionStrip';
import { EventList } from '@/components/EventList';
import { Barcode } from '@/components/Barcode';

type FilterType = 'week' | 'month' | 'all';

export default function Schedule() {
  const [filter, setFilter] = useState<FilterType>('all');

  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <AngledPanel className="p-8 md:p-16 mb-8">
          <div className="mb-8">
            <Barcode label="SCHEDULE-PAGE" />
          </div>
          
          <AnimatedHeadline 
            text="TRAINING SCHEDULE" 
            className="mb-8"
          />
          
          <p className="text-lg leading-relaxed max-w-3xl">
            Consistency builds champions. Our structured training program combines 
            speed work, endurance building, and strength development across the week. 
            Plus stay updated with upcoming races and community events.
          </p>
        </AngledPanel>

        {/* Weekly Sessions */}
        <SessionStrip />

        {/* Events Section */}
        <AngledPanel className="p-8 md:p-16 mt-8" angle="tl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Filters */}
            <div className="lg:col-span-1">
              <h2 className="font-bebas text-3xl uppercase mb-6">Filter Events</h2>
              
              <div className="space-y-3">
                {[
                  { value: 'week' as FilterType, label: 'This Week' },
                  { value: 'month' as FilterType, label: 'This Month' },
                  { value: 'all' as FilterType, label: 'All Events' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFilter(option.value)}
                    className={`block w-full text-left font-mono text-sm uppercase tracking-wider p-3 brutal-border-thin transition-colors ${
                      filter === option.value 
                        ? 'bg-black text-white' 
                        : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <Barcode label="EVENT-FILTER" />
              </div>
            </div>

            {/* Events List */}
            <div className="lg:col-span-2">
              <EventList filter={filter} />
            </div>
          </div>
        </AngledPanel>

        {/* Training Philosophy */}
        <AngledPanel className="p-8 md:p-16 mt-8" angle="both">
          <h2 className="font-bebas text-4xl uppercase mb-8 text-center">
            Training Philosophy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                day: 'Tuesday',
                focus: 'Speed & Power',
                description: 'High-intensity intervals to develop lactate threshold and VO2 max.',
                code: 'SPEED-WORK'
              },
              {
                day: 'Friday',
                focus: 'Strength & Skills',
                description: 'Running-specific strength and technical skill development.',
                code: 'STRENGTH'
              },
              {
                day: 'Sunday',
                focus: 'Aerobic Base',
                description: 'Long runs to build endurance and mental resilience.',
                code: 'ENDURANCE'
              }
            ].map((session, index) => (
              <div key={index} className="brutal-border-thin bg-gray-50 p-6">
                <Barcode label={session.code} className="mb-4" />
                <h3 className="font-bebas text-xl uppercase mb-2">{session.day}</h3>
                <h4 className="font-medium mb-3">{session.focus}</h4>
                <p className="text-sm text-gray-700">{session.description}</p>
              </div>
            ))}
          </div>
        </AngledPanel>

      </div>
    </main>
  );
}