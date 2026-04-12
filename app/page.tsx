"use client"

import Link from "next/link"
import { ChevronRight, Zap, Flag, Trophy, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/portfolio/footer"
import { useLanguage } from "@/contexts/language-context"
import { Navbar } from "@/components/portfolio/navbar"

export default function InicioPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col racing-gradient smoke-overlay speed-stripes-overlay vignette relative overflow-hidden pt-14 md:pt-16">
      {/* Elementos decorativos animados */}
      <div className="glow-orb-intense absolute -left-48 top-1/4 h-96 w-96 bg-red-600/50" />
      <div className="glow-orb-intense absolute -right-48 bottom-1/4 h-80 w-80 bg-red-700/45" style={{ animationDelay: "2s" }} />
      <div className="glow-orb-intense absolute left-1/2 top-1/3 h-64 w-64 bg-red-500/40" style={{ animationDelay: "4s" }} />
      <div className="glow-orb-intense absolute right-1/3 top-2/3 h-72 w-72 bg-red-800/35" style={{ animationDelay: "3s" }} />
      <div className="glow-orb-intense absolute left-1/4 bottom-1/3 h-56 w-56 bg-red-600/30" style={{ animationDelay: "5s" }} />
      
      {/* Lineas de luz en movimiento */}
      <div className="particles-container">
        <div className="light-streak absolute top-[15%] w-1/3" style={{ animationDelay: "0s" }} />
        <div className="light-streak absolute top-[30%] w-2/5" style={{ animationDelay: "1s" }} />
        <div className="light-streak absolute top-[50%] w-1/2" style={{ animationDelay: "2s" }} />
        <div className="light-streak absolute top-[70%] w-1/3" style={{ animationDelay: "1.5s" }} />
        <div className="light-streak absolute top-[85%] w-2/5" style={{ animationDelay: "3s" }} />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8 md:py-16 relative z-10">
        {/* Bloque de contenido principal centrado */}
        <div className="w-full max-w-3xl animate-fade-in-up">
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/60 p-6 shadow-2xl backdrop-blur-lg md:p-10 racing-stripes">
            {/* Efecto de velocidad interno */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-full top-1/4 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-speed-lines" />
              <div className="absolute -left-full top-2/4 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-speed-lines" style={{ animationDelay: "0.5s" }} />
              <div className="absolute -left-full top-3/4 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-speed-lines" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 text-center">
              <Sparkles className="mx-auto h-8 w-8 text-primary animate-pulse mb-4" />
              
              <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-foreground md:text-5xl lg:text-6xl text-glow">
                {t("home.personalPortfolio").split(" ")[0]} <span className="text-primary">{t("home.personalPortfolio").split(" ").slice(1).join(" ")}</span>
              </h1>
              
              <div className="mx-auto mt-4 h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                {t("home.description")}
              </p>
              
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {t("home.commitment")}
              </p>

              {/* Estadisticas rapidas */}
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                  <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary md:text-3xl">1+</span>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{t("home.yearsExp")}</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Flag className="h-5 w-5 text-primary mx-auto mb-1" />
                  <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary md:text-3xl">5+</span>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{t("home.projects")}</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Trophy className="h-5 w-5 text-primary mx-auto mb-1" />
                  <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary md:text-3xl">100%</span>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{t("home.passion")}</p>
                </div>
              </div>

              {/* Boton CTA grande y centrado */}
              <div className="mt-10">
                <Link href="/home" className="block">
                  <Button 
                    size="lg"
                    className="group gradient-red py-8 px-12 text-xl font-bold uppercase tracking-wider shadow-2xl btn-racing animate-pulse-glow w-full max-w-md mx-auto"
                  >
                    {t("home.enterPortfolio")}
                    <ChevronRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
