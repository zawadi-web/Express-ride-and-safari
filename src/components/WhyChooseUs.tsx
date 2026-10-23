'use client';

import React from 'react';
import { WHY_CHOOSE_US } from '@/data/content';
import { ShieldCheckIcon, UserCheckIcon, SlidersIcon, MapPinIcon } from './Icons';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'shield':
        return <ShieldCheckIcon className="w-6 h-6 text-[#c89b3c]" />;
      case 'user-check':
        return <UserCheckIcon className="w-6 h-6 text-[#c89b3c]" />;
      case 'sliders':
        return <SlidersIcon className="w-6 h-6 text-[#c89b3c]" />;
      case 'map-pin':
      default:
        return <MapPinIcon className="w-6 h-6 text-[#c89b3c]" />;
    }
  };

  return (
    <section className="relative py-24 border-b border-[#071b1e]/10 bg-[#fbf8f2]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-kicker mx-auto mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c89b3c]" />
            The Express Ride Standard
          </div>
          <h2 className="section-title mb-4 font-editorial">
            Why Travel With Express Ride?
          </h2>
          <p className="section-copy mx-auto max-w-2xl text-base sm:text-lg">
            Committed to dependable transportation, transparent communication, and genuine Kenyan hospitality.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="editorial-card rounded-[2rem] p-7 flex flex-col justify-between hover:border-[#c89b3c]/40 hover:shadow-xl transition-all duration-300 group shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#c89b3c]/15 border border-[#c89b3c]/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-xs">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-bold font-editorial text-[#071b1e] mb-2 tracking-tight group-hover:text-[#1b4d47] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-bold text-[#133935] mb-3">
                  {item.description}
                </p>

                <p className="text-xs text-[#2d4549] leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#071b1e]/08">
                <span className="text-[10px] font-bold text-[#c89b3c] uppercase tracking-[0.18em]">
                  Express Ride Standard
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
