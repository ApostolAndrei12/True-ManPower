import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
