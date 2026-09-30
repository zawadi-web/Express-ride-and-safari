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
  metadataBase: new URL('https://express-ride-and-safari.co.ke'),
  openGraph: {
    title: 'Express Ride & Safaris Kenya | Car Hire, Safaris & Tours',
    description:
      'Reliable car hire, airport transfers, and tailor-made safari tours across Mombasa and Nairobi, Kenya.',
    url: 'https://express-ride-and-safari.co.ke',
    siteName: 'Express Ride & Safaris Kenya',
    locale: 'en_KE',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
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
