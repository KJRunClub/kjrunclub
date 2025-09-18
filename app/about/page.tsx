import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { AngledPanel } from '@/components/AngledPanel';
import { Barcode } from '@/components/Barcode';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - KJ Run Club',
  description: 'Learn about KJ Run Club\'s mission, training philosophy, and commitment to excellence.',
};

export default function About() {
  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <AngledPanel className="p-8 md:p-16 mb-8">
          <div className="mb-8">
            <Barcode label="ABOUT-KJRC" />
          </div>
          
          <AnimatedHeadline 
            text="OUR MANIFESTO" 
            className="mb-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                KJ Run Club was born from a simple belief: that extraordinary results 
                come from extraordinary commitment. We don't chase trends or promise 
                easy victories. We offer something more valuable—a path to becoming 
                the runner you never thought possible.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our training is brutal by design. Every session is crafted to push 
                boundaries, break barriers, and forge mental toughness alongside 
                physical strength. We believe that comfort is the enemy of progress.
              </p>
              
              <div className="brutal-border bg-gray-100 p-6">
                <Barcode label="PHILOSOPHY" width={1} height={25} className="mb-4" />
                <h3 className="font-bebas text-xl uppercase mb-2">Training Philosophy</h3>
                <p className="font-mono text-sm">
                  Embrace discomfort. Seek challenge. Demand excellence.
                </p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="brutal-border bg-white p-8 text-center">
              <Barcode label="EST-2019" className="mb-4" />
              <h3 className="font-bebas text-3xl uppercase mb-2">Founded</h3>
              <p className="font-mono">2019</p>
            </div>
            
            <div className="brutal-border bg-white p-8 text-center">
              <Barcode label="MEMBERS-200" className="mb-4" />
              <h3 className="font-bebas text-3xl uppercase mb-2">Members</h3>
              <p className="font-mono">200+</p>
            </div>
            
            <div className="brutal-border bg-white p-8 text-center">
              <Barcode label="SESSIONS-WEEK" className="mb-4" />
              <h3 className="font-bebas text-3xl uppercase mb-2">Weekly Sessions</h3>
              <p className="font-mono">15+</p>
            </div>
          </div>
        </AngledPanel>

        <AngledPanel className="p-8 md:p-16" angle="both">
          <h2 className="font-bebas text-4xl md:text-6xl uppercase mb-8">
            What We Stand For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'No Shortcuts',
                description: 'Every mile earned, every second fought for. We believe in the honest work of training.',
                code: 'HONEST-WORK'
              },
              {
                title: 'Community First',
                description: 'Individual excellence through collective support. We rise together or not at all.',
                code: 'COMMUNITY'
              },
              {
                title: 'Mental Toughness',
                description: 'The strongest muscle is between your ears. We train minds as hard as bodies.',
                code: 'MINDSET'
              },
              {
                title: 'Continuous Growth',
                description: 'There is no finish line in self-improvement. Every day is a new opportunity.',
                code: 'GROWTH'
              }
            ].map((principle, index) => (
              <div key={index} className="brutal-border-thin bg-gray-50 p-6">
                <Barcode label={principle.code} className="mb-4" />
                <h3 className="font-bebas text-2xl uppercase mb-3">{principle.title}</h3>
                <p className="leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </AngledPanel>

      </div>
    </main>
  );
}