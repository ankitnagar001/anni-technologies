'use client';

import React from 'react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';
import { Button } from '../../../component/ui/Button.jsx';
import { processStepsData } from '../../../component/data/technologies.js';

export default function ProcessPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>ENGINEERING PLAYBOOK</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Our Agile Delivery Process
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            How we take projects from napkin concepts to secure, multi-region production software in predictable 2-week milestones.
          </p>
        </div>

        <div className="space-y-8 mb-20 max-w-4xl mx-auto">
          {processStepsData.map((step) => (
            <Card key={step.step} className="p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#1D4FFF] text-white flex items-center justify-center font-extrabold text-2xl shrink-0 shadow-glow">
                0{step.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h2>
                  <span className="text-xs font-mono font-semibold text-[#1D4FFF] bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#0B1020] border border-gray-100 dark:border-gray-800 text-xs">
                  <strong className="text-gray-900 dark:text-white">Key Deliverables: </strong>
                  <span className="text-gray-600 dark:text-gray-400">{step.deliverables}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="p-8 md:p-12 rounded-card bg-gray-50 dark:bg-[#121A30] border border-gray-200 dark:border-gray-800 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Ready to kick off Sprint 1?
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            We can assemble your squad and kick off discovery within 5 business days.
          </p>
          <Button href="/start-project" variant="primary">
            Start Your Project Now →
          </Button>
        </div>
      </div>
    </div>
  );
}
