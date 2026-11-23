'use client';

import React from 'react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Eyebrow>TERMS & CONDITIONS</Eyebrow>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <span className="text-xs font-mono text-gray-500">Effective Date: November 23, 2026</span>
        </div>

        <Card className="prose dark:prose-invert max-w-none text-sm leading-relaxed text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Welcome to Anni Software. By accessing our website, engaging our software engineering services, or utilizing our APIs, you agree to these Terms of Service.
          </p>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">1. Scope of Services</h2>
          <p>
            Anni Software provides custom software engineering, mobile development, UI/UX design, cloud architecture, and technical consulting under statement of work (SOW) milestone agreements.
          </p>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">2. Intellectual Property</h2>
          <p>
            Upon full receipt of agreed contract milestone payments, all bespoke code, architecture documentation, design files, and database assets transfer 100% to the client.
          </p>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">3. Confidentiality & Non-Disclosure</h2>
          <p>
            Both parties agree to treat all proprietary business logic, designs, source code, and commercial agreements as strictly confidential under standard mutual NDA covenants.
          </p>
        </Card>
      </div>
    </div>
  );
}
