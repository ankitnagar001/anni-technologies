'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock } from 'lucide-react';
import { Eyebrow } from '../../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../../component/ui/Card.jsx';
import { Button } from '../../../../component/ui/Button.jsx';

export default function BlogDetailPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#1D4FFF] mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>

        <div className="mb-8">
          <Eyebrow>ENGINEERING ARCHITECTURE</Eyebrow>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Migrating Monolithic E-Commerce to Next.js 14 & Vercel Edge
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>By Anni Software Architecture Team</span>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>6 min read</span>
            </div>
            <span>·</span>
            <span>November 18, 2026</span>
          </div>
        </div>

        <div className="relative h-80 sm:h-96 w-full rounded-card overflow-hidden shadow-xl mb-12">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
            alt="Article cover"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <Card className="prose dark:prose-invert max-w-none text-base leading-relaxed space-y-6">
          <p>
            When legacy e-commerce stores encounter sudden traffic spikes during marketing campaigns, traditional monolithic servers often throttle, causing latency spikes and high cart abandonment rates.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            1. Why We Decoupled the Presentation Layer
          </h2>
          <p>
            By adopting a headless architecture with Next.js 14 App Router, we separated content rendering from the underlying transactional database. Utilizing Incremental Static Regeneration (ISR), product listing pages are served directly from edge points of presence in under 50ms.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            2. Core Web Vitals Impact
          </h2>
          <p>
            Largest Contentful Paint (LCP) was reduced from 3.8 seconds to 0.7 seconds, and Cumulative Layout Shift (CLS) dropped to 0.01. This direct performance boost yielded a 48% lift in mobile checkout completion.
          </p>
        </Card>

        <div className="mt-12 text-center">
          <Button href="/start-project" variant="primary">
            Discuss Your E-Commerce Architecture With Us →
          </Button>
        </div>
      </div>
    </div>
  );
}
