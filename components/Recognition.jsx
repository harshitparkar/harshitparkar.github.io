'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ACHIEVEMENTS = [
  {
    number: '01',
    icon: '🏗️',
    label: 'TechCrunch Disrupt',
    sublabel: 'Featured Project — Otsy',
    detail: 'Travel & social platform spotlighted at one of tech\'s premier stages. Built end-to-end mobile experience with React Native.',
  },
  {
    number: '02',
    icon: '🏆',
    label: 'Smart India Hackathon',
    sublabel: 'National Winner — SIH 2020',
    detail: 'Won for Criminal Portrait Building App for Ministry of Madhya Pradesh (PS: MS342). Judged by MHRD & AICTE with Govt of India.',
  },
  {
    number: '03',
    icon: '📄',
    label: 'IEEE Published',
    sublabel: 'Research Paper',
    detail: 'Published researcher with IEEE. Combining academic rigor with practical engineering to push mobile development forward.',
  },
  {
    number: '04',
    icon: '🎓',
    label: 'MBA — IT Management',
    sublabel: 'Amity University',
    detail: 'Engineering decisions backed by business architecture. Understanding the "why" behind technical choices at scale.',
  },
];

export default function Recognition() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.achievement-card');
      if (cards) {
        gsap.set(cards, { y: 50, autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(cards, {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: 'power3.out',
            });
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="recognition" ref={sectionRef} className="section-spacing px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="font-mono text-xs text-ghost uppercase tracking-widest">Recognition</span>
        <h2 className="font-grotesk font-bold text-ink text-3xl md:text-4xl mt-2">
          Signal, Not Noise
        </h2>
        <p className="font-grotesk text-ghost text-base mt-3 max-w-xl">
          Awards and publications that signal depth — not vanity metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.number}
            className="achievement-card group relative p-7 md:p-8 bg-offwhite border border-ink/8 hover:border-signal/30 transition-all duration-400"
            style={{ borderRadius: '2rem' }}
          >
            {/* Number watermark */}
            <span className="absolute top-5 right-6 font-mono text-5xl md:text-6xl font-bold text-ink/[0.04] select-none group-hover:text-signal/10 transition-colors duration-500">
              {item.number}
            </span>

            <div className="relative z-10">
              {/* Icon + Signal bar */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{item.icon}</span>
                <div className="w-8 h-[2px] bg-signal" />
              </div>

              <h3 className="font-grotesk font-bold text-ink text-lg md:text-xl mb-1 group-hover:text-signal transition-colors duration-300">
                {item.label}
              </h3>
              <p className="font-mono text-xs text-ghost uppercase tracking-wider mb-4">
                {item.sublabel}
              </p>
              <p className="font-grotesk text-inkLight text-sm leading-relaxed">
                {item.detail}
              </p>
            </div>

            {/* Bottom accent line on hover */}
            <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-signal scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ borderRadius: '1px' }} />
          </div>
        ))}
      </div>
    </section>
  );
}
