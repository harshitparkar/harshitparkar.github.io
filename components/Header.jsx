'use client';
import React from 'react';

export default function Header({ onNav }) {

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

  const items = ['home', 'about', 'tech', 'worked-with', 'projects', 'contact'];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/6">
      <div
        className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between"
        style={{ height: 72 }}
      >
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            Harshit S. Parkar
          </h1>
          <p className="text-xs text-slate-300">
            Senior Software Engineer · React Native · Next.js
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {items.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="text-sm transition-opacity duration-200 hover:underline capitalize"
            >
              {id.replace('-', ' ')}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
