'use client';

import React from 'react';
import { COMPANY_INFO } from '@/data/content';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { WhatsAppIcon, PhoneIcon, MapPinIcon } from './Icons';

export const BookingCTA: React.FC = () => {
  return (
    <section className="relative py-24 border-b border-[#071b1e]/10 bg-[#fbf8f2] overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Container shell */}
        <div className="editorial-card-dark rounded-[2.5rem] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          {/* Subtle warm glow inside card */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#c89b3c]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#1b4d47]/25 blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="section-kicker-dark mx-auto mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c89b3c]" />
            Direct Travel Reservations
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold font-editorial text-[#fbf8f2] tracking-tight leading-[1.1] mb-5">
            Ready to Plan Your Journey?
          </h2>

          {/* Supporting text */}
          <p className="text-base sm:text-lg text-[#cedee0] max-w-2xl mx-auto mb-9 leading-relaxed font-normal">
            Whether arriving at JKIA or Moi International Airport, heading out on safari, or arranging private car hire in Mombasa &amp; Nairobi, our dispatch desk is active 24/7.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-gold w-full sm:w-auto !py-4 !px-8 !text-sm"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#071b1e]" />
              <span>WhatsApp Booking ({COMPANY_INFO.whatsappPhone})</span>
            </a>

            <div className="flex w-full sm:w-auto items-center gap-2">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="btn-editorial-dark flex-1 sm:flex-none !py-4 !px-6 !text-xs"
              >
                <PhoneIcon className="w-4 h-4 text-[#c89b3c]" />
                <span>Call {COMPANY_INFO.phones[0]}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phones[1]}`}
                className="btn-editorial-dark flex-1 sm:flex-none !py-4 !px-6 !text-xs"
              >
                <PhoneIcon className="w-4 h-4 text-[#c89b3c]" />
                <span>Call {COMPANY_INFO.phones[1]}</span>
              </a>
            </div>
          </div>

          {/* Location footnote */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#a4bcc0] font-medium">
            <MapPinIcon className="w-4 h-4 text-[#c89b3c]" />
            <span>Head Office: Bamburi Fisheries, Mombasa &bull; Nairobi Hub, Kenya</span>
          </div>
        </div>

      </div>
    </section>
  );
};
