'use client';

import React from 'react';

export const Eyebrow = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 uppercase tracking-[0.25em] text-xs font-mono font-semibold text-[#1D4FFF] dark:text-[#4D7CFF] mb-3 ${className}`}>
      <span className="w-8 h-[2px] bg-[#1D4FFF] dark:bg-[#4D7CFF]" />
      <span>{children}</span>
    </div>
  );
};
