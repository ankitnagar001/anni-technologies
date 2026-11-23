'use client';

import React from 'react';

export const Card = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`rounded-card bg-white dark:bg-[#121A30] border border-gray-200/80 dark:border-gray-800 p-6 md:p-8 transition-all duration-300 ${
        hover
          ? 'hover:border-[#1D4FFF] dark:hover:border-[#4D7CFF] hover:shadow-soft hover:-translate-y-1'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
