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
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#fbf8f2]/95 backdrop-blur-xl border-t border-[#071b1e]/15 px-3 py-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* CALL button */}
        <a
          href={`tel:${COMPANY_INFO.phones[0]}`}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-white border border-[#071b1e]/10 text-[#071b1e] active:scale-95 transition-transform"
        >
          <PhoneIcon className="w-4 h-4 text-[#c89b3c] mb-1" />
          <span className="text-[10px] font-black tracking-wider uppercase">Call</span>
        </a>

        {/* WHATSAPP button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-[#25D366] text-[#071b1e] font-black active:scale-95 transition-transform shadow-xs"
        >
          <WhatsAppIcon className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-black tracking-wider uppercase">WhatsApp</span>
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
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-[#071b1e] text-[#fbf8f2] border border-[#c89b3c]/50 font-black active:scale-95 transition-transform shadow-xs cursor-pointer"
        >
          <ArrowRightIcon className="w-4 h-4 text-[#e0b75a] mb-1" />
          <span className="text-[10px] font-black tracking-wider uppercase">Reserve</span>
        </button>

      </div>
    </aside>
  );
};
