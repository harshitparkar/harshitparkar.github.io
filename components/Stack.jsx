'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── SVG Animations ─── */
function DoubleHelixSVG() {
  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-40 md:h-40 helix-spin opacity-20">
      <ellipse cx="100" cy="100" rx="80" ry="30" stroke="#E63B2E" strokeWidth="1" fill="none" />
      <ellipse cx="100" cy="100" rx="80" ry="30" stroke="#E63B2E" strokeWidth="1" fill="none"
        transform="rotate(60, 100, 100)" />
      <ellipse cx="100" cy="100" rx="80" ry="30" stroke="#E63B2E" strokeWidth="1" fill="none"
        transform="rotate(120, 100, 100)" />
      <circle cx="100" cy="100" r="4" fill="#E63B2E" opacity="0.4" />
    </svg>
  );
}

function LaserGridSVG() {
  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-40 md:h-40 opacity-20">
      {/* Dot grid */}
      {Array.from({ length: 8 }).map((_, r) =>
        Array.from({ length: 8 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={25 + c * 22} cy={25 + r * 22} r="1.5" fill="#E63B2E" opacity="0.3" />
        ))
      )}
      {/* Scanning laser */}
      <rect x="15" y="0" width="170" height="2" fill="#E63B2E" opacity="0.6" className="laser-line" />
    </svg>
  );
}

function EKGPulseSVG() {
  return (
    <svg viewBox="0 0 200 60" className="w-40 h-12 md:w-48 md:h-16 opacity-20">
      <path
        d="M0,30 L40,30 L50,10 L60,50 L70,20 L80,40 L90,30 L200,30"
        stroke="#E63B2E"
        strokeWidth="1.5"
        fill="none"
        className="ekg-line"
      />
    </svg>
  );
}

/* ─── Card Data ─── */
const STACK_CARDS = [
  {
    id: 'mobile-core',
    label: '01 / Mobile Core',
    title: 'React Native Internals',
    items: [
      'React Native (JSI / Fabric / Turbo Modules)',
      'Reanimated 2 — gesture-driven animations',
      'Re.Pack 4 — Module Federation',
      'Custom Native Modules (Kotlin / Swift)',
    ],
    SVGComponent: DoubleHelixSVG,
    accent: 'bg-signal',
  },
  {
    id: 'ai-data',
    label: '02 / AI & Data Layer',
    title: 'Intelligence Pipeline',
    items: [
      'OpenAI GPT-4o — lead scoring & content',
      'Computer Vision — card scanning',
      'Firebase / Cloud Firestore',
      'MobX · React Query · Zustand',
    ],
    SVGComponent: LaserGridSVG,
    accent: 'bg-ink',
  },
  {
    id: 'web-systems',
    label: '03 / Web & Systems',
    title: 'Full-Stack Architecture',
    items: [
      'React.js · Next.js · GraphQL · REST',
      'Node.js · Apollo Server',
      'Dynamic component rendering systems',
      'MBA in IT Management — engineering decisions backed by business architecture.',
    ],
    SVGComponent: EKGPulseSVG,
    accent: 'bg-inkLight',
  },
];

export default function Stack() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            endTrigger: cards[i + 1],
            end: 'top top',
            scrub: true,
            pin: false,
            onUpdate: (self) => {
              const inner = card.querySelector('.stack-card-inner');
              if (inner) {
                gsap.set(inner, {
                  scale: 1 - 0.05 * self.progress,
                  filter: `blur(${6 * self.progress}px)`,
                  opacity: 1 - 0.25 * self.progress,
                });
              }
            },
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stack" ref={sectionRef} className="relative bg-paper" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-8">
        <span className="font-mono text-xs text-ghost uppercase tracking-widest">Technical Stack</span>
        <h2 className="font-grotesk font-bold text-ink text-3xl md:text-4xl mt-2 mb-4">
          Stacking Archive
        </h2>
      </div>

      {STACK_CARDS.map((card, i) => (
        <div
          key={card.id}
          ref={(el) => (cardsRef.current[i] = el)}
          className="sticky top-0 min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
        >
          <div
            className="stack-card-inner w-full max-w-5xl bg-offwhite border border-ink/8 p-8 md:p-12 lg:p-16"
            style={{ borderRadius: '2.5rem', boxShadow: '0 8px 60px rgba(17,17,17,0.06)' }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="flex-1">
                <span className="font-mono text-xs text-ghost uppercase tracking-widest">
                  {card.label}
                </span>
                <h3 className="font-grotesk font-bold text-ink text-2xl md:text-3xl mt-2 mb-6">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${card.accent} mt-2 flex-shrink-0`} />
                      <span className="font-grotesk text-inkLight text-sm md:text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center">
                <card.SVGComponent />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Spacer for scroll clearance */}
      <div className="h-[15vh]" />
    </section>
  );
}
