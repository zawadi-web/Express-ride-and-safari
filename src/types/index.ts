export type VehicleCategory = 'All' | 'SUV' | 'Luxury Van' | 'Saloon' | 'Economy' | 'Safari Vehicle' | 'Commercial';

export interface Vehicle {
  id: string;
  name: string;
  category: 'Economy' | 'Saloon' | 'SUV' | 'Safari Vehicle' | 'Luxury Van' | 'Commercial';
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid';
  image: string;
  rearImage?: string;
  imageOrientation?: 'landscape' | 'portrait' | 'panoramic';
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  image: string;
}

export interface SafariDestination {
  id: string;
  name: string;
  region: string;
  image?: string;
  tagline: string;
  description: string;
  highlights: string[];
  distanceFromHub?: string;
  suggestedFleet?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'vehicles' | 'safaris' | 'coast' | 'landscapes';
  image: string;
  location: string;
}

export interface InquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceRequired: string;
  travelDate: string;
  pickupLocation: string;
  message: string;
}

export interface BookingEnquiry {
  serviceType: string;
  pickupLocation: string;
  destination?: string;
  travelDate: string;
  travelTime?: string;
  returnDate?: string;
  passengers: string;
  vehiclePreference?: string;
  flightNumber?: string;
  airportName?: string;
  safariCircuit?: string;
  customerName: string;
  customerPhone?: string;
  specialRequests?: string;
}
