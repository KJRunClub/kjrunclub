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
          lineColor: "#000000",
          margin: 0
        });
      } catch (error) {
        // Fallback for invalid barcode data
        console.warn('Invalid barcode data:', label);
      }
    }
  }, [label, width, height]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg ref={svgRef} className="block"></svg>
      <span className="font-mono text-xs uppercase tracking-wider mt-1 text-gray-600">
        {label}
      </span>
    </div>
  );
}