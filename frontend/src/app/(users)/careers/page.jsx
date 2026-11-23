'use client';

import React from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';
import { Button } from '../../../component/ui/Button.jsx';

export default function CareersPage() {
  const jobs = [
    {
      title: 'Senior Full-Stack Engineer (Next.js & Node.js)',
      department: 'Engineering',
      location: 'Remote / Hybrid (India)',
      type: 'Full-time',
      experience: '4+ years',
      desc: 'Lead the architecture and implementation of enterprise web applications, microservices, and high-performance databases.'
    },
    {
      title: 'Senior Mobile Developer (React Native & Flutter)',
      department: 'Mobile',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      desc: 'Build fluid 60 FPS iOS and Android apps with native bridge modules and offline data synchronization.'
    },
    {
      title: 'AI / Machine Learning Engineer (Python & LLMs)',
      department: 'Emerging Tech',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      desc: 'Design autonomous AI agents, RAG pipelines, fine-tuned embedding models, and vector database retrieval systems.'
    },
    {
      title: 'Senior UI/UX & Product Designer',
      department: 'Design',
      location: 'Remote / Hybrid (India)',
      type: 'Full-time',
      experience: '4+ years',
      desc: 'Craft intuitive Figma prototypes, design systems, light/dark themes, and micro-interactions for global SaaS clients.'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>JOIN OUR SQUAD</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Build software that matters
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Work with senior engineers on complex technical challenges. Flexible remote culture, competitive compensation, and zero bureaucracy.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <Card className="text-center">
            <span className="text-2xl mb-2 block">🌍</span>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Remote-First Flexibility</h3>
            <p className="text-xs text-gray-500">Work from anywhere with high-speed internet and flexible core hours.</p>
          </Card>
          <Card className="text-center">
            <span className="text-2xl mb-2 block">🚀</span>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Cutting-Edge Tech</h3>
            <p className="text-xs text-gray-500">No legacy maintenance. Modern Next.js, AI, and cloud technologies.</p>
          </Card>
          <Card className="text-center">
            <span className="text-2xl mb-2 block">📈</span>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Learning & Growth</h3>
            <p className="text-xs text-gray-500">Annual learning stipend for certifications, courses, and conferences.</p>
          </Card>
        </div>

        {/* Open Roles */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
          Open Positions (4)
        </h2>

        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <Card key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-[#1D4FFF] font-semibold bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded">
                  {job.department}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-1">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mb-3">
                  {job.desc}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{job.type} · {job.experience}</span>
                  </div>
                </div>
              </div>

              <Button
                href="/contact"
                variant="primary"
                className="shrink-0"
                icon={ArrowRight}
              >
                Apply for Role
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
