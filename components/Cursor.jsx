'use client';
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Cursor() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const dotsRefs = useRef([]);
  const n = 6;
  const colors = ['#FF6B6B', '#FFD93D', '#6BE5FF', '#9B5CFF', '#7AF57A', '#FFA6C9'];

  useEffect(() => {
    const el = ref.current; if (!el) return;
    dotsRefs.current = Array.from({ length: n }).map((_, i) => dotsRefs.current[i] || null);
    let raf = null; const mouse = { x: -1000, y: -1000 }; const pos = Array.from({ length: n }).map(() => ({ x: -1000, y: -1000 })); let angle = 0;

    function onMove(e) { mouse.x = e.clientX; mouse.y = e.clientY; el.style.opacity = '1'; }
    function onLeave() { el.style.opacity = '0'; }

    function animate() {
      for (let i = 0; i < n; i++) {
        const target = i === 0 ? mouse : pos[i - 1];
        pos[i].x += (target.x - pos[i].x) * (0.18 - i * 0.02);
        pos[i].y += (target.y - pos[i].y) * (0.18 - i * 0.02);
        const elDot = dotsRefs.current[i];
        if (elDot) { const s = 1 - i * 0.08; elDot.style.transform = `translate3d(${pos[i].x - (18 * s) / 2}px, ${pos[i].y - (18 * s) / 2}px, 0) scale(${s})`; elDot.style.opacity = i === 0 ? '1' : `${0.85 - i * 0.12}`; }
      }
      angle += 0.6; el.style.filter = `hue-rotate(${angle}deg) saturate(1.15)`; raf = requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', onMove, { passive: true }); window.addEventListener('pointermove', onMove, { passive: true }); window.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); window.removeEventListener('pointermove', onMove); window.removeEventListener('mouseleave', onLeave); };
  }, []);

  // Adjust blend mode based on theme
  const blendMode = theme === 'dark' ? 'screen' : 'multiply';
  const borderColor = theme === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.6)';

  return (
    <div ref={ref} className="pointer-events-none fixed z-[9999] inset-0" style={{ mixBlendMode: blendMode, opacity: 0, transition: 'opacity 220ms linear' }}>
      {Array.from({ length: 6 }).map((_, i) => (<div key={i} ref={el => dotsRefs.current[i] = el} className="pointer-events-none fixed rounded-full" style={{ width: 18, height: 18, background: colors[i % colors.length], filter: 'blur(10px) contrast(1.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.25)' }} />))}
      <div className="pointer-events-none fixed rounded-full" style={{ width: 10, height: 10, border: `2px solid ${borderColor}`, transform: 'translate3d(-9999px,-9999px,0)' }} />
    </div>
  );
}
