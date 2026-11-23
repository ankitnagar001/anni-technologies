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
  Search,
  Filter,
  Image as ImageIcon
} from 'lucide-react';

const presetCovers = [
  { label: 'Casino & Cards', url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Ludo / Board Game', url: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Corporate & Learning', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Mobile Mockup', url: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Yacht & Travel', url: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Fintech & Dashboard', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Crypto & Web3', url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80' }
];

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusMessage, setStatusMessage] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    badge: 'Web Application',
    category: 'Web, Software',
    eyebrow: 'SOFTWARE',
    industry: 'Technology',
    client: '',
    cover: presetCovers[0].url,
    summary: '',
    techStack: 'React, Node.js, Tailwind CSS',
    liveUrl: '',
    caseStudySlug: '',
    featured: true
  });

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/projects');
      const data = await res.json();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch projects', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
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
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setStatusMessage('Project uploaded successfully!');
        setShowAddModal(false);
        setFormData({
          title: '',
          subtitle: '',
          badge: 'Web Application',
          category: 'Web, Software',
          eyebrow: 'SOFTWARE',
          industry: 'Technology',
          client: '',
          cover: presetCovers[0].url,
          summary: '',
          techStack: 'React, Node.js, Tailwind CSS',
          liveUrl: '',
          caseStudySlug: '',
          featured: true
        });
        fetchProjects();
        setTimeout(() => setStatusMessage(null), 4000);
      } else {
        alert(data.message || 'Failed to upload project');
      }
    } catch (err) {
      alert('Error creating project: ' + err.message);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;
    try {
      const res = await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setProjects((prev) => prev.filter((p) => p.id !== id));
        setStatusMessage(`Project "${title}" deleted`);
        setTimeout(() => setStatusMessage(null), 3000);
      }
    } catch (err) {
      alert('Failed to delete project: ' + err.message);
    }
  };

  const filteredProjects = projects.filter((p) => {
    const q = searchTerm.toLowerCase();
    return (
      p.title?.toLowerCase().includes(q) ||
      p.subtitle?.toLowerCase().includes(q) ||
      p.badge?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
            Portfolio Projects
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#1D4FFF] border border-blue-200 dark:border-blue-800">
              {projects.length} Total
            </span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Upload new client projects, assign badges, configure tech tags, and publish directly to the live portfolio page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/portfolio"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span>View Live Portfolio</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D4FFF] text-white text-xs font-bold hover:bg-blue-600 transition-all shadow-glow cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Upload New Project</span>
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Search and filters */}
      <div className="flex items-center justify-between gap-4 bg-white dark:bg-[#121A30] p-4 rounded-2xl border border-gray-200 dark:border-gray-800">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by title, badge, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
          />
        </div>
        <div className="text-xs text-gray-400 font-mono">
          Showing {filteredProjects.length} of {projects.length}
        </div>
      </div>

      {/* Projects Table / Cards */}
      {loading ? (
        <div className="text-center py-20 text-gray-400 font-mono text-sm">
          Loading portfolio projects...
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-[#121A30] rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          <p className="text-sm font-semibold text-gray-500">No projects found.</p>
          <button
            onClick={() => setShowAddModal(true)}
            className="mt-4 px-4 py-2 bg-[#1D4FFF] text-white text-xs font-semibold rounded-xl"
          >
            Upload your first project
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#121A30] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-black/80 backdrop-blur-md text-gray-900 dark:text-white shadow-sm border border-black/5 dark:border-white/10">
                    {item.badge || 'Project'}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold block">
                    {item.eyebrow || 'PROJECT'}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 line-clamp-1">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed pt-1">
                    {item.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {(item.techStack || []).slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-[#1D4FFF] hover:underline flex items-center gap-1"
                    >
                      Visit live <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => handleDelete(item.id, item.title)}
                  className="p-1.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors cursor-pointer"
                  title="Delete Project"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-[#121A30] rounded-2xl border border-gray-200 dark:border-gray-800 max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Upload Portfolio Project
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Fill in the project details. It will immediately show on the public portfolio.
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="e.g. EkJeet / AllPlay Arena"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Subtitle / Tagline
                  </label>
                  <input
                    type="text"
                    name="subtitle"
                    placeholder="e.g. Advanced Online Gaming Platform Engine"
                    value={formData.subtitle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Floating Badge (on cover)
                  </label>
                  <input
                    type="text"
                    name="badge"
                    placeholder="e.g. Game, Web Application"
                    value={formData.badge}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Eyebrow / Sector
                  </label>
                  <input
                    type="text"
                    name="eyebrow"
                    placeholder="e.g. GAMING, EDUCATION"
                    value={formData.eyebrow}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Categories (comma separated)
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="e.g. Games, Mobile, Web"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                  />
                </div>
              </div>

              {/* Cover Image selector */}
              <div>
                <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Cover Image URL *
                </label>
                <input
                  type="text"
                  name="cover"
                  required
                  value={formData.cover}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none mb-2"
                />
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] text-gray-400">Quick pick:</span>
                  {presetCovers.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, cover: preset.url }))}
                      className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-[10px] text-gray-600 dark:text-gray-300 cursor-pointer"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Project Description / Summary *
                </label>
                <textarea
                  name="summary"
                  required
                  rows={3}
                  placeholder="A cutting-edge online gaming engine offering a comprehensive suite of multiplayer card games..."
                  value={formData.summary}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Tech Stack Pills (comma-separated)
                </label>
                <input
                  type="text"
                  name="techStack"
                  placeholder="e.g. Gaming Platform, Multiplayer Engine, Casino & Cards, Live Lobby"
                  value={formData.techStack}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Live Demo / Site URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="liveUrl"
                    placeholder="https://example.com"
                    value={formData.liveUrl}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Related Case Study Slug (Optional)
                  </label>
                  <input
                    type="text"
                    name="caseStudySlug"
                    placeholder="e.g. real-time-multiplayer-card-board-game-suite"
                    value={formData.caseStudySlug}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1020] text-gray-900 dark:text-white focus:border-[#1D4FFF] outline-none"
                  />
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
                  Save & Publish Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
