'use client';
import React, { useState, useEffect } from 'react';
import { HPMonogramAnimated } from './HPMonogram';

/**
 * Loading Screen
 * Full obsidian viewport. HP monogram centred.
 * Gold stroke draws in over 800ms. Hold 200ms.
 * Screen clips upward over 600ms, exposing site.
 * No spinner. No progress. No text.
 */
export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('drawing'); // drawing → hold → reveal → done

  useEffect(() => {
    // Phase 1: Drawing signature completes at 2500ms
    const drawTimer = setTimeout(() => setPhase('hold'), 2500);
    // Phase 2: Hold for 300ms, then reveal
    const holdTimer = setTimeout(() => setPhase('reveal'), 2800);
    // Phase 3: Clip animation takes 600ms
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 3400);

    return () => {
      clearTimeout(drawTimer);
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className={`loading-screen ${phase === 'reveal' ? 'reveal' : ''}`}>
      <HPMonogramAnimated size={80} />
    </div>
  );
}
