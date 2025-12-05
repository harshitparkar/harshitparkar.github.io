'use client';
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Cursor from '../components/Cursor';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkedWith from '../components/WorkedWith';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Page() {
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    // Fallback if element not found (e.g. if id='home' was missing)
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-primary antialiased overflow-x-hidden transition-colors duration-300">
        <style>{`
          @keyframes floatY{0%{transform:translateY(0);}50%{transform:translateY(-6px);}100%{transform:translateY(0);}} 
          .glass{background:var(--glass-bg);backdrop-filter:blur(8px);} 
          html{scroll-behavior:smooth;} 
          .section-pad{padding-top:24px;padding-bottom:24px;scroll-margin-top:90px;} 
          .chip{border-radius:15px;} 
          *{box-sizing:border-box;}
          
          /* Dark theme (default) */
          :root {
            --bg-start: #07101a;
            --bg-mid: #081422;
            --bg-end: #041018;
            --text-primary: #ffffff;
            --text-secondary: #cbd5e1;
            --glass-bg: rgba(255,255,255,0.04);
            --header-bg: rgba(0,0,0,0.3);
            --divider: rgba(255,255,255,0.06);
            --button-bg: rgba(255,255,255,0.1);
            --button-hover: rgba(255,255,255,0.15);
          }
          
          /* Light theme */
          html.light {
            --bg-start: #f8fafc;
            --bg-mid: #e2e8f0;
            --bg-end: #cbd5e1;
            --text-primary: #0f172a;
            --text-secondary: #475569;
            --glass-bg: rgba(0,0,0,0.02);
            --header-bg: rgba(255,255,255,0.7);
            --divider: rgba(0,0,0,0.1);
            --button-bg: rgba(0,0,0,0.05);
            --button-hover: rgba(0,0,0,0.1);
          }
          
          .bg-background {
            background: linear-gradient(to bottom, var(--bg-start), var(--bg-mid), var(--bg-end));
          }
          .text-primary { color: var(--text-primary); }
          .text-secondary { color: var(--text-secondary); }
          .bg-header { background: var(--header-bg); }
          .border-divider { border-color: var(--divider); }
          .bg-button-bg { background: var(--button-bg); }
          .bg-button-hover { background: var(--button-hover); }
        `}</style>
        <Cursor />
        <Header onNav={scrollToId} />
        <main id="home" className="pt-16 w-full px-3 md:px-4 lg:px-5">
          <Hero onNav={scrollToId} />
          <About />
          <WorkedWith />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <footer className="py-4 text-center text-secondary text-sm">© {new Date().getFullYear()} Harshit S. Parkar — Built with React & Tailwind</footer>
      </div>
    </ThemeProvider>
  );
}
