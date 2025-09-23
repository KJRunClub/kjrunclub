import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { brand } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: `Team — ${brand.extendedName}`,
  description: brand.keyMessage,
};

export default function Team() {
  redirect('/divisions');
}
