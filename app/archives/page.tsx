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
  Tag,
  List,
  FileCode,
  Github
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { cn } from "@/lib/utils"

// =====================================================
// CONFIGURA TUS PROYECTOS AQUÍ
// Agrega tantos proyectos como quieras
// =====================================================
const archivos = [
  {
  id: 1,
  nombre: "Proyecto 01",
  titulo: "Mentes Creativas - Plataforma Educativa Infantil",
  descripcion: "Aplicación web interactiva desarrollada para niños de cuarto y quinto de primaria, enfocada en el aprendizaje creativo mediante herramientas didácticas. Incluye módulos como sistema solar para el reconocimiento de planetas, pintura para colorear elementos predefinidos y escultura para la creación de dibujos más elaborados. El proyecto implementa componentes dinámicos en React, navegación mediante sidebar interactivo y ejercicios prácticos que refuerzan el aprendizaje a través de la interacción. Además, integra pruebas unitarias para validar el correcto funcionamiento de los componentes.",
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
  nombre: "Proyecto 02",
  titulo: "Sagiria - Reproductor Musical con API de Spotify",
  descripcion: "Aplicación web interactiva que funciona como reproductor de música conectado a la API de Spotify. Permite buscar canciones, reproducir música en tiempo real, gestionar listas de reproducción y marcar favoritos. Incluye funcionalidades como control de reproducción (play, pausa, adelantar y retroceder), navegación entre playlists y visualización de contenido dinámico. El sistema integra frontend personalizado con consumo de API externa, brindando una experiencia similar a plataformas de streaming musical.",
  tecnologias: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Spotify API"],
  fecha: "2025",
  githubUrl: "https://github.com/Rodrigueza02/spotify-playlist-app.git",
  imagenUrl: "/images/sagiria.jpg",
  archivosProyecto: [
    { nombre: "app.py", tipo: "backend" },
    { nombre: "index.html", tipo: "vista" },
    { nombre: "mi_playlist.html", tipo: "vista" },
    { nombre: "playlists.html", tipo: "vista" },
    { nombre: "playlist_detail.html", tipo: "vista" },
    { nombre: "favoritos.html", tipo: "vista" },
    { nombre: "style.css", tipo: "estilos" }
  ],
  color: "from-red-700/30 to-red-950/20",
},
  {
    id: 3,
    nombre: "Proyecto 03",
    titulo: "Sistema de Análisis IA",
    descripcion: "Herramienta de análisis de datos con predicciones y visualizaciones avanzadas usando inteligencia artificial y machine learning.",
    tecnologias: ["Python", "TensorFlow", "FastAPI"],
    fecha: "2023",
    githubUrl: "",
    imagenUrl: "",
    archivosProyecto: [
      { nombre: "main.py", tipo: "api" },
      { nombre: "model.py", tipo: "ml" },
      { nombre: "analysis.py", tipo: "utilidad" },
      { nombre: "requirements.txt", tipo: "config" },
    ],
    color: "from-red-800/30 to-red-950/30",
  },
  {
    id: 4,
    nombre: "Proyecto 04",
    titulo: "Portal de Noticias Tech",
    descripcion: "Plataforma de noticias del mundo tecnológico con actualizaciones en vivo, sistema de suscripciones y calendario de eventos.",
    tecnologias: ["Next.js", "Supabase", "Tailwind CSS"],
    fecha: "2023",
    githubUrl: "",
    imagenUrl: "",
    archivosProyecto: [
      { nombre: "page.tsx", tipo: "componente" },
      { nombre: "NewsCard.tsx", tipo: "componente" },
      { nombre: "lib/supabase.ts", tipo: "api" },
    ],
    color: "from-red-600/30 to-red-900/25",
  },
  {
    id: 5,
    nombre: "Proyecto 05",
    titulo: "E-commerce Platform",
    descripcion: "Plataforma de comercio electrónico con carrito de compras, pagos integrados y gestión de inventario en tiempo real.",
    tecnologias: ["Next.js", "Stripe", "PostgreSQL"],
    fecha: "2023",
    githubUrl: "",
    imagenUrl: "",
    archivosProyecto: [
      { nombre: "checkout.tsx", tipo: "componente" },
      { nombre: "cart.tsx", tipo: "componente" },
      { nombre: "api/payment.ts", tipo: "api" },
      { nombre: "prisma/schema.prisma", tipo: "config" },
    ],
    color: "from-red-700/35 to-red-950/20",
  },
  {
    id: 6,
    nombre: "Proyecto 06",
    titulo: "Chat en Tiempo Real",
    descripcion: "Aplicación de mensajería instantánea con soporte para grupos, archivos multimedia y notificaciones push.",
    tecnologias: ["React", "Socket.io", "Node.js"],
    fecha: "2022",
    githubUrl: "",
    imagenUrl: "",
    archivosProyecto: [
      { nombre: "ChatRoom.tsx", tipo: "componente" },
      { nombre: "MessageList.tsx", tipo: "componente" },
      { nombre: "server/socket.ts", tipo: "api" },
    ],
    color: "from-red-800/25 to-red-950/30",
  },
  // AGREGA MÁS PROYECTOS AQUÍ SIGUIENDO EL MISMO FORMATO
]

