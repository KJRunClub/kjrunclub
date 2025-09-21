"use client";

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AngledPanelProps {
  children: ReactNode;
  className?: string;
  angle?: 'br' | 'tl' | 'both' | 'none';
  border?: boolean;
}

const accentMap: Record<NonNullable<AngledPanelProps['angle']>, string> = {
  br: 'rgba(255, 130, 54, 0.12)',
  tl: 'rgba(109, 84, 255, 0.12)',
  both: 'rgba(255, 130, 54, 0.1)',
  none: 'transparent',
};

export function AngledPanel({ children, className, angle = 'br', border = true }: AngledPanelProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-[calc(var(--radius)*1.1)] border border-white/12 bg-[rgba(16,18,26,0.88)] backdrop-blur-lg',
        border && 'shadow-[0_20px_45px_-40px_rgba(0,0,0,0.9)]',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0" style={{ backgroundColor: accentMap[angle] }} />
      <div className="relative z-10 flex flex-col gap-8">
        {children}
      </div>
    </section>
  );
}
