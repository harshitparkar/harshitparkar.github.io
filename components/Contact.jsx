'use client';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section-dark diagonal-top-dark relative z-30 pt-32 pb-8 flex flex-col items-center justify-center min-h-[80vh]">
      
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-4xl px-6 text-center">
        <h2 className="font-display text-[80px] md:text-[120px] leading-none text-bone mb-12">
          Let's Build.
        </h2>

        <a 
          href="mailto:parkarharshit2000@gmail.com" 
          className="font-mono text-[16px] md:text-[20px] text-gold tracking-widest hover:text-gold-warm transition-colors mb-16"
        >
          harshit@hp.build
        </a>

        <div className="flex items-center gap-8">
          <a href="#" className="font-sans text-[13px] text-bone/60 hover:text-bone uppercase tracking-widest transition-colors">
            LinkedIn
          </a>
          <a href="#" className="font-sans text-[13px] text-bone/60 hover:text-bone uppercase tracking-widest transition-colors">
            GitHub
          </a>
          <a href="/assets/Harshit_Parkar_Resume.pdf" className="font-sans text-[13px] text-bone/60 hover:text-bone uppercase tracking-widest transition-colors">
            Resume PDF
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-auto pt-16 px-6 md:px-12">
        <div className="w-full h-[0.5px] bg-white/[0.08] mb-8"></div>
        <div className="flex justify-center text-center">
          <span className="font-mono text-[11px] text-ash tracking-[0.3em] uppercase">
            Harshit S. Parkar · Since 1998 · Mumbai, India
          </span>
        </div>
      </footer>

    </section>
  );
}
