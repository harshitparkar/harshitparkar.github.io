'use client';
import React, { useState } from 'react';

const stack = [
  {
    domain: 'MOBILE',
    items: [
      { name: 'React Native', context: 'Used at TEBillion for enterprise CRM architecture.', icon: 'RN' },
      { name: 'iOS (Swift/Obj-C)', context: 'Native modules and Bluetooth HID implementations.', icon: 'iOS' },
      { name: 'Android (Kotlin)', context: 'Deep system integrations and UI optimization.', icon: 'AND' },
      { name: 'JSI / Turbo Modules', context: 'Bridgeless high-performance C++ integrations.', icon: 'C++' },
    ]
  },
  {
    domain: 'FRONTEND',
    items: [
      { name: 'React', context: 'Core library for web and mobile components.', icon: 'RE' },
      { name: 'Next.js', context: 'Server-side rendering and web platforms like Rhino Tool.', icon: 'NX' },
      { name: 'Tailwind CSS', context: 'Utility-first design system implementation.', icon: 'TW' },
      { name: 'GSAP', context: 'High-performance animation choreography.', icon: 'GS' },
    ]
  },
  {
    domain: 'INFRASTRUCTURE',
    items: [
      { name: 'Node.js', context: 'Backend microservices and API gateways.', icon: 'ND' },
      { name: 'AWS', context: 'Cloud deployments, lambdas, and scalable architecture.', icon: 'AW' },
      { name: 'Firebase', context: 'Real-time sync and auth for mobile apps.', icon: 'FB' },
      { name: 'Git / CI/CD', context: 'Automated testing and deployment pipelines.', icon: 'GI' },
    ]
  },
  {
    domain: 'AI / ML',
    items: [
      { name: 'TensorFlow', context: 'Model integration in edge devices.', icon: 'TF' },
      { name: 'Python', context: 'Data processing and ML pipelines.', icon: 'PY' },
      { name: 'OpenAI API', context: 'Generative AI feature integration.', icon: 'AI' },
      { name: 'Vector DBs', context: 'Semantic search and RAG implementations.', icon: 'VD' },
    ]
  }
];

export default function TechStack() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section-dark diagonal-top-dark z-30 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        
        <h2 className="font-display text-[48px] md:text-[56px] text-bone mb-20 text-center">
          The Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {stack.map((group, i) => (
            <div key={i} className="flex flex-col">
              <h3 className="font-mono text-[12px] text-gold tracking-widest uppercase mb-8 border-b border-white/10 pb-4">
                {group.domain}
              </h3>
              
              <div className="flex flex-col gap-6">
                {group.items.map((item, j) => (
                  <div 
                    key={j}
                    className="relative group flex items-center gap-4 cursor-none"
                    onMouseEnter={() => setHovered(item.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center font-display text-[16px] text-bone/60 transition-all duration-300 group-hover:scale-[1.08] group-hover:text-gold group-hover:border-gold group-hover:bg-gold/10">
                      {item.icon}
                    </div>
                    <div className="font-sans text-[14px] text-bone/80 group-hover:text-bone transition-colors duration-300">
                      {item.name}
                    </div>

                    {/* Tooltip */}
                    <div className={`absolute left-16 top-1/2 -translate-y-1/2 ml-4 w-[220px] bg-obsidian border border-white/10 p-3 shadow-2xl transition-all duration-300 pointer-events-none z-50 ${hovered === item.name ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                      <div className="font-mono text-[10px] text-gold uppercase tracking-wider mb-1">
                        {item.name}
                      </div>
                      <div className="font-sans text-[11px] text-bone/70 leading-relaxed">
                        {item.context}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
