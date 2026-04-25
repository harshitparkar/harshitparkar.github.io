'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function KeyCastSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade content up
      gsap.fromTo(
        '.kc-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none"
          }
        }
      );

      // Bluetooth line animation
      gsap.fromTo(
        '.kc-bt-line',
        { strokeDashoffset: 400 },
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-dark diagonal-top-dark relative z-30 pb-32 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] text-bone opacity-[0.03] whitespace-nowrap pointer-events-none select-none">
        Since 1998
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-32 text-center relative z-10 kc-content">
        
        <div className="font-mono text-[12px] text-ash tracking-widest uppercase mb-6">
          Personal Project · React Native · iOS & Android
        </div>

        <h2 className="font-display text-[64px] md:text-[80px] text-bone mb-12">
          KeyCast
        </h2>

        <p className="font-sans text-[18px] md:text-[24px] text-bone/80 font-light max-w-3xl mx-auto leading-relaxed mb-16">
          Your phone becomes your keyboard. Bluetooth HID, native code, human-like typing.
        </p>

        {/* Custom SVG Animation Area */}
        <div className="w-full max-w-[600px] mx-auto h-[200px] relative mb-16 flex items-center justify-between px-8">
          
          {/* Left: Phone */}
          <div className="w-[80px] h-[160px] bg-deep-void border border-white/20 rounded-2xl flex items-center justify-center relative">
            <div className="absolute top-2 w-[30px] h-[4px] bg-white/10 rounded-full"></div>
            <div className="text-gold text-2xl">📱</div>
          </div>

          {/* Center: SVG Connection */}
          <svg width="300" height="100" viewBox="0 0 300 100" fill="none" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-0">
            {/* Base line */}
            <path d="M0 50 C 100 50, 200 50, 300 50" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
            {/* Animated gold dashed line */}
            <path className="kc-bt-line" d="M0 50 C 100 50, 200 50, 300 50" stroke="#c9a96e" strokeWidth="2" strokeDasharray="10 10" strokeDashoffset="400" />
            
            {/* Pulsing Bluetooth icon in middle */}
            <circle cx="150" cy="50" r="16" fill="#0a0a0f" stroke="#c9a96e" strokeWidth="1" />
            <path d="M148 42 L154 48 L148 54 L148 42 Z" stroke="#c9a96e" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
            <path d="M148 54 L154 60 L148 66 L148 54 Z" stroke="#c9a96e" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
            <path d="M148 42 L148 66" stroke="#c9a96e" strokeWidth="1.5" />
          </svg>

          {/* Right: Laptop */}
          <div className="w-[140px] h-[100px] bg-deep-void border border-white/20 rounded-t-lg relative flex flex-col justify-end">
            <div className="w-[160px] h-[8px] bg-white/20 rounded-b-md absolute -bottom-[8px] -left-[10px]"></div>
            <div className="w-full h-full p-2">
              <div className="w-full h-full bg-black/50 overflow-hidden relative font-mono text-[8px] text-green-400 p-2 text-left flex flex-col justify-end pb-4">
                <div className="animate-pulse">Typing..._</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {['React Native', 'Bluetooth HID', 'Custom Native Modules', 'iOS', 'Android'].map(t => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
        </div>

        <a href="#contact" className="cta-button">
          Private Repository — Contact to View
        </a>

      </div>
    </section>
  );
}
