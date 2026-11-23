'use client';

import React from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import {
  Code2,
  Globe,
  Smartphone,
  Gamepad2,
  Layers,
  Cpu,
  Rocket,
  Users,
  Wrench,
  LifeBuoy,
  CheckCircle2,
  ArrowRight,
  Clock,
  DollarSign
} from 'lucide-react';
import { Eyebrow } from '../../../../component/ui/Eyebrow.jsx';
import { Button } from '../../../../component/ui/Button.jsx';
import { Card } from '../../../../component/ui/Card.jsx';
import { servicesData } from '../../../../component/data/services.js';

const iconMap = {
  Code2,
  Globe,
  Smartphone,
  Gamepad2,
  Layers,
  Cpu,
  Rocket,
  Users,
  Wrench,
  LifeBuoy
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug;

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  const Icon = iconMap[service.icon] || Code2;

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#1D4FFF]">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#1D4FFF]">Services</Link>
          <span>/</span>
          <span className="text-[#1D4FFF] font-semibold">{service.title}</span>
        </div>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8">
            <Eyebrow>{service.categoryTag}</Eyebrow>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {service.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/start-project" variant="primary" icon={ArrowRight}>
                Start a {service.title} Project
              </Button>
              <Button href="/book-consultation" variant="secondary">
                Book Technical Consultation
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <Card className="flex flex-col gap-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-[#1D4FFF] dark:text-[#4D7CFF] flex items-center justify-center shadow-glow">
                <Icon className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-[#1D4FFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-gray-400">Typical Investment</span>
                    <span className="text-base font-bold text-gray-900 dark:text-white">{service.startingRange}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1D4FFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-gray-400">Standard Delivery Timeline</span>
                    <span className="text-base font-bold text-gray-900 dark:text-white">{service.typicalTimeline}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* What We Build / Capabilities */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
            What We Build & Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, i) => (
              <Card key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1D4FFF] dark:text-[#4D7CFF] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
                  {cap}
                </span>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20 p-8 md:p-12 rounded-card bg-gray-50/60 dark:bg-[#121A30] border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Technologies Typically Utilized
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-white dark:bg-[#0B1020] border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link href="/services" className="text-sm font-semibold text-[#1D4FFF] dark:text-[#4D7CFF] hover:underline">
            ← Back to all services
          </Link>
        </div>
      </div>
    </div>
  );
}
