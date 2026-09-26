'use client';

import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '@/data/content';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { XIcon, WhatsAppIcon, CheckIcon, ArrowRightIcon } from './Icons';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetItem?: string;
  category?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  targetItem = 'Car Hire / Safari',
  category,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Mombasa');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sanitize = (val: string) => val.replace(/[<>'"`;]/g, '').trim();

  const handleWhatsAppDirect = () => {
    const cleanTarget = sanitize(targetItem);
    const cleanCategory = category ? ` (${sanitize(category)})` : '';
    const cleanDate = date ? ` Travel date: ${sanitize(date)}.` : '';
    const cleanLocation = location ? ` Location: ${sanitize(location)}.` : '';
    const cleanName = name.trim() ? `, my name is ${sanitize(name)}` : '';

    const message = `Hello Express Ride & Safaris Kenya${cleanName}. I am inquiring about ${cleanTarget}${cleanCategory}.${cleanDate}${cleanLocation} Please let me know availability.`;
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-black hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-xs uppercase tracking-wider font-extrabold text-[#D97706] block mb-1">
            Express Reservation Inquiry
          </span>
          <h3 className="text-2xl font-black text-slate-950 tracking-tight">
            {targetItem}
          </h3>
          {category && (
            <span className="inline-block px-3 py-1 mt-1 rounded-md bg-amber-50 text-[#D97706] text-xs font-bold border border-amber-200">
              {category}
            </span>
          )}
        </div>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-slate-950">Request Noted</h4>
            <p className="text-xs text-slate-600 mb-6">
              Our reservation desk has logged your inquiry for {targetItem}. For immediate booking confirmation, connect directly via WhatsApp.
            </p>
            <button
              onClick={handleWhatsAppDirect}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-wider shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Connect on WhatsApp Now</span>
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Instant WhatsApp Option */}
            <button
              onClick={handleWhatsAppDirect}
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-xs uppercase tracking-wider shadow-md shadow-[#25D366]/20 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Inquire via WhatsApp (Instant)</span>
            </button>

            <div className="flex items-center gap-3 my-2 text-xs text-slate-400">
              <div className="flex-1 h-px bg-slate-200" />
              <span>or send details to call back</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* Quick Form */}
            <form onSubmit={handleQuickSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-700 font-bold mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Mary Wanjiku"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#D97706] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-700 font-bold mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07XX XXX XXX"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#D97706] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-700 font-bold mb-1">
                    Pickup Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#D97706] focus:bg-white cursor-pointer"
                  >
                    <option value="Mombasa">Mombasa</option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-700 font-bold mb-1">
                  Expected Travel Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#D97706] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
              >
                <span>Submit Quick Inquiry</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Direct Phone Assistance */}
            <div className="pt-3 border-t border-slate-100 text-center text-xs text-slate-600">
              Prefer calling? Dial{' '}
              <a href={`tel:${COMPANY_INFO.phones[0]}`} className="text-slate-900 hover:text-[#D97706] font-bold underline">
                {COMPANY_INFO.phones[0]}
              </a>
              {' '}or{' '}
              <a href={`tel:${COMPANY_INFO.phones[1]}`} className="text-slate-900 hover:text-[#D97706] font-bold underline">
                {COMPANY_INFO.phones[1]}
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
