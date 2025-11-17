import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { PostHogProvider } from '@/components/PostHogProvider';

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
  metadataBase: new URL('https://clearwaterafrica.com'),
  title: 'Clearwater Africa | Water Delivery You Can Count On',
  description:
    'Clearwater brings transparency and reliability to water delivery in Ghana. Real-time depot availability, optimized routes, and verified water quality. Launching in Accra 2026.',
  icons: {
    icon: '/images/favicon.png',
  },
  keywords: [
    'water delivery Ghana',
    'Accra water tanker',
    'water supply Accra',
    'Ghana water delivery platform',
    'water logistics',
    'reliable water delivery',
    'transparent water pricing',
    'Clearwater Africa',
    'Ryan York',
    'water access Africa',
  ],
  authors: [{ name: 'Ryan York' }, { name: 'Clearwater Africa' }],
  creator: 'Clearwater Africa',
  publisher: 'Clearwater Africa',
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
  alternates: {
    canonical: 'https://clearwaterafrica.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clearwaterafrica.com',
    title: 'Clearwater Africa | Water Delivery You Can Count On',
    description:
      'Making water delivery work for everyone in Ghana. Transparent pricing, verified quality, reliable service. Launching in Accra 2026.',
    siteName: 'Clearwater Africa',
    images: [
      {
        url: '/images/clearwater-social.png',
        width: 1200,
        height: 630,
        alt: 'Clearwater Africa - Water Delivery You Can Count On',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clearwater Africa | Water Delivery You Can Count On',
    description:
      'Making water delivery work for everyone in Ghana. Transparent pricing, verified quality, reliable service. Launching in Accra 2026.',
    images: ['/images/clearwater-social.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Clearwater Africa',
    alternateName: 'Clearwater',
    url: 'https://clearwaterafrica.com',
    logo: 'https://clearwaterafrica.com/images/logo.png',
    description: 'Clearwater brings transparency and reliability to water delivery in Ghana. Launching in Accra 2026.',
    foundingDate: '2025',
    founder: {
      '@type': 'Person',
      name: 'Ryan York',
      jobTitle: 'Founder',
      image: 'https://clearwaterafrica.com/images/ryan-headshot.png',
      sameAs: [
        'https://www.linkedin.com/in/ryan-york-148356a9/',
        'https://ryan584888.substack.com/'
      ]
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'ryan@clearwaterafrica.com',
      contactType: 'Customer Service'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Accra',
      addressCountry: 'GH'
    },
    sameAs: [
      'https://www.linkedin.com/in/ryan-york-148356a9/',
      'https://www.facebook.com/profile.php?id=61583881946200',
      'https://ryan584888.substack.com/'
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Greater Accra Region, Ghana'
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
