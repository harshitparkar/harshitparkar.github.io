'use client';
import React from 'react';

export default function SectionDivider() {
    return (
        <div className="w-full max-w-4xl mx-auto my-12 md:my-20 px-6 opacity-50">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent" />
        </div>
    );
}
