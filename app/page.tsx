import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/sections/AnimatedSection"
import { ModernCard } from "@/components/ui/modern-card"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Professional team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Recrutăm Talente Globale pentru Companiile din România
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Servicii complete de recrutare internațională din țări non-UE, cu focus pe calitate și eficiență.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
                Consultație Gratuită
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg">
                Sună Acum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Servicii Complete de Recrutare
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ModernCard
              className="p-6"
              hover="lift"
              shadow="lg"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Recrutare Internațională</h3>
              <p className="text-gray-600">Identificăm și selectăm candidați calificați din țări non-UE pentru a satisface nevoile specifice ale companiei dumneavoastră.</p>
            </ModernCard>

            <ModernCard
              className="p-6"
              hover="lift"
              shadow="lg"
            >
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Asistență Completă</h3>
              <p className="text-gray-600">Gestionăm întregul proces de la selecție până la integrare, inclusiv documentație și permise de muncă.</p>
            </ModernCard>

            <ModernCard
              className="p-6"
              hover="lift"
              shadow="lg"
            >
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proces Rapid</h3>
              <p className="text-gray-600">Optimizăm fiecare etapă pentru a vă aduce talentele necesare în cel mai scurt timp posibil.</p>
            </ModernCard>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pregătiți să Vă Dezvoltați Echipa?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactați-ne astăzi pentru o consultație gratuită și descoperiți cum vă putem ajuta să găsiți talentele potrivite pentru afacerea dumneavoastră.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
            Programează o Consultație
          </Button>
        </div>
      </AnimatedSection>
    </main>
  )
}