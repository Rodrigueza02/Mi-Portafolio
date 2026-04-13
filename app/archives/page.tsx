"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { 
  Eye, 
  ExternalLink, 
  ChevronRight, 
  ChevronDown,
  Folder, 
  Calendar, 
  List,
  FileCode,
  Github
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

// Configuracion de proyectos
const archivos = [
  {
    id: 1,
    nombreKey: "projects.project1.name",
    tituloKey: "projects.project1.title",
    descripcionKey: "projects.project1.desc",
    tecnologias: ["React", "Vite", "TypeScript", "Tailwind CSS", "Jest"],
    fecha: "2025",
    githubUrl: "https://github.com/HMAlejandra/ProyectoCalidad.git",
    imagenUrl: "/images/ImgProyecto1.jpg",
    archivosProyecto: [
      { nombre: "Sidebar.tsx", tipo: "componente" },
      { nombre: "UnitConverter.tsx", tipo: "componente" },
      { nombre: "PasswordValidator.tsx", tipo: "componente" },
      { nombre: "ClickCounter.tsx", tipo: "componente" },
      { nombre: "TodoList.tsx", tipo: "componente" },
      { nombre: "TablasMul.tsx", tipo: "componente" }
    ],
    color: "from-red-600/40 to-red-900/20",
  },
  {
    id: 2,
    nombreKey: "projects.project2.name",
    tituloKey: "projects.project2.title",
    descripcionKey: "projects.project2.desc",
    tecnologias: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Spotify API"],
    fecha: "2025",
    githubUrl: "https://github.com/Rodrigueza02/spotify-playlist-app.git",
    imagenUrl: "/images/sagiria.jpg",
    archivosProyecto: [
      { nombre: "app.py", tipo: "backend" },
      { nombre: "index.html", tipo: "vista" },
      { nombre: "mi_playlist.html", tipo: "vista" },
      { nombre: "playlists.html", tipo: "vista" },
      { nombre: "style.css", tipo: "estilos" }
    ],
    color: "from-red-700/30 to-red-950/20",
  },
  {
    id: 3,
    nombreKey: "projects.project3.name",
    tituloKey: "projects.project3.title",
    descripcionKey: "projects.project3.desc",
    tecnologias: ["HTML5", "Tailwind CSS", "JavaScript", "Figma"],
    fecha: "2025",
    githubUrl: "https://github.com/DieryValencia/Diseno-de-interfaces-para-aplicaciones-web.git",
    imagenUrl: "/images/proyectoTres.jpg",
    archivosProyecto: [
      { nombre: "index.html", tipo: "principal" },
      { nombre: "style.css", tipo: "estilos" },
      { nombre: "script.js", tipo: "interactividad" },
    ],
    color: "from-red-800/30 to-red-950/30",
  },
]


export default function ArchivesPage() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedArchivo, setSelectedArchivo] = useState<typeof archivos[0] | null>(archivos[0])
  const [hoveredArchivo, setHoveredArchivo] = useState<number | null>(null)
  const [expandedList, setExpandedList] = useState(false)
  const [expandedFiles, setExpandedFiles] = useState<number | null>(null)
  const itemRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

