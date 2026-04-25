'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WorkTEBillion() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up content
      gsap.fromTo(
        '.teb-content > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );

      // SVG Draw animation
      gsap.fromTo(
        '.teb-svg-path',
        { strokeDashoffset: 600 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-dark diagonal-top-dark z-30 pb-32">
      {/* Background grain applied via global class */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 teb-content">
          <div className="mb-8 font-mono text-[12px] text-gold tracking-widest uppercase flex items-center gap-4">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse-dot" />
            Currently here →
          </div>
          
          <h3 className="font-display text-[40px] md:text-[56px] leading-[1.1] text-bone mb-2">
            Enterprise CRM
          </h3>
          <h4 className="font-sans text-[16px] md:text-[20px] text-bone/80 font-light mb-6">
            iOS & Android
          </h4>
          
          <div className="font-sans text-[13px] text-ash uppercase tracking-wider mb-2">
            Senior Software Engineer
          </div>
          <div className="font-mono text-[12px] text-gold mb-8">
            TEBillion · Ardentisys · London
          </div>
          
          <p className="font-sans text-[15px] leading-relaxed text-bone/70 max-w-lg mb-10">
            An enterprise-grade CRM for iOS and Android. Built for scale, shipped for London.
            Leading the mobile architecture using new architecture paradigms to ensure 60fps performance across thousands of dynamic data views.
          </p>

          <div className="flex flex-wrap gap-2">
            {['React Native 0.74', 'JSI', 'Fabric', 'Turbo Modules', 'Zustand', 'Reanimated 2', 'Firebase'].map((tech) => (
              <span key={tech} className="tech-chip">{tech}</span>
            ))}
          </div>
        </div>

        {/* Right Column: SVG Architecture Diagram */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end perspective-[1200px]">
          <div className="relative w-full max-w-[500px] aspect-square bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center p-8 overflow-hidden tilt-card"
               onMouseMove={(e) => {
                 const card = e.currentTarget;
                 const rect = card.getBoundingClientRect();
                 const x = e.clientX - rect.left - rect.width / 2;
                 const y = e.clientY - rect.top - rect.height / 2;
                 card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) translateZ(12px)`;
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(0)`;
               }}
          >
            <div className="absolute inset-0 hairline-grid opacity-20"></div>
            
            <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-2xl">
              <rect x="150" y="50" width="100" height="60" rx="4" fill="#111118" stroke="#c9a96e" strokeWidth="1" />
              <text x="200" y="85" fill="#f5f0e8" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle">React Native</text>
              
              <rect x="50" y="250" width="80" height="50" rx="4" fill="#0a0a0f" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <text x="90" y="278" fill="#888" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">Fabric</text>
              
              <rect x="270" y="250" width="80" height="50" rx="4" fill="#0a0a0f" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <text x="310" y="278" fill="#888" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">Turbo</text>
              
              <rect x="150" y="150" width="100" height="40" rx="4" fill="#111118" stroke="#c9a96e" strokeWidth="1" strokeDasharray="4 4"/>
              <text x="200" y="174" fill="#c9a96e" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">JSI Bridge</text>
              
              {/* Paths */}
              <path className="teb-svg-path" d="M200 110 L200 150" stroke="#c9a96e" strokeWidth="1.5" strokeDasharray="600" strokeLinecap="round" />
              <path className="teb-svg-path" d="M160 190 L90 250" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="600" strokeLinecap="round" />
              <path className="teb-svg-path" d="M240 190 L310 250" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="600" strokeLinecap="round" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
