'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../../../component/ui/Button.jsx';
import { Card } from '../../../component/ui/Card.jsx';

export default function ThankYouPage() {
  return (
    <div className="pt-36 pb-28 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        <Card className="p-12">
          <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
            Thank You for Connecting!
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Your message has been delivered to our engineering and business solutions team. We will review your project requirements and follow up within 24 hours.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/" variant="primary" icon={ArrowRight}>
              Return to Home
            </Button>
            <Button href="/portfolio" variant="secondary">
              Explore Our Portfolio
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
