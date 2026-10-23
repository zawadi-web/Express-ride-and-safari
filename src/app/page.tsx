import React from 'react';
import type { Metadata } from 'next';
import { MAINTENANCE_MODE } from '@/config/maintenance';
import { MaintenancePage } from '@/components/MaintenancePage';
import { FullWebsite } from '@/components/FullWebsite';

export const metadata: Metadata = {
  title: MAINTENANCE_MODE
    ? 'Express Ride & Safari | Maintenance'
    : 'Express Ride & Safaris Kenya | Car Hire, Safaris & Airport Transfers',
  description: MAINTENANCE_MODE
    ? "We're taking a little time to improve your experience. Express Ride & Safari will be back soon, ready to get you where you need to go."
    : 'Express Ride & Safaris Kenya offers private car hire, executive chauffeur transport, punctual airport transfers and bespoke safari tours across Mombasa, Nairobi and Kenya.',
};

export default function Home() {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return <FullWebsite />;
}
