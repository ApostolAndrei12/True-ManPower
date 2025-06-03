import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "True ManPower® S.R.L. - Forță de Muncă din Asia pentru România | Recrutare Internațională",
  description: "Recrutăm forță de muncă calificată și necalificată din Asia pentru companii din România. Servicii complete de recrutare internațională: Pakistan, Bangladesh, Nepal, Sri Lanka, Etiopia. Procesare rapidă documente, permise de muncă, asistență completă.",
  keywords: "recrutare forța de muncă Asia, muncitori Pakistan România, angajați Bangladesh, personal calificat Nepal, recrutare internațională, permise de muncă, procesare vize, True ManPower, construcții, producție, agricultură, logistică",
  openGraph: {
    title: "True ManPower® - Forță de Muncă din Asia pentru România",
    description: "Conectăm companiile românești cu muncitori calificați din Asia. Servicii complete de recrutare internațională cu procesare rapidă și suport dedicat.",
    url: "https://truemanpower.ro",
    siteName: "True ManPower® S.R.L.",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "True ManPower - Recrutare Internațională"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "True ManPower® - Forță de Muncă din Asia",
    description: "Recrutare internațională profesională din Asia pentru România",
    images: ["/og-image.jpg"]
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
    google: "google-site-verification-code-here",
  },
  alternates: {
    canonical: "https://truemanpower.ro",
    languages: {
      'ro': 'https://truemanpower.ro',
      'en': 'https://truemanpower.ro/en',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://truemanpower.ro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Schema.org markup for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "True ManPower® S.R.L.",
              "url": "https://truemanpower.ro",
              "logo": "https://truemanpower.ro/logo.png",
              "description": "Agenție de recrutare internațională specializată în forță de muncă din Asia pentru România",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "RO",
                "addressRegion": "România"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+40799870326",
                "contactType": "customer service",
                "email": "office@truemanpower.ro",
                "availableLanguage": ["Romanian", "English"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/truemanpower",
                "https://www.facebook.com/truemanpower"
              ],
              "foundingDate": "2024",
              "areaServed": "România",
              "serviceType": "Recrutare Internațională",
              "knowsAbout": ["Recrutare forță de muncă", "Permise de muncă", "Vize", "Construcții", "Producție", "Agricultură"]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}