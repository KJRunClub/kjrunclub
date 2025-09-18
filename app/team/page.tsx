import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { AngledPanel } from '@/components/AngledPanel';
import { TeamDivision } from '@/components/TeamDivision';
import { Barcode } from '@/components/Barcode';
import clubData from '@/content/club.json';
import { Metadata } from 'next';

const { club: clubInfo, leadership, divisions, keyMessage } = clubData;

export const metadata: Metadata = {
  title: `Team - ${clubInfo.name}`,
  description: keyMessage,
};

export default function Team() {
  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <AngledPanel className="p-8 md:p-16 mb-8">
          <div className="mb-8">
            <Barcode label="TEAM-KJRC" />
          </div>
          
          <AnimatedHeadline 
            text="THE CREW" 
            className="mb-8"
          />
          
          <p className="text-lg leading-relaxed max-w-3xl">
            {keyMessage}
          </p>

          <p className="font-mono text-sm text-gray-700 max-w-3xl mt-6">
            {clubInfo.mission}
          </p>
        </AngledPanel>

        <AngledPanel className="p-8 md:p-12 mb-8" angle="tl">
          <h2 className="font-bebas text-3xl uppercase mb-6">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: 'CAPTAIN',
                name: leadership.captain.name,
                role: leadership.captain.role
              },
              {
                label: 'CO-CAPTAIN',
                name: leadership.coCaptain.name,
                role: leadership.coCaptain.role
              }
            ].map((leader, index) => (
              <div key={index} className="brutal-border-thin bg-white p-6">
                <Barcode label={leader.label} className="mb-3" />
                <h3 className="font-bebas text-2xl uppercase mb-1">{leader.name}</h3>
                <p className="font-mono text-sm text-gray-700">{leader.role}</p>
              </div>
            ))}
          </div>
        </AngledPanel>

        <div className="space-y-8">
          {divisions.map((division, index) => (
            <TeamDivision 
              key={index}
              division={division.name}
              description={division.description}
              people={division.people}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
