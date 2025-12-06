import React from 'react';
import Icon from './Icon';
import { TECH_ICONS } from '../data/techIcons';

export default function TechStack() {
  return (
    <section id="tech" className="section-pad">
      <div className="max-w-6xl mx-auto glass rounded-[15px] p-6 border border-divider">
        <h3 className="text-2xl font-semibold mb-4 text-primary">Technical Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Object.keys(TECH_ICONS).map(t => (
            <div key={t} className="chip glass border border-divider p-3 flex flex-col items-center justify-center text-center">
              <Icon src={TECH_ICONS[t]} alt={t} size={28} />
              <div className="mt-3 text-sm font-medium text-primary">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
