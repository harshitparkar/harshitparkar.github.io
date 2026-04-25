'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WorkArtOfLiving() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.aol-col',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-bone diagonal-top-bone z-20 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row gap-16 md:gap-8">
        
        {/* Left: Art of Living */}
        <div className="aol-col flex-1 border-t border-black/10 pt-8">
          <div className="font-mono text-[12px] text-obsidian/50 tracking-widest uppercase mb-4">
            Coding Team Lead
          </div>
          <h3 className="font-display text-[32px] md:text-[40px] text-obsidian mb-2">
            The Art of Living
          </h3>
          <h4 className="font-sans text-[16px] text-obsidian/70 font-light mb-8">
            College Watershed Project
          </h4>
          <p className="font-sans text-[15px] leading-relaxed text-obsidian max-w-md">
            Built the foundational architecture of The Art of Living app. A globally recognised humanitarian organisation.
          </p>
        </div>

        {/* Right: OutdoorGoats */}
        <div className="aol-col flex-1 border-t border-black/10 pt-8">
          <div className="font-mono text-[12px] text-obsidian/50 tracking-widest uppercase mb-4">
            React Native Developer
          </div>
          <h3 className="font-display text-[32px] md:text-[40px] text-obsidian mb-2">
            OutdoorGoats
          </h3>
          <h4 className="font-sans text-[16px] text-obsidian/70 font-light mb-8">
            Mobile Application
          </h4>
          <p className="font-sans text-[15px] leading-relaxed text-obsidian max-w-md mb-6">
            Shipped mobile application. Company evolved to web.
          </p>
          <a href="https://outdoorgoats.com" target="_blank" rel="noopener noreferrer" className="cta-text-link !text-obsidian hover:!text-gold">
            Visit outdoorgoats.com ↗
          </a>
        </div>

      </div>
    </section>
  );
}
