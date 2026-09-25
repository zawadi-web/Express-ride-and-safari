import React from 'react';
import { HOW_IT_WORKS } from '@/data/content';
import { PhoneIcon, WhatsAppIcon } from './Icons';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 text-slate-900 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-amber-200 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-4 shadow-xs">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Fast, hassle-free vehicle reservations and travel planning in three easy steps.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS.map((item, idx) => (
            <div
              key={item.step}
              className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-8 flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all duration-300 relative group shadow-sm"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-[#D97706]">
                    {item.step}
                  </span>
                  <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-md bg-amber-50 text-[#D97706] font-bold border border-amber-200">
                    Step {idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#D97706] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-bold text-slate-800 mb-3">
                  {item.description}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              {idx === 1 && (
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-bold hover:underline"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                  <span className="text-slate-300">&bull;</span>
                  <a
                    href="tel:0793612412"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-800 hover:text-[#D97706] font-bold"
                  >
                    <PhoneIcon className="w-3.5 h-3.5 text-[#D97706]" />
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
