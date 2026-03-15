import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Denys Orlyk - Fullstack Developer',
  description: 'Fullstack developer building scalable web applications. MERN stack expert with proven team leadership experience.',
  
  openGraph: {
    title: 'Denys Orlyk | Junior Fullstack Developer',
    description: 'Fullstack developer building scalable web applications. Focus on MERN, Next.js, and TypeScript.',
    url: 'https://odshub.pp.ua/',
    siteName: 'Denys Orlyk Portfolio',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Denys Orlyk - Fullstack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Denys Orlyk | Junior Fullstack Developer',
    description: 'Fullstack developer building scalable web applications. MERN stack expert.',
    images: ['/og-image.jpg'], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}