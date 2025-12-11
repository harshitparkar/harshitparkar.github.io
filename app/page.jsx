'use client';
import React from 'react';
import Cursor from '../components/Cursor';

import SectionDivider from '../components/SectionDivider';
import Header from '../components/Header';
import Hero from '../components/Hero';

import TrustedBy from '../components/TrustedBy';

import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Awards from '../components/Awards';
import Experience from '../components/Experience';

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
    <div className="min-h-screen bg-background text-primary antialiased overflow-x-hidden transition-colors duration-300">

      <Cursor />
      <Header onNav={scrollToId} />


      <main id="home" className="pt-16 w-full px-3 md:px-4 lg:px-5 relative z-0">
        <Hero onNav={scrollToId} />
        <SectionDivider />
        <Experience />

        <SectionDivider />
        <TrustedBy />

        <SectionDivider />
        <TechStack />

        <SectionDivider />
        <Awards />

        <SectionDivider />
        <Projects />

        <SectionDivider />
        <Contact />
      </main>
      <footer className="py-4 text-center text-secondary text-sm">© {new Date().getFullYear()} Harshit S. Parkar — Built with React & Tailwind</footer>
    </div>

  );
}
