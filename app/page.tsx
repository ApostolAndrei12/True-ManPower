// @ts-nocheck
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  ArrowRight,
  DollarSign,
  Globe
} from "lucide-react"

export default function TrueManPowerPremium() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const [language, setLanguage] = useState<"RO" | "EN">("RO")

  const heroImages = [
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  ]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <Image
            src={heroImages[currentHeroImage]}
            alt="Professional work environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("pricing")}
              >
                <DollarSign className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                {language === "RO" ? "Vezi Prețurile" : "View Pricing"}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button 
                size="lg" 
                className="group bg-white/90 hover:bg-blue-50 text-blue-600 px-12 py-6 text-xl font-semibold shadow-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border-2 border-blue-600"
                onClick={() => scrollToSection('contact')}
              >
                <Phone className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                <Mail className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                {language === "RO" ? "Contactați-ne acum" : "Contact Us"}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

