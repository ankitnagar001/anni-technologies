'use client';

import React from 'react';
import { Header } from '../../component/layout/Header.jsx';
import { Footer } from '../../component/layout/Footer.jsx';
import { WhatsAppWidget } from '../../component/layout/WhatsAppWidget.jsx';

export default function UsersLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
