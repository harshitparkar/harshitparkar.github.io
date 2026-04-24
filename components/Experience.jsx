'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TIMELINE = [
  {
    id: 'tebillion',
    company: 'TEBillion',
    role: 'Senior Software Engineer',
    period: 'Dec 2024 — Present',
    location: 'Mumbai · On-site',
    type: 'current',
    highlights: [
      'Engineering CRM Mobile App (iOS & Android) with React Native',
      'End-to-end dev lifecycle — Figma → architecture → Play Store & App Store',
      'AI-driven features: business card scanning & smart lead management',
    ],
    tech: ['React Native', 'React Query', 'Axios', 'AI/ML', 'Figma'],
  },
  {
    id: 'nextgen',
    company: 'NextGen Invent',
    role: 'Software Engineer',
    period: 'Jun 2022 — Dec 2024 · 2 yr 7 mo',
    location: 'New York · Remote',
    type: 'featured',
    badge: 'INC.5000',
    highlights: [
      'Otsy — Travel & Social platform spotted at TechCrunch Disrupt',
      'Cardware — Multi-app collaboration platform with maps & dynamic APIs',
      'Rhino Tool House — Next.js dynamic component rendering from GraphQL',
    ],
    tech: ['React Native', 'GraphQL', 'Apollo', 'Next.js', 'Firebase', 'MobX'],
  },
  {
    id: 'outdoorgoats',
    company: 'OutdoorGoats',
    role: 'React Native Developer',
    period: 'Mar 2022 — May 2022 · 3 mo',
    location: 'Mumbai · On-site',
    type: 'standard',
    highlights: [
      'Adventure-sport ecosystem — explore, connect, and shop',
      'GraphQL/REST APIs with real-time data & offline sync',
      'Designed UI/UX flows in Figma with A/B testing',
    ],
    tech: ['React Native', 'GraphQL', 'REST', 'Figma', 'E-commerce'],
  },
  {
    id: 'tecogis',
    company: 'Tecogis',
    role: 'React Native Developer',
    period: 'Nov 2021 — Feb 2022 · 4 mo',
    location: 'Mumbai · On-site',
    type: 'standard',
    highlights: [
      'Cross-platform mobile development with React Native & Flutter',
      'UI/UX design and technical research',
    ],
    tech: ['React Native', 'Flutter', 'UI/UX'],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.timeline-item');
      const lineFill = sectionRef.current?.querySelector('.timeline-line-fill');

      if (items) {
        gsap.set(items, { x: -40, autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(items, {
              x: 0,
              autoAlpha: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: 'power3.out',
            });
          },
        });
      }

      if (lineFill) {
        gsap.set(lineFill, { scaleY: 0, transformOrigin: 'top' });
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(lineFill, {
              scaleY: 1,
              duration: 1.5,
              ease: 'power3.out',
            });
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-spacing px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
    >
      <div className="mb-12">
        <span className="font-mono text-xs text-ghost uppercase tracking-widest">
          Career Path
        </span>
        <h2 className="font-grotesk font-bold text-ink text-3xl md:text-4xl mt-2">
          Engineering Timeline
        </h2>
      </div>

      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-ink/8">
          <div className="timeline-line-fill w-full h-full bg-gradient-to-b from-signal via-signal/50 to-transparent" />
        </div>

        {/* Timeline items */}
        <div className="space-y-2">
          {TIMELINE.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="timeline-item relative pl-16 md:pl-20"
              >
                {/* Dot on the line */}
                <div className="absolute left-[18px] md:left-[26px] top-8 z-10">
                  {item.type === 'current' ? (
                    <div className="w-3 h-3 rounded-full bg-signal ring-4 ring-signal/20 pulse-dot" />
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-ink/30 ring-4 ring-offwhite" />
                  )}
                </div>

                {/* Card */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className={`w-full text-left p-6 md:p-8 transition-all duration-400 cursor-pointer group ${
                    isExpanded
                      ? 'bg-offwhite border border-ink/10 shadow-lg'
                      : 'bg-transparent hover:bg-offwhite/60'
                  }`}
                  style={{ borderRadius: '1.5rem' }}
                >
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-grotesk font-bold text-ink text-lg md:text-xl group-hover:text-signal transition-colors">
                        {item.company}
                      </h3>
                      {item.badge && (
                        <span className="font-mono text-[10px] text-signal bg-signal/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {item.badge}
                        </span>
                      )}
                      {item.type === 'current' && (
                        <span className="flex items-center gap-1.5 font-mono text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          Current
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-ghost">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-1">
                    <span className="font-grotesk text-inkLight text-sm">
                      {item.role}
                    </span>
                    <span className="font-mono text-xs text-ghost">
                      {item.location}
                    </span>
                  </div>

                  {/* Expand indicator */}
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className={`text-ghost transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    >
                      <path
                        d="M2 4L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                    <span className="font-mono text-[10px] text-ghost uppercase tracking-widest">
                      {isExpanded ? 'Collapse' : 'Details'}
                    </span>
                  </div>

                  {/* Expanded content */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      isExpanded ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="border-t border-ink/8 pt-5">
                      <ul className="space-y-2.5 mb-5">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1 h-1 rounded-full bg-signal mt-2 flex-shrink-0" />
                            <span className="font-grotesk text-inkLight text-sm leading-relaxed">
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] text-ink/50 bg-ink/5 px-2.5 py-1 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
