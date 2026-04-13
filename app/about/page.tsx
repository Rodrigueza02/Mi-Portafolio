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
  { year: "2022", titleKey: "education.highschool", institution: "Colegio Nuestra Señora del Carmen" },
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
    items: ["skills.linkedLists", "skills.trees", "skills.graphs", "skills.stacks", "skills.queues", "HashMap"]
  },
  { 
    category: "skills.algorithms", 
    icon: Braces,
    items: ["skills.sorting", "skills.searching", "skills.recursion", "skills.dynamicProg", "Backtracking"]
  },
  { 
    category: "skills.versionControl", 
    icon: GitBranch,
    items: ["Git", "GitHub", "GitLab", "Branching", "Pull Requests", "skills.cicd"]
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
    name: "Ana Gomez",
    roleKey: "testimonial.teammate",
    textKey: "testimonial.ana",
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
    <div className="flex min-h-screen flex-col racing-gradient smoke-overlay speed-stripes-overlay vignette relative overflow-hidden pt-14 md:pt-16">
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

      <main className="flex-1 py-6 md:py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            {/* Lado izquierdo - Imagen personal */}
            <div className="flex flex-col">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[400px] md:max-h-[500px] w-full overflow-hidden rounded-lg md:rounded-xl border border-border/50 transition-all backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-950">
                  <img
                    src="/images/miFoto.jpg"
                    alt="miFoto"
                    className="w-full h-full object-contain animate-blur-in"
                  />
                  {/* Difuminado lateral izquierdo */}
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-red-900 via-red-900/70 to-transparent animate-fade-in-up" />
                  {/* Difuminado lateral derecho */}
                  <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-red-900 via-red-900/70 to-transparent animate-fade-in-up" />
                  {/* Difuminado inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                {/* Overlay con nombre */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 md:p-6">
                  <h2 className="font-[family-name:var(--font-display)] text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-white text-glow">
                    {t("about.name")} <span className="text-primary">{t("about.lastname")}</span>
                  </h2>
                  <p className="mt-1 text-xs md:text-sm text-white/70">{t("about.age")}</p>
                </div>
              </div>
            </div>

            {/* Lado derecho - Contenido */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Seccion Sobre mi */}
              <div className="rounded-lg md:rounded-xl border border-border/50 bg-card/60 p-4 md:p-6 backdrop-blur-lg transition-all card-lift">
                <h1 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground text-glow">
                  {t("about.title")} <span className="text-primary">{t("about.me")}</span>
                </h1>
                <div className="mt-2 md:mt-3 h-1 w-20 md:w-24 bg-gradient-to-r from-primary to-transparent" />
                
                <div className="mt-4 md:mt-6 space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
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
              <div className="flex flex-wrap gap-2 md:gap-3">
                <Button
                  variant={activeTab === "skills" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab("skills")}
                  className={`uppercase tracking-wide btn-racing text-xs md:text-sm ${activeTab === "skills" ? "gradient-red" : "border-primary/50 hover:bg-primary/10"}`}
                >
                  <Cpu className="mr-1.5 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                  {t("btn.softwareSkills")}
                </Button>
                <Button
                  variant={activeTab === "estudios" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab("estudios")}
                  className={`uppercase tracking-wide btn-racing text-xs md:text-sm ${activeTab === "estudios" ? "gradient-red" : "border-primary/50 hover:bg-primary/10"}`}
                >
                  <GraduationCap className="mr-1.5 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                  {t("btn.studies")}
                </Button>
                <Button
                  variant={activeTab === "objetivos" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab("objetivos")}
                  className={`uppercase tracking-wide btn-racing text-xs md:text-sm ${activeTab === "objetivos" ? "gradient-red" : "border-primary/50 hover:bg-primary/10"}`}
                >
                  <Target className="mr-1.5 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                  {t("btn.goals")}
                </Button>
              </div>

              {/* Contenido dinamico segun tab activo */}
              <div className="rounded-lg md:rounded-xl border border-border/50 bg-card/60 p-4 md:p-6 backdrop-blur-lg transition-all card-lift">
                {/* Habilidades de Software */}
                {activeTab === "skills" && (
                  <div className="space-y-3 md:space-y-4 animate-fade-in-up">
                    <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold uppercase tracking-wide text-foreground">
                      {t("skills.title")}
                    </h3>
                    <div className="grid gap-2 md:gap-3">
                      {softwareSkills.map((skill) => (
                        <div 
                          key={skill.category}
                          className="rounded-lg border border-border/50 bg-secondary/30 overflow-hidden transition-all"
                        >
                          <button
                            onClick={() => setExpandedSkill(expandedSkill === skill.category ? null : skill.category)}
                            className="flex items-center justify-between w-full p-3 md:p-4 text-left hover:bg-primary/10 transition-colors"
                          >
                            <div className="flex items-center gap-2 md:gap-3">
                              <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-primary/20">
                                <skill.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                              </div>
                              <span className="font-medium text-foreground text-sm md:text-base">{t(skill.category)}</span>
                            </div>
                            <ChevronDown className={`h-4 w-4 md:h-5 md:w-5 text-muted-foreground transition-transform ${expandedSkill === skill.category ? "rotate-180" : ""}`} />
                          </button>
                          
                          {expandedSkill === skill.category && (
                            <div className="px-3 md:px-4 pb-3 md:pb-4 animate-fade-in-up">
                              <div className="flex flex-wrap gap-1.5 md:gap-2">
                                {skill.items.map((item) => (
                                  <span
                                    key={item}
                                    className="rounded-full bg-primary/20 border border-primary/30 px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-medium text-primary"
                                  >
                                    {item.startsWith("skills.") ? t(item) : item}
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
                  <div className="space-y-3 md:space-y-4 animate-fade-in-up">
                    <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold uppercase tracking-wide text-foreground">
                      {t("education.title")}
                    </h3>
                    {estudios.map((estudio, index) => (
                      <div 
                        key={index}
                        className="flex gap-3 md:gap-4 rounded-lg border border-border/50 bg-secondary/30 p-3 md:p-4 transition-all card-lift hover:border-primary/50"
                      >
                        <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-[family-name:var(--font-display)] text-xs md:text-sm font-semibold text-primary">
                            {estudio.year}
                          </p>
                          <p className="font-medium text-foreground text-sm md:text-base">{t(estudio.titleKey)}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{estudio.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Objetivos */}
                {activeTab === "objetivos" && (
                  <div className="space-y-3 md:space-y-4 animate-fade-in-up">
                    <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold uppercase tracking-wide text-foreground">
                      {t("objectives.title")}
                    </h3>
                    {objetivos.map((objetivo, index) => (
                      <div 
                        key={index}
                        className="flex gap-3 md:gap-4 rounded-lg border border-border/50 bg-secondary/30 p-3 md:p-4 transition-all card-lift hover:border-primary/50"
                      >
                        <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <objetivo.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm md:text-base">{t(objetivo.titleKey)}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{t(objetivo.descKey)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Seccion de Testimonios - Personas con las que he trabajado */}
          <section className="mt-8 md:mt-12">
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold uppercase tracking-wider text-foreground text-glow text-center mb-6 md:mb-8">
              {t("testimonials.title")}
            </h2>
            
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonios.map((testimonio, index) => (
                <div 
                  key={index}
                  className="rounded-lg md:rounded-xl border border-border/50 bg-card/60 p-4 md:p-6 backdrop-blur-lg transition-all card-lift hover:border-primary/50"
                >
                  <Quote className="h-6 w-6 md:h-8 md:w-8 text-primary/40 mb-3 md:mb-4" />
                  
                  <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed mb-4 md:mb-6">
                    &ldquo;{t(testimonio.textKey)}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-2 md:gap-3 pt-3 md:pt-4 border-t border-border/50">
                    <div className="h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Users className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm md:text-base">{testimonio.name}</p>
                      <p className="text-[10px] md:text-xs text-primary">{t(testimonio.roleKey)}</p>
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
