'use client';

import React from 'react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';

export default function CookiePolicyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Eyebrow>DATA PREFERENCES</Eyebrow>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Cookie Policy
          </h1>
          <span className="text-xs font-mono text-gray-500">Effective Date: November 23, 2026</span>
        </div>

        <Card className="prose dark:prose-invert max-w-none text-sm leading-relaxed text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Our website uses strictly necessary cookies and analytics cookies to optimize user experience, remember theme preferences (Light vs. Dark mode), and measure page loading speed.
          </p>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Types of Cookies Used</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Essential & Functional:</strong> Storing theme choice (`anni_theme`) and secure admin session tokens (`httpOnly`).</li>
            <li><strong>Analytics & Performance:</strong> Measuring page response times, web vitals, and conversion funnel health.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
