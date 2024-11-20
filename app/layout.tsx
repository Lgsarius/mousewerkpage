// Pfad zur Datei: /app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import CookieBanner from "@/components/CookieBanner";

import '@/styles/globals.css'
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mousewerk.de'),
  title: {
    template: '%s | Mousewerk',
    default: 'Mousewerk | CAD-Optimierung & Datenaufbereitung'
  },
  description: 'Professionelle CAD-Optimierung, Datenkonvertierung und Spezialanfertigungen für die Industrie. Ihr Spezialist für technische Datenverarbeitung.',
  keywords: 'CAD-Optimierung, Datenkonvertierung, CAD-Daten, Reverse Engineering, Legacy-Daten, Technische Zeichnungen, 3D-Modelle, CAD-Dienstleistungen, Datenaufbereitung, CAD-Reparatur',
  openGraph: {
    title: 'Mousewerk | CAD-Optimierung & Datenaufbereitung',
    description: 'Professionelle CAD-Optimierung, Datenkonvertierung und Spezialanfertigungen für die Industrie.',
    url: 'https://mousewerk.de',
    siteName: 'Mousewerk',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'Mousewerk - CAD-Optimierung & Datenaufbereitung',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mousewerk | CAD-Optimierung & Datenaufbereitung',
    description: 'Professionelle CAD-Optimierung, Datenkonvertierung und Spezialanfertigungen für die Industrie.',
    images: ['/LOGO.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png' }
    ],
    shortcut: '/favicon-16x16.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code', // Falls vorhanden
  },
  alternates: {
    canonical: 'https://mousewerk.de',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <main>{children}</main>
        <CookieBanner />
      </body>
    </html>
  )
}
