'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word reveal for main text
      const words = sectionRef.current.querySelectorAll('.reveal-word');
      gsap.from(words, {
        opacity: 0.1,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center center',
          scrub: 1,
        },
      });

      // Code comments fade in
      gsap.from('.philosophy-code', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.philosophy-code-wrap',
          start: 'top 85%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const splitWords = (text, className = '') =>
    text.split(' ').map((word, i) => (
      <span key={i} className={`reveal-word inline-block mr-[0.3em] ${className}`}>
        {word}
      </span>
    ));

  return (
    <section ref={sectionRef} className="relative bg-ink overflow-hidden">
      {/* Parallax texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8E4DD' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36">
        <div className="mb-8">
          <p className="font-grotesk text-paper/50 text-lg md:text-xl leading-relaxed">
            {splitWords('Most mobile engineers ship')}
            <span className="reveal-word inline-block mr-[0.3em] font-bold text-paper">features.</span>
          </p>
        </div>

        <p className="font-grotesk text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-paper mb-6">
          {splitWords('I ship')}
          <span className="reveal-word inline-block font-drama text-signal">systems.</span>
        </p>

        <div className="philosophy-code-wrap mt-12 space-y-2">
          <p className="philosophy-code font-mono text-sm text-paper/30">
            {'// React Native internals. JSI. Fabric. Turbo Modules.'}
          </p>
          <p className="philosophy-code font-mono text-sm text-paper/30">
            {'// Micro-frontend architecture. Module Federation. Re.Pack 4.'}
          </p>
          <p className="philosophy-code font-mono text-sm text-paper/30">
            {'// Not just shipping — engineering for scale.'}
          </p>
        </div>
      </div>
    </section>
  );
}
