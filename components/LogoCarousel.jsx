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

    function handleImgError(e) {
        const el = e.currentTarget;
        if (el.dataset.fallback) {
            el.src = fallback;
        } else {
            el.dataset.fallback = '1';
            el.src = fallback;
        }
    }

    return (
        <div className="w-full relative group/carousel">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden py-4">
                <div className="flex gap-12 items-center animate-marquee">
                    {display.map((l, i) => (
                        <a
                            key={i}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center min-w-max transition-all duration-300 group/logo"
                        >
                            <img
                                src={l.src}
                                alt={l.alt}
                                onError={handleImgError}
                                className={`w-28 h-28 object-contain transition-all duration-300 
                    opacity-60 blur-[0.5px] hover:blur-0
                    group-hover/logo:opacity-100 group-hover/logo:scale-110 
                    ${theme === 'dark' ? 'brightness-0 invert' : 'brightness-0'}
                `}
                            />
                        </a>
                    ))}
                </div>
            </div>
            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .group\/carousel:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}
