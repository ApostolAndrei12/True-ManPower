'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {
  language: 'ro' | 'en'
}

const content = {
  ro: {
    title: 'Recrutăm forță de muncă calificată și necalificată din țări non-UE pentru companii din România',
    subtitle: 'Servicii complete de recrutare internațională, de la selecție până la integrare',
    badges: ['Rapid', 'Fără costuri ascunse', 'Expertiză dovedită', 'Suport complet'],
    buttons: {
      contact: 'Contactează-ne acum',
      employers: 'Pentru Angajatori',
      employees: 'Pentru Angajați'
    }
  },
  en: {
    title: 'We recruit skilled and unskilled workforce from non-EU countries for Romanian companies',
    subtitle: 'Complete international recruitment services, from selection to integration',
    badges: ['Fast', 'No hidden costs', 'Proven expertise', 'Full support'],
    buttons: {
      contact: 'Contact us now',
      employers: 'For Employers',
      employees: 'For Employees'
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export default function Header({ language = 'ro' }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const text = content[language]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.header
      className="relative bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="header-title text-center max-w-5xl mx-auto"
          variants={itemVariants}
        >
          {text.title}
        </motion.h1>

        <motion.p 
          className="header-subtitle text-center max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {text.subtitle}
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-8"
          variants={itemVariants}
        >
          {text.badges.map((badge, index) => (
            <span
              key={badge}
              className={`header-badge ${index % 2 ? 'header-badge-alt' : ''} animate-pulse-slow`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          variants={itemVariants}
        >
          <a href="#contact" className="primary-button w-full sm:w-auto">
            {text.buttons.contact}
          </a>

          <div className="split-button-container w-full sm:w-auto">
            <button className="split-button split-button-primary">
              {text.buttons.employers}
            </button>
            <button className="split-button split-button-secondary">
              {text.buttons.employees}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
} 