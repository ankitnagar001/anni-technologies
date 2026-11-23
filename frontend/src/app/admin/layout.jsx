'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Briefcase,
  Layers,
  FileText,
  LogOut,
  ExternalLink
} from 'lucide-react';
import { ThemeToggle } from '../../component/ui/ThemeToggle.jsx';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/login');
  };

  const navItems = [
    { label: 'Overview', href: '/admin', icon: LayoutDashboard },
    { label: 'Leads & Inquiries', href: '/admin/leads', icon: Users },
    { label: 'Bookings', href: '/admin/bookings', icon: Calendar },
    { label: 'Projects & Work', href: '/portfolio', icon: Briefcase, external: true },
    { label: 'Services', href: '/services', icon: Layers, external: true },
    { label: 'Blog Posts', href: '/blog', icon: FileText, external: true }
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] flex flex-col justify-between p-6 shrink-0">
        <div>
          {/* Logo */}
          <Link href="/admin" className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-xl bg-[#1D4FFF] text-white flex items-center justify-center font-bold text-sm shadow-glow">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-tight text-gray-900 dark:text-white">
                ANNI ADMIN
              </span>
              <span className="text-[9px] font-mono uppercase text-[#1D4FFF] tracking-wider">
                Control Panel
              </span>
            </div>
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
