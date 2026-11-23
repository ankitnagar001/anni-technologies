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

export const MegaMenu = ({ onClose }) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[920px] max-w-[95vw] rounded-card glass-panel shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="grid grid-cols-12 gap-6">
        {/* Left: 10 Service options */}
        <div className="col-span-8 grid grid-cols-2 gap-2 border-r border-gray-200 dark:border-gray-800 pr-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onClick={onClose}
                className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
              >
                <div className="p-2 rounded-lg bg-blue-500/10 text-[#1D4FFF] dark:text-[#4D7CFF] group-hover:bg-[#1D4FFF] group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[#1D4FFF] dark:group-hover:text-[#4D7CFF] transition-colors leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
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
              <span className="w-4 h-[1px] bg-current" />
              CAPABILITIES
            </div>
            <ul className="space-y-3">
              {capabilitiesList.map((cap, idx) => (
                <li key={idx}>
                  <Link
                    href={`/services?category=${encodeURIComponent(cap)}`}
                    onClick={onClose}
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#1D4FFF] dark:hover:text-[#4D7CFF] flex items-center justify-between group transition-colors"
                  >
                    <span>{cap}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/services"
              onClick={onClose}
              className="inline-flex items-center text-sm font-semibold text-[#1D4FFF] dark:text-[#4D7CFF] hover:underline gap-1"
            >
              View all services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
