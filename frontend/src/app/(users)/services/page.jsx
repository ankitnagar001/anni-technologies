'use client';

import React from 'react';
import Link from 'next/link';
import {
  Code2,
  Globe,
  Smartphone,
  Gamepad2,
  Layers,
  Cpu,
  Rocket,
  Users,
  Wrench,
  LifeBuoy,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';
import { Button } from '../../../component/ui/Button.jsx';
import { servicesData } from '../../../component/data/services.js';

const iconMap = {
  Code2,
  Globe,
  Smartphone,
  Gamepad2,
  Layers,
  Cpu,
  Rocket,
  Users,
  Wrench,
  LifeBuoy
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>OUR ENGINEERING CAPABILITIES</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            End-to-end software & product engineering
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            From single MVP prototypes to distributed high-availability cloud platforms, discover our comprehensive range of 10 engineering specializations.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <Card key={service.slug} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#1D4FFF] dark:text-[#4D7CFF] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-medium text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                      {service.categoryTag}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-gray-900 dark:text-white tracking-wider uppercase">
                      Core Capabilities:
                    </span>
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4FFF] dark:text-[#4D7CFF] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="block text-[11px] text-gray-400 font-mono">Indicative Scope</span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{service.startingRange}</span>
                  </div>
                  <Button href={`/services/${service.slug}`} variant="subtle" icon={ArrowRight}>
                    View Details
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-card bg-gray-50 dark:bg-[#121A30] border border-gray-200 dark:border-gray-800 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            Not sure which service fits your project?
          </h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6">
            Book a complimentary 30-minute discovery consultation with one of our lead system architects.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-consultation" variant="primary">
              Book a Free Discovery Call
            </Button>
            <Button href="/contact" variant="secondary">
              Send an RFP / Brief →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
