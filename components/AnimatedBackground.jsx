'use client';
import React, { useEffect, useRef } from 'react';

// Floating Orbs Animation
export function FloatingOrbs({ color1, color2, count = 5 }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(count)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full blur-3xl opacity-20"
                    style={{
                        width: `${150 + Math.random() * 200}px`,
                        height: `${150 + Math.random() * 200}px`,
                        background: `radial-gradient(circle, ${color1}, ${color2})`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float-${i} ${15 + Math.random() * 10}s ease-in-out infinite`,
                    }}
                />
            ))}
            {/* Gradient fade for blending */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" style={{ opacity: 0.8 }} />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" style={{ opacity: 0.8 }} />
            <style jsx>{`
        ${[...Array(count)].map((_, i) => `
          @keyframes float-${i} {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(${0.8 + Math.random() * 0.4});
            }
            66% {
              transform: translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(${0.8 + Math.random() * 0.4});
            }
          }
        `).join('')}
      `}</style>
        </div>
    );
}

// Matrix Grid Animation
export function MatrixGrid({ color = 'rgba(59, 130, 246, 0.3)' }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 opacity-30">
                <div className="grid-pattern" style={{
                    backgroundImage: `
            linear-gradient(${color} 1px, transparent 1px),
            linear-gradient(90deg, ${color} 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                    animation: 'gridMove 20s linear infinite',
                }} />
            </div>
            {/* Gradient fade for blending */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" style={{ opacity: 0.9 }} />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" style={{ opacity: 0.9 }} />
            <style jsx>{`
        .grid-pattern {
          width: 100%;
          height: 100%;
        }
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
        </div>
    );
}

// Geometric Shapes Animation
export function GeometricShapes({ colors = ['#3b82f6', '#8b5cf6', '#ec4899'] }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {colors.map((color, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{
                        width: '200px',
                        height: '200px',
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                        opacity: 0.1,
                        animation: `rotate-${i} ${20 + i * 5}s linear infinite`,
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            background: `linear-gradient(135deg, ${color}, transparent)`,
                            clipPath: i % 2 === 0 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        }}
                    />
                </div>
            ))}
            {/* Gradient fade for blending */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" style={{ opacity: 0.9 }} />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" style={{ opacity: 0.9 }} />
            <style jsx>{`
        ${colors.map((_, i) => `
          @keyframes rotate-${i} {
            0% {
              transform: rotate(0deg) scale(1);
            }
            50% {
              transform: rotate(180deg) scale(1.2);
            }
            100% {
              transform: rotate(360deg) scale(1);
            }
          }
        `).join('')}
      `}</style>
        </div>
    );
}

// Particle System
export function ParticleField({ particleColor = '#3b82f6', particleCount = 30 }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(particleCount)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: `${2 + Math.random() * 4}px`,
                        height: `${2 + Math.random() * 4}px`,
                        background: particleColor,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.5,
                        animation: `particle-${i} ${10 + Math.random() * 20}s linear infinite`,
                    }}
                />
            ))}
            {/* Gradient fade for blending */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" style={{ opacity: 0.9 }} />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" style={{ opacity: 0.9 }} />
            <style jsx>{`
        ${[...Array(particleCount)].map((_, i) => `
          @keyframes particle-${i} {
            0% {
              transform: translate(0, 0);
              opacity: 0;
            }
            10% {
              opacity: ${0.3 + Math.random() * 0.4};
            }
            90% {
              opacity: ${0.3 + Math.random() * 0.4};
            }
            100% {
              transform: translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px);
              opacity: 0;
            }
          }
        `).join('')}
      `}</style>
        </div>
    );
}

// Wave Animation
export function WavePattern({ color1 = '#3b82f6', color2 = '#8b5cf6' }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="wave-container">
                <svg className="wave" viewBox="0 0 1200 200" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={color1} />
                            <stop offset="100%" stopColor={color2} />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,100 C150,150 350,0 600,100 C850,200 1050,50 1200,100 L1200,200 L0,200 Z"
                        fill="url(#waveGradient)"
                        opacity="0.3"
                    />
                    <path
                        d="M0,120 C200,50 400,150 600,100 C800,50 1000,150 1200,100 L1200,200 L0,200 Z"
                        fill="url(#waveGradient)"
                        opacity="0.2"
                    />
                </svg>
            </div>
            <style jsx>{`
        .wave-container {
          position: absolute;
          bottom: 0;
          width: 100%;
          animation: waveMove 15s ease-in-out infinite;
        }
        .wave {
          width: 200%;
          height: 200px;
        }
        @keyframes waveMove {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10%);
          }
        }
      `}</style>
        </div>
    );
}

// Circuit Board Pattern
export function CircuitPattern({ color = '#06b6d4' }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
            <svg className="circuit-svg" width="100%" height="100%">
                <defs>
                    <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="2" fill={color} />
                        <circle cx="90" cy="90" r="2" fill={color} />
                        <line x1="10" y1="10" x2="50" y2="10" stroke={color} strokeWidth="1" />
                        <line x1="50" y1="10" x2="50" y2="50" stroke={color} strokeWidth="1" />
                        <line x1="50" y1="50" x2="90" y2="90" stroke={color} strokeWidth="1" />
                        <circle cx="50" cy="50" r="3" fill={color} />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
            <style jsx>{`
        .circuit-svg {
          animation: circuitPulse 8s ease-in-out infinite;
        }
        @keyframes circuitPulse {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
        </div>
    );
}

// Gradient Mesh Animation
export function GradientMesh({ colors = ['#3b82f6', '#8b5cf6', '#ec4899'] }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="gradient-mesh">
                {colors.map((color, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full blur-3xl"
                        style={{
                            width: '40%',
                            height: '40%',
                            background: color,
                            opacity: 0.15,
                            left: `${(i * 30) % 80}%`,
                            top: `${(i * 40) % 70}%`,
                            animation: `meshMove-${i} ${15 + i * 3}s ease-in-out infinite`,
                        }}
                    />
                ))}
            </div>
            {/* Gradient fade for blending */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" style={{ opacity: 0.9 }} />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" style={{ opacity: 0.9 }} />
            <style jsx>{`
        ${colors.map((_, i) => `
          @keyframes meshMove-${i} {
            0%, 100% {
              transform: translate(0, 0);
            }
            33% {
              transform: translate(${(i % 2 ? 1 : -1) * 30}px, ${(i % 2 ? -1 : 1) * 30}px);
            }
            66% {
              transform: translate(${(i % 2 ? -1 : 1) * 20}px, ${(i % 2 ? 1 : -1) * 40}px);
            }
          }
        `).join('')}
      `}</style>
        </div>
    );
}

// Sparkles Animation
export function Sparkles({ color = '#fbbf24', count = 20 }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(count)].map((_, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `sparkle-${i} ${2 + Math.random() * 3}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                >
                    <div
                        style={{
                            width: '4px',
                            height: '4px',
                            background: color,
                            boxShadow: `0 0 10px ${color}`,
                            transform: 'rotate(45deg)',
                        }}
                    />
                </div>
            ))}
            {/* Gradient fade for blending */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" style={{ opacity: 0.9 }} />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" style={{ opacity: 0.9 }} />
            <style jsx>{`
        ${[...Array(count)].map((_, i) => `
          @keyframes sparkle-${i} {
            0%, 100% {
              opacity: 0;
              transform: scale(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: scale(1.5) rotate(180deg);
            }
          }
        `).join('')}
      `}</style>
        </div>
    );
}
