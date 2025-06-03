"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface ModernCardProps {
  title: string
  description?: string
  icon?: ReactNode
  children?: ReactNode
  className?: string
  href?: string
}

export function ModernCard({
  title,
  description,
  icon,
  children,
  className = "",
  href,
}: ModernCardProps) {
  const cardContent = (
    <Card className={`card-shadow overflow-hidden ${className}`}>
      <CardHeader className="relative">
        {icon && (
          <div className="absolute top-4 right-4 text-primary w-8 h-8">
            {icon}
          </div>
        )}
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        {description && (
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </CardContent>
    </Card>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="block"
      >
        {cardContent}
      </motion.a>
    )
  }

  return cardContent
} 