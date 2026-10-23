'use client';

import React from 'react';
import { getAirportTransferWhatsAppUrl } from '@/utils/whatsapp';
import { PlaneIcon, MapPinIcon, ClockIcon, WhatsAppIcon, ArrowRightIcon, CheckIcon } from './Icons';

interface AirportTransferSectionProps {
  onRequestTransfer?: () => void;
}

export const AirportTransferSection: React.FC<AirportTransferSectionProps> = ({ onRequestTransfer }) => {
  return (
    <section id="transfers" className="relative py-24 border-b border-[#071b1e]/10 bg-[#fbf8f2] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,155,60,0.08),_transparent_35%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-kicker mx-auto mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c89b3c]" />
            Private Airport Transportation
          </div>
          <h2 className="section-title mb-4 font-editorial">
            Punctual Airport &amp; SGR Transfers
          </h2>
          <p className="section-copy mx-auto max-w-2xl text-base sm:text-lg">
            Take the stress out of getting to and from the airport with dependable private transfers, active flight tracking, and courteous meet-and-greet support.
          </p>
        </div>

        {/* Visual Journey: Airport → Pickup → Destination */}
        <div className="mb-14 editorial-card rounded-[2rem] p-6 sm:p-9 shadow-sm">
          <div className="text-center mb-8">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#c89b3c] font-black">
              Seamless 3-Phase Arrival Protocol
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1: Airport */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#fbf8f2]/90 border border-[#071b1e]/08">
              <div className="w-12 h-12 rounded-xl bg-[#c89b3c]/15 border border-[#c89b3c]/30 flex items-center justify-center text-[#9d7322] mb-4 shadow-xs">
                <PlaneIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-editorial text-[#071b1e] mb-1">1. Flight Monitoring</h3>
              <p className="text-xs text-[#2a4d52] leading-relaxed">
                We monitor your incoming flight number for delays or early arrivals to ensure your chauffeur is staged on time.
              </p>
            </div>

            {/* Step 2: Pickup */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#fbf8f2]/90 border border-[#071b1e]/08">
              <div className="w-12 h-12 rounded-xl bg-[#1b4d47]/10 border border-[#1b4d47]/20 flex items-center justify-center text-[#1b4d47] mb-4 shadow-xs">
                <ClockIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-editorial text-[#071b1e] mb-1">2. Terminal Meet &amp; Assist</h3>
              <p className="text-xs text-[#2a4d52] leading-relaxed">
                Courteous terminal exit reception with name board display and dedicated luggage assistance to your vehicle.
              </p>
            </div>

            {/* Step 3: Destination */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#fbf8f2]/90 border border-[#071b1e]/08">
              <div className="w-12 h-12 rounded-xl bg-[#c89b3c]/15 border border-[#c89b3c]/30 flex items-center justify-center text-[#9d7322] mb-4 shadow-xs">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-editorial text-[#071b1e] mb-1">3. Direct Hotel Drop</h3>
              <p className="text-xs text-[#2a4d52] leading-relaxed">
                Direct, air-conditioned ride straight to your hotel, private residence, coastal villa, or meeting facility.
              </p>
            </div>
          </div>
        </div>

        {/* Coverage Areas: Nairobi & Mombasa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Nairobi Card */}
          <div className="editorial-card rounded-[2rem] p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.16em] bg-[#133935]/10 text-[#133935]">
                  Nairobi Hub
                </span>
                <span className="text-xs text-[#8f7547] font-semibold">JKIA &amp; Wilson Airport</span>
              </div>

              <h3 className="text-2xl font-bold font-editorial text-[#071b1e] mb-3">
                Nairobi Airport Transfers
              </h3>
              <p className="text-sm text-[#2d4549] leading-relaxed mb-6 font-normal">
                Private airport transport connecting Jomo Kenyatta International Airport (JKIA) and Wilson Safari Airport with Nairobi CBD, Westlands, Karen, Gigiri diplomatic quarter, and hotel destinations.
              </p>

              <ul className="space-y-2.5 text-xs text-[#1e444b] font-medium mb-6">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-[#c89b3c]" />
                  <span>Jomo Kenyatta International Airport (JKIA Terminals 1A, 1B, 1E &amp; 2)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-[#c89b3c]" />
                  <span>Wilson Airport (Domestic safari bush flights dispatch)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-[#c89b3c]" />
                  <span>Nairobi SGR Terminus (Syokimau) pickups and drop-offs</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 border-t border-[#071b1e]/10 flex items-center justify-between">
              <span className="text-xs text-[#6f8285] font-medium">Flight-monitored 24/7</span>
              <a
                href={getAirportTransferWhatsAppUrl('Nairobi')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 text-[#133935] hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Inquire Nairobi Transfer</span>
              </a>
            </div>
          </div>

          {/* Mombasa Card */}
          <div className="editorial-card rounded-[2rem] p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.16em] bg-[#c89b3c]/15 text-[#9d7322]">
                  Mombasa Head Office
                </span>
                <span className="text-xs text-[#8f7547] font-semibold">Coast Region</span>
              </div>

              <h3 className="text-2xl font-bold font-editorial text-[#071b1e] mb-3">
                Mombasa &amp; Coast Transfers
              </h3>
              <p className="text-sm text-[#2d4549] leading-relaxed mb-6 font-normal">
                Direct transfers from Moi International Airport and Mombasa SGR Terminus to Bamburi, Nyali, Shanzu, Kilifi, Watamu, and south to Diani Beach via Likoni or the Dongo Kundu bypass.
              </p>

              <ul className="space-y-2.5 text-xs text-[#1e444b] font-medium mb-6">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-[#c89b3c]" />
                  <span>Moi International Airport (MBA) — Fast dispatch from Bamburi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-[#c89b3c]" />
                  <span>Mombasa SGR Miritini Terminus connections</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-[#c89b3c]" />
                  <span>Door-to-door resort drop-offs across North &amp; South Coast</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 border-t border-[#071b1e]/10 flex items-center justify-between">
              <span className="text-xs text-[#6f8285] font-medium">Head Office: Bamburi Fisheries</span>
              <a
                href={getAirportTransferWhatsAppUrl('Mombasa')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 text-[#133935] hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Inquire Mombasa Transfer</span>
              </a>
            </div>
          </div>

        </div>

        {/* Primary CTA */}
        <div className="text-center pt-2">
          <button
            onClick={() => onRequestTransfer ? onRequestTransfer() : window.location.assign('#contact')}
            className="btn-editorial-gold !py-3.5 !px-8 text-xs cursor-pointer"
          >
            <span>Request Airport / SGR Transfer</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
