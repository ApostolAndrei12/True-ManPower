// @ts-nocheck
"use client"

import type { FormEvent } from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

  const translations = {
    RO: {
      home: "Acasă",
      about: "Despre Noi",
      industries: "Domenii de Activitate",
      pricing: "Pachete și Prețuri",
      process: "Proces",
      contact: "Contact",
      heroTitle: "Recrutăm muncitori calificați din țări non-UE pentru companiile din România",
      heroSubtitle: "Soluții complete de recrutare pentru companii românești",
      heroDescription: "Oferim servicii profesionale de recrutare a forței de muncă din țări non-UE, cu focus pe domeniile: construcții, producție, HORECA, agricultură și transport. Proces simplu, prețuri transparente, suport legal complet.",
      getStarted: "Solicită o Ofertă",
      learnMore: "Află Mai Multe",
      downloadGuide: "Descarcă Ghidul de Recrutare",
      seeOurPrices: "Vezi Pachetele",
      freeConsultation: "Consultație Gratuită",
      pricingPlans: {
        standard: "Recrutare de bază – 1 muncitor/lună",
        premium: "Recrutare accelerată – până la 5 muncitori",
        enterprise: "Personalizat pentru nevoile firmei tale"
      }
    },
    EN: {
      home: "Home",
      about: "About",
      industries: "Industries",
      pricing: "Packages & Pricing",
      process: "Process",
      contact: "Contact",
      heroTitle: "We recruit skilled workers from non-EU countries for Romanian companies",
      heroSubtitle: "Complete recruitment solutions for Romanian businesses",
      heroDescription: "We provide professional workforce recruitment services from non-EU countries, focusing on: construction, manufacturing, HORECA, agriculture, and transportation. Simple process, transparent pricing, complete legal support.",
      getStarted: "Request an Offer",
      learnMore: "Learn More",
      downloadGuide: "Download Recruitment Guide",
      seeOurPrices: "View Packages",
      freeConsultation: "Free Consultation",
      pricingPlans: {
        standard: "Basic Recruitment – 1 worker/month",
        premium: "Accelerated Recruitment – up to 5 workers",
        enterprise: "Customized for your company's needs"
      }
    }
  }

  const t = translations[language as keyof typeof translations] || translations.EN

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
                <p className="text-sm text-blue-600 font-semibold tracking-wide">INTERNATIONAL RECRUITMENT</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { key: "home", label: t.home },
                { key: "about", label: t.about },
                { key: "industries", label: t.industries },
                { key: "pricing", label: t.pricing },
                { key: "process", label: t.process },
                { key: "contact", label: t.contact },
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
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold"
                onClick={() => setShowLeadMagnet(true)}
              >
                {t.freeConsultation}
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                {t.getStarted}
                <ArrowRight className="ml-2 h-4 w-4" />
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
                  { key: "home", label: t.home },
                  { key: "about", label: t.about },
                  { key: "industries", label: t.industries },
                  { key: "pricing", label: t.pricing },
                  { key: "process", label: t.process },
                  { key: "contact", label: t.contact },
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
                  {t.getStarted}
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
              alt={`Professional workplace ${index + 1}`}
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
              Trusted International Recruitment Since 2024
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
                <div className="text-sm font-medium text-gray-600">Legal Compliance</div>
              </div>
              <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">24/7</div>
                <div className="text-sm font-medium text-gray-600">Support Available</div>
              </div>
              <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">Fast</div>
                <div className="text-sm font-medium text-gray-600">Processing Time</div>
              </div>
              <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">Zero</div>
                <div className="text-sm font-medium text-gray-600">Hidden Fees</div>
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
                  ? "Spune-ne de câți muncitori ai nevoie" 
                  : "Tell us how many workers you need"}
              </h3>
              <form onSubmit={handleFormSubmit} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Input
                  type="text"
                  placeholder={language === "RO" ? "Nume firmă" : "Company name"}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  required
                />
                <Input
                  type="number"
                  min="1"
                  placeholder={language === "RO" ? "Număr muncitori" : "Number of workers"}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  value={formData.workersNeeded}
                  onChange={(e) => setFormData(prev => ({ ...prev, workersNeeded: e.target.value }))}
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-white hover:bg-blue-50 text-blue-600 font-semibold"
                >
                  {language === "RO" ? "Solicită o Ofertă" : "Request a Quote"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Moved up */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === "RO" ? "Pachete de Recrutare Personalizate" : "Customized Recruitment Packages"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "RO" 
                ? "Alegeti pachetul potrivit pentru nevoile companiei dumneavoastră" 
                : "Choose the right package for your company's needs"}
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
                    ? "Ideal pentru companii mici" 
                    : "Perfect for small companies"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {language === "RO" 
                      ? "Recrutare pentru 1 poziție" 
                      : "Recruitment for 1 position"}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {language === "RO" 
                      ? "Suport documentație completă" 
                      : "Complete documentation support"}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {language === "RO" 
                      ? "Verificare candidați" 
                      : "Candidate verification"}
                  </li>
                </ul>
                <Button 
                  className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => scrollToSection("contact")}
                >
                  {language === "RO" ? "Solicită Ofertă" : "Request Quote"}
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative bg-blue-600 text-white shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {t.pricingPlans.premium}
                </CardTitle>
                <CardDescription className="text-blue-100">
                  {language === "RO" 
                    ? "Pentru companii în dezvoltare" 
                    : "For growing companies"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                    {language === "RO" 
                      ? "Recrutare pentru până la 5 poziții" 
                      : "Recruitment for up to 5 positions"}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                    {language === "RO" 
                      ? "Procesare accelerată" 
                      : "Accelerated processing"}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                    {language === "RO" 
                      ? "Manager de cont dedicat" 
                      : "Dedicated account manager"}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                    {language === "RO" 
                      ? "Suport prioritar" 
                      : "Priority support"}
                  </li>
                </ul>
                <Button 
                  className="w-full mt-8 bg-white text-blue-600 hover:bg-blue-50"
                  onClick={() => scrollToSection("contact")}
                >
                  {language === "RO" ? "Solicită Ofertă" : "Request Quote"}
                </Button>
              </CardContent>
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
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {language === "RO" 
                      ? "Număr nelimitat de poziții" 
                      : "Unlimited positions"}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {language === "RO" 
                      ? "Soluție personalizată" 
                      : "Customized solution"}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {language === "RO" 
                      ? "Suport juridic dedicat" 
                      : "Dedicated legal support"}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {language === "RO" 
                      ? "Servicii premium complete" 
                      : "Complete premium services"}
                  </li>
                </ul>
                <Button 
                  className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => scrollToSection("contact")}
                >
                  {language === "RO" ? "Contactează-ne" : "Contact Us"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === "RO" ? "Domenii de Activitate" : "Industry Domains"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "RO" 
                ? "Recrutăm personal calificat pentru următoarele domenii de activitate" 
                : "We recruit qualified personnel for the following industries"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: HardHat, name: language === "RO" ? "Construcții" : "Construction" },
              { icon: Factory, name: language === "RO" ? "Producție" : "Manufacturing" },
              { icon: Utensils, name: language === "RO" ? "HORECA" : "HORECA" },
              { icon: Wheat, name: language === "RO" ? "Agricultură" : "Agriculture" },
              { icon: Truck, name: language === "RO" ? "Transport" : "Transportation" },
              { icon: Cleaning, name: language === "RO" ? "Curățenie" : "Cleaning" },
            ].map((industry, index) => (
              <Card 
                key={index}
                className="group cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => handleIndustryClick(industry.name)}
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <industry.icon className="h-16 w-16 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                  <p className="text-gray-600">
                    {language === "RO" 
                      ? "Click pentru a solicita personal" 
                      : "Click to request personnel"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Premium */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-lg px-8 py-4 shadow-lg">
                <Heart className="h-5 w-5 mr-2" />
                About True ManPower® S.R.L.
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Your Trusted International Recruitment Partner
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We specialize in connecting skilled professionals from Asia and Africa with Romanian companies that
                value talent, dedication, and diversity. Our mission is to make international recruitment simple, legal,
                and successful for everyone.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">100% Legal</h4>
                  <p className="text-sm text-gray-600">Full compliance with all regulations</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Transparent</h4>
                  <p className="text-sm text-gray-600">Clear process and honest pricing</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Handshake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Trusted</h4>
                  <p className="text-sm text-gray-600">Reliable service and support</p>
                </div>
              </div>

              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                {t.learnMore}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Romanian construction site"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Professional workers"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-2xl mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-2xl">
                <Award className="h-10 w-10 mb-3" />
                <div className="text-lg font-bold">Certified</div>
                <div className="text-sm opacity-90">Recruitment Agency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-lg px-8 py-4 shadow-lg">
              <Target className="h-5 w-5 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">Simple 4-Step Process</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We've streamlined international recruitment into a clear, efficient process that ensures success for both
              employers and workers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Application & Assessment",
                description: "Submit application and complete skills assessment",
                icon: UserCheck,
                color: "blue",
              },
              {
                step: "02",
                title: "Documentation",
                description: "We handle all work permits and visa applications",
                icon: FileText,
                color: "green",
              },
              {
                step: "03",
                title: "Job Matching",
                description: "Find the perfect job match with Romanian companies",
                icon: Handshake,
                color: "purple",
              },
              {
                step: "04",
                title: "Arrival & Support",
                description: "Complete support including TRC assistance",
                icon: CheckCircle,
                color: "orange",
              },
            ].map((process, index) => (
              <Card
                key={index}
                className="group bg-white border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-blue-100 mb-4">{process.step}</div>
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <process.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-lg px-8 py-4 shadow-lg">
              <Star className="h-5 w-5 mr-2" />
              Why Choose True ManPower® S.R.L.
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">Your Success is Our Priority</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "100% Legal Compliance",
                description: "Full adherence to Romanian and EU employment laws with complete documentation.",
              },
              {
                icon: Eye,
                title: "Complete Transparency",
                description: "No hidden fees, clear contracts, and honest communication throughout the process.",
              },
              {
                icon: Zap,
                title: "Fast Processing",
                description: "Streamlined procedures with modern technology for faster, more reliable results.",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Dedicated support team available around the clock for all your needs.",
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
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-lg px-8 py-4 shadow-lg">
              <Mail className="h-5 w-5 mr-2" />
              Contact Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Ready to Get Started?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Contact us today for a free consultation. We'll help you find the right solution for your workforce needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-white border border-gray-200 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
                <CardDescription className="text-gray-600">
                  We'll get back to you within 24 hours with a personalized response.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <Input placeholder="John" className="bg-white border-gray-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <Input placeholder="Doe" className="bg-white border-gray-300" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input type="email" placeholder="john.doe@company.com" className="bg-white border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input placeholder="+40 XXX XXX XXX" className="bg-white border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <Input placeholder="Your company name" className="bg-white border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea
                    placeholder="Tell us about your workforce needs, timeline, and any specific requirements..."
                    rows={5}
                    className="bg-white border-gray-300"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 rounded-full p-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">Phone</h4>
                      <p className="text-blue-600 text-lg font-medium">+40 799 870 3265</p>
                      <p className="text-gray-600 text-sm">Available Mon-Fri: 9:00-18:00 EET</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 rounded-full p-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">Email</h4>
                      <p className="text-blue-600 text-lg font-medium">office@truemanpower.ro</p>
                      <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 rounded-full p-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">Location</h4>
                      <p className="text-blue-600 text-lg font-medium">Romania</p>
                      <p className="text-gray-600 text-sm">Serving all Romanian regions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Information */}
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Apostol Andrei-Eusebiu</h3>
                      <p className="text-blue-600 font-semibold">Founder & Lead Recruiter</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "At True ManPower® S.R.L., we believe in creating opportunities that change lives. Our commitment is
                    to make international recruitment simple, legal, and successful for everyone involved."
                  </p>
                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-blue-600" />
                        <span>Certified Recruiter</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-blue-600" />
                        <span>International Experience</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 py-6 font-semibold"
                  onClick={() => window.open("tel:+40799870326")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 py-6 font-semibold"
                  onClick={() => window.open("mailto:office@truemanpower.ro")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <Image src="/logo.png" alt="True ManPower" width={60} height={60} className="rounded-lg" />
                <div>
                  <h3 className="text-2xl font-bold text-white">True ManPower® S.R.L.</h3>
                  <p className="text-blue-400 font-semibold text-sm tracking-wide">INTERNATIONAL RECRUITMENT</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Recruiting skilled workers from Asia and Africa for Romanian companies through transparent, legal, and
                efficient processes. Your trusted partner for international workforce solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">+40 799 870 3265</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">office@truemanpower.ro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Mon-Fri: 9:00-18:00 EET</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { key: "home", label: t.home },
                  { key: "about", label: t.about },
                  { key: "industries", label: t.industries },
                  { key: "pricing", label: t.pricing },
                  { key: "process", label: t.process },
                  { key: "contact", label: t.contact },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.key)}
                    className="block text-gray-300 hover:text-blue-400 transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Legal & Support</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  Cookie Policy
                </a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  Support Center
                </a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  Download Process Guide
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="max-w-md mx-auto text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-300 mb-4">Get the latest updates on recruitment opportunities and processes.</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">
                © 2025 True ManPower® S.R.L. All rights reserved. | Apostol Andrei-Eusebiu, Founder & Lead Recruiter
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 mt-4 md:mt-0">
                    <Languages className="h-4 w-4 mr-2" />
                    {languages.find((lang) => lang.code === language)?.flag} {language}
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 border-gray-700 shadow-xl max-h-80 overflow-y-auto">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as "RO" | "EN")}
                      className="text-gray-300 hover:bg-gray-700 hover:text-blue-400"
                    >
                      <span className="mr-3">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
              <CardTitle className="text-gray-900 text-3xl mb-4">Free Recruitment Process Guide</CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Get our comprehensive guide covering the complete international recruitment process, legal requirements,
                step-by-step instructions, and insider tips for success.
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
            <DialogTitle>
              {language === "RO" 
                ? `Solicitare Personal - ${selectedIndustry}` 
                : `Personnel Request - ${selectedIndustry}`}
            </DialogTitle>
            <DialogDescription>
              {language === "RO"
                ? "Completați formularul și vă vom contacta în cel mai scurt timp"
                : "Fill out the form and we will contact you shortly"}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="companyName">
                  {language === "RO" ? "Nume firmă" : "Company name"}
                </Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="contactName">
                  {language === "RO" ? "Nume contact" : "Contact name"}
                </Label>
                <Input
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="workersNeeded">
                  {language === "RO" ? "Număr muncitori necesari" : "Number of workers needed"}
                </Label>
                <Input
                  id="workersNeeded"
                  type="number"
                  min="1"
                  value={formData.workersNeeded}
                  onChange={(e) => setFormData(prev => ({ ...prev, workersNeeded: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">
                  {language === "RO" ? "Telefon" : "Phone"}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              {language === "RO" ? "Trimite solicitarea" : "Submit request"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
