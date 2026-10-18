import React from 'react';
import type { Metadata } from 'next';
import { MAINTENANCE_MODE } from '@/config/maintenance';
import { MaintenancePage } from '@/components/MaintenancePage';
import { FullWebsite } from '@/components/FullWebsite';

export const metadata: Metadata = {
  title: MAINTENANCE_MODE
    ? 'Express Ride & Safari | Maintenance'
    : 'Express Ride & Safaris Kenya | Car Hire, Safaris & Tours',
  description: MAINTENANCE_MODE
    ? "We're taking a little time to improve your experience. Express Ride & Safari will be back soon, ready to get you where you need to go."
    : 'Express Ride & Safaris Kenya offers car hire, chauffeur services, airport transfers, safari experiences and tours across Kenya.',
};

export default function Home() {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return <FullWebsite />;
}
