import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Express Ride & Safaris Kenya | Car Hire, Safaris & Tours',
  description:
    'Express Ride & Safaris Kenya offers car hire, chauffeur services, airport transfers, safari experiences and tours across Kenya.',
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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#F59E0B] selection:text-black">
        {children}
      </body>
    </html>
  );
}
