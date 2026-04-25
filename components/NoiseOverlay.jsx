'use client';
import React, { useEffect, useRef } from 'react';

export default function NoiseOverlay() {
  const canvasRef = useRef(null);
  const requestRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    
    // Create an offscreen noise pattern to copy from
    const patternSize = 256;
    const patternCanvas = document.createElement('canvas');
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    const pCtx = patternCanvas.getContext('2d', { alpha: true });
    const imgData = pCtx.createImageData(patternSize, patternSize);
    
    // Fill with noise
    for (let i = 0; i < imgData.data.length; i += 4) {
      const val = Math.random() * 255;
      imgData.data[i] = val;
      imgData.data[i + 1] = val;
      imgData.data[i + 2] = val;
      imgData.data[i + 3] = 10; // ~4% opacity
    }
    pCtx.putImageData(imgData, 0, 0);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    let lastTime = 0;
    const render = (time) => {
      // update at ~8fps (120ms)
      if (time - lastTime > 120) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Fill canvas with repeating pattern, slightly offset randomly
        const xOffset = Math.random() * patternSize;
        const yOffset = Math.random() * patternSize;
        
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.save();
        ctx.translate(-xOffset, -yOffset);
        ctx.fillRect(0, 0, canvas.width + patternSize, canvas.height + patternSize);
        ctx.restore();
        
        lastTime = time;
      }
      requestRef.current = requestAnimationFrame(render);
    };
    
    requestRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9990] mix-blend-overlay opacity-80"
    />
  );
}
