'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AngledPanelProps {
  children: ReactNode;
  className?: string;
  angle?: 'br' | 'tl' | 'both' | 'none';
  border?: boolean;
}

export function AngledPanel({ 
  children, 
  className, 
  angle = 'br', 
  border = true 
}: AngledPanelProps) {
  const clipClass = {
    br: 'clip-angled-br',
    tl: 'clip-angled-tl',
    both: 'clip-angled-both',
    none: ''
  }[angle];

  return (
    <section 
      className={cn(
        'relative bg-white',
        clipClass,
        border && 'brutal-border',
        className
      )}
    >
      {children}
    </section>
  );
}