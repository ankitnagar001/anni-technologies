'use client';

import React from 'react';
import { ShieldCheck, Clock, Award, Code2, Users2, Cpu } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow.jsx';
import { Card } from '../ui/Card.jsx';

export const WhyChooseUs = () => {
  const differentiators = [
    {
      icon: Users2,
      title: 'Dedicated Senior Squads',
      desc: 'No junior handoffs. Work directly with top 3% vetted senior architects, full-stack engineers, and UI/UX designers.'
    },
    {
      icon: Clock,
      title: 'Agile & Rapid Delivery',
      desc: 'Transparent 2-week sprints with weekly live demo milestones. Get working software in hands fast, not endless slide decks.'
    },
    {
      icon: ShieldCheck,
      title: '100% IP & Code Ownership',
      desc: 'You own every line of source code, design token, database schema, and intellectual asset. Complete handover from day one.'
    },
    {
      icon: Code2,
      title: 'Enterprise Clean Architecture',
      desc: 'Tested, documented, and modular codebases designed to handle millions of daily requests with low cloud overhead.'
    },
    {
      icon: Cpu,
      title: 'AI & Automation First',
      desc: 'We embed intelligent workflows, LLMs, and autonomous processing into your product to give you an unfair market edge.'
    },
    {
      icon: Award,
      title: 'SLA Uptime & Warranty',
      desc: '30-day comprehensive post-launch warranty with ongoing 24/7 SLA monitoring and immediate critical bug response.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50/50 dark:bg-[#0A1022]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>WHY WORK WITH US</Eyebrow>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Engineered for reliability, velocity, and scale
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4">
            We partner with founders and enterprise leaders who require flawless execution, transparent communication, and technical mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, idx) => (
            <Card key={idx} className="flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#1D4FFF] dark:text-[#4D7CFF] flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
