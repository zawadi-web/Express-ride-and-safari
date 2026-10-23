'use client';

import React, { useState, useId } from 'react';
import { COMPANY_INFO, VEHICLES, SAFARI_DESTINATIONS } from '@/data/content';
import { BookingEnquiry } from '@/types';
import { getBookingWhatsAppUrl, formatBookingWhatsAppMessage } from '@/utils/whatsapp';
import {
  WhatsAppIcon,
  PlaneIcon,
  CarIcon,
  CompassIcon,
  MapPinIcon,
  ClockIcon,
  UsersIcon,
  CheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from './Icons';

interface SmartBookingFormProps {
  initialService?: string;
  initialVehicle?: string;
  initialDestination?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const SmartBookingForm: React.FC<SmartBookingFormProps> = ({
  initialService = 'Car Hire (Self-Drive)',
  initialVehicle,
  initialDestination,
  onSuccess,
  isModal = false,
}) => {
  const formId = useId();

  // Primary service types supported
  const SERVICE_TYPES = [
    { id: 'Car Hire (Self-Drive)', label: 'Self-Drive Car Hire', icon: 'car' },
    { id: 'Chauffeur Driven', label: 'Chauffeur Driven', icon: 'user' },
    { id: 'Airport Transfer', label: 'Airport Transfer', icon: 'plane' },
    { id: 'Safari Expedition', label: 'Safari Expedition', icon: 'compass' },
    { id: 'Coastal & City Tour', label: 'Coastal / City Tour', icon: 'map' },
  ];

  const [serviceType, setServiceType] = useState<string>(() => {
    if (initialService.toLowerCase().includes('airport')) return 'Airport Transfer';
    if (initialService.toLowerCase().includes('safari')) return 'Safari Expedition';
    if (initialService.toLowerCase().includes('chauffeur')) return 'Chauffeur Driven';
    if (initialService.toLowerCase().includes('tour')) return 'Coastal & City Tour';
    return 'Car Hire (Self-Drive)';
  });

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupLocation, setPickupLocation] = useState(
    initialService.toLowerCase().includes('airport') ? 'Moi International Airport (MBA)' : 'Bamburi Fisheries, Mombasa'
  );
  const [destination, setDestination] = useState(initialDestination || '');
  const [travelDate, setTravelDate] = useState('');
  const [travelTime, setTravelTime] = useState('09:00');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('2');
  const [vehiclePreference, setVehiclePreference] = useState(initialVehicle || 'Toyota Prado TX / J150');
  const [airportName, setAirportName] = useState('Moi International Airport (MBA)');
  const [flightNumber, setFlightNumber] = useState('');
  const [safariCircuit, setSafariCircuit] = useState(initialDestination || 'Maasai Mara National Reserve');
  const [specialRequests, setSpecialRequests] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedForWhatsApp, setSubmittedForWhatsApp] = useState(false);
  const [copied, setCopied] = useState(false);

  // Minimum date is today in YYYY-MM-DD
  const todayString = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!customerName.trim()) {
      errs.customerName = 'Please enter your name.';
    }
    if (!travelDate) {
      errs.travelDate = 'Please select a travel or pickup date.';
    } else if (travelDate < todayString) {
      errs.travelDate = 'Travel date cannot be in the past.';
    }
    if (serviceType === 'Airport Transfer' && !airportName) {
      errs.airportName = 'Please select your airport or terminal.';
    }
    if (!pickupLocation.trim() && serviceType !== 'Airport Transfer') {
      errs.pickupLocation = 'Please enter a pickup location.';
    }
    return errs;
  };

  const currentEnquiry: BookingEnquiry = {
    serviceType,
    customerName: customerName.trim(),
    customerPhone: customerPhone.trim() || undefined,
    pickupLocation: serviceType === 'Airport Transfer' ? `${airportName}${flightNumber ? ` (Flight ${flightNumber})` : ''}` : pickupLocation,
    destination: destination.trim() || undefined,
    travelDate,
    travelTime: travelTime || undefined,
    returnDate: returnDate || undefined,
    passengers: `${passengers} passenger(s)`,
    vehiclePreference: serviceType.includes('Car') || serviceType.includes('Chauffeur') ? vehiclePreference : undefined,
    safariCircuit: serviceType === 'Safari Expedition' ? safariCircuit : undefined,
    airportName: serviceType === 'Airport Transfer' ? airportName : undefined,
    flightNumber: serviceType === 'Airport Transfer' && flightNumber.trim() ? flightNumber.trim() : undefined,
    specialRequests: specialRequests.trim() || undefined,
  };

  const previewMessage = formatBookingWhatsAppMessage(currentEnquiry);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const url = getBookingWhatsAppUrl(currentEnquiry);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmittedForWhatsApp(true);
    if (onSuccess) onSuccess();
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(previewMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className={`w-full ${isModal ? '' : 'editorial-card rounded-[2rem] p-6 sm:p-10'}`}>
      {/* Service Type Selection Pills */}
      <div className="mb-8">
        <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#133935] mb-3">
          1. Select Your Service Category
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {SERVICE_TYPES.map((type) => {
            const isSelected = serviceType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => {
                  setServiceType(type.id);
                  if (type.id === 'Airport Transfer' && !pickupLocation.includes('Airport')) {
                    setPickupLocation('Moi International Airport (MBA)');
                  }
                }}
                className={`flex flex-col items-center justify-center text-center p-3 sm:p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#071b1e] border-[#c89b3c] text-[#fbf8f2] shadow-md shadow-black/10'
                    : 'bg-white/80 border-[#071b1e]/10 text-[#0d252a] hover:border-[#c89b3c]/40 hover:bg-white'
                }`}
              >
                <span className="text-xs font-bold tracking-tight mb-1">{type.label}</span>
                <span
                  className={`text-[10px] uppercase tracking-wider font-semibold ${
                    isSelected ? 'text-[#e0b75a]' : 'text-[#6f8285]'
                  }`}
                >
                  {isSelected ? 'Selected' : 'Choose'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {submittedForWhatsApp ? (
        <div className="rounded-2xl bg-[#f4eee2] border border-[#c89b3c]/40 p-6 sm:p-8 text-center animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#1ebd5b] flex items-center justify-center mx-auto mb-4">
            <WhatsAppIcon className="w-7 h-7" />
          </div>

          <h3 className="text-2xl font-bold font-editorial text-[#071b1e] mb-2">
            Opening WhatsApp Inquiry
          </h3>

          <p className="text-sm text-[#1e444b] max-w-md mx-auto mb-4 leading-relaxed">
            Your itinerary has been formatted. <strong>Please tap Send in WhatsApp</strong> to dispatch your enquiry directly to our reservation desk at <span className="font-bold text-[#071b1e]">Bamburi Fisheries / Nairobi Hub</span>.
          </p>

          <div className="rounded-xl bg-white/90 border border-[#071b1e]/10 p-4 max-w-md mx-auto text-left mb-6 text-xs text-[#2b4b50] font-mono whitespace-pre-line max-h-40 overflow-y-auto">
            {previewMessage}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getBookingWhatsAppUrl(currentEnquiry)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-gold w-full sm:w-auto"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#071b1e]" />
              <span>Re-open WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleCopyMessage}
              className="btn-editorial-outline w-full sm:w-auto text-xs"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Itinerary Text'}
            </button>

            <button
              type="button"
              onClick={() => setSubmittedForWhatsApp(false)}
              className="px-4 py-2.5 text-xs font-semibold text-[#071b1e] hover:underline"
            >
              Edit Itinerary
            </button>
          </div>

          <p className="mt-5 text-[11px] text-[#6f8285]">
            * Note: Vehicle reservations and rates are confirmed once our team verifies availability with you on WhatsApp.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* 2. Dynamic Trip Details according to service type */}
          <div className="rounded-2xl bg-white/60 border border-[#071b1e]/08 p-5 sm:p-6 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#c89b3c]">
              2. Itinerary &amp; Route Logistics
            </h4>

            {/* CONDITIONAL: Airport Transfer Specifics */}
            {serviceType === 'Airport Transfer' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={`${formId}-airport`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                    Airport / SGR Hub *
                  </label>
                  <select
                    id={`${formId}-airport`}
                    value={airportName}
                    onChange={(e) => {
                      setAirportName(e.target.value);
                      setPickupLocation(e.target.value);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border border-[#071b1e]/15 text-sm focus:border-[#c89b3c] focus:outline-none"
                  >
                    <option value="Moi International Airport (MBA) - Mombasa">Moi International Airport (MBA) — Mombasa</option>
                    <option value="Jomo Kenyatta International Airport (JKIA) - Nairobi">Jomo Kenyatta Int. Airport (JKIA) — Nairobi</option>
                    <option value="Wilson Airport (WIL) - Nairobi">Wilson Airport (WIL) — Nairobi Safari Terminal</option>
                    <option value="Mombasa SGR Terminus (Miritini)">Mombasa SGR Terminus (Miritini)</option>
                    <option value="Nairobi SGR Terminus (Syokimau)">Nairobi SGR Terminus (Syokimau)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={`${formId}-flight`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                    Flight or Train # (Optional)
                  </label>
                  <input
                    id={`${formId}-flight`}
                    type="text"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                    placeholder="e.g. KQ 604 / Flight time"
                    className="w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border border-[#071b1e]/15 text-sm focus:border-[#c89b3c] focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* CONDITIONAL: Safari Expedition Selection */}
            {serviceType === 'Safari Expedition' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={`${formId}-safari`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                    Safari Destination Circuit *
                  </label>
                  <select
                    id={`${formId}-safari`}
                    value={safariCircuit}
                    onChange={(e) => setSafariCircuit(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border border-[#071b1e]/15 text-sm focus:border-[#c89b3c] focus:outline-none"
                  >
                    {SAFARI_DESTINATIONS.map((dest) => (
                      <option key={dest.id} value={dest.name}>
                        {dest.name} ({dest.region})
                      </option>
                    ))}
                    <option value="Custom Cross-Country Safari Circuit">Custom Multi-Park Circuit</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={`${formId}-safari-veh`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                    Recommended Safari Fleet
                  </label>
                  <select
                    id={`${formId}-safari-veh`}
                    value={vehiclePreference}
                    onChange={(e) => setVehiclePreference(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border border-[#071b1e]/15 text-sm focus:border-[#c89b3c] focus:outline-none"
                  >
                    <option value="Land Cruiser for Tour (Safari Custom 4x4 with Pop-Up Roof)">
                      Safari Custom 4x4 Cruiser (Pop-up viewing roof)
                    </option>
                    <option value="Toyota Prado TX / J150 (Executive 4WD)">
                      Toyota Prado TX / J150 (4WD SUV)
                    </option>
                    <option value="Advice Needed from Express Ride Specialist">
                      Help me choose the best safari vehicle
                    </option>
                  </select>
                </div>
              </div>
            )}

            {/* CONDITIONAL: Car Hire Fleet Selection */}
            {(serviceType === 'Car Hire (Self-Drive)' || serviceType === 'Chauffeur Driven') && (
              <div>
                <label htmlFor={`${formId}-vehicle`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                  Select Preferred Fleet Model
                </label>
                <select
                  id={`${formId}-vehicle`}
                  value={vehiclePreference}
                  onChange={(e) => setVehiclePreference(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border border-[#071b1e]/15 text-sm focus:border-[#c89b3c] focus:outline-none"
                >
                  {VEHICLES.map((veh) => (
                    <option key={veh.id} value={`${veh.name} (${veh.category})`}>
                      {veh.name} — {veh.category} ({veh.seats} Seats · {veh.transmission} · {veh.fuelType})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Pickup Location & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`${formId}-pickup`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                  {serviceType === 'Airport Transfer' ? 'Pickup Point (Airport/Station)' : 'Pickup Location *'}
                </label>
                <input
                  id={`${formId}-pickup`}
                  type="text"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="e.g. Bamburi Fisheries, Nyali, Westlands, Hotel..."
                  aria-invalid={!!errors.pickupLocation}
                  className={`w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border text-sm focus:outline-none transition-colors ${
                    errors.pickupLocation ? 'border-red-500' : 'border-[#071b1e]/15 focus:border-[#c89b3c]'
                  }`}
                />
                {errors.pickupLocation && <p className="text-xs text-red-600 mt-1">{errors.pickupLocation}</p>}
              </div>

              <div>
                <label htmlFor={`${formId}-dest`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                  Destination / Drop-off Point
                </label>
                <input
                  id={`${formId}-dest`}
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Diani Beach Resort, Nairobi CBD, Mara Lodge..."
                  className="w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border border-[#071b1e]/15 text-sm focus:border-[#c89b3c] focus:outline-none"
                />
              </div>
            </div>

            {/* Travel Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor={`${formId}-date`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                  Travel / Pickup Date *
                </label>
                <input
                  id={`${formId}-date`}
                  type="date"
                  min={todayString}
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  aria-invalid={!!errors.travelDate}
                  className={`w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border text-sm focus:outline-none transition-colors ${
                    errors.travelDate ? 'border-red-500' : 'border-[#071b1e]/15 focus:border-[#c89b3c]'
                  }`}
                />
                {errors.travelDate && <p className="text-xs text-red-600 mt-1">{errors.travelDate}</p>}
              </div>

              <div>
                <label htmlFor={`${formId}-time`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                  Preferred Time
                </label>
                <input
                  id={`${formId}-time`}
                  type="time"
                  value={travelTime}
                  onChange={(e) => setTravelTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border border-[#071b1e]/15 text-sm focus:border-[#c89b3c] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor={`${formId}-passengers`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                  Passengers
                </label>
                <select
                  id={`${formId}-passengers`}
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border border-[#071b1e]/15 text-sm focus:border-[#c89b3c] focus:outline-none"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3-4">3 – 4 Persons</option>
                  <option value="5-7">5 – 7 Persons (VIP Van / SUV)</option>
                  <option value="8+">8+ Group</option>
                </select>
              </div>
            </div>

            {/* Optional Return Journey for rentals or round-trip transfers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`${formId}-return`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                  Return Date (Optional for Round-Trip)
                </label>
                <input
                  id={`${formId}-return`}
                  type="date"
                  min={travelDate || todayString}
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border border-[#071b1e]/15 text-sm focus:border-[#c89b3c] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor={`${formId}-notes`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                  Special Requirements / Luggage
                </label>
                <input
                  id={`${formId}-notes`}
                  type="text"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. child seat, excessive bags, wedding convoy..."
                  className="w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border border-[#071b1e]/15 text-sm focus:border-[#c89b3c] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* 3. Customer Identity */}
          <div className="rounded-2xl bg-white/60 border border-[#071b1e]/08 p-5 sm:p-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#c89b3c]">
              3. Contact Details
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`${formId}-name`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                  Your Full Name *
                </label>
                <input
                  id={`${formId}-name`}
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. David Mwangi / Sarah Jenkins"
                  aria-invalid={!!errors.customerName}
                  className={`w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border text-sm focus:outline-none transition-colors ${
                    errors.customerName ? 'border-red-500' : 'border-[#071b1e]/15 focus:border-[#c89b3c]'
                  }`}
                />
                {errors.customerName && <p className="text-xs text-red-600 mt-1">{errors.customerName}</p>}
              </div>

              <div>
                <label htmlFor={`${formId}-phone`} className="block text-xs font-bold text-[#0d252a] uppercase tracking-wider mb-2">
                  Phone / WhatsApp Number (Optional)
                </label>
                <input
                  id={`${formId}-phone`}
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="e.g. +254 700 000 000"
                  className="w-full px-4 py-3 rounded-xl bg-white text-[#0d252a] border border-[#071b1e]/15 text-sm focus:border-[#c89b3c] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#071b1e] font-black text-sm uppercase tracking-wider shadow-lg shadow-[#25D366]/25 transition-all duration-200 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#071b1e]" />
              <span>Continue to WhatsApp Booking ({COMPANY_INFO.whatsappPhone})</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#5b7376]">
              <span className="flex items-center gap-1.5">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-[#1b4d47]" />
                Official Verified Business Line ({COMPANY_INFO.whatsappPhone})
              </span>
              <span>•</span>
              <span>Dispatch Head Office: Bamburi Fisheries, Mombasa</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
