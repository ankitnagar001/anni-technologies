'use client';

import React from 'react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Eyebrow>LEGAL & DATA COMPLIANCE</Eyebrow>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <span className="text-xs font-mono text-gray-500">Effective Date: November 23, 2026</span>
        </div>

        <Card className="prose dark:prose-invert max-w-none text-sm leading-relaxed text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            At <strong>Anni Software Technologies Pvt. Ltd.</strong> (&quot;Anni Software&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are committed to safeguarding the privacy and confidentiality of our clients, website visitors, and job applicants in compliance with the EU General Data Protection Regulation (GDPR) and the Digital Personal Data Protection (DPDP) Act.
          </p>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide when filling out inquiry forms, requesting discovery consultations, or submitting job applications. This may include your full name, work email address, phone/WhatsApp number, company name, and project briefs.
          </p>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">2. How We Use Your Information</h2>
          <p>
            We use collected data solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Review and respond to client project inquiries and RFPs.</li>
            <li>Schedule technical discovery calls via video conference links.</li>
            <li>Process job applications for engineering and design roles.</li>
            <li>Monitor and improve website performance, uptime, and Core Web Vitals.</li>
          </ul>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">3. Data Security & Storage</h2>
          <p>
            All submitted data is transmitted using TLS 1.3 encryption and stored in enterprise MongoDB Atlas clusters with AES-256 encryption at rest. We never sell, monetize, or lease your personal data to any third party.
          </p>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">4. Contact Our Data Protection Officer</h2>
          <p>
            To request data access, rectification, or permanent deletion, email our Data Protection Office at <strong>privacy@annisoftware.com</strong>.
          </p>
        </Card>
      </div>
    </div>
  );
}
