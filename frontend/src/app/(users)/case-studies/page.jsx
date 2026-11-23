'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';
import { portfolioData } from '../../../component/data/portfolio.js';

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>REAL-WORLD RESULTS</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Client Case Studies
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            In-depth breakdowns of how our engineering teams solved complex architectural challenges, improved conversion rates, and shipped high-scale software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.map((study) => (
            <Card key={study.slug} className="p-0 overflow-hidden flex flex-col group">
              <div className="relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={study.cover}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-black/80 backdrop-blur-md">
                  {study.industry}
                </span>
              </div>

              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-mono text-gray-400">{study.client} · {study.year}</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1 mb-3 group-hover:text-[#1D4FFF] transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {study.summary}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4 border-y border-gray-100 dark:border-gray-800 mb-6">
                  {study.results.map((r, i) => (
                    <div key={i}>
                      <span className="block text-xl font-extrabold text-[#1D4FFF]">{r.metric}</span>
                      <span className="block text-xs text-gray-500">{r.label}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/portfolio/${study.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[#1D4FFF] hover:underline gap-1"
                >
                  Read full case study breakdown <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
