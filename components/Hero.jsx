'use client';
import React from 'react';

import StatCard from './StatCard';

import { PROFILE_CONFIG } from '../data/profileConfig';

export default function Hero({ onNav }) {
  const { isAvailable } = PROFILE_CONFIG;
  return (
    <section className="max-w-7xl mx-auto section-pad relative">

      <div className="text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-divider mb-6 hover:bg-white/5 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isAvailable ? 'bg-green-400' : 'bg-blue-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isAvailable ? 'bg-green-500' : 'bg-blue-500'}`}></span>
          </span>
          <span className="text-sm text-secondary">
            {isAvailable ? 'Available for new opportunities' : `Currently working with ${PROFILE_CONFIG.currentCompany}`}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-primary">
          Designing delightful mobile{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 animate-gradient">
            experiences
          </span>
          <br />
          & product-first code
        </h1>

        <p className="mt-8 text-lg md:text-xl text-secondary max-w-4xl mx-auto leading-relaxed">
          I'm a Senior Software Engineer focused on building performant mobile applications and elegant web interfaces.
          I mentor teams, design scalable architecture and drive product decisions. I enjoy crafting delightful UI,
          performance optimizations, and integrating AI features to solve real business problems.
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
            href="/assets/Harshit_Parkar_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-divider font-medium text-lg shadow hover:bg-button-hover transition-all duration-300 text-primary"
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
