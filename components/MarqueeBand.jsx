'use client';
import React from 'react';

const credentials = [
  "TechCrunch Disrupt",
  "IEEE",
  "Smart India Hackathon",
  "TEBillion",
  "Ardentisys",
  "NextGen Invent",
  "Amity University",
  "The Art of Living",
  "OutdoorGoats"
];

export default function MarqueeBand() {
  // Duplicate array a few times to ensure smooth infinite scroll
  const items = [...credentials, ...credentials, ...credentials];

  return (
    <section className="w-full h-[64px] bg-deep-void border-y border-white/[0.07] flex items-center overflow-hidden marquee-container z-20 relative">
      <div className="marquee-track flex items-center gap-16 py-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-16 flex-shrink-0">
            <span className="font-display text-[16px] text-bone whitespace-nowrap tracking-wider uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
