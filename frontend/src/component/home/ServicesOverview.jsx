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
  ArrowRight
} from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow.jsx';
import { Card } from '../ui/Card.jsx';
import { servicesData } from '../data/services.js';

const iconMap = {
  Code2,
  Globe,
  Smartphone,
  Gamepad2,
  Layers,
  Cpu,
  Rocket,
  Users
};

export const ServicesOverview = () => {
  return (
    <section className="py-20 md:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>OUR SPECIALIZATIONS</Eyebrow>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            High-impact software services for ambitious brands
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4">
            We cover the entire modern technology lifecycle: from architecture and intuitive design to high-throughput cloud engineering and AI integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 6).map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <Card key={service.slug} className="flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#1D4FFF] dark:text-[#4D7CFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-medium text-gray-400 uppercase tracking-wider">
                    {service.categoryTag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-3 group-hover:text-[#1D4FFF] dark:group-hover:text-[#4D7CFF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {service.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-[#1D4FFF] dark:text-[#4D7CFF] hover:underline gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-gray-400 font-mono">{service.typicalTimeline}</span>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-btn border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium text-sm hover:border-[#1D4FFF] dark:hover:border-[#4D7CFF] hover:text-[#1D4FFF] dark:hover:text-[#4D7CFF] transition-all"
          >
            Explore all 10 specialized services →
          </Link>
        </div>
      </div>
    </section>
  );
};
