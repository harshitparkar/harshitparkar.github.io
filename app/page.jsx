'use client';
import React from 'react';
import Cursor from '../components/Cursor';
import Header from '../components/Header';
import Hero from '../components/Hero';

import TrustedBy from '../components/TrustedBy';

import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Awards from '../components/Awards';
import Experience from '../components/Experience';

import {
  FloatingOrbs,
  ParticleField
} from '../components/AnimatedBackground';

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


      <main id="home" className="pt-16 w-full relative z-0">
        {/* Hero Section - Floating Orbs */}
        <div className="relative px-3 md:px-4 lg:px-5 overflow-hidden">
          <FloatingOrbs color1="rgba(59, 130, 246, 0.4)" color2="rgba(147, 51, 234, 0.4)" count={6} />
          <div className="relative z-10">
            <Hero onNav={scrollToId} />
          </div>
        </div>

        {/* Experience Section */}
        <div className="relative py-8 overflow-hidden">
          <ParticleField particleColor="rgba(6, 182, 212, 0.5)" particleCount={30} />
          <div className="relative z-10 px-3 md:px-4 lg:px-5">
            <Experience />
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="relative px-3 md:px-4 lg:px-5 py-8 overflow-hidden">
          <ParticleField particleColor="rgba(251, 146, 60, 0.5)" particleCount={30} />
          <div className="relative z-10">
            <TrustedBy />
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="relative py-8 overflow-hidden">
          <ParticleField particleColor="rgba(168, 85, 247, 0.5)" particleCount={30} />
          <div className="relative z-10 px-3 md:px-4 lg:px-5">
            <TechStack />
          </div>
        </div>

        {/* Awards Section */}
        <div className="relative px-3 md:px-4 lg:px-5 py-8 overflow-hidden">
          <ParticleField particleColor="rgba(34, 197, 94, 0.5)" particleCount={30} />
          <div className="relative z-10">
            <Awards />
          </div>
        </div>

        {/* Projects Section */}
        <div className="relative px-3 md:px-4 lg:px-5 py-8 overflow-hidden">
          <ParticleField particleColor="rgba(59, 130, 246, 0.5)" particleCount={30} />
          <div className="relative z-10">
            <Projects />
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative px-3 md:px-4 lg:px-5 py-8 overflow-hidden">
          <ParticleField particleColor="rgba(99, 102, 241, 0.5)" particleCount={30} />
          <div className="relative z-10">
            <Contact />
          </div>
        </div>
      </main>
      <footer className="py-4 text-center text-secondary text-sm">© {new Date().getFullYear()} Harshit S. Parkar — Built with React & Tailwind</footer>
    </div>

  );
}
