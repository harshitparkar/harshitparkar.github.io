'use client';
import React, { useEffect, useRef } from 'react';

export default function ParticleField(){
  const canvasRef = useRef(null);
  useEffect(()=>{
    const canvas = canvasRef.current; if(!canvas) return; const ctx = canvas.getContext('2d'); let W = canvas.width = window.innerWidth; let H = canvas.height = Math.max(260, window.innerHeight*0.24);
    function setup(){ const DPR = Math.max(1, window.devicePixelRatio||1); canvas.width = W*DPR; canvas.height = H*DPR; canvas.style.width = W+'px'; canvas.style.height = H+'px'; ctx.setTransform(DPR,0,0,DPR,0,0); }
    setup();
    const particles=[]; const num = Math.max(14, Math.floor(W/70)); for(let i=0;i<num;i++){ particles.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-0.5)*0.5,vy:(Math.random()-0.5)*0.5,r:1+Math.random()*2.2,hue:190+Math.random()*40}); }
    const ripples=[]; let last=0; const mouse={x:-9999,y:-9999};
    function push(x,y,opts={}){ ripples.push({x,y,r:opts.r0||0,max:opts.max||140,width:opts.width||1.8,alpha:opts.alpha||0.36,speed:opts.speed||2.6,wobble:(Math.random()-0.5)*0.5}); }
    function onMove(e){ const rect=canvas.getBoundingClientRect(); const x=e.clientX-rect.left; const y=e.clientY-rect.top; mouse.x=x; mouse.y=y; const now=Date.now(); if(now-last>100){ push(x,y,{max:70,width:1.1,alpha:0.16,speed:3.2}); last=now; } }
    function onDown(e){ const rect=canvas.getBoundingClientRect(); push(e.clientX-rect.left,e.clientY-rect.top,{max:220,width:3.6,alpha:0.55,speed:3.6}); }
    function onLeave(){ mouse.x=-9999; mouse.y=-9999; }

    window.addEventListener('mousemove', onMove, {passive:true}); window.addEventListener('pointermove', onMove, {passive:true}); window.addEventListener('pointerdown', onDown); canvas.addEventListener('mouseleave', onLeave);

    function drawRipple(r){ for(let k=0;k<3;k++){ const frac=k/3; const radius=r.r+frac*(r.width*7); const a=r.alpha*(1-frac*0.7); ctx.beginPath(); ctx.strokeStyle = `rgba(160,200,255,${(a*0.85).toFixed(3)})`; ctx.lineWidth = Math.max(0.4, r.width*(1-frac*0.5)); const wob = Math.sin((r.r + k*6)*0.07 + r.wobble*2)*(r.width*0.28); ctx.arc(r.x + wob*0.25, r.y + wob*0.12, Math.max(0,radius), 0, Math.PI*2); ctx.stroke(); }
      const grad = ctx.createRadialGradient(r.x,r.y,0,r.x,r.y,Math.max(1,r.r*0.85)); grad.addColorStop(0, `rgba(110,170,255,${(r.alpha*0.06).toFixed(3)})`); grad.addColorStop(1, `rgba(110,170,255,0)`); ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(r.x,r.y,Math.max(1,r.r*0.85),0,Math.PI*2); ctx.fill(); }

    let raf=null; function step(){ ctx.clearRect(0,0,W,H); ctx.fillStyle='rgba(6,12,24,0.06)'; ctx.fillRect(0,0,W,H); for(const p of particles){ const dx = mouse.x - p.x; const dy = mouse.y - p.y; const dist = Math.sqrt(dx*dx + dy*dy) || 0.00001; const maxAttract = 110; if(mouse.x>-9000 && dist<maxAttract){ const force=(1-dist/maxAttract)*0.6; p.vx += (dx/dist)*force*0.06; p.vy += (dy/dist)*force*0.06; } p.vx*=0.96; p.vy*=0.96; p.x+=p.vx; p.y+=p.vy; if(p.x<-20)p.x=W+20; if(p.x>W+20)p.x=-20; if(p.y<-20)p.y=H+20; if(p.y>H+20)p.y=-20; ctx.beginPath(); ctx.fillStyle = `hsla(${p.hue},55%,64%,0.86)`; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); } for(let i=ripples.length-1;i>=0;i--){ const r=ripples[i]; r.r += r.speed; r.alpha *= 0.992; r.wobble *= 0.998; if(r.r > r.max || r.alpha < 0.02){ ripples.splice(i,1); continue; } drawRipple(r); } raf = requestAnimationFrame(step); } raf = requestAnimationFrame(step);
    function onResize(){ W = canvas.width = window.innerWidth; H = canvas.height = Math.max(260, window.innerHeight*0.24); setup(); } function setup(){ const DPR = Math.max(1,window.devicePixelRatio||1); canvas.width = W*DPR; canvas.height = H*DPR; canvas.style.width = W+'px'; canvas.style.height = H+'px'; ctx.setTransform(DPR,0,0,DPR,0,0); } window.addEventListener('resize', onResize);
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); window.removeEventListener('mousemove', onMove); window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerdown', onDown); canvas.removeEventListener('mouseleave', onLeave); };
  },[]);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}
