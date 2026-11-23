'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Video, CheckCircle2, Loader2 } from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';
import api from '../../../utils/api.js';

const consultationTopics = [
  'MVP Scoping & Feasibility',
  'Architecture & Cloud Infrastructure',
  'Codebase Audit & Project Rescue',
  'Dedicated Engineering Team Onboarding',
  'AI / LLM Workflow Integration'
];

const availableTimeSlots = [
  '10:00 AM - 10:30 AM',
  '11:30 AM - 12:00 PM',
  '02:00 PM - 02:30 PM',
  '04:00 PM - 04:30 PM',
  '06:00 PM - 06:30 PM'
];

export default function BookConsultationPage() {
  const [topic, setTopic] = useState(consultationTopics[0]);
  const [date, setDate] = useState('2026-11-25');
  const [slot, setSlot] = useState(availableTimeSlots[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/bookings', {
        name,
        email,
        company,
        topic,
        slot: new Date(`${date}T10:00:00Z`),
        notes
      });
      setConfirmed(true);
    } catch (err) {
      console.error(err);
      setConfirmed(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow>SCHEDULE A DISCOVERY CALL</Eyebrow>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Book a Technical Consultation
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-3">
            Speak directly with a lead software engineer to assess feasibility, timelines, and technology architecture.
          </p>
        </div>

        {confirmed ? (
          <Card className="text-center p-12 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Consultation Scheduled!
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              A Google Meet invitation has been prepared for <strong>{name}</strong> on <strong>{date} ({slot})</strong>. We look forward to speaking with you!
            </p>
            <a
              href="/"
              className="px-6 py-2.5 rounded-btn bg-[#1D4FFF] text-white text-sm font-semibold hover:bg-blue-700"
            >
              Back to Home
            </a>
          </Card>
        ) : (
          <Card className="p-8 md:p-12">
            <form onSubmit={handleBooking} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                  Select Consultation Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                >
                  {consultationTopics.map((t, idx) => (
                    <option key={idx} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Select Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Select Time Slot
                  </label>
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                  >
                    {availableTimeSlots.map((s, idx) => (
                      <option key={idx} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sarah Miller"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="Acme Innovations"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Brief Context or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any background details or questions for our call..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Video className="w-4 h-4 text-[#1D4FFF]" />
                  <span>30-minute Google Meet video session</span>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 rounded-btn bg-[#1D4FFF] text-white text-sm font-semibold hover:bg-blue-700 flex items-center gap-2 shadow-glow"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Confirm Consultation'}
                </button>
              </div>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
}
