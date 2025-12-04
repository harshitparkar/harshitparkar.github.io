'use client';
import React from 'react';
import ParticleField from './ParticleField';
import StatCard from './StatCard';

export default function Hero({ onNav }) {
  return (
    <section className="max-w-6xl mx-auto section-pad relative">
      <div className="absolute inset-0 -z-10"><ParticleField /></div>
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 animate-pulse">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
          <span className="text-sm text-slate-300">Available for new opportunities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Designing delightful mobile{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 animate-gradient">
            experiences
          </span>
          <br />
          & product-first code
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          I build high-performance React Native apps and beautiful web frontends in Next.js.
          I focus on scalability, animations, and product thinking — shipping features that users love.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); onNav('contact'); }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Let's Work Together
          </a>
          <a
            href="/Harshit_Parkar_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/20 font-medium text-lg shadow hover:bg-white/10 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <StatCard title="Experience" value="6+ yrs" />
          <StatCard title="Focus" value="React Native" />
          <StatCard title="Open to" value="Senior Roles" />
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
