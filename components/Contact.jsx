import React from 'react';
import { contactMethods } from '../data/contactMethods';

export default function Contact() {

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-6xl mx-auto glass rounded-[15px] p-6 border border-divider">
        <h3 className="text-2xl font-semibold text-primary mb-6">Let's talk</h3>

        <div className="flex flex-col gap-4">
          {contactMethods.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.target}
              rel={item.rel}
              className="flex items-center gap-4 group p-3 rounded-xl transition-all duration-300 hover:bg-white/5"
            >
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-secondary uppercase tracking-wider font-medium">{item.type}</span>
                <span className="text-primary group-hover:text-cyan-400 transition-colors">{item.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
