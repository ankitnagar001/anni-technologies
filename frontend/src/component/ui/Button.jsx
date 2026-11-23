'use client';

import React from 'react';
import Link from 'next/link';

export const Button = ({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  icon: Icon,
  disabled = false
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-btn transition-all duration-200 text-sm md:text-base px-6 py-3 cursor-pointer select-none';
  
  const variants = {
    primary: 'bg-[#1D4FFF] text-white hover:bg-[#153ec9] shadow-glow hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:-translate-y-0.5',
    subtle: 'bg-blue-50 dark:bg-blue-950/40 text-[#1D4FFF] dark:text-[#4D7CFF] hover:bg-blue-100 dark:hover:bg-blue-900/60',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  const style = `${baseStyles} ${variants[variant] || variants.primary} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (href) {
    return (
      <Link href={href} className={style}>
        {children}
        {Icon && <Icon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={style}>
      {children}
      {Icon && <Icon className="ml-2 w-4 h-4" />}
    </button>
  );
};
