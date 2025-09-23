import siteContent from '@/content/club.json';

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

export interface Person {
  name: string;
  role?: string;
  slug?: string;
  avatar?: string;
  instagram?: string;
  tiktok?: string;
}

export interface Division {
  name: string;
  nickname: string;
  focus: string;
  image: string;
  people: Person[];
}

export interface GalleryCard {
  title: string;
  description: string;
  href: string;
  image: string;
}

export const site = siteContent;

export const brand = site.global.brand;
export const navigation = site.global.navigation;
export const identity = site.global.identity;
export const impact = site.global.impact;
export const leadership = site.global.leadership;
export const contact = site.global.contact;

export const divisions = site.collections.divisions as Division[];
export const gallery = site.collections.gallery as string[];

export const homeSlides = site.pages.home.slides as Slide[];
export const aboutSlides = site.pages.about.slides as Slide[];
export const contactSlides = site.pages.contact.slides as Slide[];
export const divisionSlides = (site.pages.divisions?.slides ?? []) as Slide[];
export const gallerySlides = (site.pages.gallery?.slides ?? []) as Slide[];
export const galleryCards = (site.pages.gallery?.cards ?? []) as GalleryCard[];
