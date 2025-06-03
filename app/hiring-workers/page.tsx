"use client"

import { sendContactForm, type ContactFormData } from "@/lib/email"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Clock,
  Shield,
  TrendingUp,
  FileText,
  Handshake,
  Star,
  HardHat,
  Factory,
  Utensils,
  Truck,
  Sprout,
  Sparkles,
  Home,
  Briefcase,
  ArrowLeft,
  Calculator,
  HeadphonesIcon,
  Award
} from "lucide-react"

interface IndustryDemand {
  icon: any
  name: string
  demand: string
  avgSalary: string
  positions: string[]
  color: string
}

export default function HiringWorkersPage() {
  const [language, setLanguage] = useState<"RO" | "EN">("RO")
  const [selectedIndustry, setSelectedIndustry] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    workersNeeded: "",
    urgency: "normal",
    contactName: "",
    phone: "",
    email: "",
    message: ""
  })

  const industriesInDemand: IndustryDemand[] = [
    {
      icon: HardHat,
      name: language === "RO" ? "Construcții" : "Construction",
      demand: language === "RO" ? "Foarte Mare" : "Very High",
      avgSalary: "3,500 - 6,000 RON",
      positions: language === "RO" 
        ? ["Zidari", "Fierari betoniști", "Dulgheri", "Finisori", "Sudori", "Operatori utilaje"]
        : ["Masons", "Reinforcement workers", "Carpenters", "Finishers", "Welders", "Equipment operators"],
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: Factory,
      name: language === "RO" ? "Producție Industrială" : "Industrial Production",
      demand: language === "RO" ? "Mare" : "High", 
      avgSalary: "2,800 - 4,500 RON",
      positions: language === "RO"
        ? ["Operatori producție", "Tehnicieni", "Controlori calitate", "Operatori CNC", "Ambalatori"]
        : ["Production operators", "Technicians", "Quality controllers", "CNC operators", "Packers"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Sprout,
      name: language === "RO" ? "Agricultură" : "Agriculture",
      demand: language === "RO" ? "Sezonieră Intensă" : "Intense Seasonal",
      avgSalary: "2,200 - 3,800 RON",
      positions: language === "RO"
        ? ["Muncitori legume/fructe", "Operatori sere", "Îngrijitori animale", "Operatori utilaje agricole"]
        : ["Vegetable/fruit workers", "Greenhouse operators", "Animal caretakers", "Agricultural equipment operators"],
      color: "from-green-400 to-green-600"
    },
    {
      icon: Truck,
      name: language === "RO" ? "Logistică & Transport" : "Logistics & Transport",
      demand: language === "RO" ? "În Creștere" : "Growing",
      avgSalary: "3,000 - 5,200 RON",
      positions: language === "RO"
        ? ["Șoferi camion", "Manipulanți marfă", "Operatori depozit", "Curieri", "Operatori stivuitor"]
        : ["Truck drivers", "Cargo handlers", "Warehouse operators", "Couriers", "Forklift operators"],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Utensils,
      name: language === "RO" ? "HoReCa" : "Hospitality",
      demand: language === "RO" ? "Constantă" : "Constant",
      avgSalary: "2,500 - 4,000 RON",
      positions: language === "RO"
        ? ["Bucătari", "Ospătari", "Personal curățenie", "Receptioneri", "Barmani"]
        : ["Cooks", "Waiters", "Cleaning staff", "Receptionists", "Bartenders"],
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Sparkles,
      name: language === "RO" ? "Servicii Curățenie" : "Cleaning Services",
      demand: language === "RO" ? "Stabilă" : "Stable",
      avgSalary: "2,300 - 3,500 RON",
      positions: language === "RO"
        ? ["Curățenie industrială", "Curățenie birouri", "Spălători geamuri", "Personal menaj"]
        : ["Industrial cleaning", "Office cleaning", "Window cleaners", "Housekeeping staff"],
      color: "from-cyan-400 to-cyan-600"
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: language === "RO" ? "100% Conformitate Legală" : "100% Legal Compliance",
      description: language === "RO" 
        ? "Toate documentele și procedurile respectă legislația românească și europeană"
        : "All documents and procedures comply with Romanian and European legislation"
    },
    {
      icon: Clock,
      title: language === "RO" ? "Procesare Rapidă" : "Fast Processing",
      description: language === "RO"
        ? "Timp mediu de procesare: 2-4 săptămâni pentru majoritatea pozițiilor"
        : "Average processing time: 2-4 weeks for most positions"
    },
    {
      icon: Users,
      title: language === "RO" ? "Candidați Pre-selectați" : "Pre-screened Candidates",
      description: language === "RO"
        ? "Fiecare candidat este evaluat, testat și verificat înainte de prezentare"
        : "Each candidate is evaluated, tested and verified before presentation"
    },
    {
      icon: HeadphonesIcon,
      title: language === "RO" ? "Suport Complet" : "Complete Support",
      description: language === "RO"
        ? "Asistență pe tot parcursul procesului, de la recrutare la integrare"
        : "Support throughout the entire process, from recruitment to integration"
    }
  ]

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <ArrowLeft className="h-5 w-5 text-blue-600" />
              <Image src="/logo.png" alt="True ManPower" width={40} height={40} className="rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">True ManPower®</h1>
                <p className="text-sm text-blue-600">
                  {language === "RO" ? "Înapoi la pagina principală" : "Back to homepage"}
                </p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="outline" 
                onClick={() => setLanguage(language === "RO" ? "EN" : "RO")}
                className="text-sm"
              >
                {language === "RO" ? "EN" : "RO"}
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                {language === "RO" ? "Contactați-ne" : "Contact Us"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 text-sm px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              {language === "RO" ? "Pentru Angajatori" : "For Employers"}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {language === "RO" 
                ? "Găsiți Forța de Muncă din Asia pentru Compania Dumneavoastră"
                : "Find Asian Workforce for Your Company"}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              {language === "RO"
                ? "Conectăm companiile românești cu muncitori calificați și motivați din Pakistan, Bangladesh, Nepal, Sri Lanka și alte țări asiatice. Procesare completă, rapidă și sigură."
                : "We connect Romanian companies with skilled and motivated workers from Pakistan, Bangladesh, Nepal, Sri Lanka and other Asian countries. Complete, fast and secure processing."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" onClick={() => setShowLeadForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                <Calculator className="h-5 w-5 mr-2" />
                {language === "RO" ? "Calculează Costurile" : "Calculate Costs"}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4">
                <FileText className="h-5 w-5 mr-2" />
                {language === "RO" ? "Descarcă Ghidul" : "Download Guide"}
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">
                  {language === "RO" ? "Angajări Reușite" : "Successful Hires"}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">
                  {language === "RO" ? "Țări Partenere" : "Partner Countries"}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">
                  {language === "RO" ? "Rata de Succes" : "Success Rate"}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">
                  {language === "RO" ? "Suport Dedicat" : "Dedicated Support"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries in Demand */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === "RO" 
                ? "Industrii cu Cerere Mare de Forță de Muncă"
                : "Industries with High Workforce Demand"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === "RO"
                ? "Analizăm constant piața muncii pentru a identifica sectoarele cu cea mai mare cerere și să vă oferim candidații potriviți."
                : "We constantly analyze the labor market to identify sectors with the highest demand and provide you with suitable candidates."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesInDemand.map((industry, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4`}>
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{industry.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {language === "RO" ? "Cerere: " : "Demand: "}{industry.demand}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {language === "RO" ? "Salariu mediu:" : "Average salary:"}
                      </h4>
                      <p className="text-blue-600 font-semibold">{industry.avgSalary}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {language === "RO" ? "Poziții disponibile:" : "Available positions:"}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.positions.slice(0, 3).map((position, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {position}
                          </Badge>
                        ))}
                        {industry.positions.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{industry.positions.length - 3} {language === "RO" ? "altele" : "more"}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === "RO" 
                ? "De Ce Să Alegeți True ManPower®"
                : "Why Choose True ManPower®"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === "RO"
                ? "Suntem specializați în recrutarea forței de muncă din Asia, cu experiență vastă și o rețea extinsă de parteneri."
                : "We specialize in recruiting workforce from Asia, with vast experience and an extensive network of partners."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {language === "RO" 
                  ? "Începeți Recrutarea Acum"
                  : "Start Recruiting Now"}
              </h2>
              <p className="text-lg text-gray-600">
                {language === "RO"
                  ? "Completați formularul și veți fi contactat de un consultant specializat în maxim 24 de ore."
                  : "Fill out the form and you'll be contacted by a specialized consultant within 24 hours."}
              </p>
            </div>

            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === "RO" ? "Numele Companiei" : "Company Name"}
                      </label>
                      <Input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === "RO" ? "Industria" : "Industry"}
                      </label>
                      <Input
                        type="text"
                        value={formData.industry}
                        onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === "RO" ? "Numărul de Muncitori" : "Number of Workers"}
                      </label>
                      <Input
                        type="number"
                        min="1"
                        value={formData.workersNeeded}
                        onChange={(e) => setFormData(prev => ({ ...prev, workersNeeded: e.target.value }))}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === "RO" ? "Persoana de Contact" : "Contact Person"}
                      </label>
                      <Input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === "RO" ? "Telefon" : "Phone"}
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === "RO" ? "Email" : "Email"}
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "RO" ? "Mesaj Suplimentar (Opțional)" : "Additional Message (Optional)"}
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={4}
                      className="w-full"
                      placeholder={language === "RO" 
                        ? "Descrieți cerințele specifice ale companiei..." 
                        : "Describe your company's specific requirements..."}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                      <Mail className="h-5 w-5 mr-2" />
                      {language === "RO" ? "Trimite Solicitarea" : "Send Request"}
                    </Button>
                    <Button type="button" size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      <Phone className="h-5 w-5 mr-2" />
                      {language === "RO" ? "Sună Acum" : "Call Now"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/logo.png" alt="True ManPower" width={40} height={40} className="rounded-lg" />
              <div>
                <h3 className="text-lg font-bold">True ManPower® S.R.L.</h3>
                <p className="text-gray-400 text-sm">
                  {language === "RO" ? "Recrutare Internațională" : "International Recruitment"}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+40 799 870 326</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">office@truemanpower.ro</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 True ManPower® S.R.L. {language === "RO" ? "Toate drepturile rezervate." : "All rights reserved."}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}