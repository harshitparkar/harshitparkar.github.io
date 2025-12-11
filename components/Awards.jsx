'use client';
import React, { useState } from 'react';
import { awards } from '../data/awards';

export default function Awards() {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section id="awards" className="section-pad">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Honors & Awards
                    </h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        Recognition for innovation and excellence in technology
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {awards.map((award) => (
                        <div
                            key={award.id}
                            className="group relative glass rounded-[20px] p-6 border border-divider transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                            onMouseEnter={() => setHoveredId(award.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Gradient Overlay on Hover */}
                            <div
                                className={`absolute inset-0 rounded-[20px] bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            />

                            {/* Icon Badge */}
                            <div className="relative mb-4">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${award.color} text-white text-3xl shadow-lg transform transition-transform duration-500 ${hoveredId === award.id ? 'scale-110 rotate-12' : ''}`}>
                                    {award.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                                    {award.title}
                                </h3>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-start gap-2">
                                        <span className="text-secondary text-sm">📋</span>
                                        <p className="text-secondary text-sm flex-1">
                                            <span className="font-semibold">Issued by:</span> {award.issuedBy}
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <span className="text-secondary text-sm">📅</span>
                                        <p className="text-secondary text-sm">
                                            <span className="font-semibold">Date:</span> {award.date}
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <span className="text-secondary text-sm">🏫</span>
                                        <p className="text-secondary text-sm flex-1">
                                            <span className="font-semibold">Associated with:</span> {award.association}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-divider">
                                    <p className="text-secondary text-sm leading-relaxed">
                                        {award.description}
                                    </p>
                                </div>

                                {award.link && (
                                    <div className="mt-4">
                                        <a
                                            href={award.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors duration-300 group/link"
                                        >
                                            <span>View Details</span>
                                            <svg
                                                className="w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Decorative Corner Accent */}
                            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full`} />
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
