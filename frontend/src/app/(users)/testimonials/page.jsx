'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';
import { Button } from '../../../component/ui/Button.jsx';

export default function TestimonialsPage() {
  const reviews = [
    {
      author: 'Marcus Vance',
      role: 'CTO',
      company: 'FinScale Ltd.',
      quote:
        'Anni Software rebuilt our entire fintech ledger in Next.js and Node.js. Their engineering depth and proactive architectural recommendations were top tier. Our settlement time improved by 3.4x.',
      rating: 5,
      industry: 'Fintech'
    },
    {
      author: 'Dr. Elena Rostova',
      role: 'VP of Product',
      company: 'Medix Health Systems',
      quote:
        'The mobile app they delivered for MedixAI received a 4.9 rating on both app stores. They adhered strictly to HIPAA compliance protocols and completed the launch 2 weeks ahead of our investor deadline.',
      rating: 5,
      industry: 'Healthcare'
    },
    {
      author: 'David Zhang',
      role: 'Founder & CEO',
      company: 'Aura Luxe Brands',
      quote:
        'Their dedicated squad felt like true in-house team members. Daily Slack updates, weekly demo videos, and zero unexpected scope bloat. We increased our e-commerce conversion by 48%.',
      rating: 5,
      industry: 'E-Commerce'
    },
    {
      author: 'Liam O’Connor',
      role: 'Head of Engineering',
      company: 'Nova Interactive Games',
      quote:
        'The multiplayer netcode optimization they executed saved our mobile launch. Zero packet loss issues and stable 60 FPS even on mid-range Android devices.',
      rating: 5,
      industry: 'Gaming'
    },
    {
      author: 'Priya Sharma',
      role: 'Director of Operations',
      company: 'CargoLink Logistics',
      quote:
        'From IoT telemetry pipelines to driver companion apps, Anni Software delivered an incredibly robust platform that manages 3,500+ commercial trucks daily.',
      rating: 5,
      industry: 'Logistics'
    },
    {
      author: 'Arthur Pendelton',
      role: 'Chief Commercial Officer',
      company: 'Omni Airways Concierge',
      quote:
        'The autonomous AI travel booking agent built by Anni Software handles 74% of our customer itineraries with zero human intervention. Remarkable engineering quality.',
      rating: 5,
      industry: 'Travel & Aviation'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>TESTIMONIALS & REPUTATION</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Client Reviews & Stories
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Read direct feedback from executives, CTOs, and product leaders who have scaled their businesses with Anni Software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((r, i) => (
            <Card key={i} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                    {r.industry}
                  </span>
                </div>
                <Quote className="w-6 h-6 text-[#1D4FFF]/20 mb-2" />
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic mb-6">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="block font-bold text-gray-900 dark:text-white">
                  {r.author}
                </span>
                <span className="block text-xs text-gray-500">
                  {r.role} · <strong className="text-gray-800 dark:text-gray-200">{r.company}</strong>
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button href="/start-project" variant="primary">
            Start Your Own Success Story With Us →
          </Button>
        </div>
      </div>
    </div>
  );
}
