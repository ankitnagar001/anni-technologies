'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle.jsx';
import { Button } from '../ui/Button.jsx';
import { MegaMenu } from './MegaMenu.jsx';

export const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Technologies', href: '/technologies' },
    { name: 'Process', href: '/process' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 dark:bg-[#0B1020]/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 dark:border-gray-800/80 ${
        isScrolled ? 'py-3' : 'py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <Image
            src="/images/logo.png"
            alt="ANNI TECHNOLOGIES"
            width={190}
            height={44}
            priority
            className="h-8 sm:h-9 w-auto object-contain dark:brightness-110"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {/* Services with Hover Area */}
          <div
            className="py-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                pathname.startsWith('/services') || servicesOpen
                  ? 'text-[#1D4FFF] dark:text-[#4D7CFF] font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-[#1D4FFF] dark:hover:text-[#4D7CFF]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-[#1D4FFF] dark:text-[#4D7CFF]' : ''
                }`}
              />
            </button>
          </div>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-2 transition-colors ${
                  isActive
                    ? 'text-[#1D4FFF] dark:text-[#4D7CFF] font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-[#1D4FFF] dark:hover:text-[#4D7CFF]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <ThemeToggle />
          <Link
            href="/book-consultation"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#1D4FFF] dark:hover:text-[#4D7CFF] transition-colors"
          >
            Book a Consultation
          </Link>
          <Button href="/start-project" variant="primary" icon={ArrowRight}>
            Start Project
          </Button>
        </div>

        {/* Dropdown Anchored to the Max-W-7xl Header Container to NEVER cut off */}
        {servicesOpen && (
          <div
            className="hidden lg:block absolute top-full left-4 sm:left-6 lg:left-8 pt-2 z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <MegaMenu onClose={() => setServicesOpen(false)} />
          </div>
        )}

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-xl text-gray-700 dark:text-gray-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-white dark:bg-[#0B1020] border-b border-gray-200 dark:border-gray-800 p-6 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-gray-900 dark:text-white"
            >
              Services (All 10 Specializations)
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-gray-700 dark:text-gray-300 hover:text-[#1D4FFF]"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-gray-200 dark:border-gray-800 my-2" />
            <Link
              href="/book-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-gray-700 dark:text-gray-300"
            >
              Book a Consultation
            </Link>
            <Button
              href="/start-project"
              onClick={() => setMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
