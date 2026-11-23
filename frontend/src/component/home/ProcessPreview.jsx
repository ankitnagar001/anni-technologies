'use client';

import React from 'react';
import Link from 'next/link';
import { Eyebrow } from '../ui/Eyebrow.jsx';
import { processStepsData } from '../data/technologies.js';

export const ProcessPreview = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>HOW WE WORK</Eyebrow>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            A battle-tested 5-step delivery process
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4">
            Eliminating guesswork with transparent sprint cycles, proactive risk assessment, and continuous integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processStepsData.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-white dark:bg-[#121A30] border border-gray-200/80 dark:border-gray-800 flex flex-col justify-between hover:border-[#1D4FFF] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#1D4FFF] dark:text-[#4D7CFF] bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md inline-block mb-4">
                  STEP 0{item.step}
                </span>
                <span className="block text-xs text-gray-400 font-mono mb-1">{item.duration}</span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/process"
            className="text-sm font-semibold text-[#1D4FFF] dark:text-[#4D7CFF] hover:underline"
          >
            Read our full engineering playbook & QA standards →
          </Link>
        </div>
      </div>
    </section>
  );
};
