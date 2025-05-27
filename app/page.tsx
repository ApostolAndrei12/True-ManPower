'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'

export default function Home() {
  const [language, setLanguage] = useState<'ro' | 'en'>('ro')

  return (
    <main className="min-h-screen">
      <Header language={language} />
      {/* Restul conținutului paginii */}
    </main>
  )
}

