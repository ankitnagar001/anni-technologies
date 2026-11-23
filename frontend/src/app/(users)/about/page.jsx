'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Target, Users, Zap, Heart } from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';
import { Button } from '../../../component/ui/Button.jsx';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Outcome-Obsessed Engineering',
      desc: 'We measure success not by hours logged, but by business conversions, sub-second latency, and platform uptime.'
    },
    {
      icon: ShieldCheck,
      title: 'Integrity & Radical Transparency',
      desc: 'Open sprint boards, continuous commits, honest feasibility assessments, and direct access to senior developers.'
    },
    {
      icon: Zap,
      title: 'Velocity Without Compromise',
      desc: 'Shipping production code rapidly using proven architectural blueprints, modern CI/CD, and automated regression testing.'
    },
    {
      icon: Heart,
      title: 'Client Partnership Culture',
      desc: 'We operate as your dedicated technology wing — treating your budget, security, and growth with founder-level ownership.'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>ABOUT ANNI SOFTWARE</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Pioneering digital craftsmanship since 2018
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Founded with a vision to build software products that stand the test of time, Anni Software has grown from an elite engineering lab to a trusted technology partner for global startups and enterprises.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-base">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Why We Are Different
            </h2>
            <p>
              Traditional agencies often rely on bloated teams, junior handoffs, and rigid contracts. At Anni Software, we do things differently: every project is spearheaded by veteran software architects who write code, review PRs, and design distributed systems.
            </p>
            <p>
              From our modern development hub in India to our client bases across North America, Europe, the Middle East, and Asia-Pacific, we bridge global timezone gaps with guaranteed daily overlap and real-time collaboration.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <div>
                <span className="block text-3xl font-extrabold text-[#1D4FFF]">150+</span>
                <span className="text-xs text-gray-500">Global Launches</span>
              </div>
              <div className="w-[1px] h-10 bg-gray-200 dark:bg-gray-800" />
              <div>
                <span className="block text-3xl font-extrabold text-[#1D4FFF]">45+</span>
                <span className="text-xs text-gray-500">Senior Engineers</span>
              </div>
              <div className="w-[1px] h-10 bg-gray-200 dark:bg-gray-800" />
              <div>
                <span className="block text-3xl font-extrabold text-[#1D4FFF]">98%</span>
                <span className="text-xs text-gray-500">CSAT Score</span>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-tr from-blue-50 to-indigo-50 dark:from-[#121A30] dark:to-[#0B1020] p-8 md:p-12 border-blue-100 dark:border-gray-800">
            <Eyebrow>OUR MISSION</Eyebrow>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              To turn ambitious ideas into world-class software that scales effortlessly.
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              We empower startups to achieve product-market fit fast, and equip enterprise leaders with modern cloud architectures that eliminate legacy technical debt.
            </p>
            <Button href="/portfolio" variant="primary">
              See What We Have Built →
            </Button>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              The Principles That Guide Every Sprint
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <Card key={i} className="flex gap-4 items-start">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-[#1D4FFF] dark:text-[#4D7CFF] shrink-0">
                  <v.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
