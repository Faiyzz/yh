import "./globals.css";
import { ReactNode } from "react";
import { Metadata, Viewport } from "next";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/query-provider";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#FFE241',
}

export const metadata: Metadata = {
  title: {
    default: "Ridgeback Builders - Professional Construction & Renovation Services in Florida",
    template: "%s | Ridgeback Builders"
  },
  description: "Expert residential construction, renovation, and remodeling services in Florida. Hurricane-resistant building, kitchen & bathroom remodeling, concrete work, and more. Licensed & insured.",
  keywords: [
    "construction Florida",
    "home renovation",
    "kitchen remodeling",
    "bathroom renovation", 
    "hurricane resistant construction",
    "concrete work",
    "residential construction",
    "Florida contractors",
    "home builders",
    "renovation services"
  ],
  authors: [{ name: "Ridgeback Builders" }],
  creator: "Ridgeback Builders",
  publisher: "Ridgeback Builders",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ridgebackbuilt.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Ridgeback Builders - Professional Construction & Renovation Services',
    description: 'Expert residential construction and renovation services in Florida. Hurricane-resistant building, kitchen & bathroom remodeling, and more.',
    siteName: 'Ridgeback Builders',
    images: [
      {
        url: '/lovable-uploads/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Ridgeback Builders - Professional Construction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ridgeback Builders - Professional Construction Services',
    description: 'Expert residential construction and renovation services in Florida.',
    images: ['/lovable-uploads/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'construction',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-black text-white">
        <QueryProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}