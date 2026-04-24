'use client';
import React, { useState, useCallback } from 'react';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CredibilityBar from '../components/CredibilityBar';
import Work from '../components/Work';
import Experience from '../components/Experience';
import Philosophy from '../components/Philosophy';
import Stack from '../components/Stack';
import Recognition from '../components/Recognition';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-offwhite text-ink antialiased overflow-x-hidden">
      {/* Cinematic loader */}
      {!loaded && <Loader onComplete={handleLoaderComplete} />}

      <Navbar />

      <main>
        <Hero />
        <CredibilityBar />
        <Work />
        <Experience />
        <Philosophy />
        <Stack />
        <Recognition />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
