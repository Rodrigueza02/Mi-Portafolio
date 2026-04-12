"use client"

import { useState } from "react"
import { 
  Code, 
  GraduationCap, 
  Target, 
  Heart, 
  Users, 
  Trophy, 
  Palette,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Braces,
  ChevronDown,
  Quote
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { useLanguage } from "@/contexts/language-context"

// Datos de estudios
const estudios = [
  { year: "2024-Presente", titleKey: "education.current", institution: "Universidad Cooperativa de Colombia" },
  { year: "2023-2024", titleKey: "education.tech", institution: "SENA" },
  { year: "2022", titleKey: "education.highschool", institution: "Colegio Nuestra Senora del Carmen" },
]

// Datos de objetivos
const objetivos = [
  { icon: Trophy, titleKey: "objectives.excellence", descKey: "objectives.excellenceDesc" },
  { icon: Heart, titleKey: "objectives.design", descKey: "objectives.designDesc" },
  { icon: Target, titleKey: "objectives.impact", descKey: "objectives.impactDesc" },
]

// Habilidades de software (sin barras de porcentaje)
const softwareSkills = [
  { 
    category: "skills.uiux", 
    icon: Palette,
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Tailwind CSS"]
  },
  { 
    category: "skills.programming", 
    icon: Code,
    items: ["Java", "Python", "TypeScript", "JavaScript", "HTML/CSS", "C#"]
  },
  { 
    category: "skills.dataStructures", 
    icon: Layers,
    items: ["Listas enlazadas", "Arboles", "Grafos", "Pilas", "Colas", "HashMap"]
  },
  { 
    category: "skills.algorithms", 
    icon: Braces,
    items: ["Ordenamiento", "Busqueda", "Recursion", "Programacion dinamica", "Backtracking"]
  },
  { 
    category: "skills.versionControl", 
    icon: GitBranch,
    items: ["Git", "GitHub", "GitLab", "Branching", "Pull Requests", "CI/CD basico"]
  },
  { 
    category: "skills.databases", 
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase", "Supabase"]
  },
]

// Testimonios - Personas con las que he trabajado
const testimonios = [
  {
    name: "Camilo Ojeda",
    roleKey: "testimonial.client",
    textKey: "testimonial.camilo",
    avatar: "/placeholder-user.jpg"
  },
  {
    name: "Helen Moncayo",
    roleKey: "testimonial.teammate",
    textKey: "testimonial.helen",
    avatar: "/placeholder-user.jpg"
  },
  {
    name: "Daniel Arteaga",
    roleKey: "testimonial.colleague",
    textKey: "testimonial.daniel",
    avatar: "/placeholder-user.jpg"
  }
]

export default function AboutPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<"skills" | "estudios" | "objetivos">("skills")
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)

  return (
    <div className="flex min-h-screen flex-col racing-gradient smoke-overlay speed-stripes-overlay vignette relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="glow-orb-intense absolute -left-40 top-1/3 h-80 w-80 bg-red-600/45" />
      <div className="glow-orb-intense absolute -right-48 bottom-1/4 h-96 w-96 bg-red-700/35" style={{ animationDelay: "2s" }} />
      <div className="glow-orb-intense absolute left-1/2 top-2/3 h-64 w-64 bg-red-500/40" style={{ animationDelay: "3s" }} />
      <div className="glow-orb-intense absolute right-1/4 top-1/4 h-56 w-56 bg-red-800/30" style={{ animationDelay: "4s" }} />
      
      {/* Lineas de luz en movimiento */}
      <div className="particles-container">
        <div className="light-streak absolute top-[20%] w-1/3" style={{ animationDelay: "0s" }} />
        <div className="light-streak absolute top-[40%] w-2/5" style={{ animationDelay: "1.5s" }} />
        <div className="light-streak absolute top-[60%] w-1/2" style={{ animationDelay: "2.5s" }} />
        <div className="light-streak absolute top-[80%] w-1/4" style={{ animationDelay: "3.5s" }} />
      </div>

      <Navbar />

      <main className="flex-1 py-8 md:py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Lado izquierdo - Imagen personal */}
            <div className="flex flex-col">
              <div className="relative aspect-[3/4] max-h-[500px] w-full overflow-hidden rounded-xl border border-border/50 transition-all backdrop-blur-sm">
                <div className="absolute inset-0 bg-red-600">
                  <img
                    src="/images/miFoto.jpg"
                    alt="miFoto"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                {/* Overlay con nombre */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-foreground text-glow">
                    Maria Juliana <span className="text-primary">Rodriguez Andrade</span>
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">20 anos | Pasto, Colombia</p>
                </div>
              </div>
            </div>

            {/* Lado derecho - Contenido */}
            <div className="flex flex-col gap-6">
              {/* Seccion Sobre mi */}
              <div className="rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur-lg transition-all card-lift">
                <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-foreground text-glow">
                  {t("about.title")} <span className="text-primary">{t("about.me")}</span>
                </h1>
                <div className="mt-3 h-1 w-24 bg-gradient-to-r from-primary to-transparent" />
                
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    {t("about.text1").split(t("about.speed"))[0]}
                    <span className="font-semibold text-primary">{t("about.speed")}</span>
                    {t("about.text1").split(t("about.speed"))[1]}
                  </p>
                  <p className="leading-relaxed">
                    {t("about.text2").split(t("about.limits"))[0]}
                    <span className="font-semibold text-primary">{t("about.limits")}</span>
                    {t("about.text2").split(t("about.limits"))[1]}
                  </p>
                  <p className="leading-relaxed">
                    {t("about.text3").split(t("about.mark"))[0]}
                    <span className="font-semibold text-primary">{t("about.mark")}</span>
                    {t("about.text3").split(t("about.mark"))[1]}
                  </p>
                </div>
              </div>

              {/* Botones de navegacion */}
              <div className="flex flex-wrap gap-3">
                <Button
                  variant={activeTab === "skills" ? "default" : "outline"}
                  onClick={() => setActiveTab("skills")}
                  className={`uppercase tracking-wide btn-racing ${activeTab === "skills" ? "gradient-red" : "border-primary/50 hover:bg-primary/10"}`}
                >
                  <Cpu className="mr-2 h-4 w-4" />
                  {t("btn.softwareSkills")}
                </Button>
                <Button
                  variant={activeTab === "estudios" ? "default" : "outline"}
                  onClick={() => setActiveTab("estudios")}
                  className={`uppercase tracking-wide btn-racing ${activeTab === "estudios" ? "gradient-red" : "border-primary/50 hover:bg-primary/10"}`}
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  {t("btn.studies")}
                </Button>
                <Button
                  variant={activeTab === "objetivos" ? "default" : "outline"}
                  onClick={() => setActiveTab("objetivos")}
                  className={`uppercase tracking-wide btn-racing ${activeTab === "objetivos" ? "gradient-red" : "border-primary/50 hover:bg-primary/10"}`}
                >
                  <Target className="mr-2 h-4 w-4" />
                  {t("btn.goals")}
                </Button>
              </div>

              {/* Contenido dinamico segun tab activo */}
              <div className="rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur-lg transition-all card-lift">
                {/* Habilidades de Software */}
                {activeTab === "skills" && (
                  <div className="space-y-4 animate-fade-in-up">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-foreground">
                      {t("skills.title")}
                    </h3>
                    <div className="grid gap-3">
                      {softwareSkills.map((skill) => (
                        <div 
                          key={skill.category}
                          className="rounded-lg border border-border/50 bg-secondary/30 overflow-hidden transition-all"
                        >
                          <button
                            onClick={() => setExpandedSkill(expandedSkill === skill.category ? null : skill.category)}
                            className="flex items-center justify-between w-full p-4 text-left hover:bg-primary/10 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                                <skill.icon className="h-5 w-5 text-primary" />
                              </div>
                              <span className="font-medium text-foreground">{t(skill.category)}</span>
                            </div>
                            <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${expandedSkill === skill.category ? "rotate-180" : ""}`} />
                          </button>
                          
                          {expandedSkill === skill.category && (
                            <div className="px-4 pb-4 animate-fade-in-up">
                              <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                  <span
                                    key={item}
                                    className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs font-medium text-primary"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Estudios */}
                {activeTab === "estudios" && (
                  <div className="space-y-4 animate-fade-in-up">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-foreground">
                      {t("education.title")}
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
                          <p className="font-medium text-foreground">{t(estudio.titleKey)}</p>
                          <p className="text-sm text-muted-foreground">{estudio.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Objetivos */}
                {activeTab === "objetivos" && (
                  <div className="space-y-4 animate-fade-in-up">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-foreground">
                      {t("objectives.title")}
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
                          <p className="font-medium text-foreground">{t(objetivo.titleKey)}</p>
                          <p className="text-sm text-muted-foreground">{t(objetivo.descKey)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Seccion de Testimonios - Personas con las que he trabajado */}
          <section className="mt-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-foreground text-glow text-center mb-8">
              {t("testimonials.title")}
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              {testimonios.map((testimonio, index) => (
                <div 
                  key={index}
                  className="rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur-lg transition-all card-lift hover:border-primary/50"
                >
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  
                  <p className="text-muted-foreground italic leading-relaxed mb-6">
                    &ldquo;{t(testimonio.textKey)}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonio.name}</p>
                      <p className="text-xs text-primary">{t(testimonio.roleKey)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
