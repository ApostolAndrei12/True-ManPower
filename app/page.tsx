"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/sections/AnimatedSection"
import ModernCard from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone } from 'lucide-react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    "/hero-1.jpg",
    "/hero-2.jpg",
    "/hero-3.jpg"
  ]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <Image
            src={slides[currentSlide]}
            alt="Mediu profesional de lucru"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 text-5xl font-bold font-montserrat">
                Recrutare Internațională de Încredere din 2024
              </h1>
              <p className="mb-8 text-xl font-roboto">
                Recrutăm forță de muncă calificată și necalificată din țări non-UE pentru companii din România
              </p>
              <p className="mb-8 text-lg font-roboto">
                Conectăm companiile românești cu profesioniști din Asia, Africa și nu numai
              </p>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                <Button size="lg" className="button-gradient">
                  Vezi Prețurile
                >
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 hover:bg-white/20 flex items-center gap-2"
                  onClick={() => scrollToSection('contact')}
                  </Button>
                 <Button 
                  size="lg" 
                  className="group bg-white/90 hover:bg-blue-50 text-blue-600 px-12 py-6 text-xl font-semibold shadow-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border-2 border-blue-600"
                  onClick={() => scrollToSection('contact')}
                >
                  <Phone className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  <Mail className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Contactați-ne acum
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>

            {/* Avantaje cu Badge-uri */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <Badge className="text-lg px-4 py-2 bg-primary/90 hover:bg-primary">100%</Badge>
                <p className="mt-2 font-medium">Conformitate Legală</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <Badge className="text-lg px-4 py-2 bg-primary/90 hover:bg-primary">Rapid</Badge>
                <p className="mt-2 font-medium">Procesare Eficientă</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center"
              >
                <Badge className="text-lg px-4 py-2 bg-primary/90 hover:bg-primary">24/7</Badge>
                <p className="mt-2 font-medium">Suport Dedicat</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-center"
              >
                <Badge className="text-lg px-4 py-2 bg-primary/90 hover:bg-primary">0</Badge>
                <p className="mt-2 font-medium">Costuri Ascunse</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-8 rounded-full transition-all ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Pachete Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold font-montserrat">
            Soluții de Recrutare Adaptate Nevoilor Companiei Dumneavoastră
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Pachete transparente cu toate serviciile incluse, fără costuri ascunse
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ModernCard
              title="1-5 Muncitori"
              description="Pentru companii mici"
              className="hover-lift"
            >
              <ul className="space-y-2">
                <li>• Recrutare pentru 1-5 muncitori</li>
                <li>• Procesare completă acte</li>
                <li>• Suport în limba română</li>
                <li>• Ghid complet de recrutare</li>
              </ul>
              <Button className="mt-6 w-full button-gradient">Solicită Ofertă</Button>
            </ModernCard>
            
            <ModernCard
              title="6-15 Muncitori"
              description="Pentru companii în dezvoltare"
              className="hover-lift relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary">Popular</Badge>
              </div>
              <ul className="space-y-2">
                <li>• Recrutare pentru 6-15 muncitori</li>
                <li>• Procesare prioritară acte</li>
                <li>• Suport dedicat 24/7</li>
                <li>• Consultanță juridică inclusă</li>
                <li>• Asistență la integrare</li>
              </ul>
              <Button className="mt-6 w-full button-gradient">Solicită Ofertă</Button>
            </ModernCard>

            <ModernCard
              title="15+ Muncitori"
              description="Pentru companii mari"
              className="hover-lift"
            >
              <ul className="space-y-2">
                <li>• Recrutare pentru 15+ muncitori</li>
                <li>• Procesare ultra-rapidă</li>
                <li>• Manager de cont dedicat</li>
                <li>• Consultanță juridică premium</li>
                <li>• Program complet de integrare</li>
                <li>• Servicii personalizate</li>
              </ul>
              <Button className="mt-6 w-full button-gradient">Solicită Ofertă</Button>
            </ModernCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Industrii Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold font-montserrat">
            Domenii de Activitate
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Recrutăm forță de muncă calificată și necalificată pentru următoarele sectoare:
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ModernCard
              title="Construcții"
              description="Muncitori în construcții, dulgheri, fierari betoniști, zidari, finisori"
              className="hover-lift"
            />
            <ModernCard
              title="Producție"
              description="Operatori producție, tehnicieni, muncitori calificați și necalificați"
              className="hover-lift"
            />
            <ModernCard
              title="HoReCa"
              description="Bucătari, ospătari, personal hotelier, personal curățenie"
              className="hover-lift"
            />
            <ModernCard
              title="Logistică"
              description="Șoferi, manipulanți marfă, operatori depozit"
              className="hover-lift"
            />
            <ModernCard
              title="Agricultură"
              description="Muncitori agricoli, operatori utilaje, personal sere"
              className="hover-lift"
            />
            <ModernCard
              title="Curățenie"
              description="Personal curățenie industrială și comercială"
              className="hover-lift"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Proces de Recrutare Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold font-montserrat">
            Procesul Nostru de Recrutare
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Un proces simplu și transparent, conceput pentru a vă ajuta să găsiți rapid forța de muncă necesară
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <ModernCard
                title="Evaluare Necesități"
                description="Analizăm cerințele companiei dumneavoastră și stabilim profilul candidaților"
                className="hover-lift h-full"
              />
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <ModernCard
                title="Selecție Candidați"
                description="Identificăm și evaluăm candidații potriviți din baza noastră de date"
                className="hover-lift h-full"
              />
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <ModernCard
                title="Procesare Documente"
                description="Ne ocupăm de toate aspectele legale și documentația necesară"
                className="hover-lift h-full"
              />
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <ModernCard
                title="Integrare"
                description="Asigurăm o tranziție lină și sprijin pentru integrarea în companie"
                className="hover-lift h-full"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="button-gradient">
              Descarcă Ghidul Complet al Procesului
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Fondatori Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold font-montserrat">
            Echipa Noastră
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Profesioniști dedicați cu experiență în recrutare internațională
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/images/andrei-apostol.jpg"
                  alt="Apostol Andrei-Eusebiu"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Apostol Andrei-Eusebiu</h3>
              <p className="text-primary font-medium mb-4">Fondator & Director Executiv</p>
              <p className="text-gray-600">
                Cu peste 10 ani de experiență în recrutare internațională și management, 
                conduce echipa True ManPower cu viziune și dedicare pentru excelență.
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <Badge className="bg-primary">10+ ani experiență</Badge>
                <Badge className="bg-primary">500+ Angajări</Badge>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/images/elena-strungaru.jpg"
                  alt="Elena Strungaru"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Elena Strungaru</h3>
              <p className="text-primary font-medium mb-4">Director Operațional</p>
              <p className="text-gray-600">
                Expertă în relații internaționale și procese de recrutare, 
                Elena asigură excelența operațională și satisfacția clienților.
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <Badge className="bg-primary">15+ Țări Partenere</Badge>
                <Badge className="bg-primary">24/7 Suport</Badge>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold font-montserrat">
            Începeți Procesul de Recrutare
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Completați formularul și veți fi contactat de un consultant specializat în maxim 24 de ore
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Telefon</h3>
              <p className="text-primary">+40 799 870 3265</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-primary">office@truemanpower.ro</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Program</h3>
              <p className="text-primary">Luni - Vineri: 9:00 - 18:00</p>
            </div>
          </div>
          <Button size="lg" className="button-gradient">
            Solicită o Ofertă Personalizată
          </Button>
        </div>
      </AnimatedSection>
    </main>
  )
}
