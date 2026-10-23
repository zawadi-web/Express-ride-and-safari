import type { Metadata } from 'next';
import './globals.css';
import { MAINTENANCE_MODE } from '@/config/maintenance';

export const metadata: Metadata = {
  title: MAINTENANCE_MODE
    ? 'Edoya Express Ride & Safari | Maintenance'
    : 'Edoya Express Ride & Safaris Kenya | Car Hire, Safaris & Airport Transfers',
  description: MAINTENANCE_MODE
    ? "We're taking a little time to improve your experience. Edoya Express Ride & Safari will be back soon, ready to get you where you need to go."
    : 'Edoya Express Ride & Safaris Kenya offers private car hire, executive chauffeur transport, punctual airport transfers and bespoke safari tours across Mombasa, Nairobi and Kenya.',
  keywords: [
    'Edoya Express Ride & Safaris',
    'Express ride and safari',
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
  authors: [{ name: 'Edoya Express Ride & Safaris Kenya' }],
  metadataBase: new URL('https://www.express-ride-and-safari.co.ke'),
  alternates: {
    canonical: 'https://www.express-ride-and-safari.co.ke',
  },
  openGraph: {
    title: 'Edoya Express Ride & Safaris Kenya | Car Hire, Safaris & Tours',
    description:
      'Reliable car hire, airport transfers, and tailor-made safari tours across Mombasa and Nairobi, Kenya.',
    url: 'https://www.express-ride-and-safari.co.ke',
    siteName: 'Edoya Express Ride & Safaris Kenya',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 474,
        alt: 'Edoya Express Ride & Safaris Kenya',
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
            : 'bg-[#fbf8f2] text-[#071b1e] selection:bg-[#c89b3c]/25 selection:text-[#051416]'
        }`}
      >
        {children}
      </body>
    </html>
  );
}
