import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "True ManPower® S.R.L. - International Recruitment Agency",
  description:
    "Recruiting skilled workers from Asia and Africa for Romanian companies. Legal, transparent, and reliable international recruitment services.",
  keywords:
    "international recruitment, Romania, skilled workers, work permits, visa assistance, Pakistan, Bangladesh, Nepal, Sri Lanka, Ethiopia, Turkey",
  authors: [{ name: "True ManPower S.R.L." }],
  openGraph: {
    title: "True ManPower® S.R.L. - International Recruitment",
    description: "Professional international recruitment services connecting skilled workers with Romanian companies.",
    url: "https://truemanpower.ro",
    siteName: "True ManPower S.R.L.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "True ManPower® S.R.L. - International Recruitment",
    description: "Professional international recruitment services connecting skilled workers with Romanian companies.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
