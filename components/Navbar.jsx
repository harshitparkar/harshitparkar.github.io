'use client';
import React, { useState, useEffect, useCallback } from 'react';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'recognition', label: 'Recognition' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-offwhite/70 backdrop-blur-xl border border-ink/8 shadow-lg'
            : 'bg-transparent'
        }`}
        style={{ borderRadius: '2.5rem', padding: '0.5rem 0.5rem' }}
      >
        <div className="flex items-center gap-1 px-3">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="font-grotesk font-bold text-ink text-sm tracking-tight mr-4 hover:text-signal transition-colors"
          >
            HP
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-3 py-2 text-sm font-grotesk transition-colors rounded-xl ${
                  activeSection === link.id
                    ? 'text-ink font-semibold'
                    : 'text-inkLight hover:text-ink hover:bg-ink/5'
                }`}
              >
                {link.label}
                {/* Active indicator dot */}
                {activeSection === link.id && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-signal" />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollTo('cta')}
            className="btn-magnetic ml-3 bg-ink text-offwhite px-5 py-2 text-sm hidden md:inline-flex"
          >
            <span className="btn-bg bg-signal" />
            <span className="btn-label">Let&apos;s Talk</span>
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden ml-2 p-2 text-ink"
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 6H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 pb-3 px-3 border-t border-ink/8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`block w-full text-left px-3 py-2.5 text-sm font-grotesk transition-colors ${
                  activeSection === link.id
                    ? 'text-signal font-semibold'
                    : 'text-inkLight hover:text-ink'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('cta')}
              className="btn-magnetic mt-2 w-full bg-ink text-offwhite px-5 py-2.5 text-sm"
            >
              <span className="btn-bg bg-signal" />
              <span className="btn-label">Let&apos;s Talk</span>
            </button>
          </div>
        )}
      </nav>

      {/* Scroll-to-top indicator when scrolled far */}
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-ink/80 backdrop-blur-sm text-paper flex items-center justify-center hover:bg-signal transition-all duration-300 shadow-lg hover:scale-110"
          aria-label="Back to top"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 12V2M7 2L2 7M7 2L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </>
  );
}
