'use client';
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Background() {
    const { theme } = useTheme();

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Base Background Color */}
            <div className={`absolute inset-0 transition-colors duration-700 ${theme === 'dark' ? 'bg-[#050b14]' : 'bg-slate-50'
                }`} />

            {/* Grid Pattern */}
            <div
                className={`absolute inset-0 opacity-[0.4] transition-opacity duration-700 ${theme === 'dark' ? 'opacity-[0.3]' : 'opacity-[0.4]'
                    }`}
                style={{
                    backgroundImage: `linear-gradient(${theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px), 
                           linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Spotlight Effect - Main Top Center */}
            <div
                className={`absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-40 mix-blend-screen transition-all duration-700 ${theme === 'dark'
                        ? 'bg-blue-900/30'
                        : 'bg-blue-200/50'
                    }`}
            />

            {/* Secondary Glow - Bottom Left */}
            <div
                className={`absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-30 mix-blend-screen transition-all duration-700 ${theme === 'dark'
                        ? 'bg-purple-900/20'
                        : 'bg-purple-200/40'
                    }`}
            />

            {/* Secondary Glow - Right Center */}
            <div
                className={`absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-30 mix-blend-screen transition-all duration-700 ${theme === 'dark'
                        ? 'bg-cyan-900/20'
                        : 'bg-cyan-200/40'
                    }`}
            />
        </div>
    );
}
