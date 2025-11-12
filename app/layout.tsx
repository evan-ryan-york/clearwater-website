import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clearwater Africa | Making Water Delivery Work for Everyone',
  description:
    'Clearwater brings transparency and reliability to Ghana\'s water delivery network—connecting depots, drivers, and customers through digital coordination. Launching in Accra 2026.',
  keywords: [
    'water delivery',
    'Ghana',
    'Accra',
    'water tanker',
    'water supply',
    'Clearwater Africa',
  ],
  authors: [{ name: 'Clearwater Africa' }],
  creator: 'Clearwater Africa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clearwaterafrica.com',
    title: 'Clearwater Africa | Making Water Delivery Work for Everyone',
    description:
      'Clearwater brings transparency and reliability to Ghana\'s water delivery network. Launching in Accra 2026.',
    siteName: 'Clearwater Africa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clearwater Africa | Making Water Delivery Work for Everyone',
    description:
      'Clearwater brings transparency and reliability to Ghana\'s water delivery network. Launching in Accra 2026.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
