'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Counter animation
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.ceil(Math.random() * 4);
      });
    }, 30);

    // After counter reaches ~100, animate out
    const timeout = setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: () => onComplete?.(),
      });

      tl.to('.loader-counter', {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: 'power3.in',
      })
        .to('.loader-monogram', {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in',
        }, '-=0.2')
        .to('.loader-line', {
          scaleX: 0,
          duration: 0.4,
          ease: 'power3.in',
        }, '-=0.3')
        .to('.loader-curtain-top', {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
        }, '-=0.1')
        .to('.loader-curtain-bottom', {
          yPercent: 100,
          duration: 0.8,
          ease: 'power4.inOut',
        }, '<');
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[100] pointer-events-none">
      {/* Top curtain */}
      <div className="loader-curtain-top absolute inset-x-0 top-0 h-1/2 bg-ink" />
      {/* Bottom curtain */}
      <div className="loader-curtain-bottom absolute inset-x-0 bottom-0 h-1/2 bg-ink" />

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          {/* Monogram */}
          <div className="loader-monogram font-grotesk font-bold text-paper text-5xl md:text-7xl tracking-tighter mb-6">
            HP
          </div>

          {/* Progress line */}
          <div className="loader-line w-48 h-[1px] bg-paper/20 mx-auto mb-4 origin-left">
            <div
              className="h-full bg-signal transition-all duration-100 ease-out"
              style={{ width: `${Math.min(count, 100)}%` }}
            />
          </div>

          {/* Counter */}
          <div className="loader-counter font-mono text-xs text-paper/40 tracking-widest">
            {String(Math.min(count, 100)).padStart(3, '0')}
          </div>
        </div>
      </div>
    </div>
  );
}
