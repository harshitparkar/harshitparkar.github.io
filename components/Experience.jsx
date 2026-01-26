'use client';
import React, { useState, useRef, useEffect } from 'react';
import { experiences } from '../data/experience';

export default function Experience() {
    const scrollContainerRef = useRef(null);
    const sectionRef = useRef(null);
    const hasAnimated = useRef(false);

    // Mouse drag scrolling state
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Mouse drag handlers
    const handleMouseDown = (e) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        const currentSection = sectionRef.current;
        const scrollContainer = scrollContainerRef.current;

        if (!currentSection || !scrollContainer) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;

                        // First, scroll to the leftmost position (current company)
                        scrollContainer.scrollLeft = 0;

                        // After a brief pause, animate scroll to the current company (leftmost)
                        setTimeout(() => {
                            const start = scrollContainer.scrollLeft;
                            const target = scrollContainer.scrollWidth;
                            const duration = 4000; // 4 seconds
                            const startTime = performance.now();

                            const animateScroll = (currentTime) => {
                                const elapsed = currentTime - startTime;
                                const progress = Math.min(elapsed / duration, 1);

                                // Easing function (ease-in-out)
                                const easeProgress = progress < 0.5
                                    ? 2 * progress * progress
                                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

                                scrollContainer.scrollLeft = start + (target - start) * easeProgress;

                                if (progress < 1) {
                                    requestAnimationFrame(animateScroll);
                                }
                            };

                            requestAnimationFrame(animateScroll);
                        }, 800);
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(currentSection);

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} id="experience" className="section-pad overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Experience
                    </h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        My professional journey building innovative solutions
                    </p>
                </div>

                {/* Horizontal Timeline Container */}
                <div className="relative">




                    {/* Scrollable Timeline */}
                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto overflow-y-visible pb-8 pt-4 px-[2%]"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            cursor: isDragging ? 'grabbing' : 'grab',
                            userSelect: isDragging ? 'none' : 'auto'
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        <style jsx>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>

                        <div className="relative flex items-stretch gap-6 min-w-max pb-4">
                            {/* Horizontal Timeline Line */}
                            <div className="absolute top-[88px] left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30" />

                            {[...experiences].reverse().map((exp, index) => (
                                <div key={exp.id} className="relative flex flex-col items-center">
                                    {/* Date Label Above Dot */}
                                    <div className="absolute top-[50px] left-1/2 -translate-x-1/2 text-center z-10">
                                        <div className="px-3 py-1 rounded-full bg-button-bg border border-divider text-xs font-medium text-primary whitespace-nowrap">
                                            {exp.startDate} - {exp.endDate}
                                        </div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="absolute top-[80px] w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-background z-10" />

                                    {/* Experience Card */}
                                    <div
                                        className="w-[380px] group glass rounded-[20px] p-6 border border-divider transition-all duration-500 hover:scale-105 hover:shadow-2xl mt-28 flex flex-col h-full"
                                    >
                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 rounded-[20px] bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                        {/* Header */}
                                        <div>
                                            <div className="relative flex items-start gap-4 mb-4">
                                                {/* Company Logo */}
                                                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                                                    {exp.company.charAt(0)}
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-lg font-bold text-primary mb-1 leading-tight line-clamp-2">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-secondary text-sm font-medium line-clamp-1">
                                                        {exp.company}
                                                    </p>
                                                    {exp.companyNote && (
                                                        <p className="text-xs text-secondary opacity-75 mt-1">
                                                            {exp.companyNote}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Metadata */}
                                            <div className="relative space-y-2 mb-4">
                                                <div className="flex flex-wrap items-center gap-2 text-xs text-secondary">
                                                    <span className="px-2 py-1 rounded-full bg-button-bg">
                                                        {exp.type}
                                                    </span>
                                                    <span>•</span>
                                                    <span>{exp.duration}</span>
                                                    {exp.current && (
                                                        <>
                                                            <span>•</span>
                                                            <span className="px-2 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium">
                                                                Current
                                                            </span>
                                                        </>
                                                    )}
                                                </div>

                                                <p className="text-xs text-secondary flex items-start gap-1">
                                                    <span>📍</span>
                                                    <span>{exp.location} · {exp.locationType}</span>
                                                </p>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
