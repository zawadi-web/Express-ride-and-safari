import { COMPANY_INFO } from '@/data/content';

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
  const text = `Hello Express Ride & Safaris Kenya, I would like to inquire about renting the ${vehicleName} (${category}). Please share availability and rental requirements.`;
  return getWhatsAppUrl(text);
}

/**
 * WhatsApp inquiry for airport transfer
 */
export function getAirportTransferWhatsAppUrl(location?: string): string {
  const locText = location ? ` in ${location}` : '';
  const text = `Hello Express Ride & Safaris Kenya, I would like to request an airport transfer${locText}. Please let me know available vehicles and pickup scheduling.`;
  return getWhatsAppUrl(text);
}

/**
 * WhatsApp inquiry for a safari destination
 */
export function getSafariWhatsAppUrl(destinationName: string): string {
  const text = `Hello Express Ride & Safaris Kenya, I am interested in planning a safari experience to ${destinationName}. Please share package options and vehicle arrangements.`;
  return getWhatsAppUrl(text);
}
