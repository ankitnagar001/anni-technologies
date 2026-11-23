'use client';

import React from 'react';
import {
  Code2,
  Globe,
  Smartphone,
  Gamepad2,
  Layers,
  Cpu
} from 'lucide-react';

export const OrbitVisual = () => {
  const orbitIcons = [
    { Icon: Code2, label: 'Custom Code', tint: 'bg-indigo-500/10 text-indigo-600', angle: 0 },
    { Icon: Globe, label: 'Web Platform', tint: 'bg-blue-500/10 text-blue-600', angle: 60 },
    { Icon: Smartphone, label: 'Mobile Apps', tint: 'bg-cyan-500/10 text-cyan-600', angle: 120 },
    { Icon: Gamepad2, label: 'Game Engine', tint: 'bg-emerald-500/10 text-emerald-600', angle: 180 },
    { Icon: Layers, label: 'Cloud SaaS', tint: 'bg-purple-500/10 text-purple-600', angle: 240 },
    { Icon: Cpu, label: 'AI & Data', tint: 'bg-amber-500/10 text-amber-600', angle: 300 }
  ];

  return (
    <div className="relative w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] mx-auto flex items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10" />

      {/* Orbit Rings */}
      <div className="orbit-ring w-[220px] h-[220px] sm:w-[280px] sm:h-[280px]" />
      <div className="orbit-ring w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]" />

      {/* Center Tile */}
      <div className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-[#1D4FFF] via-[#5B3DF5] to-[#0E7490] flex items-center justify-center text-white shadow-glow p-4">
        <div className="flex flex-col items-center text-center">
          <Code2 className="w-9 h-9 sm:w-11 sm:h-11 mb-1" />
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase">ENGINEER</span>
        </div>
      </div>

      {/* Orbiting Satellite Tiles */}
      {orbitIcons.map((item, index) => {
        const radius = 175; // px from center
        const rad = (item.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <div
            key={index}
            style={{
              transform: `translate(${x}px, ${y}px)`
            }}
            className="absolute z-20 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-[#121A30] border border-gray-200/90 dark:border-gray-800 shadow-soft flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <div className={`p-2.5 rounded-xl ${item.tint}`}>
              <item.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
