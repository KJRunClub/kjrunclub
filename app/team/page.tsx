'use client';

import { useEffect, useState } from 'react';
import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { AngledPanel } from '@/components/AngledPanel';
import { TeamDivision } from '@/components/TeamDivision';
import { Barcode } from '@/components/Barcode';

interface Person {
  name: string;
  role: string;
  avatar: string;
  instagram?: string;
  tiktok?: string;
}

interface Division {
  division: string;
  people: Person[];
}

export default function Team() {
  const [divisions, setDivisions] = useState<Division[]>([]);

  useEffect(() => {
    fetch('/content/team.json')
      .then(res => res.json())
      .then(setDivisions)
      .catch(console.error);
  }, []);

  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <AngledPanel className="p-8 md:p-16 mb-8">
          <div className="mb-8">
            <Barcode label="TEAM-ROSTER" />
          </div>
          
          <AnimatedHeadline 
            text="OUR TEAM" 
            className="mb-8"
          />
          
          <p className="text-lg leading-relaxed max-w-3xl">
            Behind every great runner is a team that believes in pushing limits. 
            Our coaches, specialists, and coordinators are united by one mission: 
            helping you become faster, stronger, and more resilient than you ever imagined.
          </p>
        </AngledPanel>

        <div className="space-y-8">
          {divisions.map((division, index) => (
            <TeamDivision 
              key={index}
              division={division.division}
              people={division.people}
            />
          ))}
        </div>

        {/* Team Philosophy */}
        <AngledPanel className="p-8 md:p-16 mt-8" angle="both">
          <h2 className="font-bebas text-4xl uppercase mb-8 text-center">
            Leadership Philosophy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="brutal-border-thin bg-white p-6">
                <Barcode label="LEAD-BY-EXAMPLE" className="mb-4" />
                <h3 className="font-bebas text-xl uppercase mb-3">Lead by Example</h3>
                <p className="text-sm">
                  Our coaches don't just teach—they train alongside you, 
                  demonstrating the commitment they expect.
                </p>
              </div>
              
              <div className="brutal-border-thin bg-gray-50 p-6">
                <Barcode label="INDIVIDUAL-FOCUS" className="mb-4" />
                <h3 className="font-bebas text-xl uppercase mb-3">Individual Focus</h3>
                <p className="text-sm">
                  Every runner is unique. Our team creates personalized approaches 
                  within our collective training framework.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="brutal-border-thin bg-gray-50 p-6">
                <Barcode label="DATA-DRIVEN" className="mb-4" />
                <h3 className="font-bebas text-xl uppercase mb-3">Data Driven</h3>
                <p className="text-sm">
                  Decisions backed by metrics, progress tracked by numbers, 
                  improvement measured and celebrated.
                </p>
              </div>
              
              <div className="brutal-border-thin bg-white p-6">
                <Barcode label="NEVER-SETTLED" className="mb-4" />
                <h3 className="font-bebas text-xl uppercase mb-3">Never Settled</h3>
                <p className="text-sm">
                  Our team continuously evolves, learns, and adapts to bring you 
                  the latest in running science and methodology.
                </p>
              </div>
            </div>
          </div>
        </AngledPanel>

      </div>
    </main>
  );
}