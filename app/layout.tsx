import './globals.css';
import type { Metadata } from 'next';
import { Bebas_Neue, Inter, IBM_Plex_Mono } from 'next/font/google';
import { FooterSimple } from '@/components/FooterSimple';
import { SiteNav } from '@/components/SiteNav';
import { Analytics } from '@vercel/analytics/react';

const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
  display: 'swap'
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const ibmPlexMono = IBM_Plex_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'KJ Run Club - Brutal Training, Real Results',
  description: 'Elite running club in Kuala Lumpur. Join our brutal training sessions and push your limits.',
  keywords: 'running club, KL, Malaysia, training, marathon, speedwork, long runs',
  authors: [{ name: 'KJ Run Club' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'KJ Run Club - Brutal Training, Real Results',
    description: 'Elite running club in Kuala Lumpur. Join our brutal training sessions and push your limits.',
    url: 'https://kjrunclub.com',
    siteName: 'KJ Run Club',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KJ Run Club'
      }
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KJ Run Club - Brutal Training, Real Results',
    description: 'Elite running club in Kuala Lumpur. Join our brutal training sessions and push your limits.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body className="font-inter bg-white text-black overflow-x-hidden">
        <div className="min-h-screen flex flex-col">
          <SiteNav />
          <main className="flex-1">
            {children}
          </main>
          <FooterSimple />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
