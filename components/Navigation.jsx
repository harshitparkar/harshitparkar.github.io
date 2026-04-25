'use client';
import React, { useState, useEffect } from 'react';
import HPMonogram from './HPMonogram';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-obsidian border-b border-white/[0.08]`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Left: Monogram */}
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => handleScrollTo(e, 'hero')} aria-label="Home">
              <HPMonogram size={40} variant="primary" />
            </a>
          </div>

          {/* Right: Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {['Work', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScrollTo(e, item.toLowerCase())}
                className="nav-link font-sans text-[12px] font-light tracking-[0.1em] text-bone uppercase hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="/assets/Harshit_Parkar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link font-sans text-[12px] font-light tracking-[0.1em] text-gold uppercase hover:text-gold-warm transition-colors flex items-center gap-1"
            >
              Resume ↗
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden nav-link relative w-6 h-6 flex flex-col justify-center gap-[5px]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <span className="w-full h-[1px] bg-bone block"></span>
            <span className="w-full h-[1px] bg-bone block"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-obsidian z-[100] flex flex-col items-center justify-center transition-opacity duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-8 right-6 w-8 h-8 flex items-center justify-center nav-link"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close Menu"
        >
          <span className="relative w-6 h-6">
            <span className="absolute top-1/2 left-0 w-full h-[1px] bg-bone rotate-45"></span>
            <span className="absolute top-1/2 left-0 w-full h-[1px] bg-bone -rotate-45"></span>
          </span>
        </button>

        <nav className="flex flex-col items-center gap-10">
          {['Work', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScrollTo(e, item.toLowerCase())}
              className="font-display text-4xl text-bone"
            >
              {item}
            </a>
          ))}
          <a
            href="/assets/Harshit_Parkar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-4xl text-gold mt-4"
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </>
  );
}
