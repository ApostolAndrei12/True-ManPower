// Search functionality for jobs and candidates

export interface JobListing {
  id: string
  title: string
  industry: string
  location: string
  salary: string
  type: string
  requirements: string[]
  benefits: string[]
  urgency: "high" | "normal" | "low"
  datePosted: string
  description: string
  keywords: string[]
}

export interface SearchFilters {
  query: string
  industry: string
  location: string
  salaryRange: string
  jobType: string
  urgency: string
}

// Mock job database - in production this would be from a real database
const jobDatabase: JobListing[] = [
  {
    id: "1",
    title: "Zidari Experimentați",
    industry: "Construcții",
    location: "București, Cluj-Napoca, Timișoara",
    salary: "4,500 - 6,000 RON",
    type: "Permanent",
    requirements: ["Experiență min. 3 ani", "Certificat de calificare", "Cunoștințe limba română - nivel de bază"],
    benefits: ["Cazare asigurată", "Transport la locul de muncă", "Asigurare medicală", "Prime de performanță"],
    urgency: "high",
    datePosted: "2024-01-15",
    description: "Căutăm zidari experimentați pentru proiecte de construcții rezidențiale și comerciale în marile orașe din România.",
    keywords: ["zidar", "construcții", "beton", "cărămidă", "zidărie", "construire"]
  },
  {
    id: "2",
    title: "Operatori Producție Auto",
    industry: "Producție",
    location: "Brașov, Pitești, Craiova",
    salary: "3,200 - 4,800 RON",
    type: "Permanent",
    requirements: ["Experiență în producție", "Atenție la detalii", "Disponibilitate program în schimburi"],
    benefits: ["Tichete de masă", "Transport asigurat", "Bonusuri", "Posibilități de avansare"],
    urgency: "high",
    datePosted: "2024-01-14",
    description: "Poziții disponibile în fabricile auto pentru operatori de producție cu experiență în industria automotive.",
    keywords: ["producție", "automotive", "fabrică", "operator", "linie de asamblare", "auto"]
  },
  {
    id: "3",
    title: "Muncitori Agricoli - Sezon de Vară",
    industry: "Agricultură",
    location: "Giurgiu, Călărași, Teleorman",
    salary: "2,800 - 3,500 RON",
    type: "Sezonier",
    requirements: ["Rezistență fizică", "Experiență în agricultură", "Disponibilitate 6 luni"],
    benefits: ["Cazare în fermă", "Masă asigurată", "Bonus de finalul sezonului", "Transport"],
    urgency: "normal",
    datePosted: "2024-01-13",
    description: "Oportunități sezoniere în fermele agricole pentru cultivarea și recoltarea legumelor și fructelor.",
    keywords: ["agricultură", "fermă", "recoltare", "cultivare", "sezonier", "legume", "fructe"]
  },
  {
    id: "4",
    title: "Șoferi Camion Categoria C+E",
    industry: "Transport",
    location: "Constanța, București, Arad",
    salary: "4,000 - 5,500 RON",
    type: "Permanent",
    requirements: ["Permis C+E valabil", "Experiență min. 2 ani", "Certificat de atestare profesională"],
    benefits: ["Diurnă pentru deplasări", "Asigurare completă", "Cazare în cabină", "Prime kilometraj"],
    urgency: "high",
    datePosted: "2024-01-12",
    description: "Căutăm șoferi profesioniști pentru transport intern și internațional cu camioane de mare tonaj.",
    keywords: ["șofer", "camion", "transport", "C+E", "internațional", "TIR"]
  },
  {
    id: "5",
    title: "Bucătari pentru Hoteluri",
    industry: "HoReCa",
    location: "Mamaia, Predeal, Sinaia",
    salary: "3,000 - 4,200 RON",
    type: "Sezonier/Permanent",
    requirements: ["Experiență în bucătărie", "Cunoștințe culinară europeană", "Certificat HACCP"],
    benefits: ["Cazare în resort", "3 mese/zi", "Tips de la clienți", "Program flexibil"],
    urgency: "normal",
    datePosted: "2024-01-11",
    description: "Pozițiile de bucătar în hoteluri și restaurante de lux din stațiunile turistice principale.",
    keywords: ["bucătar", "hotel", "restaurant", "HoReCa", "culinar", "gătit"]
  },
  {
    id: "6",
    title: "Personal Curățenie Industrială",
    industry: "Servicii",
    location: "București, Ploiești, Galați",
    salary: "2,500 - 3,200 RON",
    type: "Permanent",
    requirements: ["Experiență în curățenie", "Disponibilitate program noapte", "Certificat medical"],
    benefits: ["Echipament de protecție", "Transport asigurat", "Asigurare medicală", "Program stabil"],
    urgency: "low",
    datePosted: "2024-01-10",
    description: "Oportunități în serviciile de curățenie pentru complexe industriale și comerciale.",
    keywords: ["curățenie", "industrial", "servicii", "igienă", "mentenanță"]
  },
  {
    id: "7",
    title: "Dulgheri pentru Construcții",
    industry: "Construcții",
    location: "București, Iași, Constanța",
    salary: "4,200 - 5,800 RON",
    type: "Permanent",
    requirements: ["Experiență min. 4 ani", "Abilități în tâmplărie", "Cunoștințe utilaje lemn"],
    benefits: ["Cazare asigurată", "Unelte furnizate", "Asigurare medicală", "Bonus proiect"],
    urgency: "high",
    datePosted: "2024-01-09",
    description: "Dulgheri calificați pentru lucrări de construcții rezidențiale și comerciale.",
    keywords: ["dulger", "tâmplărie", "lemn", "construcții", "charpentă"]
  },
  {
    id: "8",
    title: "Tehnicieni în Electronică",
    industry: "Producție",
    location: "Cluj-Napoca, Timișoara",
    salary: "3,800 - 5,200 RON",
    type: "Permanent",
    requirements: ["Studii tehnice", "Experiență în electronică", "Cunoștințe de bază engleza"],
    benefits: ["Training continuu", "Echipament modern", "Tichete de masă", "Asigurare medicală"],
    urgency: "normal",
    datePosted: "2024-01-08",
    description: "Poziții pentru tehnicieni în fabricile de componente electronice și IT.",
    keywords: ["tehnician", "electronică", "IT", "componente", "producție"]
  }
]

