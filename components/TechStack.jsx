'use client';
import React, { useState } from 'react';
import Icon from './Icon';
import { TECH_STACK } from '../data/techIcons';

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section id="tech" className="section-pad overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Technical Stack
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional products
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Content */}
          <div className="flex gap-8 min-w-max justify-center">
            {Object.entries(TECH_STACK).map(([category, { color, icon, technologies }]) => (
              <div key={category} className="flex-shrink-0 flex flex-col items-center">
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-xl shadow-md`}>
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary whitespace-nowrap">{category}</h3>
                </div>

                {/* Technology Cards in Vertical Stack */}
                <div className="flex flex-col gap-3 w-[140px]">
                  {Object.entries(technologies).map(([name, iconUrl]) => (
                    <div
                      key={name}
                      className="group relative glass rounded-[12px] p-3 border border-divider transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                      onMouseEnter={() => setHoveredTech(name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 rounded-[12px] bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                      {/* Content */}
                      <div className="relative flex items-center gap-3">
                        <div className={`flex-shrink-0 transition-transform duration-300 ${hoveredTech === name ? 'scale-110' : ''}`}>
                          <Icon src={iconUrl} alt={name} size={24} />
                        </div>
                        <div className="text-xs font-medium text-primary leading-tight flex-1">
                          {name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
