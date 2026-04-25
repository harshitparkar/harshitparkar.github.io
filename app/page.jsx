'use client';
import React from 'react';
import CustomCursor from '../components/CustomCursor';
import Navigation from '../components/Navigation';
import LoadingScreen from '../components/LoadingScreen';
import NoiseOverlay from '../components/NoiseOverlay';

import Hero from '../components/Hero';
import MarqueeBand from '../components/MarqueeBand';
import BrandStatement from '../components/BrandStatement';
import WorkTEBillion from '../components/WorkTEBillion';
import WorkNextGen from '../components/WorkNextGen';
import WorkArtOfLiving from '../components/WorkArtOfLiving';
import TechStack from '../components/TechStack';
import AwardsPress from '../components/AwardsPress';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <>
      {/* Global Elements */}
      <NoiseOverlay />
      <CustomCursor />
      <LoadingScreen />
      <Navigation />

      {/* Main Page Flow */}
      <main className="relative z-0 bg-obsidian">
        <Hero />
        <MarqueeBand />
        <BrandStatement />
        <WorkTEBillion />
        <WorkNextGen />
        <WorkArtOfLiving />
        <TechStack />
        <AwardsPress />
        <Contact />
      </main>
    </>
  );
}
