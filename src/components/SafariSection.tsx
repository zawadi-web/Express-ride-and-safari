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
    <section id="safaris" className="relative border-b border-[#0d2d30]/10 py-20 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(29,109,104,0.08),_transparent_25%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="section-kicker mx-auto mb-4">Kenyan Travel Circuits &amp; Expeditions</div>
          <h2 className="section-title mb-4">Curated Routes Across Kenya.</h2>
          <p className="section-copy mx-auto max-w-2xl text-base sm:text-lg">
            From the Indian Ocean coastline to the savannahs of the Great Rift Valley, explore tailored routes with our dedicated safari cruisers and touring vehicles.
          </p>
        </div>

        {/* Safari Circuits Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SAFARI_DESTINATIONS.map((dest: SafariDestination, idx: number) => {
            const circuitNumber = String(idx + 1).padStart(2, '0');

            return (
              <article
                key={dest.id}
                className="section-shell group flex flex-col overflow-hidden rounded-[2rem] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(7,27,30,0.08)] hover:-translate-y-1"
              >
                {/* Visual Image / Route Graphic Stage */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#0d2d30] via-[#071b1e] to-[#041214]">
                  {dest.image ? (
                    <>
                      <Image
                        src={dest.image}
                        alt={`${dest.name} - Express Ride Kenya`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071b1e]/85 via-[#071b1e]/25 to-transparent" />
                    </>
                  ) : (
                    /* Original Route Graphic when destination photo is not locally verified */
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full border border-[#cfe85e]/30 bg-[#cfe85e]/10 flex items-center justify-center mb-3">
                        <MapPinIcon className="w-8 h-8 text-[#cfe85e]" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#cfe85e]">
                        Expedition Route
                      </span>
                      <span className="text-sm font-black text-white mt-1">
                        {dest.name}
                      </span>
                    </div>
                  )}

                  {/* Circuit Index & Region Header */}
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#cfe85e] text-xs font-black text-[#071b1e] shadow-sm">
                      {circuitNumber}
                    </span>
                    <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-[#071b1e]/75 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#f7f4ee] backdrop-blur-sm">
                      <MapPinIcon className="w-3.5 h-3.5 text-[#cfe85e]" />
                      {dest.region}
                    </div>
                  </div>

                  {/* Circuit Tagline */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#d8ef76] drop-shadow-sm">
                      {dest.tagline}
                    </span>
                  </div>
                </div>

                {/* Circuit Route Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-5 flex-1">
                    <h3 className="mb-2 text-2xl font-black tracking-[-0.04em] text-[#0d252a] group-hover:text-[#1d6d68] transition-colors">
                      {dest.name}
                    </h3>
                    <p className="mb-5 text-sm leading-7 text-[#34545d]">{dest.description}</p>

                    {/* Route Logistics Metadata */}
                    <div className="mb-5 space-y-2 rounded-2xl border border-[#0d2d30]/10 bg-[#f4f9f8] p-3.5 text-xs text-[#204047]">
                      {dest.distanceFromHub && (
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[#0d252a] shrink-0 text-[11px] uppercase tracking-wider">
                            Route:
                          </span>
                          <span className="text-[#3b5d63]">{dest.distanceFromHub}</span>
                        </div>
                      )}
                      {dest.suggestedFleet && (
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[#0d252a] shrink-0 text-[11px] uppercase tracking-wider">
                            Recommended:
                          </span>
                          <span className="text-[#1d6d68] font-medium">{dest.suggestedFleet}</span>
                        </div>
                      )}
                    </div>

                    {/* Circuit Highlights */}
                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#527178]">
                        Experience Highlights
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#1b3e46]">
                        {dest.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#1d6d68]" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions: Direct Reservation & WhatsApp */}
                  <div className="flex items-center justify-between gap-3 border-t border-[#0d2d30]/10 pt-4">
                    <button
                      onClick={() => (onPlanTrip ? onPlanTrip(dest.name) : window.location.assign('#contact'))}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#0d252a] transition-colors hover:text-[#1d6d68]"
                    >
                      <span>Inquire Route</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={getSafariWhatsAppUrl(dest.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#ecfbf0] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0d3b31] hover:bg-[#d8f7e0] transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
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
