'use client';
import React from 'react';
import LogoCarousel from './LogoCarousel';

export default function TrustedBy() {
    return (
        <section id="trusted-by" className="section-pad">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                    Trusted by Industry Leaders
                </h3>
                <p className="text-secondary text-lg mb-12 max-w-2xl mx-auto">
                    Collaborating with visionary companies to build impactful solutions
                </p>
                <LogoCarousel />
            </div>
        </section>
    );
}
