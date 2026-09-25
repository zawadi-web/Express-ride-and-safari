'use client';

import React from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/content';
import { getAirportTransferWhatsAppUrl } from '@/utils/whatsapp';
import { PlaneIcon, MapPinIcon, ClockIcon, ShieldCheckIcon, WhatsAppIcon, ArrowRightIcon, CheckIcon } from './Icons';

interface AirportTransferSectionProps {
  onRequestTransfer?: () => void;
}

export const AirportTransferSection: React.FC<AirportTransferSectionProps> = ({ onRequestTransfer }) => {
  return (
    <section id="transfers" className="py-20 text-slate-900 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-amber-200 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-4 shadow-xs">
            Private Airport Transportation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 mb-4">
            Reliable Airport Transfers
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Take the stress out of getting to and from the airport with reliable private transfers.
          </p>
        </div>

        {/* Visual Journey: Airport → Pickup → Destination */}
        <div className="mb-16 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-6 sm:p-8 shadow-sm">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-extrabold">
              Seamless Journey Experience
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1: Airport */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50/80 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#D97706] mb-4 shadow-xs">
                <PlaneIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">1. Airport Landing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We monitor your incoming flight time and greet you right as you exit the arrival terminal.
              </p>
            </div>

            {/* Step 2: Pickup */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50/80 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#D97706] mb-4 shadow-xs">
                <ClockIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">2. Meet &amp; Luggage Pickup</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Courteous meet-and-greet assistance with your luggage directly to your waiting vehicle.
              </p>
            </div>

            {/* Step 3: Destination */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50/80 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#D97706] mb-4 shadow-xs">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">3. Direct to Destination</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct, private and comfortable ride straight to your hotel, residence or meeting venue.
              </p>
            </div>
          </div>
        </div>

        {/* Coverage Areas: Nairobi & Mombasa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          
          {/* Nairobi Card */}
          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-amber-50 text-[#D97706] border border-amber-200">
                  Nairobi Hub
                </span>
                <span className="text-xs text-slate-500 font-semibold">Capital Region</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Nairobi Airport Transfers
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Fast and private airport transportation connecting Jomo Kenyatta International Airport (JKIA) and Wilson Airport with Nairobi CBD, Westlands, Karen, Gigiri, and hotel destinations.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 font-medium mb-6">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-[#D97706]" />
                  <span>Jomo Kenyatta International Airport (JKIA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-[#D97706]" />
                  <span>Wilson Airport (Safari Flights)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-[#D97706]" />
                  <span>Hotel, residential and office door-to-door drops</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Available 24/7 on demand</span>
              <a
                href={getAirportTransferWhatsAppUrl('Nairobi')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Inquire Nairobi Transfer</span>
              </a>
            </div>
          </div>

          {/* Mombasa Card */}
          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-amber-50 text-[#D97706] border border-amber-200">
                  Mombasa Hub
                </span>
                <span className="text-xs text-slate-500 font-semibold">Coast Region</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Mombasa &amp; Coast Transfers
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Direct transfers from Moi International Airport and Mombasa SGR Terminus to Nyali, Bamburi, Shanzu, Kilifi, Malindi, and south to Diani Beach.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 font-medium mb-6">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-[#D97706]" />
                  <span>Moi International Airport (MBA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-[#D97706]" />
                  <span>Mombasa SGR Miritini Terminus</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-[#D97706]" />
                  <span>Direct coastal resort &amp; hotel transfers</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Available 24/7 on demand</span>
              <a
                href={getAirportTransferWhatsAppUrl('Mombasa')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Inquire Mombasa Transfer</span>
              </a>
            </div>
          </div>

        </div>

        {/* Primary CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => onRequestTransfer ? onRequestTransfer() : window.location.assign('#contact')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-extrabold text-sm tracking-wide uppercase shadow-lg shadow-[#F59E0B]/25 transition-all cursor-pointer"
          >
            <span>Request Airport Transfer</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
