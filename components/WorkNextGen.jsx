'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Otsy',
    badge: 'TechCrunch Disrupt · Las Vegas',
    desc: 'A travel and social platform. Featured at TechCrunch Disrupt, Las Vegas.',
    tech: ['React Native', 'Node.js', 'AWS'],
    mockupType: 'mobile'
  },
  {
    name: 'Cardware',
    badge: 'CatalystXL',
    desc: 'Enterprise knowledge distribution platform delivering cards of information to mobile workforces.',
    tech: ['React Native', 'Redux', 'Firebase'],
    mockupType: 'mobile'
  },
  {
    name: 'Rhino Tool House',
    badge: 'Web Platform',
    desc: 'High-performance web architecture for industrial tool manufacturing and distribution.',
    tech: ['Next.js', 'React', 'Tailwind'],
    mockupType: 'web'
  },
  {
    name: 'KeyCast',
    badge: 'Personal Project',
    desc: 'Your phone becomes your keyboard. Bluetooth HID, native code, human-like typing.',
    tech: ['React Native', 'Bluetooth HID', 'Native Modules'],
    mockupType: 'mobile'
  }
];

export default function WorkNextGen() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ng-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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

  const handleMouseMove = (e, card) => {
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateY(${x * 0.02}deg) rotateX(${-y * 0.02}deg) translateZ(10px)`;
    
    // Parallax inner device
    const device = card.querySelector('.ng-device');
    if (device) {
      device.style.transform = `translateX(${x * 0.03}px) translateY(${y * 0.03}px) translateZ(30px)`;
    }
  };

  const handleMouseLeave = (card) => {
    if (!card) return;
    card.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(0)`;
    const device = card.querySelector('.ng-device');
    if (device) {
      device.style.transform = `translateX(0) translateY(0) translateZ(0)`;
    }
  };

  return (
    <section ref={sectionRef} className="section-bone diagonal-top-bone z-20 pb-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24">
        
        {/* Header */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex items-center px-6 py-2 bg-obsidian rounded-full font-mono text-[13px] text-gold tracking-widest uppercase shadow-xl">
            Selected Projects
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-[1200px]">
          {projects.map((p, i) => (
            <div 
              key={i}
              className="ng-card tilt-card relative bg-white border border-black/[0.05] p-8 flex flex-col h-full overflow-hidden group cursor-none"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              {/* Hairline border trace animation via CSS */}
              <div className="absolute inset-0 border border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {p.badge && (
                <div className="mb-6 self-start">
                  <span className={`inline-block px-3 py-1 text-[10px] font-mono uppercase tracking-wider ${p.badge.includes('TechCrunch') ? 'bg-gold text-obsidian font-bold' : 'bg-black/5 text-obsidian/70'}`}>
                    {p.badge}
                  </span>
                </div>
              )}

              <h4 className="font-display text-[32px] text-obsidian mb-4">{p.name}</h4>
              <p className="font-sans text-[14px] text-obsidian/70 leading-relaxed mb-8 flex-grow">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-12">
                {p.tech.map((t) => (
                  <span key={t} className="tech-chip text-[10px]">{t}</span>
                ))}
              </div>

              {/* Device Mockup */}
              <div className="ng-device w-full h-[200px] flex justify-center items-end mt-auto transition-transform duration-100 ease-out">
                {p.mockupType === 'mobile' ? (
                  <div className="w-[140px] h-[280px] bg-obsidian rounded-t-3xl border-4 border-black/10 relative overflow-hidden translate-y-10 group-hover:translate-y-4 transition-transform duration-500">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[40px] h-[12px] bg-black rounded-full"></div>
                    <div className="w-full h-full bg-[#f8f8f8] mt-6 p-4">
                      <div className="w-full h-4 bg-black/5 rounded mb-2"></div>
                      <div className="w-3/4 h-4 bg-black/5 rounded mb-4"></div>
                      <div className="w-full h-32 bg-black/5 rounded-xl"></div>
                    </div>
                  </div>
                ) : (
                  <div className="w-[240px] h-[160px] bg-[#ddd] rounded-t-lg border-x-4 border-t-4 border-[#ccc] relative overflow-hidden translate-y-6 group-hover:translate-y-2 transition-transform duration-500">
                     <div className="w-full h-4 bg-[#ccc] flex items-center px-2 gap-1">
                       <div className="w-1.5 h-1.5 rounded-full bg-black/20"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-black/20"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-black/20"></div>
                     </div>
                     <div className="w-full h-full bg-white p-4">
                        <div className="w-full h-24 bg-black/5 rounded"></div>
                     </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
