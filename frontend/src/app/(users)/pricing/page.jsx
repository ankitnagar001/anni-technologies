'use client';

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';
import { Button } from '../../../component/ui/Button.jsx';

export default function PricingPage() {
  const models = [
    {
      name: 'Fixed-Price Milestones',
      tag: 'Best for MVPs & Defined Scopes',
      desc: 'Predictable budgeting with locked deliverables, clear timelines, and zero financial surprises.',
      range: 'From $8,000',
      features: [
        'Detailed SRS & Technical Architecture Plan',
        'Figma UI/UX Mockups & Design Tokens',
        'Milestone-based Payments (3-4 installments)',
        '30-Day Post-Launch Bug Warranty',
        'Full Source Code & IP Handover'
      ],
      popular: false
    },
    {
      name: 'Dedicated Squad',
      tag: 'Most Popular for Scaling Companies',
      desc: 'Full-time senior developers, UI/UX designer, and QA engineer working exclusively as your in-house wing.',
      range: 'From $4,500 / engineer / mo',
      features: [
        'Top 3% Vetted Senior Full-Stack Engineers',
        'Guaranteed 4+ Hours Timezone Overlap',
        'Daily Standups & Weekly Sprint Demos',
        'Direct Slack, Jira, and GitHub Integration',
        'Scale Up or Down with 2 Weeks Notice'
      ],
      popular: true
    },
    {
      name: 'Time & Material (T&M)',
      tag: 'Best for Dynamic R&D & Audits',
      desc: 'Flexible hourly billing for rapid prototyping, complex refactoring, and evolving feature backlogs.',
      range: 'From $45 / hour',
      features: [
        'Weekly Timesheet & Transparency Logs',
        'Pay Only for Actual Productive Hours',
        'Pivot Priorities Any Time on Backlog',
        'Senior Solutions Architect Advisory',
        'No Long-Term Lock-in Contract'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>TRANSPARENT ENGAGEMENT</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Engagement Models & Pricing
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Choose the engagement model that matches your product stage, timeline, and governance requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {models.map((model, idx) => (
            <Card
              key={idx}
              className={`flex flex-col justify-between relative ${
                model.popular ? 'border-[#1D4FFF] shadow-glow ring-2 ring-[#1D4FFF]/20' : ''
              }`}
            >
              {model.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1D4FFF] text-white shadow-md">
                  Recommended
                </span>
              )}

              <div>
                <span className="text-xs font-mono font-semibold text-[#1D4FFF] block mb-1">
                  {model.tag}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {model.name}
                </h2>
                <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                  {model.desc}
                </p>

                <div className="py-4 border-y border-gray-100 dark:border-gray-800 mb-6">
                  <span className="text-xs text-gray-400 font-mono block">Starting Investment</span>
                  <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
                    {model.range}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {model.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                      <Check className="w-4 h-4 text-[#1D4FFF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                href="/start-project"
                variant={model.popular ? 'primary' : 'secondary'}
                className="w-full"
                icon={ArrowRight}
              >
                Choose {model.name.split(' ')[0]}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
