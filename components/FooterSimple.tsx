"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { brand, contact, navigation } from '@/lib/siteContent';

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export function FooterSimple() {
  return (
    <motion.footer
      className="relative mt-24 border-t border-neutral-900 bg-neutral-950/95 text-neutral-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div className="lg:col-span-5" variants={staggerItem}>
            <div className="flex items-center gap-3">
              <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden">
                <Image src="/logo-kjrc.png" alt={`${brand.shortName} logo`} fill sizes="56px" className="object-contain p-1 grayscale" />
              </span>
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-neutral-500">Crew</p>
                <h3 className="font-bebas text-4xl uppercase tracking-[0.2em] text-neutral-50">{brand.shortName}</h3>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-400">
              {brand.mission}
            </p>
          </motion.div>

          <motion.div className="grid gap-10 text-sm sm:grid-cols-2 lg:col-span-7" variants={staggerParent}>
            <motion.div variants={staggerItem}>
              <h4 className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-neutral-500">Navigate</h4>
              <motion.nav className="mt-5 grid gap-3" variants={staggerParent}>
                {navigation.map(({ href, label }) => (
                  <motion.div key={href} variants={staggerItem}>
                    <Link
                      href={href}
                      className="flex items-center gap-3 rounded-full border border-transparent px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-400 transition hover:border-neutral-700 hover:text-neutral-50"
                    >
                      <span className="h-px w-6 bg-neutral-700" />
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>

            <motion.div variants={staggerItem}>
              <h4 className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-neutral-500">Connect</h4>
              <motion.div className="mt-5 grid gap-3" variants={staggerParent}>
                <motion.a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 rounded-full border border-transparent px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-400 transition hover:border-neutral-700 hover:text-neutral-50"
                  variants={staggerItem}
                >
                  <span className="h-px w-6 bg-neutral-700" />
                  {contact.email}
                </motion.a>
                {contact.social.map(({ platform, url, handle }) => (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/70 px-5 py-4 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-neutral-300 transition hover:border-neutral-600 hover:text-neutral-50"
                    variants={staggerItem}
                  >
                    <span className="font-bebas text-xl uppercase tracking-[0.2em] text-neutral-50">{platform}</span>
                    <span>{handle}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-900 pt-6 text-center text-neutral-500 sm:flex-row"
          variants={staggerParent}
        >
          <motion.p className="font-mono text-[0.6rem] uppercase tracking-[0.4em]" variants={staggerItem}>
            © {new Date().getFullYear()} {brand.extendedName}
          </motion.p>
          <motion.p className="font-mono text-[0.6rem] uppercase tracking-[0.4em]" variants={staggerItem}>
            Kuala Lumpur • Malaysia
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
