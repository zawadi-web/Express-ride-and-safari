'use client';

import React from 'react';
import Image from 'next/image';
import { SAFARI_DESTINATIONS } from '@/data/content';
import { SafariDestination } from '@/types';
import { getSafariWhatsAppUrl } from '@/utils/whatsapp';
import { MapPinIcon, WhatsAppIcon, ArrowRightIcon } from './Icons';

interface SafariSectionProps {
  onPlanTrip?: (destinationName: string) => void;
}

export const SafariSection: React.FC<SafariSectionProps> = ({ onPlanTrip }) => {
  return (
    <section id="safaris" className="relative border-b border-[#071b1e]/10 py-24 bg-[#fbf8f2]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(27,77,71,0.08),_transparent_35%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="section-kicker mx-auto mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c89b3c]" />
            Kenyan Safari Circuits &amp; Expeditions
          </div>
          <h2 className="section-title mb-4 font-editorial">
            Curated Routes Across Kenya.
          </h2>
          <p className="section-copy mx-auto max-w-2xl text-base sm:text-lg">
            From the Indian Ocean shores to the iconic savannahs of the Great Rift Valley, explore tailored circuits with our purpose-built 4x4 safari cruisers and executive tourers.
          </p>
        </div>

        {/* Safari Circuits Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SAFARI_DESTINATIONS.map((dest: SafariDestination, idx: number) => {
            const circuitNumber = String(idx + 1).padStart(2, '0');

            return (
              <article
                key={dest.id}
                className="editorial-card group flex flex-col overflow-hidden rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Visual Image / Route Graphic Stage */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#133935] via-[#071b1e] to-[#051416]">
                  {dest.image ? (
                    <>
                      <Image
                        src={dest.image}
                        alt={`${dest.name} - Express Ride Kenya Safari Route`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071b1e]/90 via-[#071b1e]/25 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full border border-[#c89b3c]/40 bg-[#c89b3c]/10 flex items-center justify-center mb-3 text-[#c89b3c]">
                        <MapPinIcon className="w-8 h-8" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e0b75a]">
                        Expedition Route
                      </span>
                      <span className="text-base font-bold text-white mt-1 font-editorial">
                        {dest.name}
                      </span>
                    </div>
                  )}

                  {/* Circuit Index & Region Header */}
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c89b3c] text-xs font-black text-[#071b1e] shadow-sm">
                      {circuitNumber}
                    </span>
                    <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-[#071b1e]/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#fbf8f2] backdrop-blur-sm">
                      <MapPinIcon className="w-3.5 h-3.5 text-[#e0b75a]" />
                      {dest.region}
                    </div>
                  </div>

                  {/* Circuit Tagline */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#e0b75a] drop-shadow-sm block">
                      {dest.tagline}
                    </span>
                  </div>
                </div>

                {/* Circuit Route Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-5 flex-1">
                    <h3 className="mb-2 text-2xl font-bold font-editorial tracking-tight text-[#071b1e] group-hover:text-[#1b4d47] transition-colors">
                      {dest.name}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-[#2d4549]">{dest.description}</p>

                    {/* Route Logistics Metadata */}
                    <div className="mb-5 space-y-2 rounded-2xl border border-[#071b1e]/08 bg-[#f4eee2]/60 p-3.5 text-xs text-[#1e444b]">
                      {dest.distanceFromHub && (
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[#071b1e] shrink-0 text-[11px] uppercase tracking-wider">
                            Route:
                          </span>
                          <span className="text-[#3b5d63]">{dest.distanceFromHub}</span>
                        </div>
                      )}
                      {dest.suggestedFleet && (
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[#071b1e] shrink-0 text-[11px] uppercase tracking-wider">
                            Fleet:
                          </span>
                          <span className="text-[#133935] font-semibold">{dest.suggestedFleet}</span>
                        </div>
                      )}
                    </div>

                    {/* Circuit Highlights */}
                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6f8285]">
                        Circuit Highlights
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#1e444b]">
                        {dest.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#c89b3c]" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions: Direct Reservation & WhatsApp */}
                  <div className="flex items-center justify-between gap-3 border-t border-[#071b1e]/10 pt-4">
                    <button
                      onClick={() => (onPlanTrip ? onPlanTrip(dest.name) : window.location.assign('#contact'))}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#071b1e] transition-colors hover:text-[#c89b3c] cursor-pointer"
                    >
                      <span>Inquire Route</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 text-[#c89b3c]" />
                    </button>

                    <a
                      href={getSafariWhatsAppUrl(dest.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#25D366]/40 bg-[#25D366]/15 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#071b1e] hover:bg-[#25D366]/25 transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-[#1ebd5b]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
