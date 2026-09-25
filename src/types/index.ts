export type VehicleCategory = 'All' | 'Economy' | 'Saloon' | 'SUV' | 'Safari Vehicle';

export interface Vehicle {
  id: string;
  name: string;
  category: 'Economy' | 'Saloon' | 'SUV' | 'Safari Vehicle';
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid';
  image: string;
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
  image: string;
  tagline: string;
  description: string;
  highlights: string[];
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
