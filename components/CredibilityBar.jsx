'use client';
import React from 'react';

const BADGES = [
  'TechCrunch Disrupt',
  'IEEE Published',
  'Smart India Hackathon',
  'TEBillion',
  'NextGen Invent (INC.5000)',
  'Amity University MBA',
];

export default function CredibilityBar() {
  return (
    <section className="relative py-6 border-y border-ink/8 bg-paper overflow-hidden" id="about">
      {/* Desktop — static */}
      <div className="hidden md:flex items-center justify-center gap-12 px-8">
        {BADGES.map((badge) => (
          <span
            key={badge}
            className="font-mono text-xs tracking-widest uppercase text-ink/50 whitespace-nowrap select-none"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Mobile — marquee */}
      <div className="md:hidden overflow-hidden">
        <div className="marquee-track">
          {[...BADGES, ...BADGES].map((badge, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-widest uppercase text-ink/50 whitespace-nowrap mx-8 select-none"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
