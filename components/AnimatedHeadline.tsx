'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedHeadline({ text, className = '', delay = 0 }: AnimatedHeadlineProps) {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const baseClass = `font-bebas text-giant uppercase headline-wrap ${className}`;
  const words = useMemo(() => text.split(' ').filter(Boolean), [text]);

  if (shouldReduceMotion) {
    return <h1 className={baseClass}>{text}</h1>;
  }

  return (
    <h1 className={baseClass}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className="inline-block mr-[0.4em]"
          style={{ whiteSpace: 'nowrap' }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
