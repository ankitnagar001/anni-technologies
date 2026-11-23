'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppWidget = () => {
  const phoneNumber = '919876543210';
  const prefilledMessage = encodeURIComponent(
    'Hi Anni Software team, I am interested in discussing a software project!'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  return (
    <aside aria-label="Quick chat widget" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with our team on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-medium text-sm shadow-xl hover:bg-[#1fb355] hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-semibold tracking-wide">
          Chat With Our Team
        </span>
      </a>
    </aside>
  );
};
