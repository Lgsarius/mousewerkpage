// Pfad zur Datei: /app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";

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
  title: 'Mousewerk | Webentwicklung & Digitale Lösungen',
  description: 'Professionelle Webentwicklung und digitale Lösungen. Wir schaffen herausragende Web-Erlebnisse, die Resultate liefern – vom ansprechenden Design bis zur leistungsstarken Funktionalität.',
  keywords: 'Webentwicklung, digitale Lösungen, React, Next.js, Webdesign, UI/UX Design, Webanwendungen, Webagentur, Website-Erstellung',
  metadataBase: new URL('https://mousewerk.de'),
  openGraph: {
    title: 'Mousewerk | Webentwicklung & Digitale Lösungen',
    description: 'Professionelle Webentwicklung und digitale Lösungen. Wir schaffen Web-Erlebnisse, die begeistern und Ergebnisse liefern.',
    url: 'https://mousewerk.de',
    siteName: 'Mousewerk',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'Mousewerk - Webentwicklung & Digitale Lösungen',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mousewerk | Webentwicklung & Digitale Lösungen',
    description: 'Professionelle Webentwicklung und digitale Lösungen. Wir schaffen Web-Erlebnisse, die begeistern und Ergebnisse liefern.',
    images: ['/LOGO.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/favicon-16x16.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
