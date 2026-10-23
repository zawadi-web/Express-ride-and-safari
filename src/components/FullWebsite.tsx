'use client';

import React, { useState } from 'react';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { VehicleSection } from '@/components/VehicleSection';
import { SafariSection } from '@/components/SafariSection';
import { AirportTransferSection } from '@/components/AirportTransferSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { HowItWorks } from '@/components/HowItWorks';
import { GallerySection } from '@/components/GallerySection';
import { AboutSection } from '@/components/AboutSection';
import { BookingCTA } from '@/components/BookingCTA';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { MobileContactBar } from '@/components/MobileContactBar';
import { InquiryModal } from '@/components/InquiryModal';
import { Vehicle } from '@/types';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { WhatsAppIcon } from '@/components/Icons';

export function FullWebsite() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState('Car Hire / Safari Inquiry');
  const [modalCategory, setModalCategory] = useState<string | undefined>(undefined);
  const [contactInitialService, setContactInitialService] = useState('Car Hire');

  const handleOpenGeneralInquiry = (serviceOrVehicle?: string) => {
    setModalItem(serviceOrVehicle || 'General Reservation Inquiry');
    setModalCategory(undefined);
    setModalOpen(true);
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setModalItem(vehicle.name);
    setModalCategory(vehicle.category);
    setModalOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setModalItem(serviceTitle);
    setModalCategory('Service Inquiry');
    setModalOpen(true);
  };

  const handlePlanTrip = (destinationName: string) => {
    setModalItem(`Safari to ${destinationName}`);
    setModalCategory('Safari Experience');
    setModalOpen(true);
  };

  const handleRequestTransfer = () => {
    setModalItem('Private Airport Transfer (Nairobi / Mombasa)');
    setModalCategory('Airport Pickup');
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-transparent text-slate-900 flex flex-col relative selection:bg-[#d7ef7b] selection:text-[#071b1e]">
      <AnimatedBackground />

      <Navbar onOpenInquiry={handleOpenGeneralInquiry} />
      <Hero onOpenInquiry={handleOpenGeneralInquiry} />
      <ServicesSection onSelectService={handleSelectService} />
      <VehicleSection onSelectVehicle={handleSelectVehicle} />
      <SafariSection onPlanTrip={handlePlanTrip} />
      <AirportTransferSection onRequestTransfer={handleRequestTransfer} />
      <WhyChooseUs />
      <HowItWorks />
      <GallerySection />
      <AboutSection />
      <BookingCTA />
      <ContactSection initialService={contactInitialService} />
      <Footer />

      <MobileContactBar onOpenInquiry={() => handleOpenGeneralInquiry('Mobile Quick Reservation')} />

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="floating-whatsapp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        targetItem={modalItem}
        category={modalCategory}
      />
    </main>
  );
}
