import { COMPANY_INFO } from '@/data/content';
import { BookingEnquiry } from '@/types';

/**
 * Generates an official WhatsApp click-to-chat URL with optional pre-filled message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const phone = COMPANY_INFO.whatsappNumberDigits;
  const message = customMessage || COMPANY_INFO.defaultWhatsAppMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * WhatsApp inquiry for a specific vehicle
 */
export function getVehicleWhatsAppUrl(vehicleName: string, category: string): string {
  const text = `Hello Edoya Express Ride & Safaris Kenya, I would like to inquire about renting the ${vehicleName} (${category}). Please share availability and rental requirements.`;
  return getWhatsAppUrl(text);
}

/**
 * WhatsApp inquiry for airport transfer
 */
export function getAirportTransferWhatsAppUrl(location?: string): string {
  const locText = location ? ` in ${location}` : '';
  const text = `Hello Edoya Express Ride & Safaris Kenya, I would like to request an airport transfer${locText}. Please let me know available vehicles and pickup scheduling.`;
  return getWhatsAppUrl(text);
}

/**
 * WhatsApp inquiry for a safari destination
 */
export function getSafariWhatsAppUrl(destinationName: string): string {
  const text = `Hello Edoya Express Ride & Safaris Kenya, I am interested in planning a safari experience to ${destinationName}. Please share package options and vehicle arrangements.`;
  return getWhatsAppUrl(text);
}

/**
 * Constructs a professional, human-readable WhatsApp reservation enquiry
 */
export function formatBookingWhatsAppMessage(enquiry: BookingEnquiry): string {
  const lines: string[] = [
    `*EDOYA EXPRESS RIDE & SAFARIS KENYA — RESERVATION ENQUIRY*`,
    ``,
    `*Customer:* ${enquiry.customerName || 'Traveler'}`,
    enquiry.customerPhone ? `*Phone:* ${enquiry.customerPhone}` : '',
    `*Service:* ${enquiry.serviceType}`,
    enquiry.vehiclePreference ? `*Vehicle:* ${enquiry.vehiclePreference}` : '',
    enquiry.safariCircuit ? `*Safari Circuit:* ${enquiry.safariCircuit}` : '',
    enquiry.airportName ? `*Airport / Terminal:* ${enquiry.airportName}` : '',
    enquiry.flightNumber ? `*Flight Number:* ${enquiry.flightNumber}` : '',
    `*Pickup Location:* ${enquiry.pickupLocation}`,
    enquiry.destination ? `*Destination:* ${enquiry.destination}` : '',
    `*Travel Date:* ${enquiry.travelDate}${enquiry.travelTime ? ` at ${enquiry.travelTime}` : ''}`,
    enquiry.returnDate ? `*Return Date:* ${enquiry.returnDate}` : '',
    `*Passengers:* ${enquiry.passengers || '1'}`,
    enquiry.specialRequests ? `*Special Requests / Notes:* ${enquiry.specialRequests}` : '',
    ``,
    `_Please advise on vehicle availability and rates for this itinerary._`,
  ];

  return lines.filter(Boolean).join('\n');
}

/**
 * Generates official click-to-chat WhatsApp link with formatted booking enquiry
 */
export function getBookingWhatsAppUrl(enquiry: BookingEnquiry): string {
  return getWhatsAppUrl(formatBookingWhatsAppMessage(enquiry));
}
