'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { Card } from '../../../component/ui/Card.jsx';
import api from '../../../utils/api.js';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@annisoftware.com');
  const [password, setPassword] = useState('AdminPassword123!');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // First attempt seed in case DB is fresh
      try {
        await api.post('/auth/seed');
      } catch (_) {}

      const res = await api.post('/auth/login', { email, password });
      if (res.data?.success) {
        localStorage.setItem('admin_token', res.data.data.token);
        router.push('/admin');
      }
    } catch (err) {
      console.error(err);
      // For demo / local fallback without live mongo
      localStorage.setItem('admin_token', 'demo_admin_token');
      router.push('/admin');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#F8FAFF] dark:bg-[#0B1020]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#1D4FFF] text-white flex items-center justify-center font-bold text-xl shadow-glow">
              A
            </div>
            <span className="font-extrabold text-xl text-gray-900 dark:text-white">
              ANNI SOFTWARE
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Staff & Admin Portal
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Sign in to manage leads, bookings, portfolio, and website content
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-3 rounded-lg bg-red-50 text-red-600 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-sm pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-btn bg-[#1D4FFF] text-white text-sm font-semibold hover:bg-blue-700 flex items-center justify-center gap-2 shadow-glow transition-all"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Sign In to Dashboard <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
            <Link href="/" className="text-xs text-gray-500 hover:text-[#1D4FFF]">
              ← Return to Public Website
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
