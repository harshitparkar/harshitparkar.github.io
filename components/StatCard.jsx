import React from 'react';

export default function StatCard({ title, value, subtle }){
  return (
    <div className={`rounded-xl p-3 ${subtle ? "bg-white/3" : "bg-white/6"} border border-white/6 min-w-[120px]`}>
      <div className="text-xs text-slate-300">{title}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}
