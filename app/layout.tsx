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
  openGraph: {
    title: 'Mousewerk | Web Development & Digital Solutions',
    description: 'Professional web development and digital solutions. We create exceptional web experiences that drive results.',
    url: 'https://mousewerk.de',
    siteName: 'Mousewerk',
    images: [
      {
        url: '/og-image.jpg', // Make sure to add this image to your public folder
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
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
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
