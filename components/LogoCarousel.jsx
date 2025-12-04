'use client';
import React from 'react';
import COMPANY_LOGOS from '../data/companyLogos';

export default function LogoCarousel() {
  const display = [...COMPANY_LOGOS, ...COMPANY_LOGOS];
  const fallback = 'data:image/svg+xml;utf8,' + encodeURIComponent('<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="100%" height="100%" fill="rgba(255,255,255,0.04)"/></svg>');
  function handleImgError(e) { const el = e.currentTarget; if (el.dataset.fallback) { el.src = fallback; } else { el.dataset.fallback = '1'; el.src = fallback; } }
  return (
    <div className="w-full">
      <div className="overflow-hidden">
        <div className="flex gap-6 items-center animate-marquee py-2">
          {display.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2 rounded-md bg-white/5">
              <img src={l.src} alt={l.alt} onError={handleImgError} className="w-20 h-20 object-contain" />
            </a>
          ))}
        </div>
      </div>
      <style>{"@keyframes marquee{0%{transform:translateX(0);}100%{transform:translateX(-50%);} } .animate-marquee{animation:marquee 20s linear infinite;} .animate-marquee:hover{animation-play-state:paused;}"}</style>
    </div>
  );
}
