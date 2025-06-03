// @ts-nocheck
"use client"

import type { FormEvent } from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { sendContactForm, sendJobApplication, type ContactFormData, type JobApplicationData } from "@/lib/email"
import {
  Phone,
  Mail,
  Users,
  Shield,
  ArrowRight,
  Download,
  ChevronDown,
  Languages,
  Menu,
  X,
  CheckCircle,
  HardHat,
  Utensils,
  Factory,
  Wheat,
  Truck,
  MapPin,
  FileText,
  UserCheck,
  DollarSign,
  Headphones,
  Globe,
  Clock,
  Heart,
  Handshake,
  Eye,
  Zap,
  Award,
  Target,
  Star,
  Sparkles,
  ShieldCheck,
  WashingMachine as Cleaning,
  UtensilsCrossed,
  Sprout,
  Home,
  ClipboardCheck,
  FileCheck,
  Facebook,
  Linkedin,
  Instagram,
  Rocket,
  Crown,
  Briefcase,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

interface FormData {
  companyName: string
  contactName: string
  industry: string
  workersNeeded: string
  phone: string
  email: string
  message: string
  preferredContact: string
  urgency: string
  acceptTerms: boolean
}

interface Industry {
  icon: any // Using any here since we can't properly type Lucide icons
  name: string
  description: string
  color: string
}

interface Language {
  code: string
  name: string
  flag: string
}

export default function TrueManPowerPremium() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState<"RO" | "EN">("RO")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showLeadMagnet, setShowLeadMagnet] = useState(false)
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [selectedIndustry, setSelectedIndustry] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactName: "",
    industry: "",
    workersNeeded: "",
    phone: "",
    email: "",
    message: "",
    preferredContact: "email",
    urgency: "normal",
    acceptTerms: false
  })

  const heroImages = [
    "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    "https://images.pexels.com/photos/33266/work-chinese-industrial-professional.jpg",
    "https://images.unsplash.com/photo-1556484687-30636164638b",
    "https://images.pexels.com/photos/5686109/pexels-photo-5686109.jpeg",
  ]

  const industries = [
    {
      icon: <HardHat className="h-12 w-12" />,
      name: "Construcții",
      description: "Muncitori în construcții, dulgheri, fierari betoniști, zidari, finisori",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Factory className="h-12 w-12" />,
      name: "Producție",
      description: "Operatori producție, tehnicieni, muncitori calificați și necalificați",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <UtensilsCrossed className="h-12 w-12" />,
      name: "HoReCa",
      description: "Bucătari, ospătari, personal hotelier, personal curățenie",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Truck className="h-12 w-12" />,
      name: "Logistică",
      description: "Șoferi, manipulanți marfă, operatori depozit",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Sprout className="h-12 w-12" />,
      name: "Agricultură",
      description: "Muncitori agricoli, operatori utilaje, personal sere",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      name: "Curățenie",
      description: "Personal curățenie industrială și comercială",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      icon: <Home className="h-12 w-12" />,
      name: "Housekeeping",
      description: "Personal curățenie și întreținere spații",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      name: "Alte Domenii",
      description: "Soluții personalizate pentru orice domeniu de activitate",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  const pricingPlans = [
    {
      name: "Pachet Kickstart",
      subtitle: "Pentru firme mici, start rapid și sigur",
      employeeRange: "1-5 angajați",
      price: "Personalizat",
      isPopular: false,
      features: [
        "Selecție riguroasă a candidaților",
        "Procesare completă acte",
        "Asistență viză și permis",
        "Suport în limba română",
        "Ghid de integrare"
      ],
      icon: Zap,
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Pachet Boost",
      subtitle: "Creștere accelerată, echipe flexibile",
      employeeRange: "6-15 angajați",
      price: "Personalizat",
      isPopular: true,
      features: [
        "Tot ce include Pachetul Kickstart",
        "Procesare prioritară acte",
        "Manager dedicat de cont",
        "Suport extins 24/7",
        "Asistență cazare"
      ],
      icon: Rocket,
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Pachet Power Team",
      subtitle: "Echipa ta de top, fără bătăi de cap",
      employeeRange: "16-30 angajați",
      price: "Personalizat",
      isPopular: false,
      features: [
        "Tot ce include Pachetul Boost",
        "Procesare ultra-rapidă",
        "Suport 24/7 dedicat",
        "Consultanță juridică",
        "Program complet de integrare"
      ],
      icon: Users,
      color: "from-green-400 to-green-600"
    },
    {
      name: "Pachet Scale-Up",
      subtitle: "Extindere strategică și optimizare",
      employeeRange: "31-50 angajați",
      price: "Personalizat",
      isPopular: false,
      features: [
        "Tot ce include Pachetul Power Team",
        "Strategie personalizată de recrutare",
        "Echipă dedicată de suport",
        "Rapoarte și analize detaliate",
        "Training și dezvoltare"
      ],
      icon: Target,
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Pachet Corporate Elite",
      subtitle: "Soluția completă pentru companii mari",
      employeeRange: "50+ angajați",
      price: "Personalizat",
      isPopular: false,
      features: [
        "Soluție completă personalizată",
        "Echipă dedicată de specialiști",
        "Suport executiv permanent",
        "Servicii premium de relocare",
        "Soluții la cheie de integrare"
      ],
      icon: Crown,
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  // Pricing Section Component
  const PricingCard = ({ plan, index }) => (
    <div 
      className={`relative group transition-all duration-300 hover:scale-105 hover:z-10`}
      style={{ 
        perspective: "1000px",
        animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`,
        opacity: 0,
        transform: 'translateY(20px)',
      }}
    >
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl border border-gray-100">
        {plan.isPopular && (
          <div className="absolute top-0 right-0">
            <div className="relative">
              <div className="absolute transform rotate-45 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-1 right-[-35px] top-[32px] shadow-lg">
                Popular
              </div>
            </div>
          </div>
        )}
        
        <div className="p-8">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
            <plan.icon className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
          <p className="text-gray-600 mb-4">{plan.subtitle}</p>
          <div className="flex items-center gap-2 mb-6">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-gray-700">{plan.employeeRange}</span>
          </div>
          
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            className={`w-full bg-gradient-to-r ${plan.color} text-white hover:shadow-lg transition-all duration-300 py-6`}
            onClick={() => setShowLeadForm(true)}
          >
            Solicită Ofertă
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  // Simplified language support
  const languages = [
    { code: "RO", name: "Română", flag: "🇷🇴" },
    { code: "EN", name: "English", flag: "🇺🇸" },
  ]

  const t = {
    heroTitle: language === "RO" 
      ? "Recrutăm forță de muncă calificată și necalificată din țări non-UE pentru companii din România"
      : "We recruit skilled and unskilled workforce from non-EU countries for Romanian companies",
    heroSubtitle: language === "RO"
      ? "Conectăm companiile românești cu profesioniști din Asia, Africa și nu numai"
      : "Connecting Romanian companies with professionals from Asia, Africa and beyond",
    heroDescription: language === "RO"
      ? "Oferim servicii complete de recrutare internațională, aducând expertiza și talentul de peste ocean pentru a susține creșterea afacerii dumneavoastră. Procesare rapidă, eficientă și fără costuri ascunse."
      : "We provide complete international recruitment services, bringing expertise and talent from overseas to support your business growth. Fast, efficient processing with no hidden costs.",
    seeOurPrices: language === "RO" ? "Vezi Prețurile" : "See Prices",
    downloadGuide: language === "RO" ? "Descarcă Ghidul Procesului" : "Download Process Guide",
    formLabels: {
      companyName: language === "RO" ? "Numele Companiei" : "Company Name",
      contactName: language === "RO" ? "Persoana de Contact" : "Contact Person",
      industry: language === "RO" ? "Domeniul de Activitate" : "Industry",
      workersNeeded: language === "RO" ? "Număr de Muncitori" : "Number of Workers",
      phone: language === "RO" ? "Telefon" : "Phone",
      email: language === "RO" ? "Email" : "Email",
      message: language === "RO" ? "Mesaj (Opțional)" : "Message (Optional)",
      preferredContact: language === "RO" ? "Metoda Preferată de Contact" : "Preferred Contact Method",
      urgency: language === "RO" ? "Urgența Recrutării" : "Recruitment Urgency"
    },
    cta: {
      requestQuote: language === "RO" ? "Solicită Ofertă" : "Request Quote",
      getStarted: language === "RO" ? "Începe Acum" : "Get Started",
      learnMore: language === "RO" ? "Află Mai Multe" : "Learn More",
      downloadGuide: language === "RO" ? "Descarcă Ghidul" : "Download Guide",
      sendRequest: language === "RO" ? "Trimite Solicitarea" : "Send Request"
    },
    industries: {
      construction: language === "RO" ? "Construcții" : "Construction",
      manufacturing: language === "RO" ? "Producție" : "Manufacturing",
      hospitality: language === "RO" ? "HoReCa" : "Hospitality",
      logistics: language === "RO" ? "Logistică" : "Logistics",
      agriculture: language === "RO" ? "Agricultură" : "Agriculture",
      cleaning: language === "RO" ? "Curățenie" : "Cleaning",
      housekeeping: language === "RO" ? "Housekeeping" : "Housekeeping",
      other: language === "RO" ? "Alte Domenii" : "Other Industries"
    },
    pricingPlans: {
      kickstart: {
        name: language === "RO" ? "Pachet Kickstart" : "Kickstart Package",
        subtitle: language === "RO" ? "Pentru firme mici, start rapid și sigur" : "For small companies, quick and safe start",
        employeeRange: language === "RO" ? "1-5 angajați" : "1-5 employees",
        features: language === "RO" ? [
          "Selecție riguroasă a candidaților",
          "Procesare completă acte",
          "Asistență viză și permis",
          "Suport în limba română",
          "Ghid de integrare"
        ] : [
          "Rigorous candidate selection",
          "Complete document processing",
          "Visa and permit assistance",
          "Romanian language support",
          "Integration guide"
        ]
      },
      boost: {
        name: language === "RO" ? "Pachet Boost" : "Boost Package",
        subtitle: language === "RO" ? "Creștere accelerată, echipe flexibile" : "Accelerated growth, flexible teams",
        employeeRange: language === "RO" ? "6-15 angajați" : "6-15 employees",
        features: language === "RO" ? [
          "Tot ce include Pachetul Kickstart",
          "Procesare prioritară acte",
          "Manager dedicat de cont",
          "Suport extins 24/7",
          "Asistență cazare"
        ] : [
          "Everything in Kickstart Package",
          "Priority document processing",
          "Dedicated account manager",
          "Extended 24/7 support",
          "Housing assistance"
        ]
      },
      powerTeam: {
        name: language === "RO" ? "Pachet Power Team" : "Power Team Package",
        subtitle: language === "RO" ? "Echipa ta de top, fără bătăi de cap" : "Your top team, hassle-free",
        employeeRange: language === "RO" ? "16-30 angajați" : "16-30 employees",
        features: language === "RO" ? [
          "Tot ce include Pachetul Boost",
          "Procesare ultra-rapidă",
          "Suport 24/7 dedicat",
          "Consultanță juridică",
          "Program complet de integrare"
        ] : [
          "Everything in Boost Package",
          "Ultra-fast processing",
          "Dedicated 24/7 support",
          "Legal consulting",
          "Complete integration program"
        ]
      },
      scaleUp: {
        name: language === "RO" ? "Pachet Scale-Up" : "Scale-Up Package",
        subtitle: language === "RO" ? "Extindere strategică și optimizare" : "Strategic expansion and optimization",
        employeeRange: language === "RO" ? "31-50 angajați" : "31-50 employees",
        features: language === "RO" ? [
          "Tot ce include Pachetul Power Team",
          "Strategie personalizată de recrutare",
          "Echipă dedicată de suport",
          "Rapoarte și analize detaliate",
          "Training și dezvoltare"
        ] : [
          "Everything in Power Team Package",
          "Customized recruitment strategy",
          "Dedicated support team",
          "Detailed reports and analytics",
          "Training and development"
        ]
      },
      corporate: {
        name: language === "RO" ? "Pachet Corporate Elite" : "Corporate Elite Package",
        subtitle: language === "RO" ? "Soluția completă pentru companii mari" : "Complete solution for large companies",
        employeeRange: language === "RO" ? "50+ angajați" : "50+ employees",
        features: language === "RO" ? [
          "Soluție completă personalizată",
          "Echipă dedicată de specialiști",
          "Suport executiv permanent",
          "Servicii premium de relocare",
          "Soluții la cheie de integrare"
        ] : [
          "Complete customized solution",
          "Dedicated team of specialists",
          "Permanent executive support",
          "Premium relocation services",
          "Turnkey integration solutions"
        ]
      }
    },
    urgencyOptions: {
      urgent: language === "RO" ? "Urgentă (1-2 săptămâni)" : "Urgent (1-2 weeks)",
      normal: language === "RO" ? "Normală (2-4 săptămâni)" : "Normal (2-4 weeks)",
      planned: language === "RO" ? "Planificată (1-3 luni)" : "Planned (1-3 months)"
    },
    footer: {
      quickLinks: language === "RO" ? "Navigare Rapidă" : "Quick Links",
      legalSupport: language === "RO" ? "Aspecte Legale și Suport" : "Legal & Support",
      privacyPolicy: language === "RO" ? "Politica de Confidențialitate" : "Privacy Policy",
      termsConditions: language === "RO" ? "Termeni și Condiții" : "Terms & Conditions",
      cookiePolicy: language === "RO" ? "Politica de Cookie-uri" : "Cookie Policy",
      supportCenter: language === "RO" ? "Centru de Suport" : "Support Center",
      contact: language === "RO" ? "Contact" : "Contact",
      workingHours: language === "RO" ? "Program" : "Working Hours",
      workingHoursValue: language === "RO" ? "Luni - Vineri: 9:00 - 18:00" : "Monday - Friday: 9:00 - 18:00",
      allRightsReserved: language === "RO" ? "Toate drepturile rezervate." : "All rights reserved."
    }
  }

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!formData.acceptTerms) {
      alert("Vă rugăm să acceptați termenii și condițiile pentru a continua.")
      return
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    
    // Show success message
    setShowSuccessMessage(true)
    setTimeout(() => setShowSuccessMessage(false), 5000)
    
    // Reset form
    setFormData({
      companyName: "",
      contactName: "",
      industry: "",
      workersNeeded: "",
      phone: "",
      email: "",
      message: "",
      preferredContact: "email",
      urgency: "normal",
      acceptTerms: false
    })
    
    setShowLeadForm(false)
  }

  const handleIndustryClick = (industry: string) => {
    setSelectedIndustry(industry)
    setFormData(prev => ({ ...prev, industry }))
    setShowLeadForm(true)
  }

  // Industry Card Component
  const IndustryCard = ({ industry, index }) => (
    <div
      className="group relative overflow-hidden"
      style={{
        animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`,
        opacity: 0,
        transform: 'translateY(20px)',
      }}
    >
      <button
        onClick={() => handleIndustryClick(industry.name)}
        className="w-full h-full bg-white rounded-2xl shadow-lg border border-gray-100 p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
      >
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
              {industry.icon}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              {industry.name}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {industry.description}
            </p>

            <div className="flex items-center text-blue-600 font-medium">
              <span className="mr-2">Află Mai Multe</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </button>
    </div>
  );

  const teamMembers = [
    {
      name: "Apostol Andrei-Eusebiu",
      role: {
        RO: "Fondator & Director Executiv",
        EN: "Founder & CEO"
      },
      quote: {
        RO: "Misiunea noastră la True ManPower® este să construim punți între continente și să transformăm provocările în oportunități. Credem în puterea conexiunilor umane și în potențialul extraordinar care se naște atunci când aducem împreună talentul global cu viziunea antreprenorială românească.",
        EN: "Our mission at True ManPower® is to build bridges between continents and transform challenges into opportunities. We believe in the power of human connections and the extraordinary potential that emerges when we bring together global talent with Romanian entrepreneurial vision."
      },
      achievements: {
        RO: ["Recrutor Certificat", "Experiență Internațională", "Dedicat Excelenței"],
        EN: ["Certified Recruiter", "International Experience", "Dedicated to Excellence"]
      },
      stats: {
        RO: [
          { value: "500+", label: "Angajări de Succes" },
          { value: "15+", label: "Țări Partenere" }
        ],
        EN: [
          { value: "500+", label: "Successful Placements" },
          { value: "15+", label: "Partner Countries" }
        ]
      }
    },
    {
      name: "Strungaru Elena",
      role: {
        RO: "Asistent Executiv & Manager de Recrutare",
        EN: "Executive Assistant & Recruitment Manager"
      },
      quote: {
        RO: "Succesul în recrutarea internațională vine din atenția la detalii și înțelegerea profundă a nevoilor atât ale angajatorilor, cât și ale candidaților. La True ManPower®, construim relații pe termen lung bazate pe încredere și profesionalism.",
        EN: "Success in international recruitment comes from attention to detail and a deep understanding of both employers' and candidates' needs. At True ManPower®, we build long-term relationships based on trust and professionalism."
      },
      achievements: {
        RO: ["Expert în Recrutare", "Specialist HR", "Coordonator de Echipă"],
        EN: ["Recruitment Expert", "HR Specialist", "Team Coordinator"]
      },
      stats: {
        RO: [
          { value: "200+", label: "Proiecte Gestionate" },
          { value: "98%", label: "Rata de Succes" }
        ],
        EN: [
          { value: "200+", label: "Managed Projects" },
          { value: "98%", label: "Success Rate" }
        ]
      }
    }
  ];

  // Team Member Card Component
  const TeamMemberCard = ({ member, language }) => (
    <div className="bg-gradient-to-br from-blue-900 via-gray-900 to-gray-900 rounded-3xl overflow-hidden p-4 sm:p-8 md:p-12">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 text-center md:text-left">
          <div className="relative inline-block">
            <div className="absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
            
            <div className="relative w-32 sm:w-48 h-32 sm:h-48 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 p-1">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <Users className="h-16 w-16 sm:h-20 sm:w-20 text-blue-400" />
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">{member.name}</h3>
            <p className="text-blue-400 font-semibold text-sm sm:text-base">
              {member.role[language]}
            </p>
          </div>

          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4">
            {member.stats[language].map((stat, index) => (
              <div key={index} className="bg-blue-900/30 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-8 space-y-6 sm:space-y-8 mt-6 md:mt-0">
          <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            {member.quote[language]}
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6">
            {member.achievements[language].map((achievement, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                <span className="text-sm sm:text-base text-gray-300">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Team Section Component with Slider
  const TeamSection = ({ language }) => {
    const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
    const timerRef = useRef<number | null>(null); // Folosim useRef pentru a stoca ID-ul timer-ului

    // Funcție pentru a curăța timer-ul existent
    const clearExistingTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const handleSetMemberIndex = (newIndex: number) => {
      clearExistingTimer(); // Curățăm orice timer anterior
      setCurrentMemberIndex(newIndex);

      // Dacă noul membru selectat nu este primul (index 0), pornim un timer
      // care va reseta selecția la primul membru după 20 de secunde.
      if (newIndex !== 0) {
        timerRef.current = window.setTimeout(() => {
          setCurrentMemberIndex(0); // Resetează la Apostol Andrei-Eusebiu
        }, 20000); // 20000 milisecunde = 20 secunde
      }
    };

    const nextMember = () => {
      const newIndex = (currentMemberIndex + 1) % teamMembers.length;
      handleSetMemberIndex(newIndex);
    };

    const prevMember = () => {
      const newIndex = (currentMemberIndex - 1 + teamMembers.length) % teamMembers.length;
      handleSetMemberIndex(newIndex);
    };

    const goToMember = (index: number) => {
      handleSetMemberIndex(index);
    };

    // Hook useEffect pentru a curăța timer-ul la demontarea componentei
    useEffect(() => {
      return () => {
        clearExistingTimer();
      };
    }, []);

    return (
      <div className="relative">
        <div className="overflow-hidden">
          <div className="transition-all duration-500 ease-in-out">
            <TeamMemberCard member={teamMembers[currentMemberIndex]} language={language} />
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none px-4">
          <button
            onClick={prevMember}
            className="pointer-events-auto transform -translate-x-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextMember}
            className="pointer-events-auto transform translate-x-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToMember(index)} // Am actualizat aici pentru a folosi goToMember
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentMemberIndex ? 'bg-blue-600 w-6' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          {/* Top Bar */}
          <div className="hidden lg:flex items-center justify-between py-3 text-sm border-b border-gray-100">
            <div className="flex items-center space-x-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="font-medium">+40 799 870 326</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span className="font-medium">office@truemanpower.ro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="font-medium">Mon-Fri: 9:00-18:00 EET</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                    <Languages className="h-4 w-4 mr-2" />
                    {languages.find((lang) => lang.code === language)?.flag} {language}
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border-gray-200 shadow-xl max-h-80 overflow-y-auto">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as "RO" | "EN")}
                      className="text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="mr-3">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Image src="/logo.png" alt="True ManPower" width={60} height={60} className="rounded-lg shadow-md" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">True ManPower® S.R.L.</h1>
                <p className="text-sm text-blue-600 font-semibold tracking-wide mt-1">
                  {language === "RO" ? "RECRUTARE INTERNAȚIONALĂ" : "INTERNATIONAL RECRUITMENT"}
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { key: "home", label: language === "RO" ? "Acasă" : "Home" },
                { key: "about", label: language === "RO" ? "Despre Noi" : "About" },
                { key: "industries", label: language === "RO" ? "Industrii" : "Industries" },
                { key: "pricing", label: language === "RO" ? "Prețuri" : "Pricing" },
                { key: "process", label: language === "RO" ? "Proces" : "Process" },
                { key: "contact", label: language === "RO" ? "Contact" : "Contact" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group py-2 px-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <Languages className="h-4 w-4" />
                    <span>{language === "RO" ? "Română" : "English"}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as "RO" | "EN")}
                      className="flex items-center space-x-2"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white mt-2"
                onClick={() => setShowLeadForm(true)}
              >
                {language === "RO" ? "Începe Acum" : "Get Started"}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm">
              <div className="container mx-auto px-6 py-8">
                <div className="flex justify-end mb-8">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:bg-white/10"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-6">
                  {[
                    { key: "home", label: language === "RO" ? "Acasă" : "Home" },
                    { key: "about", label: language === "RO" ? "Despre Noi" : "About" },
                    { key: "industries", label: language === "RO" ? "Industrii" : "Industries" },
                    { key: "pricing", label: language === "RO" ? "Prețuri" : "Pricing" },
                    { key: "process", label: language === "RO" ? "Proces" : "Process" },
                    { key: "contact", label: language === "RO" ? "Contact" : "Contact" },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => {
                        scrollToSection(item.key);
                        setMobileMenuOpen(false);
                      }}
                      className="text-white text-2xl font-medium hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <Button
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white mb-4"
                    size="lg"
                    onClick={() => {
                      setShowLeadForm(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {language === "RO" ? "Începe Acum" : "Get Started"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="lg" className="w-full text-white border-white/20">
                        <Languages className="h-5 w-5 mr-2" />
                        {languages.find((lang) => lang.code === language)?.flag} {language}
                        <ChevronDown className="h-5 w-5 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      {languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as "RO" | "EN");
                            setMobileMenuOpen(false);
                          }}
                        >
                          <span className="mr-2">{lang.flag}</span>
                          {lang.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Modern Recruitment Style */}
      <section id="home" className="relative min-h-screen flex items-center pt-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 z-10">
          {heroImages.map((image, index) => (
            <Image
              key={index}
              src={image || "/placeholder.svg"}
              alt={`Mediu profesional de lucru ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentHeroImage ? "opacity-10" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
        </div>

        <div className="relative z-20 container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left side - Content */}
              <div className="text-left">
                <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 text-sm px-4 py-2 shadow-sm">
                  <Globe className="h-4 w-4 mr-2" />
                  {language === "RO" ? "Agenție de Recrutare Internațională" : "International Recruitment Agency"}
                </Badge>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                  {language === "RO" 
                    ? "Căutați forță de muncă din Asia?"
                    : "Looking for workforce from Asia?"}
                </h1>

                <p className="text-xl md:text-2xl font-medium mb-6 text-blue-600">
                  {language === "RO"
                    ? "Conectăm companiile românești cu talentul asiatic"
                    : "Connecting Romanian companies with Asian talent"}
                </p>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {language === "RO"
                    ? "Recrutăm muncitori calificați și necalificați din Pakistan, Bangladesh, Nepal, Sri Lanka și alte țări asiatice. Procesare completă de documente, permise de muncă și integrare garantată."
                    : "We recruit skilled and unskilled workers from Pakistan, Bangladesh, Nepal, Sri Lanka and other Asian countries. Complete document processing, work permits and guaranteed integration."}
                </p>

                {/* Dual CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button
                    size="lg"
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/hiring-workers">
                      <Users className="mr-3 h-5 w-5" />
                      {language === "RO" ? "Pentru Angajatori" : "For Employers"}
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    asChild
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/finding-jobs">
                      <Briefcase className="mr-3 h-5 w-5" />
                      {language === "RO" ? "Pentru Candidați" : "For Candidates"}
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                {/* Contact CTA */}
                <div className="flex items-center space-x-4">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => scrollToSection("contact")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {language === "RO" ? "Sună acum" : "Call now"}
                  </Button>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">+40 799 870 326</p>
                    <p>{language === "RO" ? "Consultație gratuită" : "Free consultation"}</p>
                  </div>
                </div>
              </div>

              {/* Right side - Search Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {language === "RO" 
                    ? "Găsiți muncitorii potriviți"
                    : "Find the right workers"}
                </h3>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.formLabels.companyName}
                    </label>
                    <Input
                      type="text"
                      placeholder={t.formLabels.companyName}
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.formLabels.industry}
                      </label>
                      <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder={t.formLabels.industry} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">{t.industries.construction}</SelectItem>
                          <SelectItem value="manufacturing">{t.industries.manufacturing}</SelectItem>
                          <SelectItem value="hospitality">{t.industries.hospitality}</SelectItem>
                          <SelectItem value="logistics">{t.industries.logistics}</SelectItem>
                          <SelectItem value="agriculture">{t.industries.agriculture}</SelectItem>
                          <SelectItem value="cleaning">{t.industries.cleaning}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.formLabels.workersNeeded}
                      </label>
                      <Input
                        type="number"
                        min="1"
                        placeholder="Ex: 10"
                        value={formData.workersNeeded}
                        onChange={(e) => setFormData(prev => ({ ...prev, workersNeeded: e.target.value }))}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.formLabels.phone}
                    </label>
                    <Input
                      type="tel"
                      placeholder="+40 799 870 326"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                      className="h-12"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t.cta.requestQuote}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    {language === "RO" 
                      ? "Răspuns garantat în maxim 24 de ore"
                      : "Guaranteed response within 24 hours"}
                  </p>
                </form>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl">
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm font-medium text-gray-600">
                  {language === "RO" ? "Muncitori Plasați" : "Workers Placed"}
                </div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm font-medium text-gray-600">
                  {language === "RO" ? "Țări Partenere" : "Partner Countries"}
                </div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-sm font-medium text-gray-600">
                  {language === "RO" ? "Rata de Succes" : "Success Rate"}
                </div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm font-medium text-gray-600">
                  {language === "RO" ? "Suport Disponibil" : "Support Available"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Level Lead Form */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                {language === "RO" 
                  ? "Spuneți-ne de câți muncitori are nevoie compania dumneavoastră" 
                  : "Tell us how many workers your company needs"}
              </h3>
              <form onSubmit={handleFormSubmit} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Input
                  type="text"
                  placeholder={t.formLabels.companyName}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  required
                />
                <Input
                  type="number"
                  min="1"
                  placeholder={t.formLabels.workersNeeded}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  value={formData.workersNeeded}
                  onChange={(e) => setFormData(prev => ({ ...prev, workersNeeded: e.target.value }))}
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-white hover:bg-blue-50 text-blue-600 font-semibold"
                >
                  {t.cta.requestQuote}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-lg px-8 py-4 shadow-lg">
              <DollarSign className="h-5 w-5 mr-2" />
              Pachete de Recrutare Personalizate
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Soluții Adaptate Nevoilor Companiei Tale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alegerea pachetului potrivit este primul pas spre succesul recrutării internaționale. 
              Fiecare pachet include asistență completă și suport dedicat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8">
              Nu găsești pachetul potrivit? Contactează-ne pentru o ofertă personalizată.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setShowLeadForm(true)}
            >
              Discută cu Experții Noștri
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-lg px-8 py-4 shadow-lg">
              <Target className="h-5 w-5 mr-2" />
              Domenii de Activitate
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Soluții pentru Fiecare Industrie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recrutăm forță de muncă calificată și necalificată pentru toate sectoarele de activitate,
              cu focus pe nevoile specifice ale fiecărei industrii.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <IndustryCard key={index} industry={industry} index={index} />
            ))}
          </div>

          <style jsx global>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === "RO" 
                ? "Expertul Dumneavoastră în Recrutare Internațională" 
                : "Your International Recruitment Expert"}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {language === "RO"
                ? "Ne specializăm în conectarea companiilor românești cu muncitori calificați din țări non-UE. Misiunea noastră este să simplificăm procesul de recrutare internațională și să oferim soluții complete, legale și eficiente pentru afacerea dumneavoastră."
                : "We specialize in connecting Romanian companies with skilled workers from non-EU countries. Our mission is to simplify the international recruitment process and provide complete, legal, and efficient solutions for your business."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === "RO" 
                  ? "100% Conformitate Legală" 
                  : "100% Legal Compliance"}
              </h3>
              <p className="text-gray-600">
                {language === "RO"
                  ? "Gestionăm toate aspectele legale și documentația necesară pentru angajarea legală a muncitorilor străini."
                  : "We handle all legal aspects and documentation required for the legal employment of foreign workers."}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === "RO" 
                  ? "Selecție Riguroasă" 
                  : "Rigorous Selection"}
              </h3>
              <p className="text-gray-600">
                {language === "RO"
                  ? "Verificăm și evaluăm cu atenție fiecare candidat pentru a ne asigura că îndeplinește cerințele specifice ale companiei dumneavoastră."
                  : "We carefully verify and evaluate each candidate to ensure they meet your company's specific requirements."}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Headphones className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === "RO" 
                  ? "Suport Complet" 
                  : "Complete Support"}
              </h3>
              <p className="text-gray-600">
                {language === "RO"
                  ? "Vă oferim asistență dedicată pe tot parcursul procesului, de la selecție până la integrarea muncitorilor în compania dumneavoastră."
                  : "We provide dedicated assistance throughout the entire process, from selection to worker integration in your company."}
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => setShowLeadForm(true)}
            >
              {language === "RO" 
                ? "Discută cu Experții Noștri" 
                : "Talk to Our Experts"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section id="process" className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === "RO" 
                ? "Procesul Nostru de Recrutare" 
                : "Our Recruitment Process"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "RO" 
                ? "Un proces simplu și transparent, conceput pentru a vă ajuta să găsiți rapid forța de muncă necesară" 
                : "A simple and transparent process designed to help you quickly find the workforce you need"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <ClipboardCheck className="h-12 w-12" />,
                step: "1",
                title: language === "RO" ? "Evaluare Necesități" : "Needs Assessment",
                description: language === "RO"
                  ? "Analizăm cerințele companiei dumneavoastră și stabilim profilul candidaților"
                  : "We analyze your company's requirements and establish the candidate profile"
              },
              {
                icon: <Users className="h-12 w-12" />,
                step: "2",
                title: language === "RO" ? "Selecție Candidați" : "Candidate Selection",
                description: language === "RO"
                  ? "Identificăm și evaluăm candidații potriviți din baza noastră de date"
                  : "We identify and evaluate suitable candidates from our database"
              },
              {
                icon: <FileCheck className="h-12 w-12" />,
                step: "3",
                title: language === "RO" ? "Procesare Documente" : "Document Processing",
                description: language === "RO"
                  ? "Ne ocupăm de toate aspectele legale și documentația necesară"
                  : "We handle all legal aspects and necessary documentation"
              },
              {
                icon: <Handshake className="h-12 w-12" />,
                step: "4",
                title: language === "RO" ? "Integrare" : "Integration",
                description: language === "RO"
                  ? "Asigurăm o tranziție lină și sprijin pentru integrarea în companie"
                  : "We ensure a smooth transition and support for company integration"
              }
            ].map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <div className="mb-6 text-blue-600">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-50 px-12 py-6 text-xl font-semibold shadow-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              onClick={() => setShowLeadMagnet(true)}
            >
              <Download className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              {language === "RO" 
                ? "Descarcă Ghidul Complet al Procesului" 
                : "Download Complete Process Guide"}
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-lg px-8 py-4 shadow-lg">
              <Star className="h-5 w-5 mr-2" />
              {language === "RO" ? "De Ce Să Alegeți True ManPower® S.R.L." : "Why Choose True ManPower® S.R.L."}
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
              {language === "RO" ? "Succesul Dumneavoastră Este Prioritatea Noastră" : "Your Success is Our Priority"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: language === "RO" ? "100% Conformitate Legală" : "100% Legal Compliance",
                description: language === "RO"
                  ? "Respectare completă a legislației românești și europene cu documentație completă."
                  : "Full adherence to Romanian and EU employment laws with complete documentation.",
              },
              {
                icon: Eye,
                title: language === "RO" ? "Transparență Totală" : "Complete Transparency",
                description: language === "RO"
                  ? "Fără taxe ascunse, contracte clare și comunicare onestă pe tot parcursul procesului."
                  : "No hidden fees, clear contracts, and honest communication throughout the process.",
              },
              {
                icon: Zap,
                title: language === "RO" ? "Procesare Rapidă" : "Fast Processing",
                description: language === "RO"
                  ? "Proceduri optimizate cu tehnologie modernă pentru rezultate mai rapide și mai fiabile."
                  : "Streamlined procedures with modern technology for faster, more reliable results.",
              },
              {
                icon: Headphones,
                title: language === "RO" ? "Suport 24/7" : "24/7 Support",
                description: language === "RO"
                  ? "Echipă dedicată de suport disponibilă non-stop pentru toate nevoile dumneavoastră."
                  : "Dedicated support team available around the clock for all your needs.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group bg-white border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center"
              >
                <CardContent className="p-8">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Guide Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {language === "RO" 
                    ? "Descarcă procesul nostru de recrutare" 
                    : "Download our recruitment process"}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {language === "RO"
                    ? "Află pas cu pas cum funcționează procesul nostru de recrutare, documentele necesare și termenele estimate."
                    : "Learn step by step how our recruitment process works, required documents, and estimated timelines."}
                </p>
                <Button 
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open("/recruitment-process-guide.pdf", "_blank")}
                >
                  <Download className="h-5 w-5" />
                  <span>
                    {language === "RO" 
                      ? "Descarcă Ghidul PDF" 
                      : "Download PDF Guide"}
                  </span>
                </Button>
              </div>
              <div className="flex-1 flex justify-center">
                <FileText className="h-32 w-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {language === "RO" 
                    ? "Începeți Procesul de Recrutare" 
                    : "Start the Recruitment Process"}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {language === "RO"
                    ? "Completați formularul și veți fi contactat de un consultant specializat în maxim 24 de ore"
                    : "Fill out the form and you'll be contacted by a specialized consultant within 24 hours"}
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {language === "RO" ? "Telefon" : "Phone"}
                      </h3>
                      <p className="text-blue-600">+40 799 870 326</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-blue-600">office@truemanpower.ro</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {language === "RO" ? "Program" : "Working Hours"}
                      </h3>
                      <p className="text-gray-600">Luni - Vineri: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900" htmlFor="companyName">
                        {t.formLabels.companyName}
                      </label>
                      <Input
                        id="companyName"
                        type="text"
                        placeholder={t.formLabels.companyName}
                        value={formData.companyName}
                        onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900" htmlFor="contactName">
                        {t.formLabels.contactName}
                      </label>
                      <Input
                        id="contactName"
                        type="text"
                        placeholder={t.formLabels.contactName}
                        value={formData.contactName}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900" htmlFor="industry">
                      {t.formLabels.industry}
                    </label>
                    <select
                      id="industry"
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      value={formData.industry}
                      onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                      required
                    >
                      <option value="">{language === "RO" ? "Selectați domeniul" : "Select industry"}</option>
                      {Object.entries(t.industries).map(([key, value]) => (
                        <option key={key} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900" htmlFor="workersNeeded">
                        {t.formLabels.workersNeeded}
                      </label>
                      <Input
                        id="workersNeeded"
                        type="number"
                        min="1"
                        placeholder={t.formLabels.workersNeeded}
                        value={formData.workersNeeded}
                        onChange={(e) => setFormData(prev => ({ ...prev, workersNeeded: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900" htmlFor="urgency">
                        {t.formLabels.urgency}
                      </label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selectați urgența" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgentă (1-2 săptămâni)</SelectItem>
                          <SelectItem value="normal">Normală (2-4 săptămâni)</SelectItem>
                          <SelectItem value="planificat">Planificată (1-3 luni)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900" htmlFor="phone">
                        {t.formLabels.phone}
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t.formLabels.phone}
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900" htmlFor="email">
                        {t.formLabels.email}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.formLabels.email}
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900" htmlFor="message">
                      {t.formLabels.message}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t.formLabels.message}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="min-h-[100px] transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900" htmlFor="preferredContact">
                      {t.formLabels.preferredContact}
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={(e) => setFormData(prev => ({ ...prev, preferredContact: e.target.value }))}
                          className="text-blue-600"
                        />
                        <span>Email</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === "phone"}
                          onChange={(e) => setFormData(prev => ({ ...prev, preferredContact: e.target.value }))}
                          className="text-blue-600"
                        />
                        <span>Telefon</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, acceptTerms: checked as boolean }))
                      }
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-600 cursor-pointer"
                    >
                      Sunt de acord cu <a href="#" className="text-blue-600 hover:underline">termenii și condițiile</a> și <a href="#" className="text-blue-600 hover:underline">politica de confidențialitate</a>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Trimite Solicitarea
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-base sm:text-lg px-4 sm:px-8 py-2 sm:py-4 shadow-lg inline-flex items-center">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              {language === "RO" ? "Echipa Noastră" : "Our Team"}
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              {language === "RO" 
                ? "Profesioniștii din Spatele Succesului" 
                : "The Professionals Behind Success"}
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              {language === "RO"
                ? "Cunoaște echipa dedicată care face posibilă conectarea talentului global cu oportunitățile din România."
                : "Meet the dedicated team that makes connecting global talent with opportunities in Romania possible."}
            </p>
          </div>
          <TeamSection language={language} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <Image src="/logo.png" alt="True ManPower" width={48} height={48} className="rounded-lg" />
                <div>
                  <h3 className="text-lg font-bold">True ManPower® S.R.L.</h3>
                  <p className="text-sm text-blue-400">
                    {language === "RO" ? "RECRUTARE INTERNAȚIONALĂ" : "INTERNATIONAL RECRUITMENT"}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                {language === "RO"
                  ? "Soluția completă de recrutare a forței de muncă din țări non-UE pentru companiile românești."
                  : "Complete recruitment solution for non-EU workforce for Romanian companies."}
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t.footer.quickLinks}
              </h4>
              <div className="space-y-3">
                {[
                  { key: "home", label: language === "RO" ? "Acasă" : "Home" },
                  { key: "about", label: language === "RO" ? "Despre Noi" : "About" },
                  { key: "industries", label: language === "RO" ? "Industrii" : "Industries" },
                  { key: "pricing", label: language === "RO" ? "Prețuri" : "Pricing" },
                  { key: "process", label: language === "RO" ? "Proces" : "Process" },
                  { key: "contact", label: language === "RO" ? "Contact" : "Contact" }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.key)}
                    className="block text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t.footer.legalSupport}
              </h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  {t.footer.privacyPolicy}
                </a>
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  {t.footer.termsConditions}
                </a>
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  {t.footer.cookiePolicy}
                </a>
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  {t.footer.supportCenter}
                </a>
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  {t.downloadGuide}
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t.footer.contact}
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">+40 799 870 326</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">office@truemanpower.ro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">{t.footer.workingHoursValue}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">România</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} True ManPower® S.R.L. {t.footer.allRightsReserved}
            </p>
          </div>
        </div>
      </footer>

      {/* Lead Magnet Modal */}
      {showLeadMagnet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <Card className="bg-white border-gray-200 shadow-2xl max-w-lg w-full mx-4">
            <CardHeader className="text-center">
              <div className="flex justify-between items-center mb-4">
                <div></div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowLeadMagnet(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <Download className="h-20 w-20 text-blue-600 mx-auto mb-6" />
              <CardTitle className="text-gray-900 text-3xl mb-4">
                {language === "RO" ? "Ghid Gratuit al Procesului de Recrutare" : "Free Recruitment Process Guide"}
              </CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                {language === "RO"
                  ? "Obțineți ghidul nostru complet care acoperă întregul proces de recrutare internațională, cerințele legale, instrucțiuni pas cu pas și sfaturi pentru succes."
                  : "Get our comprehensive guide covering the complete international recruitment process, legal requirements, step-by-step instructions, and insider tips for success."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <Input
                  placeholder="your.email@company.com"
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name (Optional)</label>
                <Input
                  placeholder="Your company name"
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">I am interested in:</label>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Hiring workers</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Finding work</span>
                  </label>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold">
                Download Free Guide
                <Download className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-gray-500 text-center">
                By downloading, you agree to receive updates about our services. Unsubscribe anytime. We respect your
                privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Lead Form Dialog */}
      <Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Solicită Ofertă Personalizată
            </DialogTitle>
            <DialogDescription>
              Completați formularul și veți primi o ofertă adaptată nevoilor companiei dumneavoastră în maxim 24 de ore.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">
                  Numele Companiei *
                </Label>
                <Input
                  id="companyName"
                  type="text"
                  placeholder="Compania dumneavoastră"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  required
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactName">
                  Persoana de Contact *
                </Label>
                <Input
                  id="contactName"
                  type="text"
                  placeholder="Numele și prenumele"
                  value={formData.contactName}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                  required
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">
                Domeniul de Activitate *
              </Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selectați domeniul" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="constructii">Construcții</SelectItem>
                  <SelectItem value="productie">Producție</SelectItem>
                  <SelectItem value="horeca">HORECA</SelectItem>
                  <SelectItem value="logistica">Logistică</SelectItem>
                  <SelectItem value="agricultura">Agricultură</SelectItem>
                  <SelectItem value="curatenie">Curățenie</SelectItem>
                  <SelectItem value="housekeeping">Housekeeping</SelectItem>
                  <SelectItem value="altele">Alte Domenii</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="workersNeeded">
                  Număr Muncitori Necesari *
                </Label>
                <Input
                  id="workersNeeded"
                  type="number"
                  min="1"
                  placeholder="Ex: 10"
                  value={formData.workersNeeded}
                  onChange={(e) => setFormData(prev => ({ ...prev, workersNeeded: e.target.value }))}
                  required
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="urgency">
                  Urgența Recrutării
                </Label>
                <Select
                  value={formData.urgency}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selectați urgența" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgentă (1-2 săptămâni)</SelectItem>
                    <SelectItem value="normal">Normală (2-4 săptămâni)</SelectItem>
                    <SelectItem value="planificat">Planificată (1-3 luni)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Telefon *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+40 7xx xxx xxx"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  required
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@companie.ro"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Mesaj (Opțional)
              </Label>
              <Textarea
                id="message"
                placeholder="Detalii suplimentare despre necesitățile companiei dumneavoastră..."
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="min-h-[100px] transition-all duration-300 focus:scale-105"
              />
            </div>

            <div className="space-y-2">
              <Label>
                Metoda Preferată de Contact
              </Label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === "email"}
                    onChange={(e) => setFormData(prev => ({ ...prev, preferredContact: e.target.value }))}
                    className="text-blue-600"
                  />
                  <span>Email</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === "phone"}
                    onChange={(e) => setFormData(prev => ({ ...prev, preferredContact: e.target.value }))}
                    className="text-blue-600"
                  />
                  <span>Telefon</span>
                </label>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, acceptTerms: checked as boolean }))
                }
                required
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Sunt de acord cu <a href="#" className="text-blue-600 hover:underline">termenii și condițiile</a> și <a href="#" className="text-blue-600 hover:underline">politica de confidențialitate</a>
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Trimite Solicitarea
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

