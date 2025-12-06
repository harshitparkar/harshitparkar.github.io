import React from 'react';

export default function StatCard({ title, value, subtle }) {
  return (
    <div className={`rounded-xl p-3 glass border border-divider min-w-[120px]`}>
      <div className="text-xs text-secondary">{title}</div>
      <div className="text-lg font-semibold text-primary">{value}</div>
    </div>
  );
}
