'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../component/ui/Button.jsx';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#F8FAFF] dark:bg-[#0B1020] text-gray-900 dark:text-white">
      <div className="max-w-md text-center">
        <span className="text-7xl sm:text-9xl font-extrabold text-[#1D4FFF] block mb-2">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          The page or route you are looking for has been moved, renamed, or does not exist.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/" variant="primary" icon={ArrowLeft}>
            Back to Home
          </Button>
          <Button href="/services" variant="secondary">
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
}
