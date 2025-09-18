'use client';

import { useEffect, useState } from 'react';
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

  if (shouldReduceMotion) {
    return (
      <h1 className={`font-bebas text-giant uppercase ${className}`}>
        {text}
      </h1>
    );
  }

  return (
    <h1 className={`font-bebas text-giant uppercase ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ 
            opacity: 0, 
            y: 50,
            rotateZ: -5 
          }}
          animate={isVisible ? { 
            opacity: 1, 
            y: 0,
            rotateZ: [0, 2, -1, 0]
          } : {}}
          transition={{ 
            delay: index * 0.05,
            duration: 0.6,
            rotateZ: {
              repeat: Infinity,
              duration: 3,
              delay: index * 0.1 + 1
            }
          }}
          className="inline-block"
          style={{ transformOrigin: 'center center' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h1>
  );
}