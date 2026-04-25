'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const awards = [
  {
    year: '2019',
    event: 'TechCrunch Disrupt',
    location: 'Las Vegas',
    desc: "Featured at the world's most prestigious startup conference for Otsy."
  },
  {
    year: '2020',
    event: 'IEEE Publication',
    location: 'Global',
    desc: "Peer-reviewed research recognised and published by the Institute of Electrical and Electronics Engineers."
  },
  {
    year: '2018',
    event: 'Smart India Hackathon',
    location: 'National Winner',
    desc: "National winner. One of India's most competitive government-sponsored engineering competitions."
  }
];

export default function AwardsPress() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.award-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-bone diagonal-top-bone z-20 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        
        <div className="flex justify-center mb-16">
          <h2 className="font-display text-[40px] text-obsidian text-center">Awards & Press</h2>
        </div>

        <div className="flex flex-col gap-6">
          {awards.map((award, i) => (
            <div key={i} className="award-card relative w-full border border-black/10 bg-[#fbf8f4] overflow-hidden group p-8 md:p-12 min-h-[200px] flex flex-col justify-center">
              
              {/* Subtle background overlay image/gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

              {/* Decorative Background Year */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 font-display text-[100px] md:text-[140px] text-obsidian opacity-5 pointer-events-none select-none transition-transform duration-700 group-hover:scale-110">
                {award.year}
              </div>

              <div className="relative z-10 max-w-2xl">
                <div className="font-mono text-[11px] text-obsidian/50 uppercase tracking-widest mb-3">
                  {award.location}
                </div>
                <h3 className="font-display text-[32px] md:text-[40px] text-obsidian mb-4">
                  {award.event}
                </h3>
                <p className="font-sans text-[14px] md:text-[16px] text-obsidian/80 leading-relaxed">
                  {award.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
