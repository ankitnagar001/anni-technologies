'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Eyebrow } from '../../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../../component/ui/Card.jsx';
import { Button } from '../../../../component/ui/Button.jsx';
import { portfolioData } from '../../../../component/data/portfolio.js';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug;

  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#1D4FFF] mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>

        {/* Title Block */}
        <div className="mb-10">
          <Eyebrow>{project.industry} CASE STUDY</Eyebrow>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Cover Mockup */}
        <div className="relative h-80 sm:h-[480px] w-full rounded-card overflow-hidden shadow-2xl mb-16">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Results Highlight Band */}
        <div className="rounded-card bg-blue-50/70 dark:bg-[#121A30] border border-blue-100 dark:border-gray-800 p-8 mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#1D4FFF] dark:text-[#4D7CFF] block mb-4">
            KEY PERFORMANCE OUTCOMES
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.results.map((res, i) => (
              <div key={i}>
                <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white block">
                  {res.metric}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 block">
                  {res.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* The Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              The Challenge
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.challenge}
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              The Engineering Solution
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </Card>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-gray-100 dark:bg-[#121A30] border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 md:p-12 rounded-card bg-gradient-to-r from-blue-600 to-[#1D4FFF] text-white text-center shadow-glow">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Want similar outcomes for your business?
          </h2>
          <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto mb-6">
            Let&apos;s engineer your product with senior full-stack talent and agile milestones.
          </p>
          <Button href="/start-project" variant="subtle" className="bg-white text-blue-600 hover:bg-blue-50">
            Start Your Project With Us →
          </Button>
        </div>
      </div>
    </div>
  );
}
