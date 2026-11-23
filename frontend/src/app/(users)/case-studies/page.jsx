'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Search } from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { defaultCaseStudies } from '../../../component/data/casestudies_data.js';

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState(defaultCaseStudies);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCaseStudies() {
      try {
        const res = await fetch('/api/case-studies');
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setCaseStudies(json.data);
        }
      } catch (err) {
        console.warn('Using local seed case studies', err);
      } finally {
        setLoading(false);
      }
    }
    loadCaseStudies();
  }, []);

  const filteredCaseStudies = caseStudies.filter((study) => {
    const q = searchTerm.toLowerCase();
    return (
      searchTerm === '' ||
      study.title?.toLowerCase().includes(q) ||
      study.summary?.toLowerCase().includes(q) ||
      study.client?.toLowerCase().includes(q) ||
      study.tags?.some((t) => t?.toLowerCase().includes(q))
    );
  });

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>REAL-WORLD PROOF & ARCHITECTURE</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Client Case Studies
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            In-depth breakdowns of how our engineering teams solved complex architectural challenges, improved conversion rates, and shipped high-scale software.
          </p>
        </div>

        {/* Search bar */}
        <div className="flex justify-between items-center mb-10 gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#1D4FFF] shadow-sm"
            />
          </div>
          <div className="text-xs font-mono text-gray-400 shrink-0">
            {filteredCaseStudies.length} {filteredCaseStudies.length === 1 ? 'Study' : 'Case Studies'}
          </div>
        </div>

        {/* 2-Column Wide Layout matching reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.id || study.slug}
              className="bg-white dark:bg-[#121A30] rounded-3xl border border-gray-200 dark:border-gray-800/80 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 group"
            >
              <div>
                {/* Mockup Showcase Banner */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-gray-950">
                  <Image
                    src={study.mockupImage || study.cover}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="p-7 sm:p-8">
                  {/* Category Pills */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {(study.tags || [study.industry || 'Technology']).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white group-hover:text-[#1D4FFF] transition-colors leading-tight mb-3">
                    {study.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {study.summary}
                  </p>
                </div>
              </div>

              {/* Read Case Study Link matching screenshot */}
              <div className="px-7 sm:px-8 pb-7 pt-0">
                <Link
                  href={`/portfolio/${study.slug || 'finscale-neobank'}`}
                  className="inline-flex items-center text-sm font-bold text-[#1D4FFF] hover:underline gap-1.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read case study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#1D4FFF]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
