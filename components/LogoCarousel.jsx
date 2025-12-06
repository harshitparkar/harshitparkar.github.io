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
        <div className="flex gap-10 items-center animate-marquee py-4">
          {display.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer" className="flex items-center justify-center p-6 rounded-xl glass border border-divider hover:bg-button-hover transition-colors duration-200 min-w-max">
              <img
                src={l.src}
                alt={l.alt}
                onError={handleImgError}
                className={`w-32 h-32 object-contain transition-all duration-300 ${theme === 'dark' ? 'brightness-0 invert' : 'brightness-0'
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
