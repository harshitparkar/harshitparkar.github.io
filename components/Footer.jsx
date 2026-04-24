'use client';
import React from 'react';

const FOOTER_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshitparkar/' },
  { label: 'GitHub', href: 'https://github.com/harshitparkar' },
  { label: 'Email', href: 'mailto:harshitparkar.connect@gmail.com' },
];

const SECTIONS = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Stack', id: 'stack' },
  { label: 'Recognition', id: 'recognition' },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer
      className="bg-ink text-paper pt-16 pb-8 px-6 md:px-12 lg:px-20"
      style={{ borderRadius: '4rem 4rem 0 0' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-grotesk font-bold text-paper text-xl mb-1">Harshit Parkar</h3>
            <p className="font-mono text-xs text-paper/40 mb-4">Senior React Native Engineer</p>
            <p className="font-grotesk text-sm text-paper/30 leading-relaxed max-w-xs">
              Building production mobile apps that millions use — and the architectures that scale them.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-paper/50 uppercase tracking-widest mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="text-left font-grotesk text-sm text-paper/40 hover:text-paper transition-colors"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-xs text-paper/50 uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-grotesk text-sm text-paper/40 hover:text-signal transition-colors inline-flex items-center gap-2 group"
                >
                  {link.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" className="opacity-0 group-hover:opacity-100 transition-opacity" fill="none">
                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Status line */}
        <div className="border-t border-paper/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
            <span className="font-mono text-xs text-paper/40">Available for opportunities</span>
          </div>

          <p className="font-mono text-xs text-paper/20">
            © {new Date().getFullYear()} Harshit Parkar. Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
