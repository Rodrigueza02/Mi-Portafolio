"use client"

import { useState } from "react"
import { Code, GraduationCap, Target, Zap, Gauge, Trophy, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"

// Contenido para búsqueda
const aboutContent = [
  { id: "sobre-mi", section: "Sobre mí", text: "Información personal" },
  { id: "habilidades", section: "Habilidades", text: "Software y tecnologías" },
  { id: "estudios", section: "Estudios", text: "Formación académica" },
  { id: "objetivos", section: "Objetivos", text: "Metas profesionales" },
]

// Datos de habilidades
const habilidades = [
  { icon: Code, label: "Desarrollo Web", level: 90 },
  { icon: Gauge, label: "Performance", level: 85 },
  { icon: Zap, label: "Innovación", level: 95 },
  { icon: Users, label: "Trabajo en Equipo", level: 88 },
]

// Datos de estudios
const estudios = [
  { year: "2020-2024", title: "Ingeniería en Software", institution: "Universidad Tecnológica" },
  { year: "2023", title: "Especialización en UX/UI", institution: "Design Academy" },
  { year: "2022", title: "Certificación Cloud", institution: "AWS Certified" },
]

// Datos de objetivos
const objetivos = [
  { icon: Trophy, title: "Excelencia Técnica", description: "Dominar las últimas tecnologías" },
  { icon: Heart, title: "Diseño con Pasión", description: "Crear interfaces que enamoren" },
  { icon: Target, title: "Impacto Global", description: "Crear soluciones que marquen la diferencia" },
]

export default function AboutPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"habilidades" | "estudios" | "objetivos">("habilidades")

  const filteredContent = aboutContent.filter(
    (item) =>
      item.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.text.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex min-h-screen flex-col racing-gradient smoke-overlay speed-stripes-overlay vignette relative overflow-hidden">
      {/* Elementos decorativos de fondo - MÁS INTENSOS */}
      <div className="glow-orb-intense absolute -left-40 top-1/3 h-80 w-80 bg-red-600/45" />
      <div className="glow-orb-intense absolute -right-48 bottom-1/4 h-96 w-96 bg-red-700/35" style={{ animationDelay: "2s" }} />
      <div className="glow-orb-intense absolute left-1/2 top-2/3 h-64 w-64 bg-red-500/40" style={{ animationDelay: "3s" }} />
      <div className="glow-orb-intense absolute right-1/4 top-1/4 h-56 w-56 bg-red-800/30" style={{ animationDelay: "4s" }} />
      
      {/* Líneas de luz en movimiento */}
      <div className="particles-container">
        <div className="light-streak absolute top-[20%] w-1/3" style={{ animationDelay: "0s" }} />
        <div className="light-streak absolute top-[40%] w-2/5" style={{ animationDelay: "1.5s" }} />
        <div className="light-streak absolute top-[60%] w-1/2" style={{ animationDelay: "2.5s" }} />
        <div className="light-streak absolute top-[80%] w-1/4" style={{ animationDelay: "3.5s" }} />
      </div>

      <Navbar 
        searchPlaceholder="Buscar info..." 
        onSearch={setSearchQuery}
      />

      {/* Resultados de búsqueda */}
      {searchQuery && (
        <div className="border-b border-border bg-card/90 backdrop-blur relative z-10">
          <div className="container mx-auto px-4 py-3">
            <p className="mb-2 text-sm text-muted-foreground">
              Resultados para &quot;{searchQuery}&quot;:
            </p>
            <div className="flex flex-wrap gap-2">
              {filteredContent.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setTimeout(() => setActiveSection(null), 2000)
                  }}
                  className="rounded-md bg-primary/10 px-3 py-1 text-sm text-foreground transition-colors hover:bg-primary/20"
                >
                  {item.section}
                </button>
              ))}
              {filteredContent.length === 0 && (
                <span className="text-sm text-muted-foreground">No se encontraron resultados</span>
              )}
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 py-8 md:py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Lado izquierdo - Imagen personal */}
            <div className="flex flex-col">
              <div 
                className={`relative aspect-[3/4] max-h-[500px] w-full overflow-hidden rounded-xl border border-border/50 transition-all backdrop-blur-sm ${activeSection === "sobre-mi" ? "ring-2 ring-primary" : ""}`}
              >
                {/* Imagen placeholder con estilo racing */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary to-card racing-stripes">
                  {/* Silueta estilizada */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Círculo de fondo */}
                      <div className="h-48 w-48 rounded-full bg-gradient-to-br from-primary/50 to-transparent md:h-64 md:w-64 animate-pulse-glow" />
                      {/* Líneas de velocidad */}
                      <div className="absolute left-0 top-1/4 h-px w-32 bg-gradient-to-r from-primary to-transparent animate-speed-lines" />
                      <div className="absolute left-0 top-1/2 h-px w-48 bg-gradient-to-r from-primary/60 to-transparent animate-speed-lines" style={{ animationDelay: "0.5s" }} />
                      <div className="absolute left-0 top-3/4 h-px w-24 bg-gradient-to-r from-primary/30 to-transparent animate-speed-lines" style={{ animationDelay: "1s" }} />
                    </div>
                  </div>
                </div>
                
                {/* Overlay con nombre */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-foreground text-glow">
                    Diseñador <span className="text-primary">Digital</span>
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">Desarrollador & Creativo UI/UX</p>
                </div>
              </div>
            </div>

            {/* Lado derecho - Contenido */}
            <div className="flex flex-col gap-6">
              {/* Sección Sobre mí */}
              <div 
                id="sobre-mi"
                className={`rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur-lg transition-all card-lift ${activeSection === "sobre-mi" ? "ring-2 ring-primary" : ""}`}
              >
                <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-foreground text-glow">
                  Sobre <span className="text-primary">Mí</span>
                </h1>
                <div className="mt-3 h-1 w-24 bg-gradient-to-r from-primary to-transparent" />
                
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Soy un apasionado por la <span className="font-semibold text-primary">adrenalina</span> y 
                    la velocidad en todo lo que hago. Desde pequeño, la creatividad y el diseño 
                    capturaron mi imaginación y definieron mi forma de ver el mundo.
                  </p>
                  <p className="leading-relaxed">
                    Mi amor por las <span className="font-semibold text-primary">interfaces dinámicas</span> se traduce 
                    en mi trabajo: busco la precisión milimétrica, la optimización constante 
                    y el rendimiento máximo en cada proyecto.
                  </p>
                  <p className="leading-relaxed">
                    La <span className="font-semibold text-primary">velocidad</span> no es solo llegar 
                    primero, es la eficiencia, la elegancia en el movimiento, la capacidad 
                    de adaptarse en fracciones de segundo.
                  </p>
                  <p className="leading-relaxed">
                    Mi <span className="font-semibold text-primary">estilo de vida dinámico</span> me 
                    impulsa a estar siempre en movimiento, aprendiendo, mejorando, 
                    superando mis propios límites cada día.
                  </p>
                </div>
              </div>

              {/* Botones de datos/enlaces */}
              <div className="flex flex-wrap gap-3">
                <Button
                  variant={activeTab === "habilidades" ? "default" : "outline"}
                  onClick={() => setActiveTab("habilidades")}
                  className={`uppercase tracking-wide btn-racing ${activeTab === "habilidades" ? "gradient-red" : "border-primary/50 hover:bg-primary/10"}`}
                >
                  <Code className="mr-2 h-4 w-4" />
                  Habilidades
                </Button>
                <Button
                  variant={activeTab === "estudios" ? "default" : "outline"}
                  onClick={() => setActiveTab("estudios")}
                  className={`uppercase tracking-wide btn-racing ${activeTab === "estudios" ? "gradient-red" : "border-primary/50 hover:bg-primary/10"}`}
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Estudios
                </Button>
                <Button
                  variant={activeTab === "objetivos" ? "default" : "outline"}
                  onClick={() => setActiveTab("objetivos")}
                  className={`uppercase tracking-wide btn-racing ${activeTab === "objetivos" ? "gradient-red" : "border-primary/50 hover:bg-primary/10"}`}
                >
                  <Target className="mr-2 h-4 w-4" />
                  Objetivos
                </Button>
              </div>

              {/* Contenido dinámico según tab activo */}
              <div 
                className={`rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur-lg transition-all card-lift ${activeSection === activeTab ? "ring-2 ring-primary" : ""}`}
              >
                {/* Habilidades */}
                {activeTab === "habilidades" && (
                  <div id="habilidades" className="space-y-4 animate-fade-in-up">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-foreground">
                      Habilidades
                    </h3>
                    {habilidades.map((skill) => (
                      <div key={skill.label} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <skill.icon className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">{skill.label}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-secondary">
                          <div 
                            className="h-full rounded-full gradient-red transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Estudios */}
                {activeTab === "estudios" && (
                  <div id="estudios" className="space-y-4 animate-fade-in-up">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-foreground">
                      Estudios
                    </h3>
                    {estudios.map((estudio, index) => (
                      <div 
                        key={index}
                        className="flex gap-4 rounded-lg border border-border/50 bg-secondary/30 p-4 transition-all card-lift hover:border-primary/50"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-primary">
                            {estudio.year}
                          </p>
                          <p className="font-medium text-foreground">{estudio.title}</p>
                          <p className="text-sm text-muted-foreground">{estudio.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Objetivos */}
                {activeTab === "objetivos" && (
                  <div id="objetivos" className="space-y-4 animate-fade-in-up">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-foreground">
                      Objetivos
                    </h3>
                    {objetivos.map((objetivo, index) => (
                      <div 
                        key={index}
                        className="flex gap-4 rounded-lg border border-border/50 bg-secondary/30 p-4 transition-all card-lift hover:border-primary/50"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <objetivo.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{objetivo.title}</p>
                          <p className="text-sm text-muted-foreground">{objetivo.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
