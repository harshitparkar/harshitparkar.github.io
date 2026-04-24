'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const children = sectionRef.current?.querySelectorAll('.cta-content > *');
      if (children) {
        gsap.set(children, { y: 40, autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(children, {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
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
    <section id="cta" ref={sectionRef} className="relative bg-ink overflow-hidden">
      {/* Decorative corner lines */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-paper/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-paper/10" />

      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-signal/5 via-transparent to-transparent opacity-50" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(230,59,46,0.06) 0%, transparent 60%)'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36">
        <div className="cta-content">
          <span className="font-mono text-xs text-paper/30 uppercase tracking-widest mb-6 block">
            {'// ready for the next challenge'}
          </span>

          <p className="font-drama text-paper text-3xl md:text-5xl lg:text-6xl leading-[1.2] mb-8">
            The best mobile teams are building something that{' '}
            <span className="text-signal">matters.</span>
          </p>

          <p className="font-grotesk text-paper/60 text-base md:text-lg mb-10 max-w-2xl">
            Senior React Native Engineer. Open to Lead roles. 6+ years.
            <br />
            Mumbai / Remote / Bengaluru.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="mailto:harshitparkar.connect@gmail.com"
              className="btn-magnetic bg-signal text-paper px-10 py-5 text-lg md:text-xl inline-flex"
            >
              <span className="btn-bg bg-paper" />
              <span className="btn-label">Let&apos;s talk →</span>
            </a>

            <a
              href="https://www.linkedin.com/in/harshitparkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic bg-transparent border border-paper/20 text-paper px-8 py-5 text-base md:text-lg inline-flex hover:border-paper/40"
            >
              <span className="btn-bg bg-paper/10" />
              <span className="btn-label">LinkedIn Profile</span>
            </a>
          </div>

          {/* Contact details */}
          <div className="flex flex-col sm:flex-row gap-6 text-paper/30">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="font-mono text-xs">harshitparkar.connect@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="font-mono text-xs">Mumbai, India · Open to Remote</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
