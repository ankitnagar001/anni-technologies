'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white dark:bg-[#080D1A] border-t border-gray-200 dark:border-gray-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Top Band */}
        <div className="rounded-card bg-gradient-to-r from-blue-600 via-[#1D4FFF] to-[#0E7490] text-white p-8 md:p-12 mb-16 shadow-glow relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-200">
                READY TO SCALE?
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight mt-1">
                Have an idea? Let&apos;s build something extraordinary.
              </h3>
              <p className="text-blue-100 text-sm md:text-base mt-2 max-w-xl">
                From discovery to global deployment, our engineering team brings your vision to market in record time.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/start-project"
                className="px-8 py-3.5 rounded-btn bg-white text-blue-600 font-semibold text-sm md:text-base hover:bg-blue-50 transition-all shadow-md"
              >
                Start Your Project
              </Link>
              <Link
                href="/book-consultation"
                className="px-6 py-3.5 rounded-btn border border-white/40 text-white font-medium text-sm md:text-base hover:bg-white/10 transition-all"
              >
                Book a Call →
              </Link>
            </div>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-200 dark:border-gray-800">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="ANNI TECHNOLOGIES"
                width={220}
                height={56}
                className="h-10 sm:h-11 w-auto object-contain dark:brightness-110"
              />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Engineering high-performance custom software, mobile apps, SaaS, and AI automation for fast-growing companies worldwide.
            </p>
            <div className="text-xs font-mono text-gray-500 dark:text-gray-400">
              ISO 9001:2015 & 27001 Certified
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/services/custom-software" className="hover:text-[#1D4FFF]">Custom Software</Link></li>
              <li><Link href="/services/web-development" className="hover:text-[#1D4FFF]">Web Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="hover:text-[#1D4FFF]">Mobile App Engineering</Link></li>
              <li><Link href="/services/saas-development" className="hover:text-[#1D4FFF]">SaaS Architecture</Link></li>
              <li><Link href="/services/blockchain-ai-development" className="hover:text-[#1D4FFF]">AI & Blockchain</Link></li>
              <li><Link href="/services/dedicated-development-team" className="hover:text-[#1D4FFF]">Dedicated Teams</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/about" className="hover:text-[#1D4FFF]">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#1D4FFF]">Portfolio & Work</Link></li>
              <li><Link href="/case-studies" className="hover:text-[#1D4FFF]">Case Studies</Link></li>
              <li><Link href="/careers" className="hover:text-[#1D4FFF]">Careers (We&apos;re Hiring)</Link></li>
              <li><Link href="/testimonials" className="hover:text-[#1D4FFF]">Client Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-[#1D4FFF]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources Col */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/blog" className="hover:text-[#1D4FFF]">Engineering Blog</Link></li>
              <li><Link href="/technologies" className="hover:text-[#1D4FFF]">Tech Stack</Link></li>
              <li><Link href="/process" className="hover:text-[#1D4FFF]">Our Process</Link></li>
              <li><Link href="/pricing" className="hover:text-[#1D4FFF]">Pricing & Models</Link></li>
              <li><Link href="/faq" className="hover:text-[#1D4FFF]">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1D4FFF]" />
                <a href="mailto:hello@annisoftware.com" className="hover:text-[#1D4FFF]">hello@annisoftware.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1D4FFF]" />
                <a href="tel:+919876543210" className="hover:text-[#1D4FFF]">+91 (987) 654-3210</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1D4FFF]" />
                <span>Tech Park, Sector 62, Noida, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Join our engineering newsletter:</span>
              <div className="flex items-center gap-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="p-2 rounded-lg bg-[#1D4FFF] text-white hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && <span className="text-xs text-green-600 font-medium">Subscribed! Thank you.</span>}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} Anni Software Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#1D4FFF]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1D4FFF]">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-[#1D4FFF]">Cookie Policy</Link>
            <Link href="/admin" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">Staff Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
