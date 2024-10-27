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
  title: 'Mousewerk | Web Development & Digital Solutions',
  description: 'Professional web development and digital solutions. We create exceptional web experiences that drive results, combining stunning design with powerful functionality.',
  keywords: 'web development, digital solutions, React, Next.js, web design, UI/UX design, web applications',
  metadataBase: new URL('https://mousewerk.de'),
  openGraph: {
    title: 'Mousewerk | Web Development & Digital Solutions',
    description: 'Professional web development and digital solutions. We create exceptional web experiences that drive results.',
    url: 'https://mousewerk.de',
    siteName: 'Mousewerk',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'Mousewerk - Web Development & Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mousewerk | Web Development & Digital Solutions',
    description: 'Professional web development and digital solutions. We create exceptional web experiences that drive results.',
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
