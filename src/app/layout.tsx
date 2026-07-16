import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { OrganizationSchema, WebsiteSchema } from '@/components/structured-data'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | NUBIZ',
    default: 'NUBIZ — Business Setup in UAE. Done Right.',
  },
  description:
    'Expert business setup consultancy in Dubai, UAE. ' +
    'Trade license, visa, bank account — handled. ' +
    'A Supreme Services Company.',
  metadataBase: new URL('https://nubiz.ae'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/favicon.svg',
  },
  keywords: [
    'business setup dubai',
    'company formation uae',
    'freezone setup dubai',
    'dubai trade license',
    'ifza company setup',
    'rakez freezone',
    'uae residency visa',
    'golden visa uae',
    'offshore company uae',
    'business consultancy dubai',
  ],
  authors: [{ name: 'NUBIZ', url: 'https://nubiz.ae' }],
  creator: 'NUBIZ',
  publisher: 'NUBIZ',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://nubiz.ae',
    siteName: 'NUBIZ',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'NUBIZ — UAE Business Setup Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NUBIZ — UAE Business Setup. Done Right.',
    description:
      'Expert business setup consultancy in Dubai. Freezone, mainland, offshore. ' +
      '500+ companies formed. 4.9★ rated.',
    images: ['/opengraph-image'],
  },
  verification: {
    google: 'ADD_YOUR_VERIFICATION_CODE_HERE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <OrganizationSchema />
        <WebsiteSchema />
        {children}
      </body>
    </html>
  )
}
