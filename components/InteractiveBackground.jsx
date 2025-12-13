'use client';
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function InteractiveBackground() {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Mouse state
        const mouse = {
            x: null,
            y: null,
            radius: 150 // Interaction radius
        };

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Initial resize
        resize();

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 1.5; // Slightly faster for liveliness
                this.vy = (Math.random() - 0.5) * 1.5;
                this.size = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
                this.baseColor = theme === 'dark' ? 'rgba(100, 200, 255, ' : 'rgba(0, 100, 155, ';
            }

            update() {
                // Normal movement
                this.x += this.vx;
                this.y += this.vy;

                // Bounce of edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse interaction
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        // Move particles away from mouse to create a "repel" effect or towards for "attract"
                        // Let's do a gentle attraction + mesh connection
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const maxDistance = mouse.radius;
                        const force = (maxDistance - distance) / maxDistance;
                        const directionX = forceDirectionX * force * this.density * 0.6;
                        const directionY = forceDirectionY * force * this.density * 0.6;
                        this.x += directionX;
                        this.y += directionY;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.baseColor + '0.6)';
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const count = Math.min(Math.floor(window.innerWidth / 9), 120); // Responsive count
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        initParticles();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Draw connections
            particles.forEach((a, i) => {
                // Connect to other particles
                for (let j = i + 1; j < particles.length; j++) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = theme === 'dark' ? `rgba(100, 200, 255, ${0.2 - distance / 600})` : `rgba(0, 100, 155, ${0.2 - distance / 600})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                if (mouse.x != null) {
                    const dx = a.x - mouse.x;
                    const dy = a.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        ctx.beginPath();
                        ctx.strokeStyle = theme === 'dark' ? `rgba(100, 200, 255, 0.3)` : `rgba(0, 100, 155, 0.3)`;
                        ctx.lineWidth = 1.5;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }

                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
        };
    }, [theme]); // Re-run when theme changes

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 opacity-80 pointer-events-auto"
        />
    );
}
