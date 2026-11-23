'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../store/ThemeProvider.jsx';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#121A30] text-gray-700 dark:text-gray-200 hover:border-[#1D4FFF] dark:hover:border-[#4D7CFF] transition-all cursor-pointer"
    >
      {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
    </button>
  );
};
