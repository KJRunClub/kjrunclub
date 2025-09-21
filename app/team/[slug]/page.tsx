import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import { AngledPanel } from '@/components/AngledPanel';
import profiles from '@/content/teamProfiles.json';

interface TeamProfile {
  slug: string;
  name: string;
  division: string;
  role: string;
  avatar: string;
  bio: string;
  highlights?: string[];
  instagram?: string;
  tiktok?: string;
}

const teamProfiles = profiles as TeamProfile[];

const getProfile = (slug: string) => teamProfiles.find((profile) => profile.slug === slug);

export function generateStaticParams() {
  return teamProfiles.map((profile) => ({ slug: profile.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const profile = getProfile(params.slug);
  if (!profile) {
    return {
      title: 'Crew Member - KJ Run Club',
      description: 'KJ Run Club crew profile.',
    };
  }

  return {
    title: `${profile.name} - ${profile.division}`,
    description: profile.bio,
  };
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const profile = getProfile(params.slug);

  if (!profile) {
    notFound();
  }

  return (
    <main className="pt-32 pb-24">
      <section className="mx-auto max-w-5xl px-6">
        <AngledPanel className="p-10 md:p-14" angle="tl">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="w-full max-w-xs">
              <div className="grainy-image relative aspect-[4/5] overflow-hidden">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div className="headline-accent w-fit">{profile.division}</div>
              <div>
                <h1 className="font-bebas text-5xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))] md:text-6xl headline-wrap">
                  {profile.name}
                </h1>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/60">
                  {profile.role}
                </p>
              </div>

              <p className="text-base leading-relaxed text-[hsl(var(--foreground))]/75">
                {profile.bio}
              </p>

              {profile.highlights?.length ? (
                <div>
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/55">
                    Highlights
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-[hsl(var(--foreground))]/70">
                    {profile.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[6px] block h-[6px] w-[6px] rounded-full bg-[hsl(var(--foreground))]/40" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="flex flex-wrap gap-4">
                {profile.instagram && (
                  <Link
                    href={`https://instagram.com/${profile.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge-frosted"
                  >
                    IG @{profile.instagram}
                  </Link>
                )}
                {profile.tiktok && (
                  <Link
                    href={`https://tiktok.com/@${profile.tiktok}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge-frosted"
                  >
                    TT @{profile.tiktok}
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <Link href="/team" className="btn-framer">
              <span>Back to Team</span>
            </Link>
            <Link
              href="/schedule"
              className="font-mono text-[11px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))]"
            >
              Join a session →
            </Link>
          </div>
        </AngledPanel>
      </section>
    </main>
  );
}
