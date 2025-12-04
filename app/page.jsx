'use client';
import React from 'react';
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
    <div className="min-h-screen bg-gradient-to-b from-[#07101a] via-[#081422] to-[#041018] text-white antialiased overflow-x-hidden">
      <style>{`@keyframes floatY{0%{transform:translateY(0);}50%{transform:translateY(-6px);}100%{transform:translateY(0);}} .glass{background:rgba(255,255,255,0.04);backdrop-filter:blur(8px);} html{scroll-behavior:smooth;} .section-pad{padding-top:24px;padding-bottom:24px;scroll-margin-top:90px;} .chip{border-radius:15px;} *{box-sizing:border-box;}`}</style>
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
      <footer className="py-4 text-center text-slate-400 text-sm">© {new Date().getFullYear()} Harshit S. Parkar — Built with React & Tailwind</footer>
    </div>
  );
}
