'use client';

import React, { useCallback } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { NAV_ITEMS, HEADER_CONFIG } from '../data/navigation';

// ─────────────────────────────────────────────────────────────────────────────
// ICON COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

const SunIcon = () => (
  <svg
    className="w-5 h-5 text-primary"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    className="w-5 h-5 text-primary"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

const Logo = ({ theme }) => (
  <div className="flex items-center gap-3">
    <img
      src="/assets/header-logo.png"
      alt="Harshit Parkar Logo"
      className={`w-10 h-10 object-contain transition-all duration-300 ${theme === 'light' ? 'invert' : ''
        }`}
    />
    <div>
      <h1 className="text-xl font-semibold tracking-tight text-primary">
        Harshit S. Parkar
      </h1>
      <p className="text-xs text-secondary">
        Senior Software Engineer · React Native · Next.js
      </p>
    </div>
  </div>
);

const NavLink = ({ id, label, onClick }) => (
  <a
    href={`#${id}`}
    onClick={(e) => onClick(e, id)}
    className="
      text-sm text-secondary
      transition-all duration-300
      hover:text-primary
      bg-gradient-to-r from-cyan-500 to-blue-500
      bg-[length:0%_1px] bg-no-repeat bg-left-bottom
      hover:bg-[length:100%_1px]
      pb-1 px-2
    "
  >
    {label}
  </a>
);

const Navigation = ({ items, onNavClick }) => (
  <nav className="hidden md:flex items-center gap-6">
    {items
      .filter((item) => item.enabled !== false)
      .map(({ id, label }) => (
        <NavLink key={id} id={id} label={label} onClick={onNavClick} />
      ))}
  </nav>
);

const ThemeToggle = ({ theme, onToggle }) => (
  <button
    onClick={onToggle}
    className="p-2 rounded-lg bg-button-bg hover:bg-button-hover transition-colors duration-200"
    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
  >
    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
  </button>
);

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Header({ onNav }) {
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = useCallback(
    (e, id) => {
      e.preventDefault();

      // Delegate to parent handler if provided
      if (typeof onNav === 'function') {
        try {
          onNav(id);
          return;
        } catch (err) {
          console.error('onNav callback failed, using fallback scroll:', err);
        }
      }

      // Fallback: scroll to element or update hash
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = id;
      }
    },
    [onNav]
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-header border-b border-divider">
      <div
        className="max-w-full mx-auto px-4 flex items-center justify-between"
        style={{ height: HEADER_CONFIG.height }}
      >
        <Logo theme={theme} />

        <div className="flex items-center gap-6">
          <Navigation items={NAV_ITEMS} onNavClick={handleNavClick} />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  );
}
