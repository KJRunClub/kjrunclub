import Link from 'next/link';

export function FooterSimple() {
  return (
    <footer className="brutal-border-thin bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bebas text-xl uppercase mb-4">KJ Run Club</h3>
            <p className="font-mono text-sm">
              Brutal training.<br />
              Real results.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider mb-4">Navigate</h4>
            <nav className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/schedule', label: 'Schedule' },
                { href: '/team', label: 'Team' },
                { href: '/merch', label: 'Merch' },
                { href: '/contact', label: 'Contact' }
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block font-mono text-sm hover:underline focus-brutal"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider mb-4">Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://instagram.com/kjrunclub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block font-mono text-sm hover:underline focus-brutal"
              >
                Instagram
              </a>
              <a 
                href="https://strava.com/clubs/kjrunclub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block font-mono text-sm hover:underline focus-brutal"
              >
                Strava
              </a>
              <a 
                href="mailto:hello@kjrunclub.com"
                className="block font-mono text-sm hover:underline focus-brutal"
              >
                hello@kjrunclub.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="brutal-border-thin border-x-0 border-b-0 mt-8 pt-8 text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-gray-400">
            © 2025 KJ Run Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}