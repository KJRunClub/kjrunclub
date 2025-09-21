import Image from 'next/image';
import Link from 'next/link';

interface Person {
  name: string;
  role?: string;
  avatar?: string;
  instagram?: string;
  tiktok?: string;
  slug?: string;
}

interface TeamDivisionProps {
  division: string;
  description?: string;
  people?: Person[];
  accentIndex?: number;
}

const palettes = [
  {
    base: 'rgba(56, 196, 199, 0.95)',
    accent: 'rgba(56, 196, 199, 0.35)'
  },
  {
    base: 'rgba(66, 178, 186, 0.95)',
    accent: 'rgba(66, 178, 186, 0.35)'
  },
  {
    base: 'rgba(46, 160, 168, 0.95)',
    accent: 'rgba(46, 160, 168, 0.35)'
  },
  {
    base: 'rgba(86, 208, 210, 0.95)',
    accent: 'rgba(86, 208, 210, 0.35)'
  },
];

const initialsFromName = (value: string) =>
  value
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 3)
    .join('')
    .toUpperCase();

const slugFromName = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'profile';

export function TeamDivision({ division, description, people = [], accentIndex = 0 }: TeamDivisionProps) {
  const palette = palettes[accentIndex % palettes.length];
  const hasPeople = people.length > 0;
  const displayPeople = people.slice(0, 3);
  const divisionCode = initialsFromName(division.replace(/dvsn/i, ''));

  return (
    <section className="surface-panel relative overflow-hidden p-8 md:p-12">
      <div className="absolute inset-0 opacity-25" style={{ backgroundColor: palette.accent }} />
      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="space-y-8">
          <div className="division-emblem h-24 w-24" style={{ backgroundColor: palette.base }}>
            <span>{divisionCode}</span>
          </div>
          <div>
            <h3 className="font-bebas text-4xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))] md:text-5xl headline-wrap">
              {division}
            </h3>
            {description && (
              <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--foreground))]/70 md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>

        {hasPeople && (
          <div className="grid gap-6 md:grid-cols-2">
            {displayPeople.map((person) => {
              const initials = initialsFromName(person.name);
              const profileSlug = person.slug ?? slugFromName(person.name);
              return (
                <div key={person.name} className="surface-panel border border-white/12 p-6 transition duration-300 hover:border-white/20">
                  <Link href={`/team/${profileSlug}`} className="mb-5 flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/15">
                      {person.avatar ? (
                        <Image src={person.avatar} alt={person.name} fill className="object-cover" />
                      ) : (
                        <div
                          className="flex h-full w-full items-center justify-center font-bebas text-2xl text-[hsl(var(--foreground))]"
                          style={{ backgroundColor: palette.base }}
                        >
                          {initials}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bebas text-2xl uppercase tracking-wide text-[hsl(var(--foreground))]">
                        {person.name}
                      </h4>
                      {person.role && (
                        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/55">
                          {person.role}
                        </p>
                      )}
                    </div>
                  </Link>

                  <div className="flex flex-wrap gap-4 text-[10px] font-mono uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/55">
                    {person.instagram && (
                      <a
                        href={`https://instagram.com/${person.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-[hsl(var(--foreground))]"
                      >
                        IG @{person.instagram}
                      </a>
                    )}
                    {person.tiktok && (
                      <a
                        href={`https://tiktok.com/@${person.tiktok}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-[hsl(var(--foreground))]"
                      >
                        TT @{person.tiktok}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
