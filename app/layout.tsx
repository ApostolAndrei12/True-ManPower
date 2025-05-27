import type { Metadata } from "next"
import { Montserrat, Roboto } from 'next/font/google'
import "./globals.css"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "True ManPower® S.R.L. - Agenție de Recrutare Internațională",
  description: "Recrutăm forță de muncă calificată și necalificată din țări non-UE pentru companii din România. Servicii de recrutare internațională legale, transparente și de încredere.",
  keywords: "recrutare internațională, România, muncitori calificați, permise de muncă, asistență viză, Pakistan, Bangladesh, Nepal, Sri Lanka, Etiopia, Turcia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  )
}
