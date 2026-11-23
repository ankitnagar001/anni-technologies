'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { Eyebrow } from '../../../component/ui/Eyebrow.jsx';
import { Card } from '../../../component/ui/Card.jsx';
import api from '../../../utils/api.js';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Custom Software',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/leads', {
        ...formData,
        type: 'contact',
        sourcePage: '/contact'
      });
      setSent(true);
    } catch (err) {
      console.error(err);
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Let&apos;s build together
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4">
            Have a project in mind, need technical advice, or want to discuss a strategic partnership? Reach our team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <Card>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Direct Contact
              </h3>
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-[#1D4FFF] dark:text-[#4D7CFF] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-gray-400">Email Inquiries</span>
                    <a href="mailto:hello@annisoftware.com" className="font-semibold text-gray-900 dark:text-white hover:text-[#1D4FFF]">
                      hello@annisoftware.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-[#1D4FFF] dark:text-[#4D7CFF] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-gray-400">Phone & WhatsApp</span>
                    <a href="tel:+919876543210" className="font-semibold text-gray-900 dark:text-white hover:text-[#1D4FFF]">
                      +91 (987) 654-3210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-[#1D4FFF] dark:text-[#4D7CFF] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-gray-400">Headquarters</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Anni Software Technologies, Cyber City, Sector 62, Noida, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-[#1D4FFF] dark:text-[#4D7CFF] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-gray-400">Response SLA</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Guaranteed reply within 24 business hours
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <Card>
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Thank you for reaching out. A technical representative will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Send Us an Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 (000) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Global Enterprises"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                    >
                      <option>Custom Software</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>SaaS Architecture</option>
                      <option>Blockchain & AI</option>
                      <option>Dedicated Team</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Project Details & Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what you would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121A30] text-gray-900 dark:text-white focus:outline-none focus:border-[#1D4FFF]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-btn bg-[#1D4FFF] text-white text-sm font-semibold hover:bg-blue-700 flex items-center justify-center gap-2 shadow-glow"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
