'use client';

import React from 'react';
import { COMPANY_INFO } from '@/data/content';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { PhoneIcon, WhatsAppIcon, ArrowRightIcon } from './Icons';

interface MobileContactBarProps {
  onOpenInquiry?: () => void;
}

export const MobileContactBar: React.FC<MobileContactBarProps> = ({ onOpenInquiry }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/90 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* CALL button */}
        <a
          href={`tel:${COMPANY_INFO.phones[0]}`}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 active:scale-95 transition-transform"
        >
          <PhoneIcon className="w-4 h-4 text-[#D97706] mb-1" />
          <span className="text-[11px] font-black tracking-wider uppercase">Call</span>
        </a>

        {/* WHATSAPP button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-[#25D366] text-black font-black active:scale-95 transition-transform shadow-sm"
        >
          <WhatsAppIcon className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-black tracking-wider uppercase">WhatsApp</span>
        </a>

        {/* BOOK button */}
        <button
          onClick={() => {
            if (onOpenInquiry) {
              onOpenInquiry();
            } else {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-[#F59E0B] text-black font-black active:scale-95 transition-transform shadow-sm cursor-pointer"
        >
          <ArrowRightIcon className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-black tracking-wider uppercase">Book</span>
        </button>

      </div>
    </div>
  );
};
