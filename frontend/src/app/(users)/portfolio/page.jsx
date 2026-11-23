'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Search } from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';
import { portfolioData } from '../../../component/data/portfolio.js';

const categories = ['All', 'Web', 'Mobile', 'Enterprise', 'E-commerce', 'Games', 'AI'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = portfolioData.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' || item.category.some((c) => c.toLowerCase() === activeCategory.toLowerCase());
    const matchesSearch =
      searchTerm === '' ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>PORTFOLIO & CASE STUDIES</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Visual proof of what we build
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Explore our curated gallery of high-scale digital platforms, mobile apps, and custom software delivered for global clients.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1D4FFF] text-white shadow-glow'
                    : 'bg-white dark:bg-[#121A30] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-[#1D4FFF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs sm:text-sm pl-9 pr-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <Card key={item.slug} className="p-0 overflow-hidden flex flex-col group">
              <div className="relative h-60 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
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
    </div>
  );
}
