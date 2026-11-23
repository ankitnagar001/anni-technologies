'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, Calendar, CheckCircle2, TrendingUp, Clock, Eye } from 'lucide-react';
import { Card } from '../../component/ui/Card.jsx';
import api from '../../utils/api.js';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalLeads: 24,
    newLeads: 6,
    totalBookings: 12,
    conversionRate: '4.2%'
  });
  const [recentLeads, setRecentLeads] = useState([
    {
      _id: '1',
      name: 'Alexander Wright',
      email: 'a.wright@solux.io',
      company: 'Solux Cloud',
      service: 'Custom Software / ERP',
      budget: '$35,000 - $75,000',
      status: 'new',
      createdAt: '2026-11-23T09:30:00Z'
    },
    {
      _id: '2',
      name: 'Claire Moreau',
      email: 'claire@novabrand.fr',
      company: 'Nova Brand Paris',
      service: 'E-Commerce Marketplace',
      budget: '$15,000 - $35,000',
      status: 'contacted',
      createdAt: '2026-11-22T14:15:00Z'
    },
    {
      _id: '3',
      name: 'Vikram Mehta',
      email: 'vikram@finscale.in',
      company: 'FinScale Payments',
      service: 'Web Application / SaaS',
      budget: '$75,000+',
      status: 'qualified',
      createdAt: '2026-11-21T18:40:00Z'
    }
  ]);

  useEffect(() => {
    // Attempt fetching real stats from backend if available
    api
      .get('/dashboard/stats')
      .then((res) => {
        if (res.data?.data) {
          const d = res.data.data;
          setStats((prev) => ({
            ...prev,
            totalLeads: d.overview.totalLeads || prev.totalLeads,
            newLeads: d.overview.newLeads || prev.newLeads,
            totalBookings: d.overview.totalBookings || prev.totalBookings
          }));
          if (d.recentLeads && d.recentLeads.length > 0) {
            setRecentLeads(d.recentLeads);
          }
        }
      })
      .catch((_) => {
        // Fallback demo data maintained
      });
  }, []);

  return (
    <div className="space-y-8 max-w-7xl">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
          Executive Overview
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Real-time lead conversion and client booking metrics
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-gray-400">Total Leads</span>
            <Users className="w-5 h-5 text-[#1D4FFF]" />
          </div>
          <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {stats.totalLeads}
          </span>
          <span className="block text-[11px] text-green-600 font-semibold mt-1">
            +18% from last month
          </span>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-gray-400">New Inquiries</span>
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          </div>
          <span className="text-3xl font-extrabold text-[#1D4FFF]">
            {stats.newLeads}
          </span>
          <span className="block text-[11px] text-gray-500 mt-1">
            Requires follow-up within 24h
          </span>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-gray-400">Consultations</span>
            <Calendar className="w-5 h-5 text-purple-500" />
          </div>
          <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {stats.totalBookings}
          </span>
          <span className="block text-[11px] text-gray-500 mt-1">
            Confirmed calendar sessions
          </span>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-gray-400">Conversion Rate</span>
            <TrendingUp className="w-5 h-5 text-emerald-500" />
          </div>
          <span className="text-3xl font-extrabold text-emerald-500">
            {stats.conversionRate}
          </span>
          <span className="block text-[11px] text-gray-500 mt-1">
            Target: 3.0% - 5.0%
          </span>
        </Card>
      </div>

      {/* Recent Leads Table */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Recent Lead Inquiries
            </h2>
            <p className="text-xs text-gray-400">
              Latest submissions from /start-project and /contact forms
            </p>
          </div>
          <Link
            href="/admin/leads"
            className="text-xs font-semibold text-[#1D4FFF] hover:underline"
          >
            View All Leads →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-gray-100 dark:border-gray-800 text-gray-400 font-mono uppercase">
              <tr>
                <th className="pb-3 font-semibold">Client Name</th>
                <th className="pb-3 font-semibold">Company</th>
                <th className="pb-3 font-semibold">Service</th>
                <th className="pb-3 font-semibold">Budget</th>
                <th className="pb-3 font-semibold">Status</th>
                <th className="pb-3 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
              {recentLeads.map((lead) => (
                <tr key={lead._id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40">
                  <td className="py-3 font-semibold text-gray-900 dark:text-white">
                    {lead.name}
                    <span className="block text-[10px] text-gray-400 font-normal">{lead.email}</span>
                  </td>
                  <td className="py-3">{lead.company || 'N/A'}</td>
                  <td className="py-3 font-mono text-[11px]">{lead.service}</td>
                  <td className="py-3 font-semibold text-gray-900 dark:text-white">{lead.budget || 'Custom'}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        lead.status === 'new'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300'
                          : lead.status === 'contacted'
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300'
                          : 'bg-green-100 text-green-700 dark:bg-green-900/60 dark:text-green-300'
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-3 text-gray-400 font-mono">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
