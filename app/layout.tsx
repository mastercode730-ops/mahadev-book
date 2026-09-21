import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mahadev Book ID 2026 – Trusted Online Cricket ID Provider in India',
  description: "Mahadev Book ID - India's leading online cricket information and ID platform offering secure ID creation, 24/7 customer support, and comprehensive sports access.",
  keywords: 'Mahadev Book ID, Mahadev Book, Online Cricket ID, Cricket ID India, Mahadev Book Login, Mahadev Book WhatsApp, Sports Betting ID, Online Sports ID',
  authors: [{ name: 'Mahadev Book' }],
  metadataBase: new URL('https://mahadev-book-id.click'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mahadev Book ID 2026 – Trusted Online Cricket ID Provider in India',
    description: "Access fast and secure Mahadev Book ID and get started with cricket information and online sports updates.",
    url: 'https://mahadev-book-id.click/',
    siteName: 'Mahadev Book',
    images: [
      {
        url: '/images/hero-badge.png',
        width: 502,
        height: 458,
        alt: 'Mahadev Book ID 2026',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahadev Book ID 2026 – Trusted Online Cricket ID Provider in India',
    description: "Access fast and secure Mahadev Book ID and get started with cricket information and online sports updates.",
    images: ['/images/hero-badge.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://mahadev-book-id.click/#website',
        url: 'https://mahadev-book-id.click/',
        name: 'Mahadev Book',
        description: 'Trusted Online Cricket ID Provider in India',
        inLanguage: 'en-IN',
      },
      {
        '@type': 'Organization',
        '@id': 'https://mahadev-book-id.click/#organization',
        name: 'Mahadev Book',
        url: 'https://mahadev-book-id.click/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://mahadev-book-id.click/images/logo.png',
        },
      },
      {
        '@type': ['WebPage', 'FAQPage'],
        '@id': 'https://mahadev-book-id.click/#webpage',
        url: 'https://mahadev-book-id.click/',
        name: 'Mahadev Book ID 2026 – Trusted Online Cricket ID Provider in India',
        isPartOf: { '@id': 'https://mahadev-book-id.click/#website' },
        about: { '@id': 'https://mahadev-book-id.click/#organization' },
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Mahadev Book ID?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Mahadev Book ID is a structured digital account identifier that enables users across India to access verified cricket, sports, and gaming informational platforms through a single login.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Mahadev Book ID work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You request an account via WhatsApp support, receive your designated credentials, log in on your preferred device, add initial funds via UPI or bank transfer, and explore sports options.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I access the website from mobile?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, the platform is fully mobile-responsive and functions seamlessly on Android, iOS, tablets, and desktop browsers without performance loss.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should I do if I cannot access my account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can immediately reach out to the 24/7 WhatsApp helpdesk with your registered contact details for rapid password recovery or credential reset.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I contact support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Support is available round-the-clock via official WhatsApp chat numbers and phone assistance for immediate queries and account guidance.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is account verification required?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Basic identity and mobile verification are conducted to maintain account security, ensure legitimate user ownership, and safeguard transaction processing.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are online betting laws the same across India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Online sports regulations vary across individual Indian states. Users must independently verify local jurisdictional legalities before participating.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
