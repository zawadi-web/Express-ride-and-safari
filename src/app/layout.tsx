import type { Metadata } from 'next';
import './globals.css';
import { MAINTENANCE_MODE } from '@/config/maintenance';

export const metadata: Metadata = {
  title: MAINTENANCE_MODE
    ? 'Express Ride & Safari | Maintenance'
    : 'Express Ride & Safaris Kenya | Car Hire, Safaris & Tours',
  description: MAINTENANCE_MODE
    ? "We're taking a little time to improve your experience. Express Ride & Safari will be back soon, ready to get you where you need to go."
    : 'Express Ride & Safaris Kenya offers car hire, chauffeur services, airport transfers, safari experiences and tours across Kenya.',
  keywords: [
    'Car hire Kenya',
    'Car rental Mombasa',
    'Car hire Nairobi',
    'Kenya safaris',
    'Airport transfers JKIA',
    'Airport transfers Moi Mombasa',
    'Self drive Kenya',
    'Chauffeur services Kenya',
    'Maasai Mara safaris',
    'Diani beach tours',
  ],
  authors: [{ name: 'Express Ride & Safaris Kenya' }],
  metadataBase: new URL('https://www.express-ride-and-safari.co.ke'),
  alternates: {
    canonical: 'https://www.express-ride-and-safari.co.ke',
  },
  openGraph: {
    title: 'Express Ride & Safaris Kenya | Car Hire, Safaris & Tours',
    description:
      'Reliable car hire, airport transfers, and tailor-made safari tours across Mombasa and Nairobi, Kenya.',
    url: 'https://www.express-ride-and-safari.co.ke',
    siteName: 'Express Ride & Safaris Kenya',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 474,
        alt: 'Express Ride & Safaris Kenya',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`min-h-screen antialiased ${
          MAINTENANCE_MODE
            ? 'bg-[#0A0A0B] text-[#F5F2EB] selection:bg-amber-500/30 selection:text-amber-100'
            : 'bg-[#faf8f5] text-slate-900 selection:bg-[#cfe85e] selection:text-[#071b1e]'
        }`}
      >
        {children}
      </body>
    </html>
  );
}
