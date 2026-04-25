'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.76, 0, 0.24, 1];

export default function Hero() {
  const nameLines = ["Harshit S.", "Parkar"];

  return (
    <section id="hero" className="relative w-full h-screen min-h-[800px] flex items-center bg-obsidian overflow-hidden section-dark">
      {/* Background radial gold bloom */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 gold-bloom" />

      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10 relative">
        
        {/* Left Column (60%) */}
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="font-mono text-gold text-[12px] mb-8 tracking-widest uppercase"
          >
            HP Wordmark
          </motion.div>

          <h1 className="font-display text-[60px] md:text-[80px] lg:text-[100px] leading-[1.05] tracking-display text-bone mb-6">
            {nameLines.map((line, i) => (
              <div key={i} className="overflow-hidden pb-2">
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 1.6 + i * 0.12 }}
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: EASE, delay: 1.6 + (nameLines.length * 0.12) + 0.5 }}
            className="font-mono text-[11px] text-ash tracking-mono-wide uppercase mb-10"
          >
            Since 1998
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.6 + (nameLines.length * 0.12) + 0.8 }}
            className="font-sans text-[16px] text-bone font-light mb-12 max-w-xl leading-relaxed"
          >
            Senior React Native Engineer · Mumbai · London
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.6 + (nameLines.length * 0.12) + 1.0 }}
            className="flex items-center gap-8"
          >
            <a href="#work" className="cta-button">
              View Work →
            </a>
            <a href="#contact" className="cta-text-link">
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Right Column (40%) - Device Mockup */}
        <div className="hidden md:flex w-[40%] justify-end perspective-[1200px]">
          <motion.div
            initial={{ opacity: 0, rotateY: 15, rotateX: 5, z: -100 }}
            animate={{ opacity: 1, rotateY: -15, rotateX: 5, z: 0 }}
            transition={{ duration: 1.5, ease: EASE, delay: 2.0 }}
            className="relative animate-float"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* CSS iPhone Frame */}
            <div className="w-[320px] h-[650px] bg-deep-void rounded-[45px] border-[8px] border-[#222] shadow-2xl relative overflow-hidden flex items-center justify-center">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20"></div>
              {/* Screen Content - A subtle premium abstract visual */}
              <div className="w-full h-full bg-obsidian flex items-center justify-center relative">
                 <div className="absolute top-0 left-0 w-full h-full opacity-30"
                      style={{
                        background: 'radial-gradient(circle at 50% 0%, #c9a96e 0%, transparent 60%)'
                      }}
                 />
                 <div className="font-display text-4xl text-bone opacity-80">HP</div>
              </div>
            </div>
            {/* Soft shadow below phone */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[200px] h-[20px] bg-black/40 blur-xl rounded-[100%]"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="scroll-indicator hidden md:block"
      >
        <div className="scroll-line">
          <div className="scroll-dot"></div>
        </div>
      </motion.div>
    </section>
  );
}
