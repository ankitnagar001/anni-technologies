'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Search } from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { defaultProjects } from '../../../component/data/projects_data.js';

const categoryTabs = [
  { name: 'All', count: 69 },
  { name: 'Games', count: 31 },
  { name: 'Software', count: 16 },
  { name: 'Web', count: 33 },
  { name: 'Mobile', count: 11 },
  { name: 'SaaS', count: 6 },
  { name: 'E-commerce', count: 4 },
  { name: 'ERP', count: 4 },
  { name: 'AI', count: 1 },
  { name: 'Blockchain', count: 2 }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState(defaultProjects);
  const [loading, setLoading] = useState(true);

  // Dynamic fetch from API
  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch('/api/projects');
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setProjects(json.data);
        }
      } catch (err) {
        console.warn('Using local seed projects', err);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  const filteredProjects = projects.filter((item) => {
    const cats = Array.isArray(item.category) ? item.category : [item.category];
    const badge = item.badge || '';
    const matchesCategory =
      activeCategory === 'All' ||
      cats.some((c) => c?.toLowerCase() === activeCategory.toLowerCase()) ||
      badge.toLowerCase().includes(activeCategory.toLowerCase()) ||
      (item.eyebrow && item.eyebrow.toLowerCase() === activeCategory.toLowerCase());

    const matchesSearch =
      searchTerm === '' ||
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subtitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.techStack?.some((t) => t?.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Eyebrow>OUR WORK & PORTFOLIO</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Visual proof of what we build
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Explore our cutting-edge games, high-scale web platforms, enterprise software, and mobile apps engineered for industry leaders worldwide.
          </p>
        </div>

        {/* Filter Pills row exactly matching reference screenshot */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory.toLowerCase() === tab.name.toLowerCase();
            return (
              <button
                key={tab.name}
                onClick={() => setActiveCategory(tab.name)}
                className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1D4FFF] text-white shadow-glow ring-2 ring-[#1D4FFF]/30'
                    : 'bg-white dark:bg-[#121A30] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/60'
                }`}
              >
                <span>{tab.name}</span>
                <span
                  className={`text-[11px] font-mono ${
                    isActive ? 'text-blue-100' : 'text-gray-400 dark:text-gray-500'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search bar */}
        <div className="flex justify-between items-center mb-8 gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects by keyword, tech, or title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#1D4FFF] shadow-sm"
            />
          </div>
          <div className="text-xs font-mono text-gray-400 shrink-0">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
          </div>
        </div>

        {/* 3-Column Grid matching reference cards */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-[#121A30] rounded-3xl border border-gray-200 dark:border-gray-800 p-8">
            <p className="text-base font-semibold text-gray-500">
              No projects found matching &ldquo;{searchTerm || activeCategory}&rdquo;.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchTerm('');
              }}
              className="mt-4 px-5 py-2.5 rounded-full bg-[#1D4FFF] text-white text-xs font-semibold hover:bg-blue-600 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id || project.slug}
                className="bg-white dark:bg-[#121A30] rounded-3xl border border-gray-200 dark:border-gray-800/80 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 group"
              >
                <div>
                  {/* Cover container with top-left floating pill badge */}
                  <div className="relative h-60 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {project.badge && (
                      <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/95 dark:bg-black/85 backdrop-blur-md text-gray-900 dark:text-white shadow-sm border border-black/5 dark:border-white/10">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    {/* Eyebrow */}
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#0284c7] dark:text-[#38bdf8] font-bold block mb-1">
                      {project.eyebrow || (project.category && project.category[0]) || 'SOFTWARE'}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#1D4FFF] transition-colors leading-tight mb-1">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    {project.subtitle && (
                      <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 line-clamp-1">
                        {project.subtitle}
                      </p>
                    )}

                    {/* Summary paragraph */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-5">
                      {project.summary}
                    </p>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {(project.techStack || []).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-[11px] font-medium bg-gray-50 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 border border-gray-200/80 dark:border-gray-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action links matching reference */}
                <div className="px-6 sm:px-7 py-4 bg-gray-50/60 dark:bg-gray-900/40 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-4">
                    {project.caseStudySlug ? (
                      <Link
                        href={`/case-studies`}
                        className="text-[#1D4FFF] hover:underline flex items-center gap-1 font-bold"
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <Link
                        href={`/portfolio/${project.slug || project.id}`}
                        className="text-[#1D4FFF] hover:underline flex items-center gap-1 font-bold"
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>Visit live</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
