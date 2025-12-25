import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://malabar-kannada-sangamam.vercel.app'),
  title: {
    default: 'Malabar Kannada Sangamam',
    template: '%s | Malabar Kannada Sangamam',
  },
  description: 'Official platform of Malabar Kannada Sangamam. A convergence of Culture, Education, and Unity among Kannada students in Kerala. Organized by Misbahul Jamia Kannada Sangha.',
  keywords: ['Malabar Kannada Sangamam', 'Kannada Sangha', 'Kerala', 'Jamia Nooriya', 'Pattikkad', 'Students', 'Culture', 'Education', 'Unity', 'Misbahul Jamia'],
  authors: [{ name: 'Misbahul Jamia Kannada Sangha' }],
  creator: 'Misbahul Jamia Kannada Sangha',
  publisher: 'Misbahul Jamia Kannada Sangha',
  openGraph: {
    title: 'Malabar Kannada Sangamam',
    description: 'Celebrating Culture, Education, and Unity. Join the Malabar Kannada Sangamam.',
    url: 'https://malabar-kannada-sangamam.vercel.app',
    siteName: 'Malabar Kannada Sangamam',
    images: [
      {
        url: '/typography.png',
        width: 1200,
        height: 630,
        alt: 'Malabar Kannada Sangamam',
      },
    ],
    locale: 'kn_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malabar Kannada Sangamam',
    description: 'Celebrating Culture, Education, and Unity in Malabar.',
    images: ['/typography.png'],
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
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
