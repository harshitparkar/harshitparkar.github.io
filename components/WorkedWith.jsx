import React from 'react';
import LogoCarousel from './LogoCarousel';

export default function WorkedWith(){
  return (
    <section id="worked-with" className="section-pad">
      <div className="max-w-6xl mx-auto bg-black/16 glass rounded-[15px] p-6">
        <h3 className="text-2xl font-semibold mb-4">Already Worked With</h3>
        <LogoCarousel />
      </div>
    </section>
  );
}
