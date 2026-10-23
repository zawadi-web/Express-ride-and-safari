'use client';

import React, { useEffect } from 'react';
import { SmartBookingForm } from './SmartBookingForm';
import { XIcon } from './Icons';

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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#071b1e]/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl bg-[#fbf8f2] border border-[#c89b3c]/30 shadow-2xl text-[#071b1e] my-auto overflow-hidden">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-start justify-between p-5 sm:p-6 bg-[#fbf8f2]/95 backdrop-blur-md border-b border-[#071b1e]/10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c89b3c] block mb-1">
              Express Ride &amp; Safari Kenya · Reservation Desk
            </span>
            <h3 id="modal-headline" className="text-xl sm:text-2xl font-bold font-editorial text-[#071b1e] tracking-tight">
              {targetItem}
            </h3>
            {category && (
              <span className="inline-block px-2.5 py-0.5 mt-1 rounded-full bg-[#133935]/10 text-[#133935] text-[10px] font-bold uppercase tracking-wider">
                {category}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/80 hover:bg-white text-[#071b1e] border border-[#071b1e]/10 hover:border-[#c89b3c] transition-colors cursor-pointer"
            aria-label="Close reservation modal"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="p-5 sm:p-7 overflow-y-auto max-h-[calc(92vh-90px)]">
          <SmartBookingForm
            isModal={true}
            initialService={targetItem}
            initialVehicle={category ? targetItem : undefined}
            initialDestination={targetItem.includes('Safari') ? targetItem.replace('Safari to ', '') : undefined}
            onSuccess={() => {
              // modal will let user see the WhatsApp status
            }}
          />
        </div>
      </div>
    </div>
  );
};
