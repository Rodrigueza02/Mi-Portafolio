"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { 
  Search, 
  Mic, 
  MessageSquare, 
  Code, 
  GraduationCap, 
  Target, 
  ChevronRight, 
  ChevronDown,
  Play,
  Pause,
  X,
  Mail,
  Phone,
  MapPin,
  Send,
  Music
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"

// Datos de contenido para búsqueda
const homeContent = [
  { id: "bienvenida", section: "Bienvenida", text: "Bienvenido a mi portafolio" },
  { id: "historia", section: "Historia", text: "Mi trayectoria profesional" },
  { id: "software", section: "Software", text: "Herramientas y tecnologías" },
  { id: "estudios", section: "Estudios", text: "Formación académica" },
  { id: "metas", section: "Metas", text: "Objetivos profesionales" },
  { id: "componentes", section: "Mi Canción", text: "Mi canción favorita" },
  { id: "presentacion", section: "Presentación", text: "Breve descripción" },
  { id: "momentos", section: "Momentos", text: "Galería de imágenes" },
]

// Contenido para botones Software, Estudios, Metas
const buttonContent = {
  software: {
    title: "Software & Herramientas",
    text: "Domino tecnologías como Java, Python, TypeScript, SQL y HTML, y cuento con experiencia trabajando con herramientas y frameworks como React, Vite, Django y Unity. Además, aplico patrones de diseño y estructuras de datos para desarrollar soluciones organizadas, eficientes y escalables. Me enfoco en escribir código claro, mantenible y orientado a buenas prácticas de desarrollo. Me interesa especialmente la parte visual y gráfica del desarrollo, ya que disfruto crear interfaces atractivas y bien estructuradas."
  },
  estudios: {
    title: "Formación Académica",
    text: "Estudiante de quinto semestre de Ingeniería de Sistemas, con enfoque en desarrollo de software y gran interés en el diseño y la parte visual de las aplicaciones. Actualmente, me encuentro en la etapa final de un tecnólogo en Desarrollo Multimedia y Web. He fortalecido mis conocimientos a través de formación complementaria, incluyendo un curso de Programación Orientada a Objetos, y continúo en constante aprendizaje para mejorar mis habilidades técnicas y profesionales."
  },
  metas: {
    title: "Mis Objetivos",
    text: "Mi meta principal es culminar mi carrera profesional y graduarme con honores, consolidando una base sólida en el desarrollo de software. A futuro, aspiro a continuar mi formación con una maestría enfocada en áreas como diseño, desarrollo de videojuegos o ciberseguridad, con el objetivo de especializarme y aportar soluciones innovadoras en el ámbito tecnológico."
}
}

