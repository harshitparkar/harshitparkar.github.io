'use client';
import React from 'react';
import { Mail } from 'lucide-react';
import { contactMethods } from '../data/contactMethods';

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

const ContactCard = ({ item }) => (
  <a
    href={item.href}
    target={item.target}
    rel={item.rel}
    className="
      group relative overflow-hidden
      p-6 rounded-2xl glass border border-divider
      hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10
      transition-all duration-500
      text-center
    "
  >
    {/* Gradient glow on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

    <div className="relative z-10 flex flex-col items-center gap-4">
      <div className="
        p-4 rounded-xl
        bg-gradient-to-br from-cyan-500/20 to-blue-500/20
        group-hover:from-cyan-500/30 group-hover:to-blue-500/30
        group-hover:scale-110
        transition-all duration-300
      ">
        <item.icon className="w-6 h-6 text-cyan-400" />
      </div>

      <div>
        <span className="text-xs text-secondary uppercase tracking-wider font-medium block mb-1">
          {item.type}
        </span>
        <p className="text-lg text-primary font-medium group-hover:text-cyan-400 transition-colors break-all">
          {item.value}
        </p>
      </div>
    </div>
  </a>
);

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Amazing
            </span>
          </h2>

          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities?
            I'd love to hear from you. Let's create something extraordinary together.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((item, index) => (
            <ContactCard key={index} item={item} />
          ))}
        </div>

        {/* Primary CTA Button */}
        <div className="text-center">
          <a
            href="mailto:harshitparkar.connect@gmail.com"
            className="
              inline-flex items-center gap-3 
              px-8 py-4 rounded-full
              bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
              text-slate-900 font-bold text-lg
              shadow-lg shadow-cyan-500/25
              hover:shadow-xl hover:shadow-cyan-500/40
              hover:scale-105
              transition-all duration-300
            "
          >
            <Mail className="w-5 h-5" />
            Send me a message
          </a>
        </div>

      </div>
    </section>
  );
}
