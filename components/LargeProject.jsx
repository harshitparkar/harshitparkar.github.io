import React from 'react';

export default function LargeProject({ title, desc }) {
  return (
    <article className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-white/6 to-white/3 border border-white/6 p-4">
      <div className="h-44 rounded-lg bg-white/10 flex items-center justify-center">
        <div className="text-slate-300">Project visual</div>
      </div>
      <div className="mt-4">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-slate-300 mt-1">{desc}</div>
      </div>
    </article>
  );
}
