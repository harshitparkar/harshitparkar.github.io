import React from 'react';
import LargeProject from './LargeProject';

export default function Projects(){
  return (
    <section id="projects" className="section-pad">
      <div className="max-w-6xl mx-auto bg-black/16 glass rounded-[15px] p-6">
        <h3 className="text-2xl font-semibold">Projects & Case Studies</h3>
        <p className="text-slate-300 mt-2">Short snapshots of work and outcomes.</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <LargeProject title="Tebillion CRM" desc="AI led mobile CRM. Business-card scanner and optimized offline sync." />
          <LargeProject title="Otsy Travel" desc="Social travel app with payments & maps." />
          <LargeProject title="AR Learning" desc="Interactive AR content for education." />
        </div>
      </div>
    </section>
  );
}