export const searchJobs = (filters: SearchFilters): JobListing[] => {
  let results = [...jobDatabase]

  // Filter by search query
  if (filters.query.trim()) {
    const query = filters.query.toLowerCase().trim()
    results = results.filter(job => 
      job.title.toLowerCase().includes(query) ||
      job.description.toLowerCase().includes(query) ||
      job.keywords.some(keyword => keyword.toLowerCase().includes(query)) ||
      job.industry.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query)
    )
  }

  // Filter by industry
  if (filters.industry && filters.industry !== 'all') {
    results = results.filter(job => job.industry === filters.industry)
  }

  // Filter by location
  if (filters.location && filters.location !== 'all') {
    results = results.filter(job => job.location.includes(filters.location))
  }

  // Filter by job type
  if (filters.jobType && filters.jobType !== 'all') {
    results = results.filter(job => job.type === filters.jobType)
  }

  // Filter by urgency
  if (filters.urgency && filters.urgency !== 'all') {
    results = results.filter(job => job.urgency === filters.urgency)
  }

  // Filter by salary range
  if (filters.salaryRange && filters.salaryRange !== 'all') {
    results = results.filter(job => {
      const salaryText = job.salary.toLowerCase()
      switch (filters.salaryRange) {
        case '2000-3000':
          return salaryText.includes('2,') || salaryText.includes('3,')
        case '3000-4000':
          return salaryText.includes('3,') || salaryText.includes('4,')
        case '4000-5000':
          return salaryText.includes('4,') || salaryText.includes('5,')
        case '5000+':
          return salaryText.includes('5,') || salaryText.includes('6,')
        default:
          return true
      }
    })
  }

  // Sort by urgency (high first) and then by date
  results.sort((a, b) => {
    if (a.urgency === 'high' && b.urgency !== 'high') return -1
    if (b.urgency === 'high' && a.urgency !== 'high') return 1
    return new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
  })

  return results
}

export const getJobById = (id: string): JobListing | null => {
  return jobDatabase.find(job => job.id === id) || null
}

export const getRelatedJobs = (job: JobListing, limit: number = 3): JobListing[] => {
  return jobDatabase
    .filter(j => j.id !== job.id && (j.industry === job.industry || j.location === job.location))
    .sort(() => Math.random() - 0.5)
    .slice(0, limit)
}

export const getPopularSearchTerms = (): string[] => {
  return [
    "zidari",
    "operatori producție",
    "șoferi",
    "bucătari",
    "dulgheri",
    "muncitori agricoli",
    "tehnicieni",
    "personal curățenie"
  ]
}

export const getAvailableIndustries = (): string[] => {
  return [...new Set(jobDatabase.map(job => job.industry))].sort()
}

export const getAvailableLocations = (): string[] => {
  const allLocations = jobDatabase.flatMap(job => 
    job.location.split(', ').map(loc => loc.trim())
  )
  return [...new Set(allLocations)].sort()
}