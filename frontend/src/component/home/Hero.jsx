'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow.jsx';
import { Button } from '../ui/Button.jsx';
import { OrbitVisual } from './OrbitVisual.jsx';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 text-left">
            <Eyebrow>ENTERPRISE SOFTWARE & PRODUCT LAB</Eyebrow>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.08] mb-6">
              We engineer software that{' '}
              <span className="bg-gradient-to-r from-[#1D4FFF] via-[#5B3DF5] to-[#0E7490] bg-clip-text text-transparent">
                scales your business.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
              A high-calibre team of engineers, architects, and product designers building bespoke web applications, mobile platforms, enterprise cloud systems, and AI automation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button href="/start-project" variant="primary" icon={ArrowRight}>
                Start Your Project
              </Button>
              <Button href="/portfolio" variant="secondary">
                View Portfolio →
              </Button>
            </div>

            {/* Trust Row */}
            <div className="pt-6 border-t border-gray-200/80 dark:border-gray-800 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">4.9/5</span> on Clutch
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1D4FFF]" />
                <span>150+ Delivered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span>12 Countries</span>
              </div>
            </div>
          </div>

          {/* Right Visual Orbit */}
          <div className="lg:col-span-5 flex justify-center">
            <OrbitVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
