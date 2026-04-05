"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ChevronRight, Zap, Flag, Trophy, Gauge, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/portfolio/footer"

const sections = [
  { id: "intro", title: "Introducción", icon: Zap },
  { id: "velocidad", title: "Velocidad", icon: Gauge },
  { id: "proyectos", title: "Proyectos", icon: Flag },
  { id: "logros", title: "Logros", icon: Trophy },
]

export default function InicioPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex min-h-screen flex-col racing-gradient smoke-overlay speed-stripes-overlay vignette relative overflow-hidden">
      {/* Elementos decorativos animados - MÁS INTENSOS */}
      <div className="glow-orb-intense absolute -left-48 top-1/4 h-96 w-96 bg-red-600/50" />
      <div className="glow-orb-intense absolute -right-48 bottom-1/4 h-80 w-80 bg-red-700/45" style={{ animationDelay: "2s" }} />
      <div className="glow-orb-intense absolute left-1/2 top-1/3 h-64 w-64 bg-red-500/40" style={{ animationDelay: "4s" }} />
      <div className="glow-orb-intense absolute right-1/3 top-2/3 h-72 w-72 bg-red-800/35" style={{ animationDelay: "3s" }} />
      <div className="glow-orb-intense absolute left-1/4 bottom-1/3 h-56 w-56 bg-red-600/30" style={{ animationDelay: "5s" }} />
      
      {/* Líneas de luz en movimiento */}
      <div className="particles-container">
        <div className="light-streak absolute top-[15%] w-1/3" style={{ animationDelay: "0s" }} />
        <div className="light-streak absolute top-[30%] w-2/5" style={{ animationDelay: "1s" }} />
        <div className="light-streak absolute top-[50%] w-1/2" style={{ animationDelay: "2s" }} />
        <div className="light-streak absolute top-[70%] w-1/3" style={{ animationDelay: "1.5s" }} />
        <div className="light-streak absolute top-[85%] w-2/5" style={{ animationDelay: "3s" }} />
      </div>

      {/* Header simple */}
      <header className="border-b border-border/40 bg-card/30 backdrop-blur relative z-10">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <button className="rounded-md p-2 text-foreground transition-colors hover:bg-primary/20 md:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-wider text-primary text-glow">
            MI <span className="text-foreground">PORTAFOLIO</span>
          </span>
          <Sparkles className="h-5 w-5 text-primary animate-pulse" />
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8 md:flex-row md:gap-12 md:py-16 relative z-10">
        {/* Bloque de contenido principal (izquierda) */}
        <div className="mb-8 w-full max-w-xl animate-fade-in-up md:mb-0">
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/60 p-6 shadow-2xl backdrop-blur-lg md:p-10 racing-stripes">
            {/* Efecto de velocidad interno */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-full top-1/4 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-speed-lines" />
              <div className="absolute -left-full top-2/4 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-speed-lines" style={{ animationDelay: "0.5s" }} />
              <div className="absolute -left-full top-3/4 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-speed-lines" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10">
              <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-foreground md:text-5xl text-glow">
                Portafolio <span className="text-primary">Personal</span>
              </h1>
              
              <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-primary/20" />
              
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Bienvenido a mi mundo de creatividad y velocidad. Aquí encontrarás mis proyectos, 
                experiencias y todo lo que me define como profesional del diseño de interfaces.
              </p>
              
              <p className="mt-4 text-muted-foreground">
                La adrenalina, la precisión técnica y el trabajo en equipo 
                son los pilares que guían mi carrera profesional.
              </p>

              {/* Estadísticas rápidas */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary md:text-3xl">5+</span>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Años Exp.</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary md:text-3xl">20+</span>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Proyectos</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary md:text-3xl">100%</span>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Pasión</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel derecho */}
        <div className="flex w-full max-w-sm flex-col gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {/* Buscador */}
          <div className="rounded-xl border border-border/50 bg-card/60 p-5 shadow-lg backdrop-blur-lg">
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wide text-foreground">
              Buscar Sección
            </h2>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-input/80 px-4 py-3">
              <Search className="h-5 w-5 text-primary" />
              <input
                type="text"
                placeholder="Buscar sección..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>

            {/* Lista de secciones filtradas */}
            <div className="mt-4 space-y-2">
              {filteredSections.map((section) => (
                <div
                  key={section.id}
                  className="flex items-center gap-3 rounded-lg border border-border/50 bg-secondary/30 px-4 py-2 transition-all hover:border-primary/50 hover:bg-primary/10 card-lift cursor-pointer"
                >
                  <section.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">{section.title}</span>
                </div>
              ))}
              {filteredSections.length === 0 && (
                <p className="py-2 text-center text-sm text-muted-foreground">
                  No se encontraron secciones
                </p>
              )}
            </div>
          </div>

          {/* Botón de entrada */}
          <Link href="/home" className="block">
            <Button 
              className="group w-full gradient-red py-6 text-lg font-semibold uppercase tracking-wider shadow-lg btn-racing animate-pulse-glow"
            >
              Entrar al Portafolio
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          {/* Versión móvil: ver home directo */}
          <Link href="/home" className="block md:hidden">
            <Button 
              variant="outline" 
              className="w-full border-primary/50 py-4 uppercase tracking-wider text-primary hover:bg-primary/10"
            >
              Ver Home
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
