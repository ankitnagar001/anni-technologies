'use client';

import React from 'react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';
import { technologiesData } from '../../../component/data/technologies.js';

export default function TechnologiesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>OUR TECH ECOSYSTEM</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Architecture & Technology Stacks
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            We build exclusively with modern, scalable, and community-supported technology frameworks to ensure longevity, developer happiness, and low operational cost.
          </p>
        </div>

        <div className="space-y-16">
          {technologiesData.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#1D4FFF]" />
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  {group.category}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.items.map((item, idx) => (
                  <Card key={idx} className="flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#1D4FFF] dark:text-[#4D7CFF] bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded inline-block mb-3">
                        {item.level}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
