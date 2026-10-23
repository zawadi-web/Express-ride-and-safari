'use client';

import React from 'react';
import { HOW_IT_WORKS } from '@/data/content';
import { PhoneIcon, WhatsAppIcon } from './Icons';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const HowItWorks: React.FC = () => {
  return (
    <section className="relative py-24 border-b border-[#071b1e]/10 bg-[#fbf8f2]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-kicker mx-auto mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c89b3c]" />
            Straightforward Process
          </div>
          <h2 className="section-title mb-4 font-editorial">
            How Reservation Works
          </h2>
          <p className="section-copy mx-auto max-w-2xl text-base sm:text-lg">
            Fast, transparent vehicle reservations and safari expedition planning in three simple steps.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS.map((item, idx) => (
            <div
              key={item.step}
              className="editorial-card rounded-[2rem] p-8 flex flex-col justify-between hover:border-[#c89b3c]/40 hover:shadow-xl transition-all duration-300 relative group shadow-sm"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black font-editorial text-[#c89b3c]">
                    {item.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-[#133935]/10 text-[#133935] font-bold">
                    Step {idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-editorial text-[#071b1e] mb-2 group-hover:text-[#1b4d47] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-bold text-[#133935] mb-3">
                  {item.description}
                </p>

                <p className="text-xs text-[#2d4549] leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              {idx === 1 && (
                <div className="pt-6 mt-6 border-t border-[#071b1e]/08 flex items-center gap-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#133935] font-bold hover:text-[#25D366] transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                  <span className="text-[#c89b3c]">&bull;</span>
                  <a
                    href="tel:0793612412"
                    className="inline-flex items-center gap-1.5 text-xs text-[#1e444b] hover:text-[#c89b3c] font-bold transition-colors"
                  >
                    <PhoneIcon className="w-3.5 h-3.5 text-[#c89b3c]" />
                    <span>Call Direct</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
