'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eyebrow } from '../ui/Eyebrow.jsx';
import { technologiesData } from '../data/technologies.js';

export const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-gray-50/50 dark:bg-[#0A1022]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Eyebrow>OUR TECH STACK</Eyebrow>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Modern, battle-tested technologies
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4">
            We select the optimal tool for your unique scaling requirements — prioritizing developer velocity, system security, and runtime speed.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {technologiesData.map((techGroup, idx) => (
            <button
              key={techGroup.category}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#1D4FFF] text-white shadow-glow'
                  : 'bg-white dark:bg-[#121A30] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-[#1D4FFF]'
              }`}
            >
              {techGroup.category}
            </button>
          ))}
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologiesData[activeTab]?.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#121A30] border border-gray-200/80 dark:border-gray-800 hover:border-[#1D4FFF] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#1D4FFF] dark:text-[#4D7CFF] bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                  {item.level}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-3 mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/technologies"
            className="text-sm font-semibold text-[#1D4FFF] dark:text-[#4D7CFF] hover:underline"
          >
            Explore our complete architectural decision matrix →
          </Link>
        </div>
      </div>
    </section>
  );
};
