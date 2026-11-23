'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';

const articles = [
  {
    title: 'Migrating Monolithic E-Commerce to Next.js 14 & Vercel Edge',
    slug: 'migrating-ecommerce-nextjs',
    category: 'Architecture',
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    summary: 'How our engineering team cut TTFB by 78% and eliminated cold starts for an international luxury retail platform.',
    readingTime: '6 min read',
    date: 'Nov 18, 2026'
  },
  {
    title: 'Designing Real-Time Multiplayer Netcode in Unity & Photon',
    slug: 'multiplayer-netcode-unity',
    category: 'Game Tech',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    summary: 'A deep dive into binary packet serialization, client-side prediction, and lag compensation for competitive mobile arenas.',
    readingTime: '8 min read',
    date: 'Nov 10, 2026'
  },
  {
    title: 'Autonomous LLM Agents with RAG in Production',
    slug: 'autonomous-llm-agents-rag',
    category: 'AI & Data',
    cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    summary: 'Lessons learned implementing LangChain, vector retrieval, and automated guardrails for enterprise customer support copilots.',
    readingTime: '7 min read',
    date: 'Oct 28, 2026'
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>INSIGHTS & ENGINEERING ARTICLES</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Engineering Blog & Insights
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Technical breakdowns, architecture blueprints, performance post-mortems, and software product playbooks from our senior engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <Card key={art.slug} className="p-0 overflow-hidden flex flex-col group">
              <div className="relative h-52 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={art.cover}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-black/80 backdrop-blur-md">
                  {art.category}
                </span>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readingTime}</span>
                    <span>·</span>
                    <span>{art.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#1D4FFF] transition-colors leading-snug">
                    {art.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {art.summary}
                  </p>
                </div>

                <Link
                  href={`/blog/${art.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[#1D4FFF] hover:underline gap-1"
                >
                  Read full article <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
