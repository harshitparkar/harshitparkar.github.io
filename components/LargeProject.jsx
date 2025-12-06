import React from 'react';

export default function LargeProject({ title, desc }) {
  return (
    <article className="rounded-2xl overflow-hidden shadow-lg glass border border-divider p-4">
      <div className="h-44 rounded-lg glass flex items-center justify-center border border-divider">
        <div className="text-secondary">Project visual</div>
      </div>
      <div className="mt-4">
        <div className="font-semibold text-primary">{title}</div>
        <div className="text-sm text-secondary mt-1">{desc}</div>
      </div>
    </article>
  );
}