// =====================================================
// CONFIGURA TUS IMÁGENES DE MOMENTOS AQUÍ
// =====================================================
const momentosImages = [
  { id: 1, title: "Proyecto 2023", imageUrl: "", color: "from-red-600/40 to-red-900/20" },
  { id: 2, title: "Hackathon", imageUrl: "", color: "from-red-700/30 to-red-950/20" },
  { id: 3, title: "Equipo Dev", imageUrl: "", color: "from-red-800/25 to-red-900/30" },
  { id: 4, title: "Celebración", imageUrl: "", color: "from-red-600/35 to-red-950/25" },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeButton, setActiveButton] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showCommentBox, setShowCommentBox] = useState(false)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState<string[]>([])
  const [expandedPresentation, setExpandedPresentation] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const isPlayingRef = useRef(false)
  const playPromiseRef = useRef<Promise<void> | null>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const filteredContent = homeContent.filter(
    (item) =>
      item.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.text.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Función para hacer scroll y parpadear al buscar
  const highlightSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
      setActiveSection(sectionId)
      element.classList.add("highlight-blink")
      setTimeout(() => {
        element.classList.remove("highlight-blink")
        setActiveSection(null)
      }, 2000)
    }
  }

  // Auto-scroll cuando se busca
  useEffect(() => {
    if (searchQuery && filteredContent.length > 0) {
      const firstResult = filteredContent[0]
      highlightSection(firstResult.id)
    }
  }, [searchQuery])

  const toggleButton = (buttonId: string) => {
    setActiveButton(activeButton === buttonId ? null : buttonId)
  }

  const toggleAudio = () => {
  if (!audioRef.current) return

  if (isPlaying) {
    audioRef.current.pause()
    setIsPlaying(false)
  } else {
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch((error) => {
        console.log("Error al reproducir:", error)
      })
  }
}

  const submitComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment])
      setComment("")
    }
  }

  return (
    <div className="flex min-h-screen flex-col racing-gradient smoke-overlay speed-stripes-overlay vignette relative overflow-hidden">
      {/* Elementos decorativos de fondo - MÁS INTENSOS */}
      <div className="glow-orb-intense absolute -left-40 top-1/4 h-80 w-80 bg-red-600/50" />
      <div className="glow-orb-intense absolute -right-40 top-2/3 h-96 w-96 bg-red-700/40" style={{ animationDelay: "2s" }} />
      <div className="glow-orb-intense absolute left-1/3 bottom-1/4 h-64 w-64 bg-red-500/45" style={{ animationDelay: "4s" }} />
      <div className="glow-orb-intense absolute right-1/4 top-1/3 h-56 w-56 bg-red-800/35" style={{ animationDelay: "3s" }} />
      <div className="glow-orb-intense absolute left-1/2 top-1/2 h-72 w-72 bg-red-600/30" style={{ animationDelay: "5s" }} />
      
      {/* Líneas de luz en movimiento */}
      <div className="particles-container">
        <div className="light-streak absolute top-[10%] w-1/3" style={{ animationDelay: "0s" }} />
        <div className="light-streak absolute top-[25%] w-2/5" style={{ animationDelay: "1s" }} />
        <div className="light-streak absolute top-[40%] w-1/2" style={{ animationDelay: "2s" }} />
        <div className="light-streak absolute top-[55%] w-1/3" style={{ animationDelay: "3s" }} />
        <div className="light-streak absolute top-[70%] w-2/5" style={{ animationDelay: "1.5s" }} />
        <div className="light-streak absolute top-[85%] w-1/4" style={{ animationDelay: "2.5s" }} />
      </div>

      {/* =====================================================
          CONFIGURA TU CANCIÓN AQUÍ
          Sube tu archivo MP3 a la carpeta /public/audio/
          ===================================================== */}
      <audio ref={audioRef} loop>
        <source src="/audio/MasqueAmor.mp3" type="audio/mpeg" />
      </audio>

      <Navbar 
        searchPlaceholder="Buscar en home..." 
        onSearch={setSearchQuery}
        showSearch={true}
      />

      {/* Resultados de búsqueda con click para scroll */}
      {searchQuery && (
        <div className="border-b border-primary/30 bg-card/90 backdrop-blur relative z-10">
          <div className="container mx-auto px-4 py-3">
            <p className="mb-2 text-sm text-muted-foreground">
              Resultados para &quot;{searchQuery}&quot;:
            </p>
            <div className="flex flex-wrap gap-2">
              {filteredContent.map((item) => (
                <button
                  key={item.id}
                  onClick={() => highlightSection(item.id)}
                  className="rounded-md bg-primary/20 px-3 py-1 text-sm text-foreground transition-all hover:bg-primary/30 hover:scale-105"
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

      <main className="flex-1 relative z-10">
        {/* Sección Bienvenida */}
        <section 
          id="bienvenida"
          ref={(el) => { sectionRefs.current["bienvenida"] = el }}
          className={`border-b border-primary/20 py-12 transition-all duration-500 ${activeSection === "bienvenida" ? "bg-primary/15" : ""}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Texto de bienvenida */}
              <div className="flex flex-col justify-center">
                <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-foreground md:text-5xl text-glow">
                  Bienvenido a mi <span className="text-primary">Portafolio</span>
                </h1>
                
                <div className="mt-4 h-1 w-32 bg-gradient-to-r from-primary to-transparent" />
                
                {/* Historia */}
                <div 
                  id="historia"
                  ref={(el) => { sectionRefs.current["historia"] = el }}
                  className={`mt-6 rounded-lg p-4 transition-all duration-500 ${activeSection === "historia" ? "bg-primary/15" : ""}`}
                >
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-muted-foreground">
                    Historia
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Mi interés por la tecnología comenzó desde que descubrí mi gusto por el diseño, 
                    la innovación y la creación de nuevas soluciones. 
                    Actualmente, me encuentro cursando quinto semestre de Ingeniería de Software, 
                    una carrera que elegí porque me permite materializar ideas a través de la programación.

                    A lo largo de mi formación, he fortalecido habilidades que me permiten desarrollar soluciones tecnológicas, 
                    combinando creatividad y lógica para aportar valor en cada proyecto.
                  </p>
                </div>

                {/* Botones: Software, Estudios, Metas - INTERACTIVOS */}
                <div 
                  className="mt-6 flex flex-wrap gap-3"
                  ref={(el) => { 
                    sectionRefs.current["software"] = el
                    sectionRefs.current["estudios"] = el
                    sectionRefs.current["metas"] = el
                  }}
                >
                  <Button
                    id="software"
                    variant={activeButton === "software" ? "default" : "outline"}
                    onClick={() => toggleButton("software")}
                    className={`border-primary/50 uppercase tracking-wide btn-racing ${
                      activeButton === "software" ? "gradient-red" : "hover:bg-primary/10"
                    }`}
                  >
                    <Code className="mr-2 h-4 w-4" />
                    Software
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${activeButton === "software" ? "rotate-180" : ""}`} />
                  </Button>
                  <Button
                    id="estudios"
                    variant={activeButton === "estudios" ? "default" : "outline"}
                    onClick={() => toggleButton("estudios")}
                    className={`border-primary/50 uppercase tracking-wide btn-racing ${
                      activeButton === "estudios" ? "gradient-red" : "hover:bg-primary/10"
                    }`}
                  >
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Estudios
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${activeButton === "estudios" ? "rotate-180" : ""}`} />
                  </Button>
                  <Button
                    id="metas"
                    variant={activeButton === "metas" ? "default" : "outline"}
                    onClick={() => toggleButton("metas")}
                    className={`border-primary/50 uppercase tracking-wide btn-racing ${
                      activeButton === "metas" ? "gradient-red" : "hover:bg-primary/10"
                    }`}
                  >
                    <Target className="mr-2 h-4 w-4" />
                    Metas
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${activeButton === "metas" ? "rotate-180" : ""}`} />
                  </Button>
                </div>

                {/* Contenido desplegable de los botones */}
                {activeButton && (
                  <div className="mt-4 animate-fade-in-up rounded-lg border border-primary/30 bg-card/80 p-5 backdrop-blur card-lift">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide text-primary">
                      {buttonContent[activeButton as keyof typeof buttonContent].title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {buttonContent[activeButton as keyof typeof buttonContent].text}
                    </p>
                  </div>
                )}
              </div>

              {/* =====================================================
                  MI CANCIÓN FAVORITA
                  Configura tu imagen de álbum y canción aquí
                  ===================================================== */}
              <div 
                id="componentes"
                ref={(el) => { sectionRefs.current["componentes"] = el }}
                className={`flex flex-col gap-4 rounded-lg p-4 transition-all duration-500 ${activeSection === "componentes" ? "bg-primary/15" : ""}`}
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-2">
                  <Music className="h-5 w-5 text-primary" />
                  Mi Canción Favorita
                </h3>
                <div className="flex items-center gap-6">
                  {/* Imagen del álbum - PON TU IMAGEN AQUÍ */}
                  <div className="relative h-36 w-36 overflow-hidden rounded-xl border-2 border-primary/50 bg-gradient-to-br from-red-600/40 to-red-900/30 shadow-lg card-lift group">
                    {/* Reemplaza este div con tu imagen:
                    <img src="/images/album.jpg" alt="Álbum" className="h-full w-full object-cover" />
                    */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`h-20 w-20 rounded-full bg-gradient-to-br from-red-500/50 to-red-800/50 flex items-center justify-center transition-transform ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "3s" }}>
                        <div className="h-8 w-8 rounded-full bg-red-900/80" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-black/50 rounded p-1">
                      <p className="text-xs text-foreground font-semibold truncate">Mas que Amor</p>
                      <p className="text-xs text-muted-foreground truncate">Herencia de Timbiqui</p>
                    </div>
                  </div>
                  
                  {/* Botón de reproducir/pausar */}
                  <div className="flex flex-col items-center gap-3">
                    <button 
                      onClick={toggleAudio}
                      className={`flex h-20 w-20 items-center justify-center rounded-full border-3 transition-all btn-racing ${
                        isPlaying 
                          ? "border-primary bg-primary text-primary-foreground animate-pulse-glow" 
                          : "border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 hover:scale-110"
                      }`}
                    >
                      {isPlaying ? <Pause className="h-10 w-10" /> : <Play className="h-10 w-10 ml-1" />}
                    </button>
                    <p className="text-xs text-muted-foreground text-center">
                      {isPlaying ? "Reproduciendo..." : "Click para escuchar"}
                    </p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground bg-card/50 rounded-md p-2">
                  Mi Cancion Especial: <code className="text-primary">Esta cancion me genera amor y paz, 
                    me la dedico la persona mas importante en  mi vida, mi mamá</code>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contenedor principal con banner */}
        <section className="border-b border-primary/20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Banner principal - LA VELOCIDAD ES MI PASIÓN */}
              <div className="relative lg:col-span-2">
                {/* =====================================================
                    PON TU FOTO PERSONAL AQUÍ
                    Reemplaza el gradiente con tu imagen
                    ===================================================== */}
                <div className="relative h-72 overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-red-600/50 via-red-800/40 to-red-950/60 md:h-80 racing-stripes">
                  {/* Descomenta y usa tu imagen:
                  <img src="/images/mi-foto.jpg" alt="Mi foto" className="absolute inset-0 h-full w-full object-cover" />
                  */}
                  
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/80" />
                  
                  {/* Contenido del banner */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Efecto de velocidad */}
                    <div className="absolute left-0 top-1/4 h-px w-3/4 bg-gradient-to-r from-primary/60 to-transparent animate-speed-lines" />
                    <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-primary/40 to-transparent animate-speed-lines" style={{ animationDelay: "0.5s" }} />
                    <div className="absolute left-0 top-3/4 h-px w-1/2 bg-gradient-to-r from-primary/20 to-transparent animate-speed-lines" style={{ animationDelay: "1s" }} />
                    
                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-foreground md:text-4xl text-glow">
                      La <span className="text-primary">Velocidad</span> es mi Pasión
                    </h2>
                    <p className="mt-2 max-w-md text-muted-foreground">
                      Donde otros ven límites, yo veo oportunidades para innovar y crear experiencias únicas.
                    </p>
                    
                    {/* Botón comentar */}
                    <Button 
                      onClick={() => setShowCommentBox(!showCommentBox)}
                      className="mt-4 w-fit gradient-red uppercase tracking-wider btn-racing"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      {showCommentBox ? "Cerrar" : "Comentar"}
                    </Button>
                  </div>
                </div>

                {/* Caja de comentarios */}
                {showCommentBox && (
                  <div className="mt-4 animate-fade-in-up rounded-xl border border-primary/30 bg-card/80 p-5 backdrop-blur">
                    <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wide text-foreground mb-4">
                      Deja tu comentario
                    </h4>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Escribe tu comentario..."
                        className="flex-1 rounded-lg border border-primary/30 bg-input px-4 py-2 text-foreground outline-none focus:border-primary placeholder:text-muted-foreground"
                        onKeyDown={(e) => e.key === "Enter" && submitComment()}
                      />
                      <Button onClick={submitComment} className="gradient-red btn-racing">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    {/* Lista de comentarios */}
                    {comments.length > 0 && (
                      <div className="mt-4 space-y-2 max-h-40 overflow-y-auto">
                        {comments.map((c, i) => (
                          <div key={i} className="rounded-lg bg-primary/10 border border-primary/20 px-4 py-2 text-sm text-foreground">
                            {c}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Presentación breve - CON LEER MÁS */}
              <div 
                id="presentacion"
                ref={(el) => { sectionRefs.current["presentacion"] = el }}
                className={`flex flex-col gap-4 rounded-lg p-4 transition-all duration-500 ${activeSection === "presentacion" ? "bg-primary/15" : ""}`}
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-foreground">
                  Presentación Breve
                </h3>
                
                <div className="flex gap-4">
                  {/* Imagen pequeña - PON TU FOTO AQUÍ */}
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border-2 border-primary/30 bg-gradient-to-br from-red-600/40 to-red-900/30">
                    {/* Reemplaza con tu imagen:
                    <img src="/images/perfil.jpg" alt="Perfil" className="h-full w-full object-cover" />
                    */}
                  </div>
                  
                  {/* Texto expandible */}
                  <div>
                  
          <p className="text-sm leading-relaxed text-muted-foreground">
            Desarrolladora en formación con enfoque en la construcción
            de soluciones eficientes y bien organizadas, interesada
            en seguir fortaleciendo tanto mis habilidades técnicas como creativas.
          </p>

          {expandedPresentation && (
            <div className="mt-4 space-y-4 animate-fade-in-up text-sm text-muted-foreground">

              <p>
                Me adapto con facilidad a nuevos entornos de trabajo y herramientas, y disfruto enfrentar retos que me permitan crecer profesionalmente.
              </p>

              <p>
                Mi trabajo se caracteriza por el compromiso, la buena comunicación y la capacidad de aportar ideas que mejoren los resultados, 
                cualidades que han sido valoradas positivamente por compañeros y docentes en distintos proyectos.
              </p>

              <h3 className="text-red-500 font-semibold text-base mt-6">
                Testimonios
              </h3>

              <div>
                <h4 className="text-red-500 font-medium">Camilo Ojeda</h4>
                <span className="text-xs text-gray-400">Cliente</span>
                <p className="italic mt-1">
                  "Trabajar con ella fue una experiencia muy profesional. Necesitábamos una página web moderna y funcional, y logró entregar justo lo que buscábamos. Destaco especialmente su capacidad para entender los requerimientos y proponer mejoras en la interfaz."
                </p>
              </div>

              <div>
                <h4 className="text-red-500 font-medium">Helen Moncayo</h4>
                <span className="text-xs text-gray-400">Compañera de equipo</span>
                <p className="italic mt-1">
                  "Fue una pieza clave en el desarrollo del proyecto. Siempre aportó ideas claras y soluciones eficientes a los problemas técnicos."
                </p>
              </div>

              <div>
                <h4 className="text-red-500 font-medium">Daniel Arteaga</h4>
                <span className="text-xs text-gray-400">Colega desarrollador</span>
                <p className="italic mt-1">
                  "Me impresionó la forma en que aborda los problemas de programación. Se preocupa por la calidad del código y la optimización."
                </p>
              </div>

                </div>
              )}

              <Button 
                variant="link" 
                onClick={() => setExpandedPresentation(!expandedPresentation)}
                className="mt-2 h-auto p-0 text-primary"
              >
                {expandedPresentation ? "Leer menos" : "Leer más"} 
                <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${expandedPresentation ? "rotate-90" : ""}`} />
              </Button>
            </div>

                  </div>


                {/* Botón de contacto con modal */}
                <Button 
                  onClick={() => setShowContact(!showContact)}
                  className="mt-4 w-full gradient-red uppercase tracking-wider btn-racing"
                >
                  {showContact ? "Cerrar Contacto" : "Contacto"}
                </Button>

                {/* Modal de contacto - CONFIGURA TUS DATOS AQUÍ */}
                {showContact && (
                  <div className="animate-fade-in-up rounded-xl border border-primary/30 bg-card/90 p-5 backdrop-blur">
                    <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wide text-primary mb-4">
                      Mis Datos de Contacto
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-foreground">
                        <Mail className="h-5 w-5 text-primary" />
                        {/* PON TU CORREO AQUÍ */}
                        <span>mariaj.rodrigueza@campusucc.edu.co</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <Phone className="h-5 w-5 text-primary" />
                        {/* PON TU TELÉFONO AQUÍ */}
                        <span>+57 3162837593</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <MapPin className="h-5 w-5 text-primary" />
                        {/* PON TU UBICACIÓN AQUÍ */}
                        <span>San Juan de Pasto, Colombia</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Grid de Momentos */}
        <section 
          id="momentos"
          ref={(el) => { sectionRefs.current["momentos"] = el }}
          className={`py-12 transition-all duration-500 ${activeSection === "momentos" ? "bg-primary/10" : ""}`}
        >
          <div className="container mx-auto px-4">
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-foreground text-glow">
              Momentos
            </h2>
            
            {/* =====================================================
                CONFIGURA TUS IMÁGENES DE MOMENTOS AQUÍ
                Agrega las rutas de tus imágenes en momentosImages
                ===================================================== */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {momentosImages.map((img) => (
                <div
                  key={img.id}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-primary/30 transition-all card-lift hover:border-primary/50"
                >
                  {img.imageUrl ? (
                    <img src={img.imageUrl} alt={img.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${img.color}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-foreground/20 text-xs">Tu imagen</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wide text-foreground">
                      {img.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-4 text-xs text-muted-foreground text-center">
              Agrega tus imágenes modificando <code className="text-primary">momentosImages</code> en el código
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
