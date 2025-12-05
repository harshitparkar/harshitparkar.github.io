import React from 'react';
import LogoCarousel from './LogoCarousel';

export default function WorkedWith() {
  return (
    <section id="worked-with" className="section-pad">
      <div className="max-w-6xl mx-auto glass rounded-[15px] p-6 border border-divider">
        <h3 className="text-2xl font-semibold mb-4 text-primary">Already Worked With</h3>
        <LogoCarousel />
      </div>
    </section>
  );
}
