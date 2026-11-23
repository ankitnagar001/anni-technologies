'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';
import { faqsData } from '../../../component/data/technologies.js';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Eyebrow>FREQUENTLY ASKED QUESTIONS</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Everything you need to know
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Have questions about our pricing, sprint cadences, NDA protection, or code ownership? Here are direct answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Card key={idx} className="p-0 overflow-hidden">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1D4FFF] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                    {faq.answer}
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <span className="text-sm text-gray-500 block mb-2">Still have questions?</span>
          <a
            href="/contact"
            className="text-sm font-semibold text-[#1D4FFF] dark:text-[#4D7CFF] hover:underline"
          >
            Chat with our engineering consulting team →
          </a>
        </div>
      </div>
    </div>
  );
}
