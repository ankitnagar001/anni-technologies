'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow.jsx';
import { Card } from '../ui/Card.jsx';
import { portfolioData } from '../data/portfolio.js';

export const FeaturedPortfolio = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Eyebrow>FEATURED WORK</Eyebrow>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Visual proof of what we build
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mt-3 max-w-xl">
              From enterprise fintech platforms to high-scale gaming netcodes and AI systems, explore our latest client deployments.
            </p>
          </div>
          <div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4FFF] dark:text-[#4D7CFF] hover:underline"
            >
              Browse all projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.slice(0, 3).map((item) => (
            <Card key={item.slug} className="p-0 overflow-hidden flex flex-col group">
              {/* Cover Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                  {item.category.map((cat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-black/80 backdrop-blur-md text-gray-900 dark:text-white"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-mono text-gray-400">{item.industry} · {item.client}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2 group-hover:text-[#1D4FFF] dark:group-hover:text-[#4D7CFF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-6">
                    {item.summary}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-2 mb-4">
                  {item.results.slice(0, 2).map((res, i) => (
                    <div key={i}>
                      <span className="block text-lg font-extrabold text-[#1D4FFF] dark:text-[#4D7CFF]">
                        {res.metric}
                      </span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400">
                        {res.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/portfolio/${item.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white hover:text-[#1D4FFF] dark:hover:text-[#4D7CFF] gap-1 transition-colors"
                >
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
