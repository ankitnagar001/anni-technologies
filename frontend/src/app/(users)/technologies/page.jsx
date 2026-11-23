'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';
import { Button } from '../../../component/ui/Button.jsx';
import { TechIcon } from '../../../component/ui/TechIcon.jsx';
import { technologiesData } from '../../../component/data/technologies.js';

export default function TechnologiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  const allCategories = ['All', ...technologiesData.map((t) => t.category)];

  const filteredCategories = technologiesData
    .filter((g) => selectedCategory === 'All' || g.category === selectedCategory)
    .map((g) => {
      const filteredItems = g.items.filter((item) => {
        const query = search.toLowerCase();
        return (
          item.name.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query) ||
          item.level.toLowerCase().includes(query)
        );
      });
      return { ...g, items: filteredItems };
    })
    .filter((g) => g.items.length > 0);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>ENTERPRISE TECHNOLOGY ECOSYSTEM</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Architecture & Technologies
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            We build exclusively with modern, battle-tested, and developer-loved frameworks. Each technology is selected for maximum speed, security, and enterprise maintainability.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1D4FFF] text-white shadow-glow'
                    : 'bg-white dark:bg-[#121A30] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-[#1D4FFF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search stack (e.g. Next.js, AI, AWS)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-xs pl-9 pr-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
            />
          </div>
        </div>

        {/* Categorized Tech Stacks */}
        <div className="space-y-16 mb-20">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#1D4FFF] shadow-glow" />
                  <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                    {group.category}
                  </h2>
                </div>
                <span className="text-xs font-mono text-gray-400">
                  {group.items.length} Production Technologies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.items.map((tech, idx) => (
                  <Card
                    key={idx}
                    className="flex flex-col justify-between group hover:border-[#1D4FFF] dark:hover:border-[#4D7CFF] transition-all p-6"
                  >
                    <div>
                      {/* Brand Icon Tile */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/80 flex items-center justify-center p-3 group-hover:scale-110 group-hover:shadow-soft transition-all">
                          <TechIcon name={tech.name} className="w-8 h-8 object-contain" />
                        </div>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                            tech.level === 'Core Stack'
                              ? 'bg-blue-50 dark:bg-blue-950/60 text-[#1D4FFF] dark:text-[#4D7CFF] border border-blue-200/50 dark:border-blue-800/50'
                              : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50'
                          }`}
                        >
                          {tech.level}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#1D4FFF] dark:group-hover:text-[#4D7CFF] transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {tech.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                      <span>Production Ready</span>
                      <span className="text-[#1D4FFF] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        SLA Guaranteed
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Principles Section */}
        <div className="rounded-card bg-gradient-to-r from-blue-600 to-[#1D4FFF] text-white p-8 md:p-12 mb-16 shadow-glow">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-200 block mb-2">
              HOW WE CHOOSE OUR STACK
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Our 3 Core Architecture Tenets
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs leading-relaxed text-blue-100">
              <div>
                <strong className="text-white text-sm block mb-1">1. Sub-Second Speed</strong>
                Zero bloated abstractions. Edge caching, static regeneration, and lightweight bundles ensure sub-second LCP.
              </div>
              <div>
                <strong className="text-white text-sm block mb-1">2. Strict Security First</strong>
                End-to-end data encryption, JWT in HTTP-Only cookies, OWASP Top 10 mitigation, and automated vulnerability scanning.
              </div>
              <div>
                <strong className="text-white text-sm block mb-1">3. Zero Vendor Lock-in</strong>
                Open-source foundations with clean modular code that can be deployed anywhere: AWS, Vercel, Docker, or bare metal.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Need a tailored stack consultation for your project?
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Speak directly with a lead systems architect to evaluate tech stack trade-offs.
          </p>
          <Button href="/book-consultation" variant="primary" icon={ArrowRight}>
            Book Free Tech Advisory Call
          </Button>
        </div>
      </div>
    </div>
  );
}
