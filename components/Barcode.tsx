'use client';

import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

interface BarcodeProps {
  label: string;
  width?: number;
  height?: number;
  className?: string;
}

export function Barcode({ label, width = 2, height = 60, className = '' }: BarcodeProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      try {
        JsBarcode(svgRef.current, label, {
          format: "CODE128",
          width: width,
          height: height,
          displayValue: false,
          background: "transparent",
          lineColor: "#f5f5f5",
          margin: 0
        });
      } catch (error) {
        // Swallow invalid barcode data in production builds
        if (process.env.NODE_ENV !== 'production') {
          /* noop */
        }
      }
    }
  }, [label, width, height]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg ref={svgRef} className="block"></svg>
      <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/55">
        {label}
      </span>
    </div>
  );
}
