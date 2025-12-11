'use client';
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Header({ onNav }) {
  const { theme, toggleTheme } = useTheme();

  // Delegate scrolling to the page's scrollToId() if provided
  function handleNavClick(e, id) {
    e.preventDefault();

    if (typeof onNav === 'function') {
      try {
        onNav(id);
        return; // STOP — let the parent handle scrolling
      } catch (err) {
        console.error('onNav failed, falling back to local scroll:', err);
      }
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = id;
    }
  }

  const items = ['home', 'experience', 'awards', 'trusted-by', 'tech', 'projects', 'contact'];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-header border-b border-divider">
      <div
        className="max-w-full mx-auto px-4 h-18 flex items-center justify-between"
        style={{ height: 72 }}
      >
        {/* Name on the left */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/header-logo.png"
            alt="Logo"
            className={`w-10 h-10 object-contain transition-all duration-300 ${theme === 'light' ? 'invert' : ''}`}
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

        <div className="flex items-center gap-6">
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {items.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="text-sm capitalize text-secondary transition-all duration-300 hover:text-primary bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_1px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_1px] pb-1 px-2"
              >
                {id.replace('-', ' ')}
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-button-bg hover:bg-button-hover transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              // Sun icon for light mode
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
