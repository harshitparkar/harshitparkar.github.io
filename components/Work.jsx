'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Card 1 — TEBillion CRM: Diagnostic Shuffler ─── */
function ShufflerCard() {
  const labels = [
    { title: 'AI Lead Scoring', desc: 'GPT-powered qualification engine' },
    { title: 'Business Card Scan', desc: 'Vision-based contact extraction' },
    { title: 'Field-Ready CRM', desc: 'Offline-first mobile architecture' },
  ];
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (position) => {
    const styles = [
      { transform: 'translateY(0) scale(1)', opacity: 1, zIndex: 3 },
      { transform: 'translateY(12px) scale(0.95)', opacity: 0.7, zIndex: 2 },
      { transform: 'translateY(24px) scale(0.9)', opacity: 0.4, zIndex: 1 },
    ];
    return styles[position];
  };

  return (
    <div className="relative h-44 mb-6">
      {order.map((labelIdx, position) => {
        const style = getCardStyle(position);
        const label = labels[labelIdx];
        return (
          <div
            key={labelIdx}
            className="absolute inset-x-0 top-0 bg-offwhite border border-ink/10 p-5"
            style={{
              ...style,
              borderRadius: '1.5rem',
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <div className="font-grotesk font-bold text-ink text-base">{label.title}</div>
            <div className="font-mono text-xs text-ghost mt-1">{label.desc}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Card 2 — Otsy Travel: Telemetry Typewriter ─── */
function TypewriterCard() {
  const messages = [
    '> Building travel itinerary...',
    '> Integrating payment gateway...',
    '> Rendering social feed...',
    '> Optimizing GraphQL queries...',
    '> UI/UX flow validated.',
    '> Deployment ready.',
  ];
  const [lines, setLines] = useState([]);
  const [currentMsg, setCurrentMsg] = useState('');
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (msgIndex >= messages.length) {
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentMsg('');
        setMsgIndex(0);
        setCharIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (charIndex < messages[msgIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentMsg((prev) => prev + messages[msgIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev.slice(-3), messages[msgIndex]]);
        setCurrentMsg('');
        setMsgIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [msgIndex, charIndex, messages]);

  return (
    <div className="bg-ink/95 p-5 font-mono text-xs leading-relaxed" style={{ borderRadius: '1.5rem', minHeight: '11rem' }}>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-signal pulse-dot" />
        <span className="text-paper/50 text-[10px] uppercase tracking-widest">Live Feed</span>
      </div>
      {lines.map((line, i) => (
        <div key={i} className="text-paper/40">{line}</div>
      ))}
      {currentMsg && (
        <div className="text-signal">
          {currentMsg}
          <span className="cursor-blink">▌</span>
        </div>
      )}
    </div>
  );
}

/* ─── Card 3 — Otsy @ TechCrunch: Cursor Protocol ─── */
function CursorProtocolCard() {
  return (
    <div className="relative bg-ink/5 border border-ink/10 overflow-hidden" style={{ borderRadius: '1.5rem', height: '12rem' }}>
      {/* Mini UI skeleton */}
      <svg viewBox="0 0 320 200" className="w-full h-full" aria-hidden="true">
        {/* App bar */}
        <rect x="20" y="15" width="280" height="8" rx="4" fill="#111" opacity="0.06" />
        {/* Cards */}
        <rect x="20" y="35" width="120" height="60" rx="12" fill="#111" opacity="0.05" />
        <rect x="155" y="35" width="145" height="60" rx="12" fill="#111" opacity="0.05" />
        <rect x="20" y="105" width="280" height="40" rx="12" fill="#111" opacity="0.04" />
        {/* Tap indicators */}
        <circle cx="80" cy="65" r="8" fill="#E63B2E" opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="227" cy="65" r="8" fill="#E63B2E" opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="6s" begin="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="125" r="8" fill="#E63B2E" opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="6s" begin="4s" repeatCount="indefinite" />
        </circle>
        {/* Animated cursor */}
        <g className="cursor-protocol">
          <polygon points="0,0 0,16 4,12 8,18 10,17 6,11 12,8" fill="#E63B2E" />
        </g>
      </svg>
    </div>
  );
}

/* ─── Main Work Section ─── */
const PROJECTS = [
  {
    id: 'tebillion',
    name: 'TEBillion CRM',
    description: 'AI-powered mobile CRM empowering global sales teams with field-ready tools.',
    tech: ['React Native', 'React Query', 'Axios', 'AI/ML'],
    CardComponent: ShufflerCard,
  },
  {
    id: 'otsy-travel',
    name: 'Otsy — Travel & Social',
    description: 'Travel & social platform with complex UI flows, payments, and GraphQL data handling.',
    tech: ['React Native', 'GraphQL', 'Firebase', 'Payments'],
    CardComponent: TypewriterCard,
  },
  {
    id: 'otsy-tc',
    name: 'Otsy @ TechCrunch Disrupt',
    description: 'Featured at TechCrunch Disrupt. Built at NextGen Invent (INC.5000).',
    tech: ['React Native', 'GraphQL', 'Node.js', 'Authentication'],
    CardComponent: CursorProtocolCard,
  },
];

export default function Work() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.work-card');
      if (cards) {
        gsap.set(cards, { y: 60, autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(cards, {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out',
            });
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-spacing px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="font-mono text-xs text-ghost uppercase tracking-widest">Featured Work</span>
        <h2 className="font-grotesk font-bold text-ink text-3xl md:text-4xl mt-2">
          Functional Artifacts
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="work-card card-surface p-6 flex flex-col">
            <project.CardComponent />

            <h3 className="font-grotesk font-bold text-ink text-lg mt-2">{project.name}</h3>
            <p className="font-grotesk text-ghost text-sm mt-1 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-[10px] text-ink/50 bg-ink/5 px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-ink/8">
              <span className="font-mono text-xs text-signal cursor-pointer hover:underline">
                View Case Study →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
