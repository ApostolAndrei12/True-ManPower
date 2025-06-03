"use client"

import { sendJobApplication, type JobApplicationData } from "@/lib/email"
import { searchJobs, getAvailableIndustries, getAvailableLocations, type SearchFilters, type JobListing } from "@/lib/search"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  MapPin,
  Search,
  Filter,
  Briefcase,
  Clock,
  DollarSign,
  Star,
  HardHat,
  Factory,
  Utensils,
  Truck,
  Sprout,
  Sparkles,
  Home,
  ArrowLeft,
  FileText,
  Award,
  Shield,
  TrendingUp,
  HeadphonesIcon
} from "lucide-react"

interface JobOpportunity {
  id: string
  title: string
  industry: string
  location: string
  salary: string
  type: string
  requirements: string[]
  benefits: string[]
  urgency: "high" | "normal" | "low"
  icon: any
  color: string
}

export default function FindingJobsPage() {
  const [language, setLanguage] = useState<"RO" | "EN">("RO")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedJobType, setSelectedJobType] = useState("all")
  const [selectedUrgency, setSelectedUrgency] = useState("all")
  const [jobResults, setJobResults] = useState<JobListing[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    preferredIndustry: "",
    expectedSalary: "",
    availability: "",
    message: ""
  })

  // Perform search on component mount and when filters change
  useEffect(() => {
    performSearch()
  }, [searchTerm, selectedIndustry, selectedLocation, selectedJobType, selectedUrgency])

  const performSearch = async () => {
    setIsSearching(true)
    
    const filters: SearchFilters = {
      query: searchTerm,
      industry: selectedIndustry,
      location: selectedLocation,
      salaryRange: "all",
      jobType: selectedJobType,
      urgency: selectedUrgency
    }

    try {
      const results = searchJobs(filters)
      setJobResults(results)
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setIsSearching(false)
    }
  }

  const jobOpportunities: JobOpportunity[] = [
    {
      id: "1",
      title: language === "RO" ? "Zidari Experimentați" : "Experienced Masons",
      industry: language === "RO" ? "Construcții" : "Construction",
      location: "București, Cluj-Napoca, Timișoara",
      salary: "4,500 - 6,000 RON",
      type: language === "RO" ? "Permanent" : "Permanent",
      requirements: language === "RO" 
        ? ["Experiență min. 3 ani", "Certificat de calificare", "Cunoștințe limba română - nivel de bază"]
        : ["Min. 3 years experience", "Qualification certificate", "Basic Romanian language skills"],
      benefits: language === "RO"
        ? ["Cazare asigurată", "Transport la locul de muncă", "Asigurare medicală", "Prime de performanță"]
        : ["Accommodation provided", "Transport to workplace", "Medical insurance", "Performance bonuses"],
      urgency: "high",
      icon: HardHat,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: "2",
      title: language === "RO" ? "Operatori Producție Auto" : "Automotive Production Operators",
      industry: language === "RO" ? "Producție" : "Manufacturing",
      location: "Brașov, Pitești, Craiova",
      salary: "3,200 - 4,800 RON",
      type: language === "RO" ? "Permanent" : "Permanent",
      requirements: language === "RO"
        ? ["Experiență în producție", "Atenție la detalii", "Disponibilitate program în schimburi"]
        : ["Production experience", "Attention to detail", "Shift work availability"],
      benefits: language === "RO"
        ? ["Tichete de masă", "Transport asigurat", "Bonusuri", "Posibilități de avansare"]
        : ["Meal vouchers", "Transport provided", "Bonuses", "Career advancement opportunities"],
      urgency: "high",
      icon: Factory,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: "3",
      title: language === "RO" ? "Muncitori Agricoli - Sezon de Vară" : "Agricultural Workers - Summer Season",
      industry: language === "RO" ? "Agricultură" : "Agriculture",
      location: "Giurgiu, Călărași, Teleorman",
      salary: "2,800 - 3,500 RON",
      type: language === "RO" ? "Sezonier" : "Seasonal",
      requirements: language === "RO"
        ? ["Rezistență fizică", "Experiență în agricultură", "Disponibilitate 6 luni"]
        : ["Physical endurance", "Agricultural experience", "6 months availability"],
      benefits: language === "RO"
        ? ["Cazare în fermă", "Masă asigurată", "Bonus de finalul sezonului", "Transport"]
        : ["Farm accommodation", "Meals provided", "End-of-season bonus", "Transportation"],
      urgency: "normal",
      icon: Sprout,
      color: "from-green-400 to-green-600"
    },
    {
      id: "4",
      title: language === "RO" ? "Șoferi Camion Categoria C+E" : "Truck Drivers Category C+E",
      industry: language === "RO" ? "Transport" : "Transport",
      location: "Constanța, București, Arad",
      salary: "4,000 - 5,500 RON",
      type: language === "RO" ? "Permanent" : "Permanent",
      requirements: language === "RO"
        ? ["Permis C+E valabil", "Experiență min. 2 ani", "Certificat de atestare profesională"]
        : ["Valid C+E license", "Min. 2 years experience", "Professional attestation certificate"],
      benefits: language === "RO"
        ? ["Diurnă pentru deplasări", "Asigurare completă", "Cazare în cabină", "Prime kilometraj"]
        : ["Travel allowance", "Full insurance", "Cabin accommodation", "Mileage bonuses"],
      urgency: "high",
      icon: Truck,
      color: "from-purple-400 to-purple-600"
    },
    {
      id: "5",
      title: language === "RO" ? "Bucătari pentru Hoteluri" : "Hotel Cooks",
      industry: language === "RO" ? "HoReCa" : "Hospitality",
      location: "Mamaia, Predeal, Sinaia",
      salary: "3,000 - 4,200 RON",
      type: language === "RO" ? "Sezonier/Permanent" : "Seasonal/Permanent",
      requirements: language === "RO"
        ? ["Experiență în bucătărie", "Cunoștințe culinară europeană", "Certificat HACCP"]
        : ["Kitchen experience", "European cuisine knowledge", "HACCP certificate"],
      benefits: language === "RO"
        ? ["Cazare în resort", "3 mese/zi", "Tips de la clienți", "Program flexibil"]
        : ["Resort accommodation", "3 meals/day", "Customer tips", "Flexible schedule"],
      urgency: "normal",
      icon: Utensils,
      color: "from-pink-400 to-pink-600"
    },
    {
      id: "6",
      title: language === "RO" ? "Personal Curățenie Industrială" : "Industrial Cleaning Staff",
      industry: language === "RO" ? "Servicii" : "Services",
      location: "București, Ploiești, Galați",
      salary: "2,500 - 3,200 RON",
      type: language === "RO" ? "Permanent" : "Permanent",
      requirements: language === "RO"
        ? ["Experiență în curățenie", "Disponibilitate program noapte", "Certificat medical"]
        : ["Cleaning experience", "Night shift availability", "Medical certificate"],
      benefits: language === "RO"
        ? ["Echipament de protecție", "Transport asigurat", "Asigurare medicală", "Program stabil"]
        : ["Protective equipment", "Transport provided", "Medical insurance", "Stable schedule"],
      urgency: "low",
      icon: Sparkles,
      color: "from-cyan-400 to-cyan-600"
    }
  ]

  const processSteps = [
    {
      icon: FileText,
      title: language === "RO" ? "1. Aplicați Online" : "1. Apply Online",
      description: language === "RO" 
        ? "Completați formularul cu informațiile dumneavoastră și preferințele pentru job"
        : "Fill out the form with your information and job preferences"
    },
    {
      icon: Users,
      title: language === "RO" ? "2. Interviu Initial" : "2. Initial Interview",
      description: language === "RO"
        ? "Discutăm despre experiența și așteptările dumneavoastră"
        : "We discuss your experience and expectations"
    },
    {
      icon: Shield,
      title: language === "RO" ? "3. Verificări și Documente" : "3. Verification & Documents",
      description: language === "RO"
        ? "Procesăm documentele și obținem permisele necesare"
        : "We process documents and obtain necessary permits"
    },
    {
      icon: TrendingUp,
      title: language === "RO" ? "4. Plasare și Suport" : "4. Placement & Support",
      description: language === "RO"
        ? "Vă ajutăm să vă integrați și oferim suport continuu"
        : "We help you integrate and provide ongoing support"
    }
  ]

  const filteredJobs = jobOpportunities.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.industry.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesIndustry = selectedIndustry === "all" || job.industry === selectedIndustry
    const matchesLocation = selectedLocation === "all" || job.location.includes(selectedLocation)
    
    return matchesSearch && matchesIndustry && matchesLocation
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Candidate form submitted:", formData)
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

      {/* Hero Section with Job Search */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 text-sm px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              {language === "RO" ? "Pentru Candidați" : "For Candidates"}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {language === "RO" 
                ? "Găsiți-vă Jobul de Vis în România"
                : "Find Your Dream Job in Romania"}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              {language === "RO"
                ? "Oferim oportunități de muncă în România pentru muncitori calificați din Asia. Proces simplu, suport complet și job-uri bine plătite în diverse industrii."
                : "We offer job opportunities in Romania for skilled workers from Asia. Simple process, complete support and well-paid jobs in various industries."}
            </p>

            {/* Job Search Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder={language === "RO" ? "Căutați job..." : "Search jobs..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger>
                    <SelectValue placeholder={language === "RO" ? "Toate industriile" : "All industries"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{language === "RO" ? "Toate industriile" : "All industries"}</SelectItem>
                    <SelectItem value={language === "RO" ? "Construcții" : "Construction"}>{language === "RO" ? "Construcții" : "Construction"}</SelectItem>
                    <SelectItem value={language === "RO" ? "Producție" : "Manufacturing"}>{language === "RO" ? "Producție" : "Manufacturing"}</SelectItem>
                    <SelectItem value={language === "RO" ? "Agricultură" : "Agriculture"}>{language === "RO" ? "Agricultură" : "Agriculture"}</SelectItem>
                    <SelectItem value={language === "RO" ? "Transport" : "Transport"}>{language === "RO" ? "Transport" : "Transport"}</SelectItem>
                    <SelectItem value={language === "RO" ? "HoReCa" : "Hospitality"}>{language === "RO" ? "HoReCa" : "Hospitality"}</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder={language === "RO" ? "Toate orașele" : "All cities"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{language === "RO" ? "Toate orașele" : "All cities"}</SelectItem>
                    <SelectItem value="București">București</SelectItem>
                    <SelectItem value="Cluj-Napoca">Cluj-Napoca</SelectItem>
                    <SelectItem value="Timișoara">Timișoara</SelectItem>
                    <SelectItem value="Brașov">Brașov</SelectItem>
                    <SelectItem value="Constanța">Constanța</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Search className="h-4 w-4 mr-2" />
                  {language === "RO" ? "Căutare" : "Search"}
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600 mb-1">250+</div>
                <div className="text-sm text-gray-600">
                  {language === "RO" ? "Job-uri Active" : "Active Jobs"}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">
                  {language === "RO" ? "Industrii" : "Industries"}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600 mb-1">40+</div>
                <div className="text-sm text-gray-600">
                  {language === "RO" ? "Orașe" : "Cities"}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                <div className="text-sm text-gray-600">
                  {language === "RO" ? "Rata de Plasare" : "Placement Rate"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === "RO" 
                ? "Oportunități de Muncă Disponibile"
                : "Available Job Opportunities"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === "RO"
                ? "Explorați job-urile disponibile și aplicați pentru poziția care vi se potrivește cel mai bine."
                : "Explore available jobs and apply for the position that suits you best."}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${job.color} flex items-center justify-center`}>
                        <job.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                        <p className="text-gray-600">{job.industry}</p>
                      </div>
                    </div>
                    {job.urgency === "high" && (
                      <Badge className="bg-red-100 text-red-800">
                        {language === "RO" ? "Urgent" : "Urgent"}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{job.industry}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {language === "RO" ? "Cerințe:" : "Requirements:"}
                    </h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {language === "RO" ? "Beneficii:" : "Benefits:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.benefits.slice(0, 3).map((benefit, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      {language === "RO" ? "Aplicați pentru acest job" : "Apply for this job"}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {language === "RO" 
                  ? "Nu s-au găsit job-uri pentru criteriile selectate."
                  : "No jobs found for the selected criteria."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === "RO" 
                ? "Cum Funcționează Procesul"
                : "How the Process Works"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === "RO"
                ? "Un proces simplu și transparent care vă ghidează de la aplicare până la integrarea în noul job."
                : "A simple and transparent process that guides you from application to integration into your new job."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {language === "RO" 
                  ? "Aplicați Acum pentru Job-uri în România"
                  : "Apply Now for Jobs in Romania"}
              </h2>
              <p className="text-lg text-gray-600">
                {language === "RO"
                  ? "Completați formularul și vă vom contacta cu oportunități potrivite pentru dumneavoastră."
                  : "Fill out the form and we'll contact you with opportunities that suit you."}
              </p>
            </div>

            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === "RO" ? "Numele Complet" : "Full Name"}
                      </label>
                      <Input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
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
                        {language === "RO" ? "Ani de Experiență" : "Years of Experience"}
                      </label>
                      <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === "RO" ? "Selectați..." : "Select..."} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">{language === "RO" ? "0-1 ani" : "0-1 years"}</SelectItem>
                          <SelectItem value="2-3">{language === "RO" ? "2-3 ani" : "2-3 years"}</SelectItem>
                          <SelectItem value="4-5">{language === "RO" ? "4-5 ani" : "4-5 years"}</SelectItem>
                          <SelectItem value="5+">{language === "RO" ? "5+ ani" : "5+ years"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === "RO" ? "Industria Preferată" : "Preferred Industry"}
                      </label>
                      <Select value={formData.preferredIndustry} onValueChange={(value) => setFormData(prev => ({ ...prev, preferredIndustry: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === "RO" ? "Selectați..." : "Select..."} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">{language === "RO" ? "Construcții" : "Construction"}</SelectItem>
                          <SelectItem value="manufacturing">{language === "RO" ? "Producție" : "Manufacturing"}</SelectItem>
                          <SelectItem value="agriculture">{language === "RO" ? "Agricultură" : "Agriculture"}</SelectItem>
                          <SelectItem value="transport">{language === "RO" ? "Transport" : "Transport"}</SelectItem>
                          <SelectItem value="hospitality">{language === "RO" ? "HoReCa" : "Hospitality"}</SelectItem>
                          <SelectItem value="services">{language === "RO" ? "Servicii" : "Services"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === "RO" ? "Salariul Așteptat (RON)" : "Expected Salary (RON)"}
                      </label>
                      <Select value={formData.expectedSalary} onValueChange={(value) => setFormData(prev => ({ ...prev, expectedSalary: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === "RO" ? "Selectați..." : "Select..."} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2000-3000">2,000 - 3,000 RON</SelectItem>
                          <SelectItem value="3000-4000">3,000 - 4,000 RON</SelectItem>
                          <SelectItem value="4000-5000">4,000 - 5,000 RON</SelectItem>
                          <SelectItem value="5000+">5,000+ RON</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "RO" ? "Disponibilitatea de Începere" : "Availability to Start"}
                    </label>
                    <Select value={formData.availability} onValueChange={(value) => setFormData(prev => ({ ...prev, availability: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder={language === "RO" ? "Selectați..." : "Select..."} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">{language === "RO" ? "Imediat" : "Immediately"}</SelectItem>
                        <SelectItem value="1-month">{language === "RO" ? "În 1 lună" : "Within 1 month"}</SelectItem>
                        <SelectItem value="2-months">{language === "RO" ? "În 2 luni" : "Within 2 months"}</SelectItem>
                        <SelectItem value="3-months">{language === "RO" ? "În 3 luni" : "Within 3 months"}</SelectItem>
                      </SelectContent>
                    </Select>
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
                        ? "Descrieți experiența dumneavoastră și ce căutați..." 
                        : "Describe your experience and what you're looking for..."}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                      <Mail className="h-5 w-5 mr-2" />
                      {language === "RO" ? "Trimite Aplicația" : "Send Application"}
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