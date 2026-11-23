'use client';

import React, { useState } from 'react';
import { Card } from '../../../component/ui/Card.jsx';
import { Search, Filter, Trash2, CheckCircle2 } from 'lucide-react';

export default function AdminLeadsPage() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [leads, setLeads] = useState([
    {
      id: '1',
      name: 'Alexander Wright',
      email: 'a.wright@solux.io',
      phone: '+1 (415) 890-2134',
      company: 'Solux Cloud',
      service: 'Custom Software / ERP',
      budget: '$35,000 - $75,000',
      timeline: '2 - 4 Months',
      status: 'new',
      source: '/start-project',
      date: '2026-11-23'
    },
    {
      id: '2',
      name: 'Claire Moreau',
      email: 'claire@novabrand.fr',
      phone: '+33 6 12 34 56 78',
      company: 'Nova Brand Paris',
      service: 'E-Commerce Marketplace',
      budget: '$15,000 - $35,000',
      timeline: '1 - 2 Months',
      status: 'contacted',
      source: '/start-project',
      date: '2026-11-22'
    },
    {
      id: '3',
      name: 'Vikram Mehta',
      email: 'vikram@finscale.in',
      phone: '+91 98200 11223',
      company: 'FinScale Payments',
      service: 'Web Application / SaaS',
      budget: '$75,000+',
      timeline: 'Flexible',
      status: 'qualified',
      source: '/contact',
      date: '2026-11-21'
    },
    {
      id: '4',
      name: 'Hannah Schmidt',
      email: 'hannah@bavariagames.de',
      phone: '+49 89 2020 4040',
      company: 'Bavaria Interactive',
      service: 'Game Development (Unity)',
      budget: '$35,000 - $75,000',
      timeline: '2 - 4 Months',
      status: 'closed',
      source: '/start-project',
      date: '2026-11-19'
    }
  ]);

  const updateStatus = (id, newStatus) => {
    setLeads(leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
  };

  const deleteLead = (id) => {
    setLeads(leads.filter((l) => l.id !== id));
  };

  const filtered = leads.filter((l) => {
    const matchesStatus = filterStatus === 'all' || l.status === filterStatus;
    const matchesSearch =
      searchTerm === '' ||
      l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
          Leads & Inquiries
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Review, qualify, and update status of incoming project requests
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {['all', 'new', 'contacted', 'qualified', 'closed'].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors cursor-pointer ${
                filterStatus === st
                  ? 'bg-[#1D4FFF] text-white'
                  : 'bg-white dark:bg-[#121A30] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
          />
        </div>
      </div>

      {/* Table */}
      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/40 text-gray-500 font-mono uppercase">
              <tr>
                <th className="p-4 font-semibold">Contact</th>
                <th className="p-4 font-semibold">Company</th>
                <th className="p-4 font-semibold">Service</th>
                <th className="p-4 font-semibold">Budget</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
              {filtered.map((l) => (
                <tr key={l.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40">
                  <td className="p-4">
                    <span className="font-bold text-gray-900 dark:text-white block">
                      {l.name}
                    </span>
                    <span className="text-[11px] text-gray-400 block">{l.email}</span>
                    <span className="text-[10px] text-gray-400 block font-mono">{l.phone}</span>
                  </td>
                  <td className="p-4 font-semibold text-gray-900 dark:text-white">{l.company}</td>
                  <td className="p-4 font-mono text-[11px]">{l.service}</td>
                  <td className="p-4 font-bold text-gray-900 dark:text-white">{l.budget}</td>
                  <td className="p-4">
                    <select
                      value={l.status}
                      onChange={(e) => updateStatus(l.id, e.target.value)}
                      className="text-xs px-2.5 py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#121A30] font-semibold"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                  <td className="p-4 font-mono text-gray-400">{l.date}</td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => deleteLead(l.id)}
                      className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
                      title="Delete Lead"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
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
