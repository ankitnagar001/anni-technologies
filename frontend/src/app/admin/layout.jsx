'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Briefcase,
  Layers,
  FileText,
  LogOut,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { ThemeToggle } from '../../component/ui/ThemeToggle.jsx';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    // Strictly verify admin authentication
    const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;
    if (!token) {
      router.replace('/login');
    } else {
      setIsAuthenticated(true);
      setCheckingAuth(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    document.cookie = 'admin_token=; Max-Age=0; path=/;';
    router.replace('/login');
  };

  const navItems = [
    { label: 'Overview', href: '/admin', icon: LayoutDashboard },
    { label: 'Projects (Upload)', href: '/admin/projects', icon: Briefcase },
    { label: 'Case Studies', href: '/admin/case-studies', icon: Layers },
    { label: 'Leads & Inquiries', href: '/admin/leads', icon: Users },
    { label: 'Bookings', href: '/admin/bookings', icon: Calendar },
    { label: 'View Public Site', href: '/', icon: ExternalLink, external: true }
  ];

  if (checkingAuth || !isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-gray-100 p-4">
        <div className="w-10 h-10 border-3 border-[#1D4FFF] border-t-transparent rounded-full animate-spin mb-4" />
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-gray-500 uppercase">
          <ShieldAlert className="w-4 h-4 text-[#1D4FFF]" />
          <span>Verifying Admin Authorization...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] flex flex-col justify-between p-6 shrink-0">
        <div>
          {/* Logo */}
          <Link href="/admin" className="block mb-8">
            <Image
              src="/images/logo.png"
              alt="ANNI TECHNOLOGIES"
              width={200}
              height={52}
              priority
              className="h-10 w-auto object-contain dark:brightness-110 mb-1"
            />
            <span className="text-[10px] font-mono uppercase text-[#1D4FFF] tracking-widest block font-bold">
              Admin Portal
            </span>
          </Link>

          {/* Navigation */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#1D4FFF] text-white shadow-glow'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.external && <ExternalLink className="w-3 h-3 opacity-60" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom controls */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 font-mono">Theme</span>
            <ThemeToggle />
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] px-8 flex items-center justify-between shrink-0">
          <h2 className="text-base font-bold text-gray-900 dark:text-white">
            Admin Management Console
          </h2>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="text-xs font-semibold text-[#1D4FFF] hover:underline flex items-center gap-1"
            >
              Live Website <ExternalLink className="w-3 h-3" />
            </Link>
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-[#1D4FFF] dark:text-[#4D7CFF] flex items-center justify-center text-xs font-bold">
              AD
            </div>
          </div>
        </header>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
