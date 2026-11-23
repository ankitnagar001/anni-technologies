'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow.jsx';
import { Card } from '../ui/Card.jsx';
import { TechIcon } from '../ui/TechIcon.jsx';
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
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#1D4FFF] text-white shadow-glow'
                  : 'bg-white dark:bg-[#121A30] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-[#1D4FFF]'
              }`}
            >
              {techGroup.category}
            </button>
          ))}
        </div>

        {/* Tech Cards with High Quality Brand Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologiesData[activeTab]?.items.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 rounded-2xl flex flex-col justify-between group hover:border-[#1D4FFF] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/80 flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform">
                    <TechIcon name={item.name} className="w-7 h-7 object-contain" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#1D4FFF] dark:text-[#4D7CFF] bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded font-bold">
                    {item.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-[#1D4FFF] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/technologies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4FFF] dark:text-[#4D7CFF] hover:underline"
          >
            Explore our complete architectural decision matrix & all technologies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
