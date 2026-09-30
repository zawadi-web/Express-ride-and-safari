'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '@/data/content';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon, CheckIcon, ArrowRightIcon, MailIcon } from './Icons';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = 'Car Hire' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceRequired: initialService,
    travelDate: '',
    pickupLocation: 'Bamburi Fisheries, Mombasa',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [mailtoFallback, setMailtoFallback] = useState<string>('');

  const servicesList = [
    'Car Hire',
    'Self Drive',
    'Chauffeur Service',
    'Airport Transfer',
    'Safari',
    'Tours & Travel',
    'Other',
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone Number is required';
    } else if (formData.phoneNumber.trim().length < 9) {
      errs.phoneNumber = 'Enter a valid phone number';
    }
    if (!formData.travelDate) errs.travelDate = 'Please select a travel or pickup date';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setSubmitMessage(data.message || 'Your inquiry has been sent successfully.');
      if (data.mailto) setMailtoFallback(data.mailto);
      setSubmitted(true);
    } catch (err: any) {
      // Fallback: construct direct mailto and notify user
      const mailtoSub = encodeURIComponent(`Inquiry: ${formData.serviceRequired} - ${formData.fullName}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.fullName}\nPhone: ${formData.phoneNumber}\nEmail: ${formData.email || 'N/A'}\nService: ${formData.serviceRequired}\nDate: ${formData.travelDate}\nLocation: ${formData.pickupLocation}\nNotes: ${formData.message}`
      );
      setMailtoFallback(`mailto:${COMPANY_INFO.email}?subject=${mailtoSub}&body=${mailtoBody}`);
      setSubmitMessage('Inquiry logged. You can also send directly via email or WhatsApp below.');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSendViaWhatsApp = () => {
    const msg = `*New Website Inquiry*\n\n*Name:* ${formData.fullName || 'Not provided'}\n*Phone:* ${formData.phoneNumber || 'Not provided'}\n*Service:* ${formData.serviceRequired}\n*Date:* ${formData.travelDate || 'Flexible'}\n*Pickup Location:* ${formData.pickupLocation}\n*Notes:* ${formData.message || 'None'}`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="contact" className="py-20 text-slate-900 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-amber-200 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-4 shadow-xs">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 mb-4">
            Contact &amp; Reservations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Reach out directly by phone, WhatsApp, or send an inquiry below. We respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Business Info & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-7 shadow-sm">
              <h3 className="text-xl font-black tracking-tight text-slate-950 mb-1">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-xs text-[#D97706] font-bold uppercase tracking-wider mb-6">
                Car Hire &amp; Rentals | Safaris | Tours &amp; Travel
              </p>

              <div className="space-y-5 text-sm">
                
                {/* Locations */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <MapPinIcon className="w-4 h-4 text-[#D97706]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-500 font-bold block">Head Office &amp; Locations</span>
                    <span className="text-slate-900 font-semibold text-sm block">Bamburi Fisheries, Mombasa (Head Office)</span>
                    <span className="text-xs text-slate-500">Bamburi Fisheries &bull; Moi Airport (MBA) &bull; Mombasa SGR &bull; Nairobi Hub</span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <MailIcon className="w-4 h-4 text-[#D97706]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-500 font-bold block">Official Mailing Address</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-slate-900 font-bold text-sm hover:text-[#D97706] transition-colors block break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-xs text-slate-500">Fast quotes, bookings &amp; formal inquiries</span>
                  </div>
                </div>

                {/* Direct Phone Numbers */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <PhoneIcon className="w-4 h-4 text-[#D97706]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-500 font-bold block">Direct Calling</span>
                    <div className="flex flex-col sm:flex-row sm:gap-3 text-slate-900 font-bold mt-0.5">
                      <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-[#D97706] transition-colors">
                        {COMPANY_INFO.phones[0]}
                      </a>
                      <span className="hidden sm:inline text-slate-300">/</span>
                      <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-[#D97706] transition-colors">
                        {COMPANY_INFO.phones[1]}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Official WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-500 font-bold block">Primary WhatsApp</span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-extrabold text-sm hover:underline block"
                    >
                      {COMPANY_INFO.whatsappPhone}
                    </a>
                    <span className="text-xs text-slate-500 font-medium">Instant quotes &amp; vehicle availability</span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <ClockIcon className="w-4 h-4 text-[#D97706]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-500 font-bold block">Operating Hours</span>
                    <span className="text-slate-800 font-medium text-xs block">{COMPANY_INFO.hours}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Quick WhatsApp Banner */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-6 flex items-center justify-between gap-4 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">Need an Instant Response?</span>
                <span className="text-sm font-bold text-slate-900 block mt-0.5">Chat directly with our reservations desk</span>
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* RIGHT: Contact / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-7 sm:p-9 shadow-md">
              
              <h3 className="text-2xl font-black text-slate-950 mb-1">
                Send an Inquiry
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-medium">
                Inquiries are delivered directly to <span className="font-semibold text-slate-800">{COMPANY_INFO.email}</span>. We confirm availability quickly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50/80 border border-emerald-200 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mx-auto mb-4">
                    <CheckIcon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-950 mb-2">Inquiry Dispatched</h4>
                  <p className="text-sm text-slate-700 max-w-md mx-auto mb-2">
                    Thank you, <strong className="text-slate-950">{formData.fullName}</strong>. Your request for <strong className="text-[#D97706]">{formData.serviceRequired}</strong> has been received.
                  </p>
                  <p className="text-xs text-slate-500 mb-6">
                    A copy is routed to our Bamburi Fisheries office at <strong className="text-slate-800">{COMPANY_INFO.email}</strong>.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-wider shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </button>
                    {mailtoFallback && (
                      <a
                        href={mailtoFallback}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold shadow-xs transition-colors"
                      >
                        <MailIcon className="w-4 h-4 text-[#F59E0B]" />
                        <span>Open in Email App</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-slate-700 hover:text-black text-xs font-bold border border-slate-200 shadow-xs"
                    >
                      New Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. John Kamau"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border text-sm focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-slate-200 focus:border-[#D97706] focus:bg-white'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="e.g. 0712 345 678"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border text-sm focus:outline-none transition-colors ${
                          errors.phoneNumber ? 'border-red-500' : 'border-slate-200 focus:border-[#D97706] focus:bg-white'
                        }`}
                      />
                      {errors.phoneNumber && <p className="text-xs text-red-500 mt-1">{errors.phoneNumber}</p>}
                    </div>
                  </div>

                  {/* Email & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:border-[#D97706] focus:bg-white text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Service Required *
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:border-[#D97706] focus:bg-white text-sm focus:outline-none transition-colors cursor-pointer"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv} className="bg-white text-slate-900">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Travel Date & Pickup Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Travel / Pickup Date *
                      </label>
                      <input
                        type="date"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border text-sm focus:outline-none transition-colors ${
                          errors.travelDate ? 'border-red-500' : 'border-slate-200 focus:border-[#D97706] focus:bg-white'
                        }`}
                      />
                      {errors.travelDate && <p className="text-xs text-red-500 mt-1">{errors.travelDate}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Preferred Location / City
                      </label>
                      <select
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:border-[#D97706] focus:bg-white text-sm focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Bamburi Fisheries, Mombasa (Head Office)">Bamburi Fisheries, Mombasa (Head Office)</option>
                        <option value="Bamburi Beach / Nyali Resorts">Bamburi Beach / Nyali Resorts</option>
                        <option value="Moi International Airport (MBA)">Moi International Airport (MBA)</option>
                        <option value="Mombasa SGR Terminus">Mombasa SGR Terminus</option>
                        <option value="Nairobi (JKIA / Wilson / CBD)">Nairobi (JKIA / Wilson / CBD)</option>
                        <option value="Other Location">Other / Cross-country</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Additional Details / Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify preferred vehicle model, number of passengers, flight details, or destination itinerary..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:border-[#D97706] focus:bg-white text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button + WhatsApp forwarder option */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md shadow-[#F59E0B]/25 disabled:opacity-50"
                    >
                      <span>{loading ? 'Submitting...' : 'Submit Inquiry'}</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      <span>Send to WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-2 font-medium">
                    No payment required at this step. We confirm availability with you first.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