export default function ArchivesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedArchivo, setSelectedArchivo] = useState<typeof archivos[0] | null>(archivos[0])
  const [hoveredArchivo, setHoveredArchivo] = useState<number | null>(null)
  const [expandedList, setExpandedList] = useState(false)
  const [expandedFiles, setExpandedFiles] = useState<number | null>(null)
  const itemRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  const filteredArchivos = archivos.filter(
    (archivo) =>
      archivo.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      archivo.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      archivo.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      archivo.tecnologias.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  // Scroll y parpadeo al buscar
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
      alert("Configura el link de GitHub en el código del proyecto")
    }
  }

  return (
    <div className="flex min-h-screen flex-col racing-gradient smoke-overlay speed-stripes-overlay vignette relative overflow-hidden">
      {/* Elementos decorativos de fondo intensificados */}
      <div className="glow-orb-intense absolute -right-40 top-1/4 h-80 w-80 bg-red-600/40" />
      <div className="glow-orb-intense absolute -left-60 bottom-1/3 h-96 w-96 bg-red-700/30" style={{ animationDelay: "2s" }} />
      <div className="glow-orb-intense absolute right-1/4 bottom-1/4 h-64 w-64 bg-red-500/35" style={{ animationDelay: "4s" }} />
      <div className="glow-orb-intense absolute left-1/3 top-1/3 h-48 w-48 bg-red-800/25" style={{ animationDelay: "3s" }} />
      
      {/* Líneas de luz en movimiento */}
      <div className="particles-container">
        <div className="light-streak absolute top-[15%] w-1/3" style={{ animationDelay: "0s" }} />
        <div className="light-streak absolute top-[35%] w-1/2" style={{ animationDelay: "1.5s" }} />
        <div className="light-streak absolute top-[55%] w-2/5" style={{ animationDelay: "3s" }} />
        <div className="light-streak absolute top-[75%] w-1/4" style={{ animationDelay: "2s" }} />
        <div className="light-streak absolute top-[90%] w-1/3" style={{ animationDelay: "4s" }} />
      </div>

      <Navbar 
        searchPlaceholder="Buscar proyectos..." 
        onSearch={setSearchQuery}
      />

      <main className="flex-1 py-8 md:py-12 relative z-10">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/home" className="transition-colors hover:text-primary">
              Portafolio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">Proyectos</span>
          </nav>

          {/* Título de sección */}
          <div className="mb-8">
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl text-glow">
              Mis <span className="text-primary">Proyectos</span>
            </h1>
            <div className="mt-3 h-1 w-32 bg-gradient-to-r from-primary to-transparent" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Lista de archivos con dropdown */}
            <div className="space-y-4">
              {/* Header con botón de lista desplegable */}
              <div className="flex items-center justify-between">
                <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wide text-muted-foreground">
                  Lista de Proyectos
                </h2>
                <button
                  onClick={() => setExpandedList(!expandedList)}
                  className="flex items-center gap-2 rounded-lg border border-primary/30 bg-card/60 px-3 py-2 text-sm text-foreground backdrop-blur transition-all hover:bg-primary/20"
                >
                  <List className="h-4 w-4 text-primary" />
                  <span>Ver Lista</span>
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform",
                    expandedList && "rotate-180"
                  )} />
                </button>
              </div>

              {/* Lista desplegable rápida */}
              {expandedList && (
                <div className="animate-fade-in-up rounded-lg border border-primary/30 bg-card/80 p-4 backdrop-blur">
                  <p className="mb-3 text-sm text-muted-foreground">Selecciona un proyecto:</p>
                  <div className="grid gap-2 max-h-48 overflow-y-auto">
                    {archivos.map((archivo) => (
                      <button
                        key={archivo.id}
                        onClick={() => {
                          setSelectedArchivo(archivo)
                          setExpandedList(false)
                          const element = itemRefs.current[archivo.id]
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "center" })
                            element.classList.add("highlight-blink")
                            setTimeout(() => element.classList.remove("highlight-blink"), 1500)
                          }
                        }}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-all",
                          selectedArchivo?.id === archivo.id 
                            ? "bg-primary/20 text-primary" 
                            : "hover:bg-primary/10 text-muted-foreground"
                        )}
                      >
                        <FileCode className="h-4 w-4" />
                        <span className="font-medium">{archivo.nombre}</span>
                        <span className="text-xs opacity-60">- {archivo.titulo}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {filteredArchivos.length === 0 ? (
                <div className="rounded-xl border border-border/50 bg-card/60 p-8 text-center backdrop-blur-lg">
                  <Folder className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <p className="mt-4 text-muted-foreground">No se encontraron proyectos</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
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
                        "group relative cursor-pointer rounded-xl border bg-card/60 p-4 backdrop-blur-lg transition-all",
                        selectedArchivo?.id === archivo.id 
                          ? "border-primary bg-primary/10 shadow-lg shadow-primary/20" 
                          : "border-border/50 hover:border-primary/50 hover:bg-card/80",
                        hoveredArchivo === archivo.id && "scale-[1.02]"
                      )}
                    >
                      {/* Indicador de selección */}
                      {selectedArchivo?.id === archivo.id && (
                        <div className="absolute -left-px top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
                      )}

                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          {/* Nombre del archivo */}
                          <div className="flex items-center gap-2">
                            <Folder className="h-4 w-4 text-primary" />
                            <span className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wide text-primary">
                              {archivo.nombre}
                            </span>
                          </div>
                          
                          {/* Título */}
                          <h3 className="mt-2 font-semibold text-foreground">
                            {archivo.titulo}
                          </h3>
                          
                          {/* Descripción corta */}
                          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                            {archivo.descripcion}
                          </p>

                          {/* Fecha y archivos */}
                          <div className="mt-2 flex items-center gap-4">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {archivo.fecha}
                            </div>
                            
                            {/* Botón para ver archivos del proyecto */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setExpandedFiles(expandedFiles === archivo.id ? null : archivo.id)
                              }}
                              className="flex items-center gap-1 text-xs text-primary hover:underline"
                            >
                              <FileCode className="h-3 w-3" />
                              {archivo.archivosProyecto.length} archivos
                              <ChevronDown className={cn(
                                "h-3 w-3 transition-transform",
                                expandedFiles === archivo.id && "rotate-180"
                              )} />
                            </button>
                          </div>

                          {/* Lista de archivos expandida */}
                          {expandedFiles === archivo.id && (
                            <div className="mt-3 animate-fade-in-up rounded-md border border-border/50 bg-secondary/30 p-3">
                              <p className="mb-2 text-xs font-semibold text-muted-foreground uppercase">Archivos del proyecto:</p>
                              <div className="space-y-1">
                                {archivo.archivosProyecto.map((file, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-xs text-foreground">
                                    <FileCode className="h-3 w-3 text-primary" />
                                    <span>{file.nombre}</span>
                                    <span className="text-muted-foreground">({file.tipo})</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Botón e ícono de vista */}
                        <div className="flex flex-col items-end gap-2">
                          {/* Ícono de ojo en hover */}
                          <div className={cn(
                            "flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 transition-all",
                            hoveredArchivo === archivo.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
                          )}>
                            <Eye className="h-4 w-4 text-primary" />
                          </div>
                          
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleOpenGithub(archivo.githubUrl)
                            }}
                            className="gradient-red uppercase tracking-wide btn-racing"
                          >
                            <Github className="mr-1 h-3 w-3" />
                            Abrir
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
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wide text-muted-foreground">
                Vista Previa
              </h2>
              
              <div className="overflow-hidden rounded-xl border border-border/50 bg-card/60 backdrop-blur-lg">
                {selectedArchivo ? (
                  <>
                    {/* Área de preview visual - AQUÍ VA TU IMAGEN */}
                    <div className={cn(
                      "relative aspect-video w-full bg-gradient-to-br transition-all duration-500 racing-stripes overflow-hidden",
                      selectedArchivo.color
                    )}>
                      {/* Si tienes imagen, se mostrará aquí */}
                      {selectedArchivo.imagenUrl ? (
                        <img 
                          src={selectedArchivo.imagenUrl} 
                          alt={selectedArchivo.titulo}
                          className="absolute inset-0 h-full w-full object-contain"
                        />
                      ) : (
                        <>
                          {/* Contenido decorativo del preview */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            {/* Líneas de velocidad */}
                            <div className="absolute left-0 top-1/4 h-px w-1/2 bg-gradient-to-r from-primary/60 to-transparent animate-speed-lines" />
                            <div className="absolute left-0 top-1/2 h-px w-2/3 bg-gradient-to-r from-foreground/20 to-transparent animate-speed-lines" style={{ animationDelay: "0.3s" }} />
                            <div className="absolute left-0 top-3/4 h-px w-1/3 bg-gradient-to-r from-primary/30 to-transparent animate-speed-lines" style={{ animationDelay: "0.6s" }} />
                            
                            {/* Número de proyecto */}
                            <span className="font-[family-name:var(--font-display)] text-8xl font-bold text-foreground/10">
                              {String(selectedArchivo.id).padStart(2, "0")}
                            </span>
                          </div>
                          
                          {/* Texto placeholder para imagen */}
                          <div className="absolute bottom-4 left-4 right-4 text-center">
                            <p className="text-xs text-foreground/50 bg-black/30 rounded px-2 py-1">
                              Agrega tu imagen en: imagenUrl
                            </p>
                          </div>
                        </>
                      )}

                      {/* Badge de preview */}
                      <div className="absolute right-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground backdrop-blur">
                        Preview
                      </div>
                    </div>

                    {/* Información del proyecto */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-primary">
                            {selectedArchivo.nombre}
                          </span>
                          <h3 className="mt-1 text-xl font-bold text-foreground">
                            {selectedArchivo.titulo}
                          </h3>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {selectedArchivo.fecha}
                        </div>
                      </div>

                      <p className="mt-4 leading-relaxed text-muted-foreground">
                        {selectedArchivo.descripcion}
                      </p>

                      {/* Tecnologías */}
                      <div className="mt-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Tag className="h-4 w-4" />
                          <span>Tecnologías:</span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {selectedArchivo.tecnologias.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Botón de acción - LINK A GITHUB */}
                      <Button 
                        onClick={() => handleOpenGithub(selectedArchivo.githubUrl)}
                        className="mt-6 w-full gradient-red uppercase tracking-wider btn-racing"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Ver en GitHub
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex aspect-video items-center justify-center bg-secondary/30">
                    <div className="text-center">
                      <Eye className="mx-auto h-12 w-12 text-muted-foreground/50" />
                      <p className="mt-4 text-muted-foreground">
                        Selecciona un proyecto para ver la vista previa
                      </p>
                    </div>
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
