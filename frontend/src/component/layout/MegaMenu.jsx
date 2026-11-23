'use client';

import React from 'react';
import Link from 'next/link';
import {
  Code2,
  Globe,
  Smartphone,
  Gamepad2,
  Layers,
  Cpu,
  Rocket,
  Users,
  Wrench,
  LifeBuoy,
  ArrowUpRight
} from 'lucide-react';
import { servicesData, capabilitiesList } from '../data/services.js';

const iconMap = {
  Code2,
  Globe,
  Smartphone,
  Gamepad2,
  Layers,
  Cpu,
  Rocket,
  Users,
  Wrench,
  LifeBuoy
};

const tintMap = {
  lavender: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border-indigo-200/60 dark:border-indigo-800/60 group-hover:bg-[#1D4FFF] group-hover:text-white',
  'light-blue': 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border-sky-200/60 dark:border-sky-800/60 group-hover:bg-[#1D4FFF] group-hover:text-white',
  mint: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/60 group-hover:bg-emerald-600 group-hover:text-white',
  amber: 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/60 group-hover:bg-amber-600 group-hover:text-white',
  pink: 'bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 border-pink-200/60 dark:border-pink-800/60 group-hover:bg-pink-600 group-hover:text-white'
};

export const MegaMenu = ({ onClose }) => {
  return (
    <div className="w-[880px] max-w-[94vw] rounded-card bg-white/95 dark:bg-[#121A30]/95 backdrop-blur-xl border border-gray-200/90 dark:border-gray-800 shadow-2xl p-6 md:p-8 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="grid grid-cols-12 gap-6">
        {/* Left: 10 Service options in 2 balanced columns (5 each) */}
        <div className="col-span-8 grid grid-cols-2 gap-2.5 border-r border-gray-200 dark:border-gray-800 pr-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            const tintClass = tintMap[service.tint] || tintMap['light-blue'];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onClick={onClose}
                className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 dark:hover:bg-blue-950/50 transition-all border border-transparent hover:border-blue-100 dark:hover:border-blue-900/60"
              >
                <div className={`p-2.5 rounded-xl border transition-all shrink-0 ${tintClass}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-[#1D4FFF] dark:group-hover:text-[#4D7CFF] transition-colors leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                    {service.categoryTag}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Right: Capabilities panel */}
        <div className="col-span-4 flex flex-col justify-between pl-2">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#1D4FFF] dark:text-[#4D7CFF] uppercase mb-4 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-current" />
              CAPABILITIES
            </div>
            <ul className="space-y-3">
              {capabilitiesList.map((cap, idx) => (
                <li key={idx}>
                  <Link
                    href={`/services?category=${encodeURIComponent(cap)}`}
                    onClick={onClose}
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-[#1D4FFF] dark:hover:text-[#4D7CFF] flex items-center justify-between group transition-colors py-1"
                  >
                    <span>{cap}</span>
                    <span className="text-gray-400 group-hover:text-[#1D4FFF] group-hover:translate-x-1 transition-all">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/services"
              onClick={onClose}
              className="inline-flex items-center text-xs font-bold text-[#1D4FFF] dark:text-[#4D7CFF] hover:underline gap-1.5"
            >
              <span>View all services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
