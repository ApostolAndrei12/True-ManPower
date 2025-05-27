// @ts-nocheck
"use client"

import type { FormEvent } from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  WashingMachineIcon as Cleaning,
  UtensilsCrossed,
  Sprout,
  Home,
  ClipboardCheck,
  FileCheck,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react"

interface FormData {
  companyName: string
  contactName: string
  industry: string
  workersNeeded: string
  phone: string
  email: string
}

interface Industry {
  icon: any // Using any here since we can't properly type Lucide icons
  name: string
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
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactName: "",
    industry: "",
    workersNeeded: "",
    phone: "",
    email: ""
  })

  const heroImages = [
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  ]

  const industries = [
    { icon: HardHat, name: language === "RO" ? "Construcții" : "Construction" },
    { icon: Factory, name: language === "RO" ? "Producție" : "Manufacturing" },
    { icon: Utensils, name: language === "RO" ? "HoReCa" : "HoReCa" },
    { icon: Wheat, name: language === "RO" ? "Agricultură" : "Agriculture" },
    { icon: Truck, name: language === "RO" ? "Transport" : "Transportation" },
    { icon: Cleaning, name: language === "RO" ? "Curățenie" : "Cleaning" },
  ]

  const pricingPlans = [
    {
      name: language === "RO" ? "Standard" : "Standard",
      description: language === "RO" 
        ? "Pentru companii mici cu nevoi de 1-5 muncitori"
        : "For small companies needing 1-5 workers",
      price: language === "RO" ? "Personalizat" : "Custom",
      features: [
        language === "RO" ? "Recrutare și selecție" : "Recruitment & selection",
        language === "RO" ? "Verificare documente" : "Document verification",
        language === "RO" ? "Asistență viză" : "Visa assistance",
        language === "RO" ? "Suport de bază" : "Basic support",
      ],
    },
    {
      name: language === "RO" ? "Business" : "Business",
      description: language === "RO"
        ? "Pentru companii medii cu nevoi de 6-15 muncitori"
        : "For medium companies needing 6-15 workers",
      price: language === "RO" ? "Personalizat" : "Custom",
      features: [
        language === "RO" ? "Tot ce include planul Standard" : "Everything in Standard",
        language === "RO" ? "Asistență permis de muncă" : "Work permit assistance",
        language === "RO" ? "Suport cazare" : "Accommodation support",
        language === "RO" ? "Suport prioritar" : "Priority support",
      ],
    },
    {
      name: language === "RO" ? "Enterprise" : "Enterprise",
      description: language === "RO"
        ? "Pentru companii mari cu nevoi de peste 15 muncitori"
        : "For large companies needing 15+ workers",
      price: language === "RO" ? "Personalizat" : "Custom",
      features: [
        language === "RO" ? "Tot ce include planul Business" : "Everything in Business",
        language === "RO" ? "Manager de cont dedicat" : "Dedicated account manager",
        language === "RO" ? "Suport 24/7" : "24/7 support",
        language === "RO" ? "Soluții personalizate" : "Custom solutions",
      ],
    },
  ]

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
      ? "Soluția completă de recrutare a forței de muncă din țări non-UE pentru companiile românești"
      : "Complete recruitment solution for non-EU workforce for Romanian companies",
    heroDescription: language === "RO"
      ? "Oferim servicii complete de recrutare internațională, cu procesare rapidă și eficientă, fără costuri ascunse. Specializați în recrutarea forței de muncă din țări non-UE pentru companiile din România."
      : "We provide complete international recruitment services, with fast and efficient processing, no hidden costs. Specialized in recruiting workforce from non-EU countries for companies in Romania.",
    seeOurPrices: language === "RO" ? "Vezi Prețurile" : "See Prices",
    downloadGuide: language === "RO" ? "Descarcă Ghidul Procesului" : "Download Process Guide",
    formLabels: {
      companyName: language === "RO" ? "Numele Companiei" : "Company Name",
      contactName: language === "RO" ? "Persoana de Contact" : "Contact Person",
      industry: language === "RO" ? "Domeniul de Activitate" : "Industry",
      workersNeeded: language === "RO" ? "Număr de Muncitori" : "Number of Workers",
      phone: language === "RO" ? "Telefon" : "Phone",
      email: language === "RO" ? "Email" : "Email"
    },
    cta: {
      requestQuote: language === "RO" ? "Solicită Ofertă" : "Request Quote",
      getStarted: language === "RO" ? "Începe Acum" : "Get Started",
      learnMore: language === "RO" ? "Află Mai Multe" : "Learn More"
    },
    industries: {
      construction: language === "RO" ? "Construcții" : "Construction",
      manufacturing: language === "RO" ? "Producție" : "Manufacturing",
      hospitality: language === "RO" ? "HoReCa" : "Hospitality",
      logistics: language === "RO" ? "Logistică" : "Logistics",
      agriculture: language === "RO" ? "Agricultură" : "Agriculture",
      cleaning: language === "RO" ? "Curățenie" : "Cleaning",
      housekeeping: language === "RO" ? "Housekeeping" : "Housekeeping"
    },
    pricingPlans: {
      standard: language === "RO" ? "1-5 Muncitori" : "1-5 Workers",
      professional: language === "RO" ? "6-15 Muncitori" : "6-15 Workers",
      enterprise: language === "RO" ? "15+ Muncitori" : "15+ Workers"
    }
  }

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setShowLeadForm(false)
    // Reset form
    setFormData({
      companyName: "",
      contactName: "",
      industry: "",
      workersNeeded: "",
      phone: "",
      email: ""
    })
  }

  const handleIndustryClick = (industry: string) => {
    setSelectedIndustry(industry)
    setFormData(prev => ({ ...prev, industry }))
    setShowLeadForm(true)
  }

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
                <span className="font-medium">+40 799 870 3265</span>
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
                <p className="text-sm text-blue-600 font-semibold tracking-wide">
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
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => scrollToSection("contact")}
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
            <div className="lg:hidden bg-white border-t border-gray-200 py-6 rounded-b-lg shadow-lg">
              <nav className="flex flex-col space-y-4">
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
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white mt-4"
                  onClick={() => scrollToSection("contact")}
                >
                  {language === "RO" ? "Începe Acum" : "Get Started"}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="absolute inset-0 z-10">
          {heroImages.map((image, index) => (
            <Image
              key={index}
              src={image || "/placeholder.svg"}
              alt={`Mediu profesional de lucru ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentHeroImage ? "opacity-20" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-blue-900/20 to-slate-900/30"></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-lg px-8 py-4 shadow-lg">
              <Globe className="h-5 w-5 mr-3" />
              {language === "RO" ? "Recrutare Internațională de Încredere din 2024" : "Trusted International Recruitment Since 2024"}
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
              {t.heroTitle}
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-blue-600">{t.heroSubtitle}</div>

            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("pricing")}
              >
                <DollarSign className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                {t.seeOurPrices}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-blue-600 bg-white/90 text-blue-600 hover:bg-blue-50 px-12 py-6 text-xl font-semibold shadow-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                onClick={() => setShowLeadMagnet(true)}
              >
                <Download className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                {t.downloadGuide}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Key Stats - Premium Version */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">100%</div>
                <div className="text-sm font-medium text-gray-600">
                  {language === "RO" ? "Conformitate Legală" : "Legal Compliance"}
                </div>
              </div>
              <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
                  {language === "RO" ? "Rapid" : "Fast"}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {language === "RO" ? "Procesare Eficientă" : "Efficient Processing"}
                </div>
              </div>
              <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">24/7</div>
                <div className="text-sm font-medium text-gray-600">
                  {language === "RO" ? "Suport Dedicat" : "Dedicated Support"}
                </div>
              </div>
              <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">0</div>
                <div className="text-sm font-medium text-gray-600">
                  {language === "RO" ? "Costuri Ascunse" : "Hidden Fees"}
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
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === "RO" 
                ? "Soluții de Recrutare Adaptate Nevoilor Companiei Dumneavoastră" 
                : "Recruitment Solutions Tailored to Your Company's Needs"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "RO" 
                ? "Pachete transparente cu toate serviciile incluse, fără costuri ascunse" 
                : "Transparent packages with all services included, no hidden costs"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Standard Plan */}
            <Card className="relative bg-white shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {t.pricingPlans.standard}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {language === "RO" 
                    ? "Pentru companii mici" 
                    : "For small companies"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {language === "RO" ? (
                    <>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Recrutare pentru 1-5 muncitori
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Procesare completă acte
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Suport în limba română
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Ghid complet de recrutare
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Recruitment for 1-5 workers
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Complete document processing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Romanian language support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Complete recruitment guide
                      </li>
                    </>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => scrollToSection("contact")}
                >
                  {t.cta.requestQuote}
                </Button>
              </CardFooter>
            </Card>

            {/* Professional Plan */}
            <Card className="relative bg-white shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {t.pricingPlans.professional}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {language === "RO" 
                    ? "Pentru companii în dezvoltare" 
                    : "For growing companies"}
                </CardDescription>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-100 text-blue-800">Popular</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {language === "RO" ? (
                    <>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Recrutare pentru 6-15 muncitori
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Procesare prioritară acte
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Suport dedicat 24/7
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Consultanță juridică inclusă
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Asistență la integrare
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Recruitment for 6-15 workers
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Priority document processing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        24/7 dedicated support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Legal consulting included
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Integration assistance
                      </li>
                    </>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => scrollToSection("contact")}
                >
                  {t.cta.requestQuote}
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative bg-white shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {t.pricingPlans.enterprise}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {language === "RO" 
                    ? "Pentru companii mari" 
                    : "For large companies"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {language === "RO" ? (
                    <>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Recrutare pentru 15+ muncitori
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Procesare ultra-rapidă
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Manager de cont dedicat
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Consultanță juridică premium
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Program complet de integrare
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Servicii personalizate
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Recruitment for 15+ workers
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Ultra-fast processing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Dedicated account manager
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Premium legal consulting
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Complete integration program
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Customized services
                      </li>
                    </>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => scrollToSection("contact")}
                >
                  {t.cta.requestQuote}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === "RO" 
                ? "Domenii de Activitate" 
                : "Industries We Serve"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "RO" 
                ? "Recrutăm forță de muncă calificată și necalificată pentru următoarele sectoare:" 
                : "We recruit skilled and unskilled workforce for the following sectors:"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <HardHat className="h-12 w-12" />,
                name: t.industries.construction,
                description: language === "RO" 
                  ? "Muncitori în construcții, dulgheri, fierari betoniști, zidari, finisori" 
                  : "Construction workers, carpenters, iron workers, masons, finishers"
              },
              {
                icon: <Factory className="h-12 w-12" />,
                name: t.industries.manufacturing,
                description: language === "RO"
                  ? "Operatori producție, tehnicieni, muncitori calificați și necalificați"
                  : "Production operators, technicians, skilled and unskilled workers"
              },
              {
                icon: <UtensilsCrossed className="h-12 w-12" />,
                name: t.industries.hospitality,
                description: language === "RO"
                  ? "Bucătari, ospătari, personal hotelier, personal curățenie"
                  : "Chefs, waiters, hotel staff, cleaning staff"
              },
              {
                icon: <Truck className="h-12 w-12" />,
                name: t.industries.logistics,
                description: language === "RO"
                  ? "Șoferi, manipulanți marfă, operatori depozit"
                  : "Drivers, cargo handlers, warehouse operators"
              },
              {
                icon: <Sprout className="h-12 w-12" />,
                name: t.industries.agriculture,
                description: language === "RO"
                  ? "Muncitori agricoli, operatori utilaje, personal sere"
                  : "Agricultural workers, machinery operators, greenhouse staff"
              },
              {
                icon: <Sparkles className="h-12 w-12" />,
                name: t.industries.cleaning,
                description: language === "RO"
                  ? "Personal curățenie industrială și comercială"
                  : "Industrial and commercial cleaning staff"
              },
              {
                icon: <Home className="h-12 w-12" />,
                name: t.industries.housekeeping,
                description: language === "RO"
                  ? "Personal curățenie și întreținere spații"
                  : "Cleaning and maintenance staff"
              }
            ].map((industry, index) => (
              <button
                key={index}
                onClick={() => handleIndustryClick(industry.name)}
                className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-6 text-blue-600 group-hover:text-blue-700 transition-colors">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{industry.name}</h3>
                <p className="text-sm text-gray-600 text-center">{industry.description}</p>
              </button>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              {language === "RO" 
                ? "Solicită o Ofertă Personalizată" 
                : "Request a Custom Quote"}
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
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
                      <p className="text-blue-600">+40 799 870 3265</p>
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

                  <Button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
                  >
                    {t.cta.requestQuote}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
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
                {language === "RO" ? "Navigare Rapidă" : "Quick Links"}
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
                {language === "RO" ? "Aspecte Legale și Suport" : "Legal & Support"}
              </h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  {language === "RO" ? "Politica de Confidențialitate" : "Privacy Policy"}
                </a>
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  {language === "RO" ? "Termeni și Condiții" : "Terms & Conditions"}
                </a>
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  {language === "RO" ? "Politica de Cookie-uri" : "Cookie Policy"}
                </a>
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  {language === "RO" ? "Centru de Suport" : "Support Center"}
                </a>
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  {language === "RO" ? "Descarcă Ghidul Procesului" : "Download Process Guide"}
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">
                {language === "RO" ? "Contact" : "Contact"}
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">+40 799 870 3265</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">office@truemanpower.ro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Luni - Vineri: 9:00 - 18:00</span>
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
              © {new Date().getFullYear()} True ManPower® S.R.L. 
              {language === "RO" 
                ? " Toate drepturile rezervate." 
                : " All rights reserved."}
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
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {language === "RO" 
                ? "Solicitare Ofertă Personalizată" 
                : "Request Custom Quote"}
            </DialogTitle>
            <DialogDescription>
              {language === "RO"
                ? "Completați formularul și veți primi o ofertă adaptată nevoilor companiei dumneavoastră în maxim 24 de ore."
                : "Fill out the form and you'll receive a quote tailored to your company's needs within 24 hours."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">
                {t.formLabels.companyName}
              </Label>
              <Input
                id="companyName"
                type="text"
                placeholder={language === "RO" ? "Numele companiei dumneavoastră" : "Your company name"}
                value={formData.companyName}
                onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactName">
                {t.formLabels.contactName}
              </Label>
              <Input
                id="contactName"
                type="text"
                placeholder={language === "RO" ? "Numele persoanei de contact" : "Contact person name"}
                value={formData.contactName}
                onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">
                {t.formLabels.industry}
              </Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder={language === "RO" ? "Selectați domeniul" : "Select industry"} />
                </SelectTrigger>
                <SelectContent>
                  {language === "RO" ? (
                    <>
                      <SelectItem value="constructii">Construcții</SelectItem>
                      <SelectItem value="productie">Producție</SelectItem>
                      <SelectItem value="horeca">HORECA</SelectItem>
                      <SelectItem value="agricultura">Agricultură</SelectItem>
                      <SelectItem value="transport">Transport</SelectItem>
                      <SelectItem value="altele">Alte Domenii</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="constructii">Construction</SelectItem>
                      <SelectItem value="productie">Manufacturing</SelectItem>
                      <SelectItem value="horeca">HORECA</SelectItem>
                      <SelectItem value="agricultura">Agriculture</SelectItem>
                      <SelectItem value="transport">Transportation</SelectItem>
                      <SelectItem value="altele">Other Industries</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="workersNeeded">
                {t.formLabels.workersNeeded}
              </Label>
              <Input
                id="workersNeeded"
                type="number"
                min="1"
                placeholder={language === "RO" ? "Număr de muncitori necesari" : "Number of workers needed"}
                value={formData.workersNeeded}
                onChange={(e) => setFormData(prev => ({ ...prev, workersNeeded: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">
                {t.formLabels.phone}
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder={language === "RO" ? "Număr de telefon" : "Phone number"}
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                {t.formLabels.email}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={language === "RO" ? "Adresa de email" : "Email address"}
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {language === "RO" ? "Trimite Solicitarea" : "Submit Request"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

