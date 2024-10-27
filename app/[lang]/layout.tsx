import type { Metadata } from "next";
import localFont from "next/font/local";

import '@/styles/globals.css'
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const dictionaries = {
  en: {
    title: 'Mousewerk | Web Development & Digital Solutions',
    description: 'Professional web development and digital solutions. We create exceptional web experiences that drive results, combining stunning design with powerful functionality.',
    shortDescription: 'Professional web development and digital solutions. We create exceptional web experiences that drive results.',
    keywords: 'web development, digital solutions, React, Next.js, web design, UI/UX design, web applications',
    altText: 'Mousewerk - Web Development & Digital Solutions',
  },
  de: {
    title: 'Mousewerk | Webentwicklung & Digitale Lösungen',
    description: 'Professionelle Webentwicklung und digitale Lösungen. Wir schaffen außergewöhnliche Web-Erlebnisse, die Ergebnisse liefern und erstklassiges Design mit leistungsstarker Funktionalität verbinden.',
    shortDescription: 'Professionelle Webentwicklung und digitale Lösungen. Wir schaffen außergewöhnliche Web-Erlebnisse.',
    keywords: 'Webentwicklung, digitale Lösungen, React, Next.js, Webdesign, UI/UX Design, Webanwendungen',
    altText: 'Mousewerk - Webentwicklung & Digitale Lösungen',
  }
};

export const generateMetadata = ({ params }: { params: { lang: 'en' | 'de' } }): Metadata => {
  const dict = dictionaries[params.lang];
  
  return {
    title: dict.title,
    description: dict.description,
    keywords: dict.keywords,
    metadataBase: new URL('https://mousewerk.de'),
    openGraph: {
      title: dict.title,
      description: dict.shortDescription,
      url: 'https://mousewerk.de',
      siteName: 'Mousewerk',
      images: [
        {
          url: '/LOGO.png',
          width: 1200,
          height: 630,
          alt: dict.altText,
        },
      ],
      locale: params.lang === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.title,
      description: dict.shortDescription,
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
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'de-DE': '/de',
      },
    },
  };
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: 'en' | 'de' };
}) {
  return (
    <html lang={params.lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
