'use client';
import React from 'react';

/**
 * Harshit S. Parkar Logo
 */
export default function HPMonogram({ size = 40, variant = 'primary', className = '' }) {
  const gold = '#c9a96e';

  return (
    <div className={`font-display text-[22px] font-bold tracking-wide text-bone ${className}`}>
      Harshit S. Parkar
    </div>
  );
}

/**
 * Animated Harshit S. Parkar for Loading Screen
 * Draws in via stroke-dashoffset over 1.2s, then fills
 */
export function HPMonogramAnimated({ size = 80 }) {
  const gold = '#c9a96e';

  return (
    <svg
      width="600"
      height="120"
      viewBox="0 0 600 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Harshit S. Parkar Signature"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="none"
        stroke={gold}
        strokeWidth="1.5"
        fontSize="64"
        fontFamily="'Great Vibes', cursive"
        strokeDasharray="600"
        strokeDashoffset="600"
        style={{
          animation: 'signatureDraw 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        }}
      >
        Harshit S. Parkar
      </text>
      <style>{`
        @keyframes signatureDraw {
          0% { stroke-dashoffset: 600; fill: transparent; }
          80% { stroke-dashoffset: 0; fill: transparent; }
          100% { stroke-dashoffset: 0; fill: ${gold}; }
        }
      `}</style>
    </svg>
  );
}
