'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Plus,
  Trash2,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Search
} from 'lucide-react';

const presetCaseMockups = [
  { label: 'Mobile App Mockup (Triple Phone)', url: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Gaming Tournament Suite', url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Boat & Travel Charter', url: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Dashboard & FinTech SaaS', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Corporate Education & Sim', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80' }
];

export default function AdminCaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusMessage, setStatusMessage] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    client: '',
    industry: 'Travel',
    tags: 'Travel, Marketplace — Web & Mobile',
    cover: presetCaseMockups[0].url,
    mockupImage: presetCaseMockups[0].url,
    summary: '',
    metric1Val: '+240%',
    metric1Label: 'Bookings Growth',
    metric2Val: '4.9/5',
    metric2Label: 'App Rating',
    challenge: '',
    solution: '',
    featured: true
  });

  const fetchCaseStudies = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/case-studies');
      const data = await res.json();
      if (data.success) {
        setCaseStudies(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch case studies', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        title: formData.title,
        client: formData.client || 'Client',
        industry: formData.industry,
        tags: formData.tags,
        cover: formData.cover,
        mockupImage: formData.mockupImage,
        summary: formData.summary,
        challenge: formData.challenge,
        solution: formData.solution,
        metrics: [
          { metric: formData.metric1Val, label: formData.metric1Label },
          { metric: formData.metric2Val, label: formData.metric2Label }
        ],
        featured: formData.featured
      };

      const res = await fetch('/api/case-studies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        setStatusMessage('Case study created successfully!');
        setShowAddModal(false);
        setFormData({
          title: '',
          client: '',
          industry: 'Travel',
          tags: 'Travel, Marketplace — Web & Mobile',
          cover: presetCaseMockups[0].url,
          mockupImage: presetCaseMockups[0].url,
          summary: '',
          metric1Val: '+240%',
          metric1Label: 'Bookings Growth',
          metric2Val: '4.9/5',
          metric2Label: 'App Rating',
          challenge: '',
          solution: '',
          featured: true
        });
        fetchCaseStudies();
        setTimeout(() => setStatusMessage(null), 4000);
      } else {
        alert(data.message || 'Failed to create case study');
      }
    } catch (err) {
      alert('Error creating case study: ' + err.message);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete case study "${title}"?`)) return;
    try {
      const res = await fetch(`/api/case-studies?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setCaseStudies((prev) => prev.filter((c) => c.id !== id));
        setStatusMessage(`Case study "${title}" deleted`);
        setTimeout(() => setStatusMessage(null), 3000);
      }
    } catch (err) {
      alert('Failed to delete case study: ' + err.message);
    }
  };

  const filteredCaseStudies = caseStudies.filter((c) => {
    const q = searchTerm.toLowerCase();
    return (
      c.title?.toLowerCase().includes(q) ||
      c.summary?.toLowerCase().includes(q) ||
      c.client?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
            Case Studies
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#1D4FFF] border border-blue-200 dark:border-blue-800">
              {caseStudies.length} Published
            </span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Publish comprehensive case studies with multi-device mockups, category badges, key metrics, and architectural outcomes.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/case-studies"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span>View Public Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D4FFF] text-white text-xs font-bold hover:bg-blue-600 transition-all shadow-glow cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Case Study</span>
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Search */}
      <div className="flex items-center justify-between gap-4 bg-white dark:bg-[#121A30] p-4 rounded-2xl border border-gray-200 dark:border-gray-800">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search case studies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
          />
        </div>
        <div className="text-xs text-gray-400 font-mono">
          Showing {filteredCaseStudies.length} of {caseStudies.length}
        </div>
      </div>

      {/* Case studies list */}
      {loading ? (
        <div className="text-center py-20 text-gray-400 font-mono text-sm">
          Loading case studies...
        </div>
      ) : filteredCaseStudies.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-[#121A30] rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          <p className="text-sm font-semibold text-gray-500">No case studies found.</p>
          <button
            onClick={() => setShowAddModal(true)}
            className="mt-4 px-4 py-2 bg-[#1D4FFF] text-white text-xs font-semibold rounded-xl"
          >
            Create first case study
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white dark:bg-[#121A30] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="relative h-56 w-full bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={study.mockupImage || study.cover}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {(study.tags || []).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 dark:bg-black/85 backdrop-blur-md text-gray-900 dark:text-white border border-black/5 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#1D4FFF] transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {study.summary}
                  </p>

                  {study.metrics && study.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100 dark:border-gray-800">
                      {study.metrics.map((m, i) => (
                        <div key={i}>
                          <span className="block text-base font-extrabold text-[#1D4FFF]">
                            {m.metric}
                          </span>
                          <span className="block text-[10px] text-gray-500 line-clamp-1">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between">
                <Link
                  href={`/case-studies`}
                  className="text-xs font-semibold text-[#1D4FFF] hover:underline flex items-center gap-1"
                >
                  Read case study <ExternalLink className="w-3 h-3" />
                </Link>

                <button
                  onClick={() => handleDelete(study.id, study.title)}
                  className="p-1.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors cursor-pointer"
                  title="Delete Case Study"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-[#121A30] rounded-2xl border border-gray-200 dark:border-gray-800 max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Create Case Study
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Published case studies appear with rich mockups and metric highlights.
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Case Study Title *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. Boatflex — a boat & yacht charter platform across web, iOS and Android"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Client Name
                  </label>
                  <input
                    type="text"
                    name="client"
                    placeholder="e.g. Boatflex International"
                    value={formData.client}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    placeholder="e.g. Travel, Marketplace — Web & Mobile"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                  />
                </div>
              </div>

              {/* Mockup Image */}
              <div>
                <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Mockup / Showcase Image URL *
                </label>
                <input
                  type="text"
                  name="mockupImage"
                  required
                  value={formData.mockupImage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none mb-2"
                />
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] text-gray-400">Presets:</span>
                  {presetCaseMockups.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() =>
                        setFormData((p) => ({
                          ...p,
                          mockupImage: preset.url,
                          cover: preset.url
                        }))
                      }
                      className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-[10px] text-gray-600 dark:text-gray-300 cursor-pointer"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Executive Summary / Description *
                </label>
                <textarea
                  name="summary"
                  required
                  rows={3}
                  placeholder="A charter marketplace connecting boat renters with boat owners through a CMS-driven web portal and React Native apps..."
                  value={formData.summary}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                />
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Key Metric 1 (Value & Label)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="metric1Val"
                      placeholder="+240%"
                      value={formData.metric1Val}
                      onChange={handleChange}
                      className="w-1/3 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none font-bold"
                    />
                    <input
                      type="text"
                      name="metric1Label"
                      placeholder="Bookings Growth"
                      value={formData.metric1Label}
                      onChange={handleChange}
                      className="w-2/3 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Key Metric 2 (Value & Label)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="metric2Val"
                      placeholder="4.9/5"
                      value={formData.metric2Val}
                      onChange={handleChange}
                      className="w-1/3 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none font-bold"
                    />
                    <input
                      type="text"
                      name="metric2Label"
                      placeholder="App Rating"
                      value={formData.metric2Label}
                      onChange={handleChange}
                      className="w-2/3 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1D4FFF] text-white font-bold hover:bg-blue-600 shadow-glow"
                >
                  Publish Case Study
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
