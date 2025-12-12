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
  MatrixGrid,
  GeometricShapes,
  ParticleField,
  WavePattern,
  CircuitPattern,
  GradientMesh,
  Sparkles
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

        {/* Experience Section - Matrix Grid */}
        <div className="relative py-8 overflow-hidden">
          <MatrixGrid color="rgba(6, 182, 212, 0.3)" />
          <CircuitPattern color="#06b6d4" />
          <div className="relative z-10 px-3 md:px-4 lg:px-5">
            <Experience />
          </div>
        </div>

        {/* Trusted By Section - Particle Field */}
        <div className="relative px-3 md:px-4 lg:px-5 py-8 overflow-hidden">
          <ParticleField particleColor="rgba(251, 146, 60, 0.6)" particleCount={40} />
          <GradientMesh colors={['rgba(251, 146, 60, 0.3)', 'rgba(249, 115, 22, 0.3)', 'rgba(234, 88, 12, 0.3)']} />
          <div className="relative z-10">
            <TrustedBy />
          </div>
        </div>

        {/* Tech Stack Section - Geometric Shapes */}
        <div className="relative py-8 overflow-hidden">
          <GeometricShapes colors={['rgba(168, 85, 247, 0.5)', 'rgba(236, 72, 153, 0.5)', 'rgba(219, 39, 119, 0.5)']} />
          <FloatingOrbs color1="rgba(168, 85, 247, 0.3)" color2="rgba(236, 72, 153, 0.3)" count={4} />
          <div className="relative z-10 px-3 md:px-4 lg:px-5">
            <TechStack />
          </div>
        </div>

        {/* Awards Section - Sparkles */}
        <div className="relative px-3 md:px-4 lg:px-5 py-8 overflow-hidden">
          <Sparkles color="#22c55e" count={25} />
          <GradientMesh colors={['rgba(34, 197, 94, 0.2)', 'rgba(16, 185, 129, 0.2)', 'rgba(5, 150, 105, 0.2)']} />
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

        {/* Contact Section - Gradient Mesh */}
        <div className="relative px-3 md:px-4 lg:px-5 py-8 overflow-hidden">
          <GradientMesh colors={['rgba(99, 102, 241, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(167, 139, 250, 0.3)']} />
          <FloatingOrbs color1="rgba(99, 102, 241, 0.3)" color2="rgba(139, 92, 246, 0.3)" count={5} />
          <div className="relative z-10">
            <Contact />
          </div>
        </div>
      </main>
      <footer className="py-4 text-center text-secondary text-sm">© {new Date().getFullYear()} Harshit S. Parkar — Built with React & Tailwind</footer>
    </div>

  );
}
