'use client';

import React from 'react';

export const StatsStrip = () => {
  const stats = [
    { value: '150+', label: 'Delivered Projects', sub: 'Across 12 countries' },
    { value: '98.4%', label: 'Client Retention', sub: 'Long-term partnerships' },
    { value: '45+', label: 'Senior Engineers', sub: 'Full-stack & AI experts' },
    { value: '8+ Yrs', label: 'Engineering Excellence', sub: 'Founded in 2018' }
  ];

  return (
    <section className="py-12 bg-gray-50/60 dark:bg-[#0E1528] border-y border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#1D4FFF] dark:text-[#4D7CFF] tracking-tight">
                {stat.value}
              </span>
              <span className="text-base font-bold text-gray-900 dark:text-white mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
