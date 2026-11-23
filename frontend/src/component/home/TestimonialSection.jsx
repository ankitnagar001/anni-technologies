'use client';

import React from 'react';
import Link from 'next/link';
import { Star, Quote } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow.jsx';
import { Card } from '../ui/Card.jsx';

export const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        'Anni Software rebuilt our entire fintech ledger in Next.js and Node.js. Their engineering depth and proactive architectural recommendations were top tier. Our settlement time improved by 3.4x.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'FinScale Ltd.',
      rating: 5
    },
    {
      quote:
        'The mobile app they delivered for MedixAI received a 4.9 rating on both app stores. They adhered strictly to HIPAA compliance protocols and completed the launch 2 weeks ahead of our investor deadline.',
      author: 'Dr. Elena Rostova',
      role: 'VP of Product',
      company: 'Medix Health Systems',
      rating: 5
    },
    {
      quote:
        'Their dedicated squad felt like true in-house team members. Daily Slack updates, weekly demo videos, and zero unexpected scope bloat. We increased our e-commerce conversion by 48%.',
      author: 'David Zhang',
      role: 'Founder & CEO',
      company: 'Aura Luxe Brands',
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>TESTIMONIALS & TRUST</Eyebrow>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Loved by product leaders worldwide
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4">
            Hear directly from the founders, CTOs, and product directors who rely on Anni Software to engineer their mission-critical software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#1D4FFF]/20 dark:text-[#4D7CFF]/20 mb-2" />
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="block font-bold text-gray-900 dark:text-white text-base">
                  {t.author}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {t.role} · <strong className="text-gray-800 dark:text-gray-200">{t.company}</strong>
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
