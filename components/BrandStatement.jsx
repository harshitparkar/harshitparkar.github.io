'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 6, suffix: '+', label: 'years' },
  { target: 4, suffix: '', label: 'companies' },
  { target: 3, suffix: '', label: 'national recognitions' },
  { target: 50, suffix: 'k+', label: 'lines shipped' },
];

export default function BrandStatement() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef([]);
  statsRef.current = [];

  const addToRefs = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in text
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate Stats
      statsRef.current.forEach((statEl, index) => {
        const numberEl = statEl.querySelector('.stat-number');
        const targetVal = parseFloat(numberEl.getAttribute('data-target'));
        
        gsap.fromTo(
          numberEl,
          { innerHTML: 0 },
          {
            innerHTML: targetVal,
            duration: 1.4,
            ease: "power2.out",
            delay: index * 0.2,
            snap: { innerHTML: 1 },
            onUpdate: function() {
              numberEl.innerHTML = Math.round(this.targets()[0].innerHTML);
            },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          }
        );
        
        // Fade up the whole stat block
        gsap.fromTo(
          statEl,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="section-bone diagonal-top-bone relative z-20"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col lg:flex-row gap-20 items-center justify-between">
        
        {/* Left: Statement */}
        <div className="w-full lg:w-1/2" ref={textRef}>
          <div className="font-display text-[160px] md:text-[200px] leading-none text-gold opacity-40 select-none absolute top-10 md:top-20 -left-4 md:left-4">
            "
          </div>
          <h2 className="relative z-10 font-display text-[36px] md:text-[48px] leading-[1.1] tracking-display text-obsidian mt-12 md:mt-24">
            I don't write code. <br/>
            I engineer mobile experiences that companies ship to millions.
          </h2>
        </div>

        {/* Right: Stats 2x2 Grid */}
        <div className="w-full lg:w-5/12 grid grid-cols-2 gap-x-8 gap-y-16">
          {stats.map((stat, i) => (
            <div key={i} ref={addToRefs} className="flex flex-col">
              <div className="flex items-baseline text-gold">
                <span 
                  className="stat-number font-display text-[48px] md:text-[64px] leading-none"
                  data-target={stat.target}
                >
                  0
                </span>
                <span className="font-display text-[32px] md:text-[48px] leading-none ml-1">
                  {stat.suffix}
                </span>
              </div>
              <div className="mt-2 font-mono text-[11px] text-obsidian/60 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
