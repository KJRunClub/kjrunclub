import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { AngledPanel } from '@/components/AngledPanel';
import { Barcode } from '@/components/Barcode';
import clubData from '@/content/club.json';
import { Metadata } from 'next';

const { club: clubInfo, impact, identity, leadership, keyMessage } = clubData;

export const metadata: Metadata = {
  title: `About ${clubInfo.name}`,
  description: keyMessage,
};

export default function About() {
  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <AngledPanel className="p-8 md:p-16 mb-8">
          <div className="mb-8">
            <Barcode label={identity.registeredName} />
          </div>
          
          <AnimatedHeadline 
            text={clubInfo.tagline}
            className="mb-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                {keyMessage}
              </p>

              <p className="text-lg leading-relaxed">
                {clubInfo.mission}
              </p>

              <div className="brutal-border bg-gray-100 p-6">
                <Barcode label="VISION" width={1} height={25} className="mb-4" />
                <h3 className="font-bebas text-xl uppercase mb-2">What We Envision</h3>
                <ul className="list-disc list-inside space-y-2 font-mono text-sm leading-relaxed text-gray-700">
                  {clubInfo.vision.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="KJ Run Club training session"
                className="w-full brutal-border img-brutal"
              />
            </div>
          </div>
        </AngledPanel>

        <AngledPanel className="p-8 md:p-16 mb-8" angle="tl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                label: 'PROGRAMMES',
                title: impact.programmes,
                value: 'Every week'
              },
              {
                label: 'EVENTS',
                title: 'Events Hosted',
                value: impact.eventsHosted
              },
              {
                label: 'RUNNERS',
                title: 'Runners Engaged',
                value: impact.runnersEngaged
              },
              {
                label: 'COLLABS',
                title: 'Collaborations',
                value: impact.collaborations
              }
            ].map((item, index) => (
              <div key={index} className="brutal-border bg-white p-8 text-center">
                <Barcode label={item.label} className="mb-4" />
                <h3 className="font-bebas text-2xl uppercase mb-2">{item.title}</h3>
                <p className="font-mono">{item.value}</p>
              </div>
            ))}
          </div>
        </AngledPanel>

        <AngledPanel className="p-8 md:p-16" angle="both">
          <h2 className="font-bebas text-4xl md:text-6xl uppercase mb-8">
            Leadership And Identity
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
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
                  <Barcode label={leader.label} className="mb-4" />
                  <h3 className="font-bebas text-2xl uppercase mb-2">{leader.name}</h3>
                  <p className="font-mono text-sm text-gray-700">{leader.role}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="brutal-border-thin bg-gray-50 p-6">
                <Barcode label="REGISTRATION" className="mb-4" />
                <h3 className="font-bebas text-2xl uppercase mb-2">{identity.registeredName}</h3>
                <p className="font-mono text-sm text-gray-700">Registration No: {identity.regNo}</p>
              </div>

              <div className="brutal-border-thin bg-white p-6">
                <Barcode label="CORE-ROLES" className="mb-4" />
                <h3 className="font-bebas text-2xl uppercase mb-3">Key Positions</h3>
                <ul className="list-disc list-inside space-y-2 font-mono text-sm text-gray-700">
                  {identity.roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AngledPanel>

      </div>
    </main>
  );
}
