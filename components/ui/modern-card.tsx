'use client'

import { ReactNode } from 'react'

export interface ModernCardProps {
  title?: string
  description?: string
  className?: string
  children?: ReactNode
}

export default function ModernCard({ title, description, className = '', children }: ModernCardProps) {
  return (
    <div className={`p-6 bg-white rounded-lg shadow-lg ${className}`}>
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  )
}