const filteredArchivos = archivos.filter(
  (archivo) =>
    t(archivo.nombreKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
    t(archivo.tituloKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
    t(archivo.descripcionKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
    archivo.tecnologias.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
)

  useEffect(() => {
    if (searchQuery && filteredArchivos.length > 0) {
      const firstResult = filteredArchivos[0]
      const element = itemRefs.current[firstResult.id]
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
        element.classList.add("highlight-blink")
        setTimeout(() => {
          element.classList.remove("highlight-blink")
        }, 1500)
      }
    }
  }, [searchQuery, filteredArchivos])

  const handleOpenGithub = (url: string) => {
    if (url) {
      window.open(url, "_blank")
    } else {
      alert("Configura el link de GitHub en el codigo del proyecto")
    }
  }

  return (
    <div className="flex min-h-screen flex-col racing-gradient smoke-overlay speed-stripes-overlay vignette relative overflow-hidden pt-14 md:pt-16">
      {/* Elementos decorativos de fondo */}
      <div className="glow-orb-intense absolute -right-40 top-1/4 h-80 w-80 bg-red-600/40" />
      <div className="glow-orb-intense absolute -left-60 bottom-1/3 h-96 w-96 bg-red-700/30" style={{ animationDelay: "2s" }} />
      <div className="glow-orb-intense absolute right-1/4 bottom-1/4 h-64 w-64 bg-red-500/35" style={{ animationDelay: "4s" }} />
      <div className="glow-orb-intense absolute left-1/3 top-1/3 h-48 w-48 bg-red-800/25" style={{ animationDelay: "3s" }} />
      
      <div className="particles-container">
        <div className="light-streak absolute top-[15%] w-1/3" style={{ animationDelay: "0s" }} />
        <div className="light-streak absolute top-[35%] w-1/2" style={{ animationDelay: "1.5s" }} />
        <div className="light-streak absolute top-[55%] w-2/5" style={{ animationDelay: "3s" }} />
        <div className="light-streak absolute top-[75%] w-1/4" style={{ animationDelay: "2s" }} />
      </div>

      <Navbar />

      <main className="flex-1 py-6 md:py-12 relative z-10">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-4 md:mb-6 flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              {t("nav.home")}
            </Link>
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
            <span className="font-medium text-foreground">{t("nav.projects")}</span>
          </nav>

          {/* Titulo de seccion */}
          <div className="mb-6 md:mb-8">
            <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl text-glow">
              {t("projects.title").split(" ")[0]} <span className="text-primary">{t("projects.title").split(" ").slice(1).join(" ")}</span>
            </h1>
            <div className="mt-2 md:mt-3 h-1 w-24 md:w-32 bg-gradient-to-r from-primary to-transparent" />
          </div>

          <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
            {/* Lista de archivos */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-[family-name:var(--font-display)] text-sm md:text-lg font-semibold uppercase tracking-wide text-muted-foreground">
                </h2>
                <button
                  onClick={() => setExpandedList(!expandedList)}
                  className="flex items-center gap-1.5 md:gap-2 rounded-lg border border-primary/30 bg-card/60 px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm text-foreground backdrop-blur transition-all hover:bg-primary/20"
                >
                  <List className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
                  <span className="hidden sm:inline">{t("projects.viewList")}</span>
                  <ChevronDown className={cn("h-3.5 w-3.5 md:h-4 md:w-4 transition-transform", expandedList && "rotate-180")} />
                </button>
              </div>

              {expandedList && (
                <div className="animate-fade-in-up rounded-lg border border-primary/30 bg-card/80 p-3 md:p-4 backdrop-blur">
                  <p className="mb-2 md:mb-3 text-xs md:text-sm text-muted-foreground">{t("projects.selectProject")}</p>
                  <div className="grid gap-1.5 md:gap-2 max-h-40 md:max-h-48 overflow-y-auto">
                    {archivos.map((archivo) => (
                      <button
                        key={archivo.id}
                        onClick={() => {
                          setSelectedArchivo(archivo)
                          setExpandedList(false)
                        }}
                        className={cn(
                          "flex items-center gap-2 md:gap-3 rounded-md px-2 md:px-3 py-1.5 md:py-2 text-left text-xs md:text-sm transition-all",
                          selectedArchivo?.id === archivo.id 
                            ? "bg-primary/20 text-primary" 
                            : "hover:bg-primary/10 text-muted-foreground"
                        )}
                      >
                        <FileCode className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0" />
                        <span className="font-medium truncate">{t(archivo.nombreKey)}</span>
                        <span className="text-[10px] md:text-xs opacity-60 truncate hidden sm:inline">- {t(archivo.tituloKey)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {filteredArchivos.length === 0 ? (
                <div className="rounded-lg md:rounded-xl border border-border/50 bg-card/60 p-6 md:p-8 text-center backdrop-blur-lg">
                  <Folder className="mx-auto h-10 w-10 md:h-12 md:w-12 text-muted-foreground/50" />
                  <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground">{t("projects.notFound")}</p>
                </div>
              ) : (
                <div className="space-y-2 md:space-y-3 max-h-[500px] md:max-h-[600px] overflow-y-auto pr-1 md:pr-2">
                  {filteredArchivos.map((archivo) => (
                    <div
                      key={archivo.id}
                      ref={(el) => { itemRefs.current[archivo.id] = el }}
                      onMouseEnter={() => {
                        setHoveredArchivo(archivo.id)
                        setSelectedArchivo(archivo)
                      }}
                      onMouseLeave={() => setHoveredArchivo(null)}
                      onClick={() => setSelectedArchivo(archivo)}
                      className={cn(
                        "group relative cursor-pointer rounded-lg md:rounded-xl border bg-card/60 p-3 md:p-4 backdrop-blur-lg transition-all",
                        selectedArchivo?.id === archivo.id 
                          ? "border-primary bg-primary/10 shadow-lg shadow-primary/20" 
                          : "border-border/50 hover:border-primary/50 hover:bg-card/80",
                        hoveredArchivo === archivo.id && "md:scale-[1.02]"
                      )}
                    >
                      {selectedArchivo?.id === archivo.id && (
                        <div className="absolute -left-px top-1/2 h-6 md:h-8 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
                      )}

                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <Folder className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary shrink-0" />
                            <span className="font-[family-name:var(--font-display)] text-xs md:text-sm font-semibold uppercase tracking-wide text-primary">
                              {t(archivo.nombreKey)}
                            </span>
                          </div>
                          
                          <h3 className="mt-1.5 md:mt-2 font-semibold text-foreground text-sm md:text-base line-clamp-2">
                            {t(archivo.tituloKey)}
                          </h3>
                          
                          <p className="mt-1 line-clamp-2 text-xs md:text-sm text-muted-foreground">
                            {t(archivo.descripcionKey)}
                          </p>

                          <div className="mt-2 flex flex-wrap items-center gap-2 md:gap-4">
                            <div className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground">
                              <Calendar className="h-2.5 w-2.5 md:h-3 md:w-3" />
                              {archivo.fecha}
                            </div>
                            
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setExpandedFiles(expandedFiles === archivo.id ? null : archivo.id)
                              }}
                              className="flex items-center gap-1 text-[10px] md:text-xs text-primary hover:underline"
                            >
                              <FileCode className="h-2.5 w-2.5 md:h-3 md:w-3" />
                              {archivo.archivosProyecto.length} {t("projects.files")}
                              <ChevronDown className={cn("h-2.5 w-2.5 md:h-3 md:w-3 transition-transform", expandedFiles === archivo.id && "rotate-180")} />
                            </button>
                          </div>

                          {expandedFiles === archivo.id && (
                            <div className="mt-2 md:mt-3 animate-fade-in-up rounded-md border border-border/50 bg-secondary/30 p-2 md:p-3">
                              <p className="mb-1.5 md:mb-2 text-[10px] md:text-xs font-semibold text-muted-foreground uppercase">{t("projects.projectFiles")}</p>
                              <div className="space-y-0.5 md:space-y-1">
                                {archivo.archivosProyecto.map((file, idx) => (
                                  <div key={idx} className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-foreground">
                                    <FileCode className="h-2.5 w-2.5 md:h-3 md:w-3 text-primary shrink-0" />
                                    <span className="truncate">{file.nombre}</span>
                                    <span className="text-muted-foreground shrink-0">({file.tipo})</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end gap-2 mt-2 sm:mt-0">
                          <div className={cn(
                            "hidden sm:flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-primary/20 transition-all",
                            hoveredArchivo === archivo.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
                          )}>
                            <Eye className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
                          </div>
                          
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleOpenGithub(archivo.githubUrl)
                            }}
                            className="gradient-red uppercase tracking-wide btn-racing text-[10px] md:text-xs w-full sm:w-auto"
                          >
                            <Github className="mr-1 h-3 w-3" />
                            {t("projects.open")}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Vista previa */}
            <div className="lg:sticky lg:top-20 lg:self-start">
              <h2 className="mb-3 md:mb-4 font-[family-name:var(--font-display)] text-sm md:text-lg font-semibold uppercase tracking-wide text-muted-foreground">
                {t("projects.preview")}
              </h2>
              
              <div className="overflow-hidden rounded-lg md:rounded-xl border border-border/50 bg-card/60 backdrop-blur-lg">
                {selectedArchivo ? (
                  <>
                    <div className={cn(
                      "relative aspect-[4/3] md:aspect-video w-full bg-gradient-to-br transition-all duration-500 racing-stripes overflow-hidden",
                      selectedArchivo.color
                    )}>
                      {selectedArchivo.imagenUrl ? (
                        <img 
                          src={selectedArchivo.imagenUrl} 
                          alt={t(selectedArchivo.tituloKey)}
                          className="absolute inset-0 h-full w-full object-contain"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-foreground/10">
                            {String(selectedArchivo.id).padStart(2, "0")}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4 md:p-6">
                      <h3 className="font-[family-name:var(--font-display)] text-base md:text-xl font-bold uppercase tracking-wider text-foreground">
                        {t(selectedArchivo.tituloKey)}
                      </h3>
                      <p className="mt-2 md:mt-3 text-xs md:text-sm leading-relaxed text-muted-foreground">
                        {t(selectedArchivo.descripcionKey)}
                      </p>
                      
                      <div className="mt-3 md:mt-4 flex flex-wrap gap-1.5 md:gap-2">
                        {selectedArchivo.tecnologias.map((tech) => (
                          <span 
                            key={tech}
                            className="rounded-full bg-primary/20 px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-medium text-primary"
                          >
                            {t(tech)}
                          </span>
                        ))}
                      </div>
                      
                      <Button 
                        onClick={() => handleOpenGithub(selectedArchivo.githubUrl)}
                        className="mt-4 md:mt-6 w-full gradient-red uppercase tracking-wider btn-racing text-xs md:text-sm"
                      >
                        <Github className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                        Ver en GitHub
                        <ExternalLink className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex h-48 md:h-64 items-center justify-center">
                    <p className="text-sm md:text-base text-muted-foreground">Selecciona un proyecto</p>
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
