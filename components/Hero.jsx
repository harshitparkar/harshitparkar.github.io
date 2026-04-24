'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-bg-img', { scale: 1.15, duration: 2, ease: 'power2.out' })
        .from('.hero-line-1', { y: 60, opacity: 0, duration: 0.9 }, 0.3)
        .from('.hero-line-2', { y: 60, opacity: 0, duration: 0.9 }, 0.5)
        .from('.hero-line-3', { y: 60, opacity: 0, duration: 0.9 }, 0.7)
        .from('.hero-badge', { y: 30, opacity: 0, duration: 0.6, stagger: 0.08 }, 0.9)
        .from('.hero-cta', { y: 30, opacity: 0, duration: 0.6 }, 1.1)
        .from('.hero-scroll-hint', { opacity: 0, y: 10, duration: 0.6 }, 1.4);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-end overflow-hidden"
      style={{ scrollMarginTop: 0 }}
    >
      {/* Background image with zoom effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1920&q=80"
          alt=""
          className="hero-bg-img w-full h-full object-cover will-change-transform"
          loading="eager"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />
      </div>

      {/* Ambient floating SVG — top right */}
      <div className="absolute top-20 right-10 md:top-32 md:right-20 opacity-[0.06]">
        <svg width="300" height="300" viewBox="0 0 300 300" className="ambient-spin">
          <circle cx="150" cy="150" r="120" stroke="#E8E4DD" strokeWidth="0.5" fill="none" />
          <circle cx="150" cy="150" r="80" stroke="#E8E4DD" strokeWidth="0.5" fill="none" />
          <circle cx="150" cy="150" r="40" stroke="#E8E4DD" strokeWidth="0.5" fill="none" />
          <line x1="30" y1="150" x2="270" y2="150" stroke="#E8E4DD" strokeWidth="0.3" />
          <line x1="150" y1="30" x2="150" y2="270" stroke="#E8E4DD" strokeWidth="0.3" />
          <line x1="60" y1="60" x2="240" y2="240" stroke="#E8E4DD" strokeWidth="0.3" />
          <line x1="240" y1="60" x2="60" y2="240" stroke="#E8E4DD" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Grid pattern — bottom left */}
      <div className="absolute bottom-32 left-8 opacity-[0.04] hidden md:block">
        <svg width="120" height="120" viewBox="0 0 120 120">
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <circle
                key={`${r}-${c}`}
                cx={10 + c * 20}
                cy={10 + r * 20}
                r="1"
                fill="#E8E4DD"
              />
            ))
          )}
        </svg>
      </div>

      {/* Content — bottom-left */}
      <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div className="hero-line-1 font-grotesk text-paper/60 text-sm md:text-base tracking-widest uppercase mb-4 font-mono">
          Senior React Native Engineer · 6+ Years
        </div>

        <h1 className="mb-6">
          <span className="hero-line-2 block font-grotesk font-bold text-paper text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
            Senior engineer
            <br />
            who thinks in
          </span>
          <span className="hero-line-3 block font-drama text-signal text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mt-2">
            systems.
          </span>
        </h1>

        {/* Credibility badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="hero-badge pill-chip border-paper/30 text-paper/80">
            <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block" />
            IEEE Published
          </span>
          <span className="hero-badge pill-chip border-paper/30 text-paper/80">
            <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block" />
            Smart India Hackathon Winner
          </span>
          <span className="hero-badge pill-chip border-paper/30 text-paper/80">
            <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block" />
            TechCrunch Disrupt Featured
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo('cta')}
          className="hero-cta btn-magnetic bg-signal text-paper px-8 py-4 text-base md:text-lg"
        >
          <span className="btn-bg bg-paper" />
          <span className="btn-label group-hover:text-ink transition-colors">Open to senior/lead roles — let&apos;s talk</span>
        </button>

        {/* Scroll hint */}
        <div className="hero-scroll-hint absolute bottom-8 right-8 md:right-12 hidden md:flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] text-paper/30 uppercase tracking-widest writing-vertical">
            scroll
          </span>
          <div className="w-[1px] h-12 bg-paper/20 relative overflow-hidden">
            <div className="scroll-line-fill w-full h-full bg-signal" />
          </div>
        </div>
      </div>
    </section>
  );
}
