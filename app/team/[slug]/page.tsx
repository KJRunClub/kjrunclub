import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { divisions, teamMemberMap, teamMembers, type TeamMember } from '@/lib/siteContent';

type TeamProfile = TeamMember & { division: string };

const divisionLookup = divisions.reduce<Record<string, { name: string; nickname: string }>>((lookup, division) => {
  division.people.forEach((person) => {
    lookup[person.slug] = { name: division.name, nickname: division.nickname };
  });
  return lookup;
}, {});

const getDivisionLabel = (slug: string) => {
  const division = divisionLookup[slug];
  return division?.nickname ?? division?.name ?? 'Crew Division';
};

const teamProfiles: TeamProfile[] = teamMembers.map((member) => ({
  ...member,
  division: getDivisionLabel(member.slug),
}));

const getProfile = (slug: string): TeamProfile | undefined => {
  const member = teamMemberMap[slug];
  if (!member) {
    return undefined;
  }

  return {
    slug,
    division: getDivisionLabel(slug),
    ...member,
  };
};

export function generateStaticParams() {
  return teamProfiles.map((profile) => ({ slug: profile.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const profile = getProfile(params.slug);
  if (!profile) {
    return {
      title: 'Crew Member — KJ Run Club',
      description: 'KJ Run Club crew profile.',
    };
  }

  return {
    title: `${profile.name} — ${profile.division}`,
    description: profile.bio,
  };
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const profile = getProfile(params.slug);

  if (!profile) {
    notFound();
  }

  return (
    <main className="snap-y snap-mandatory">
      <section className="relative flex min-h-screen snap-start flex-col justify-center bg-neutral-950 px-4 py-24 text-neutral-100 sm:px-6 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_65%)]" />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
            <div className="flex justify-center md:justify-start">
              <figure className="relative h-[520px] w-full max-w-sm overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/85 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  sizes="(min-width: 768px) 40vw, 80vw"
                  className="object-cover grayscale"
                  priority
                />
                <div className="absolute inset-0 border border-white/5 mix-blend-overlay" />
              </figure>
            </div>

            <div className="flex flex-col justify-center">
              <div className="rounded-3xl border border-neutral-800 bg-neutral-900/85 p-8 text-neutral-100 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-10">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
                  {profile.division}
                </p>
                <h1 className="mt-3 font-bebas text-5xl uppercase tracking-[0.18em] text-neutral-50 md:text-6xl">
                  {profile.name}
                </h1>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.35em] text-neutral-500">{profile.role}</p>

                <p className="mt-6 text-base leading-relaxed text-neutral-300">{profile.bio}</p>

                {profile.highlights?.length ? (
                  <div className="mt-6 space-y-3">
                    <h2 className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-400">Highlights</h2>
                    <ul className="space-y-2 text-sm text-neutral-300">
                      {profile.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-[0.4rem] block h-2 w-2 rounded-full bg-neutral-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/team"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-100 bg-neutral-100 px-8 py-3 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-900 transition hover:bg-neutral-300"
                  >
                    Back To Team
                  </Link>
                  <Link
                    href="/schedule"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-8 py-3 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
                  >
                    Join A Session
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  {profile.instagram && (
                    <Link
                      href={`https://instagram.com/${profile.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-neutral-800 px-5 py-3 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
                    >
                      IG @{profile.instagram}
                    </Link>
                  )}
                  {profile.tiktok && (
                    <Link
                      href={`https://tiktok.com/@${profile.tiktok}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-neutral-800 px-5 py-3 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
                    >
                      TT @{profile.tiktok}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
          <span className="rounded-full border border-neutral-800 bg-neutral-900/70 px-4 py-1 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-neutral-500">
            Crew Profile
          </span>
        </div>
      </section>
    </main>
  );
}
