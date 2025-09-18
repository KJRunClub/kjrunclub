import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { AngledPanel } from '@/components/AngledPanel';
import { Barcode } from '@/components/Barcode';
import { SessionStrip } from '@/components/SessionStrip';
import { EventList } from '@/components/EventList';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KJ Run Club - Brutal Training, Real Results',
  description: 'Elite running club in Kuala Lumpur. Join our brutal training sessions and push your limits.',
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center img-brutal"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-8">
            <Barcode label="KJRC-001" className="text-white" />
          </div>
          
          <AnimatedHeadline 
            text="KJ RUN CLUB" 
            className="mb-6"
          />
          
          <p className="font-mono text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Elite training sessions in Kuala Lumpur. Join Malaysia's most dedicated runners and push beyond your limits.
          </p>
          
          <Link 
            href="/contact" 
            className="btn-brutal inline-block bg-white text-black hover:bg-black hover:text-white"
          >
            Join the Run
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="absolute top-8 right-8 z-20">
          <div className="brutal-border bg-white/90 backdrop-blur-sm p-4">
            <div className="flex flex-col space-y-2">
              {[
                { href: '/about', label: 'About' },
                { href: '/schedule', label: 'Schedule' },
                { href: '/team', label: 'Team' },
                { href: '/merch', label: 'Merch' },
                { href: '/contact', label: 'Contact' }
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-mono text-sm uppercase tracking-wider hover:underline focus-brutal"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </section>

      {/* Sessions */}
      <SessionStrip />

      {/* Upcoming Events */}
      <AngledPanel className="p-8 md:p-12" angle="tl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-bebas text-4xl md:text-6xl uppercase mb-6">
              Upcoming Events
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              Stay connected with the running community. Track races, marathons, 
              and training events across Malaysia.
            </p>
            <Barcode label="EVENTS-MY" />
          </div>
          <div>
            <EventList />
          </div>
        </div>
      </AngledPanel>

      {/* Image Mosaic */}
      <AngledPanel className="p-8 md:p-12" angle="both">
        <h2 className="font-bebas text-4xl md:text-6xl uppercase mb-8 text-center">
          In Action
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
            'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
            'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
            'https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
            'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
            'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
            'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
          ].map((src, index) => (
            <div key={index} className="aspect-square">
              <img
                src={src}
                alt={`Training session ${index + 1}`}
                className="w-full h-full object-cover brutal-border-thin img-brutal"
              />
            </div>
          ))}
        </div>
      </AngledPanel>
    </main>
  );
}