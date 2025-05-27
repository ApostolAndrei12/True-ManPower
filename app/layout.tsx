import type { Metadata } from "next"
import { Inter, Montserrat, Roboto } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "True ManPower® S.R.L. - International Recruitment Agency",
  description: "Recruiting skilled workers from Asia and Africa for Romanian companies. Legal, transparent, and reliable international recruitment services.",
  keywords: "international recruitment, Romania, skilled workers, work permits, visa assistance, Pakistan, Bangladesh, Nepal, Sri Lanka, Ethiopia, Turkey",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
