import React from 'react';

export default function Icon({ src, alt, size = 28 }) {
  if (!src) return (
    <div className="w-9 h-9 rounded-[12px] bg-white/6 flex items-center justify-center">
      <span className="text-sm font-semibold">?</span>
    </div>
  );
  return <img src={src} alt={alt} className="object-contain" style={{ width: size, height: size }} />;
}
