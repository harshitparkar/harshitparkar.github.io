'use client';
import React from 'react';
import COMPANY_LOGOS from '../data/companyLogos';
import { useTheme } from '../contexts/ThemeContext';

export default function LogoCarousel() {
  const { theme } = useTheme();
  // Create 2 identical sets of logos, each repeated 4 times to ensure sufficient width for seamless scrolling
  const set = [...COMPANY_LOGOS, ...COMPANY_LOGOS, ...COMPANY_LOGOS, ...COMPANY_LOGOS];
  const display = [...set, ...set];
  const fallback = 'data:image/svg+xml;utf8,' + encodeURIComponent('<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="100%" height="100%" fill="rgba(255,255,255,0.04)"/></svg>');
  function handleImgError(e) { const el = e.currentTarget; if (el.dataset.fallback) { el.src = fallback; } else { el.dataset.fallback = '1'; el.src = fallback; } }
  return (
    <div className="w-full">
      <div className="overflow-hidden">
        <div className="flex gap-10 items-center animate-marquee py-2">
          {display.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer" className="flex items-center justify-center p-4 min-w-max transition-all duration-300 opacity-50 blur-[0.5px] hover:opacity-100 hover:blur-0 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
              <img
                src={l.src}
                alt={l.alt}
                onError={handleImgError}
                className={`w-24 h-24 object-contain transition-all duration-300 ${theme === 'dark' ? 'brightness-0 invert' : 'brightness-0'
                  }`}
              />
            </a>
          ))}
        </div>
      </div>
      <style>{"@keyframes marquee{0%{transform:translateX(0);}100%{transform:translateX(-50%);} } .animate-marquee{animation:marquee 40s linear infinite;} .animate-marquee:hover{animation-play-state:paused;}"}</style>
    </div>
  );
}
