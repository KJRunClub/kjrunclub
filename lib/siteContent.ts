import siteContent from '@/content/club.json';
import teamMemberContent from '@/content/team-members.json';

export type SlideLayout = 'text-left' | 'text-center' | 'image-left' | 'image-right';

export interface Slide {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  image: string;
  layout?: SlideLayout;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  link?: { label: string; href: string };
  stats?: Array<{ label: string; value: string }>;
  bullets?: string[];
  schedule?: Array<{ day: string; time: string; focus: string }>;
  partners?: Array<{ name: string; image: string }>;
}

export interface TeamMemberContent {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  highlights?: string[];
  instagram?: string;
  tiktok?: string;
}

export interface TeamMember extends TeamMemberContent {
  slug: string;
}

interface RawDivision {
  id: string;
  name: string;
  nickname: string;
  focus: string;
  image: string;
  logo: string;
  people: string[];
}

export interface Division {
  id: string;
  name: string;
  nickname: string;
  focus: string;
  image: string;
  logo: string;
  people: TeamMember[];
}

export interface GalleryCard {
  title: string;
  description: string;
  href: string;
  image: string;
}

type TeamMemberRecord = Record<string, TeamMemberContent>;

const teamMemberRecord = teamMemberContent as TeamMemberRecord;

const rawDivisions = siteContent.collections.divisions as RawDivision[];

const getMember = (slug: string): TeamMember => {
  const member = teamMemberRecord[slug];
  if (!member) {
    throw new Error(`Missing team member data for slug "${slug}" referenced in club.json`);
  }
  return { slug, ...member };
};

export const site = siteContent;

export const brand = site.global.brand;
export const navigation = site.global.navigation;
export const identity = site.global.identity;
export const impact = site.global.impact;
export const leadership = site.global.leadership;
export const contact = site.global.contact;

export const divisions = rawDivisions.map((division) => ({
  ...division,
  people: division.people.map(getMember),
})) as Division[];

export const teamMemberMap = teamMemberRecord;
export const teamMembers = Object.entries(teamMemberRecord).map(([slug, member]) => ({
  slug,
  ...member,
}));
export const gallery = site.collections.gallery as string[];

export const homeSlides = site.pages.home.slides as Slide[];
export const aboutSlides = site.pages.about.slides as Slide[];
export const contactSlides = site.pages.contact.slides as Slide[];
export const divisionSlides = (site.pages.divisions?.slides ?? []) as Slide[];
export const gallerySlides = (site.pages.gallery?.slides ?? []) as Slide[];
export const galleryCards = (site.pages.gallery?.cards ?? []) as GalleryCard[];
