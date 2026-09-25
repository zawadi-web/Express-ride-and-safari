import React from 'react';
import { WHY_CHOOSE_US } from '@/data/content';
import { ShieldCheckIcon, UserCheckIcon, SlidersIcon, MapPinIcon } from './Icons';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'shield':
        return <ShieldCheckIcon className="w-6 h-6 text-[#D97706]" />;
      case 'user-check':
        return <UserCheckIcon className="w-6 h-6 text-[#D97706]" />;
      case 'sliders':
        return <SlidersIcon className="w-6 h-6 text-[#D97706]" />;
      case 'map-pin':
      default:
        return <MapPinIcon className="w-6 h-6 text-[#D97706]" />;
    }
  };

  return (
    <section className="py-20 text-slate-900 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-amber-200 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-4 shadow-xs">
            Our Standards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 mb-4">
            Why Travel With Express Ride?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Committed to dependable transportation, transparent communication, and genuine Kenyan hospitality.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-7 flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all duration-300 group shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-xs">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#D97706] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-bold text-slate-800 mb-3">
                  {item.description}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <span className="text-[11px] font-bold text-[#D97706] uppercase tracking-wider">
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
