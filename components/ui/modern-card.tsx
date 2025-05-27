'use client'

import { motion } from 'framer-motion'

interface ModernCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function ModernCard({ children, className = '', hover = true }: ModernCardProps) {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-6 relative overflow-hidden ${
        hover ? 'hover:shadow-2xl transition-all duration-300 hover:scale-105' : ''
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
} 