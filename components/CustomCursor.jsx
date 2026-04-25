'use client';
import React, { useEffect, useRef, useState } from 'react';

/**
 * Custom Cursor System
 * 12px bone-white circle (default)
 * Follows mouse with 6-frame lerp lag (smooth pursuit)
 */
export default function CustomCursor() {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const requestRef = useRef(null);
  
  const [cursorState, setCursorState] = useState({
    type: 'default', // default, cta, text-link, project, image, nav
    text: ''
  });

  // Mouse position
  const mouse = useRef({ x: 0, y: 0 });
  // Cursor position
  const pos = useRef({ x: 0, y: 0 });

  const lerp = (start, end, factor) => start + (end - start) * factor;

  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = 'none';

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const updateCursor = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.12);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.12);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(updateCursor);
    };

    window.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(updateCursor);

    // Event delegation for hover states
    const handleMouseOver = (e) => {
      const target = e.target;
      
      if (target.closest('.cta-button')) {
        setCursorState({ type: 'cta', text: 'VIEW' });
      } else if (target.closest('.tilt-card')) {
        setCursorState({ type: 'project', text: 'OPEN' });
      } else if (target.closest('.zoom-image')) {
        setCursorState({ type: 'image', text: 'ZOOM' });
      } else if (target.closest('.nav-link')) {
        setCursorState({ type: 'nav', text: '' });
      } else if (target.closest('a') || target.closest('button')) {
        setCursorState({ type: 'text-link', text: '' });
      } else {
        setCursorState({ type: 'default', text: '' });
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(requestRef.current);
      document.body.style.cursor = '';
    };
  }, []);

  // Determine cursor styles based on state
  let size = 12;
  let bg = '#f5f0e8'; // bone
  let color = '#0a0a0f'; // obsidian
  let mixBlend = 'difference';
  let border = 'none';

  switch (cursorState.type) {
    case 'cta':
      size = 56;
      bg = '#c9a96e'; // gold
      color = '#0a0a0f';
      mixBlend = 'normal';
      break;
    case 'project':
      size = 36;
      bg = '#f5f0e8';
      color = '#0a0a0f';
      mixBlend = 'normal';
      break;
    case 'image':
      size = 48;
      bg = '#f5f0e8';
      color = '#0a0a0f';
      mixBlend = 'normal';
      break;
    case 'text-link':
      size = 4;
      mixBlend = 'difference';
      break;
    case 'nav':
      size = 4;
      bg = '#c9a96e';
      mixBlend = 'normal';
      break;
    default:
      size = 12;
      bg = '#fff'; // use white with difference to invert properly against #f5f0e8 and #0a0a0f
      mixBlend = 'difference';
      break;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[10000] flex items-center justify-center rounded-full transition-all duration-300 ease-out"
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        color: color,
        mixBlendMode: mixBlend,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        willChange: 'transform'
      }}
    >
      <span
        ref={textRef}
        className="font-mono text-[10px] tracking-widest font-medium transition-opacity duration-200"
        style={{
          opacity: cursorState.text ? 1 : 0,
        }}
      >
        {cursorState.text}
      </span>
    </div>
  );
}
