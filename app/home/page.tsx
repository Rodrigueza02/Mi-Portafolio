"use client"

import { useState, useRef, useEffect } from "react"
import { 
  MessageSquare, 
  Code, 
  GraduationCap, 
  Target, 
  ChevronRight, 
  ChevronDown,
  Play,
  Pause,
  Mail,
  Phone,
  MapPin,
  Send,
  FileText,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { FloatingMusicPlayer } from "@/components/portfolio/floating-player"
import { useLanguage } from "@/contexts/language-context"

// Datos de contenido para busqueda
const homeContent = [
  { id: "bienvenida", section: "Bienvenida", text: "Bienvenido" },
  { id: "historia", section: "Historia", text: "Mi trayectoria profesional" },
  { id: "software", section: "Software", text: "Herramientas y tecnologias" },
  { id: "estudios", section: "Estudios", text: "Formacion academica" },
  { id: "metas", section: "Metas", text: "Objetivos profesionales" },
  { id: "video", section: "Video", text: "Video personal" },
  { id: "presentacion", section: "Presentacion", text: "Breve descripcion" },
  { id: "momentos", section: "Momentos", text: "Galeria de imagenes" },
]

// Imagenes de momentos
const momentosImages = [
  { id: 1, title: "Seminario", imageUrl: "/momentos/seminario.jpg", color: "from-red-600/40 to-red-900/20" },
  { id: 2, title: "Clases de Programacion", imageUrl: "/momentos/programacion.jpg", color: "from-red-700/30 to-red-950/20" },
  { id: 3, title: "Compañeros de Estudio", imageUrl: "/momentos/companeros.jpg", color: "from-red-800/25 to-red-900/30" },
  { id: 4, title: "Capacitación", imageUrl: "/momentos/capacitacion.jpg", color: "from-red-600/35 to-red-950/25" },
]

export default function HomePage() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeButton, setActiveButton] = useState<string | null>(null)
  const [showCommentBox, setShowCommentBox] = useState(false)
  const [comment, setComment] = useState("")
  const [commentStatus, setCommentStatus] = useState<"idle" | "sending" | "success">("idle")
  const [expandedPresentation, setExpandedPresentation] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const buttonContent = {
    software: { titleKey: "software.title", textKey: "software.text" },
    estudios: { titleKey: "studies.title", textKey: "studies.text" },
    metas: { titleKey: "goals.title", textKey: "goals.text" }
  }

  const toggleButton = (buttonId: string) => {
    setActiveButton(activeButton === buttonId ? null : buttonId)
  }

  const toggleVideo = () => {
    if (!videoRef.current) return
    if (isVideoPlaying) {
      videoRef.current.pause()
      setIsVideoPlaying(false)
    } else {
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

 const submitComment = async () => {
  if (!comment.trim()) return

  setCommentStatus("sending")

  try {
  
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    })

    console.log("📡 RESPUESTA:", res)

    if (!res.ok) throw new Error("Error al enviar")

    setCommentStatus("success")
    setComment("")

    setTimeout(() => {
      setCommentStatus("idle")
      setShowCommentBox(false)
    }, 3000)

  } catch (error) {
    console.error("❌ ERROR FRONT:", error)
    setCommentStatus("idle")
  }
}

  const downloadCV = () => {
    // El archivo PDF debe estar en /public/cv/hoja-de-vida.pdf
    const link = document.createElement("a")
    link.href = "/cv/hoja-de-vida.pdf"
    link.download = "Juliana_Rodriguez_CV.pdf"
    link.click()
  }

  return (
    <div className="flex min-h-screen flex-col racing-gradient smoke-overlay speed-stripes-overlay vignette relative overflow-hidden pt-14 md:pt-16">
      {/* Elementos decorativos de fondo */}
      <div className="glow-orb-intense absolute -left-40 top-1/4 h-80 w-80 bg-red-600/50" />
      <div className="glow-orb-intense absolute -right-40 top-2/3 h-96 w-96 bg-red-700/40" style={{ animationDelay: "2s" }} />
      <div className="glow-orb-intense absolute left-1/3 bottom-1/4 h-64 w-64 bg-red-500/45" style={{ animationDelay: "4s" }} />
      <div className="glow-orb-intense absolute right-1/4 top-1/3 h-56 w-56 bg-red-800/35" style={{ animationDelay: "3s" }} />
      <div className="glow-orb-intense absolute left-1/2 top-1/2 h-72 w-72 bg-red-600/30" style={{ animationDelay: "5s" }} />
      
      {/* Lineas de luz en movimiento */}
      <div className="particles-container">
        <div className="light-streak absolute top-[10%] w-1/3" style={{ animationDelay: "0s" }} />
        <div className="light-streak absolute top-[25%] w-2/5" style={{ animationDelay: "1s" }} />
        <div className="light-streak absolute top-[40%] w-1/2" style={{ animationDelay: "2s" }} />
        <div className="light-streak absolute top-[55%] w-1/3" style={{ animationDelay: "3s" }} />
        <div className="light-streak absolute top-[70%] w-2/5" style={{ animationDelay: "1.5s" }} />
        <div className="light-streak absolute top-[85%] w-1/4" style={{ animationDelay: "2.5s" }} />
      </div>

      <Navbar />

      <main className="flex-1 relative z-10">
        {/* Seccion Bienvenida */}
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
                  {t("welcome.title")} <span className="text-primary">{t("welcome.portfolio")}</span>
                </h1>
                
                <div className="mt-4 h-1 w-32 bg-gradient-to-r from-primary to-transparent" />
                
                {/* Historia */}
                <div 
                  id="historia"
                  ref={(el) => { sectionRefs.current["historia"] = el }}
                  className={`mt-6 rounded-lg p-4 transition-all duration-500 ${activeSection === "historia" ? "bg-primary/15" : ""}`}
                >
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("welcome.history")}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {t("welcome.historyText")}
                  </p>
                </div>

                {/* Botones: Software, Estudios, Metas */}
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
                    {t("btn.software")}
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
                    {t("btn.studies")}
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
                    {t("btn.goals")}
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${activeButton === "metas" ? "rotate-180" : ""}`} />
                  </Button>
                </div>

                {/* Contenido desplegable de los botones */}
                {activeButton && (
                  <div className="mt-4 animate-fade-in-up rounded-lg border border-primary/30 bg-card/80 p-5 backdrop-blur card-lift">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide text-primary">
                      {t(buttonContent[activeButton as keyof typeof buttonContent].titleKey)}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {t(buttonContent[activeButton as keyof typeof buttonContent].textKey)}
                    </p>
                  </div>
                )}
              </div>

              {/* Seccion de Video Personal */}
              <div 
                id="video"
                ref={(el) => { sectionRefs.current["video"] = el }}
                className={`flex flex-col gap-4 rounded-lg p-4 transition-all duration-500 ${activeSection === "video" ? "bg-primary/15" : ""}`}
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-2">
                  <Play className="h-5 w-5 text-primary" />
                  {t("video.title")}
                </h3>
                
                {/* Contenedor de video */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-primary/50 bg-gradient-to-br from-red-600/40 to-red-900/30 shadow-lg card-lift group">
                  {/* Video - sube tu video a /public/video/personal.mp4 */}
                  <video 
                    ref={videoRef}
                    className="h-full w-full object-contain"
                    poster="/images/corazon.jpg"
                  >
                    <source src="/video/personal.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                  </video>
                  
                  {/* Overlay con boton de play */}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity cursor-pointer ${isVideoPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
                    onClick={toggleVideo}
                  >
                    <button 
                      className={`flex h-20 w-20 items-center justify-center rounded-full border-3 transition-all btn-racing ${
                        isVideoPlaying 
                          ? "border-primary bg-primary text-primary-foreground" 
                          : "border-primary/50 bg-primary/20 text-primary hover:bg-primary/40 hover:scale-110"
                      }`}
                    >
                      {isVideoPlaying ? <Pause className="h-10 w-10" /> : <Play className="h-10 w-10 ml-1" />}
                    </button>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </section>

        {/* Contenedor principal con banner */}
        <section className="border-b border-primary/20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Banner principal */}
              <div className="relative lg:col-span-2">
                <div className="relative h-72 overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-red-600/50 via-red-800/40 to-red-950/60 md:h-80 racing-stripes">
                  <img src="/images/lot.jpg" alt="fondo" className="absolute inset-0 h-full w-full object-cover opacity-60" />
                  
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/80" />
                  
                  {/* Contenido del banner */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Efecto de velocidad */}
                    <div className="absolute left-0 top-1/4 h-px w-3/4 bg-gradient-to-r from-primary/60 to-transparent animate-speed-lines" />
                    <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-primary/40 to-transparent animate-speed-lines" style={{ animationDelay: "0.5s" }} />
                    <div className="absolute left-0 top-3/4 h-px w-1/2 bg-gradient-to-r from-primary/20 to-transparent animate-speed-lines" style={{ animationDelay: "1s" }} />
                    
                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-foreground md:text-4xl text-glow">
                      {t("passion.title").split(" ").slice(0, 2).join(" ")} <span className="text-primary">{t("passion.title").split(" ").slice(2).join(" ")}</span>
                    </h2>
                    <p className="mt-2 max-w-md text-muted-foreground">
                      {t("passion.subtitle")}
                    </p>
                    
                    {/* Botones de comentar y descargar CV */}
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button 
                        onClick={() => setShowCommentBox(!showCommentBox)}
                        className="gradient-red uppercase tracking-wider btn-racing"
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        {showCommentBox ? t("btn.close") : t("btn.comment")}
                      </Button>
                      
                      <Button 
                        onClick={downloadCV}
                        variant="outline"
                        className="border-primary/50 uppercase tracking-wider hover:bg-primary/10 btn-racing"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        {t("btn.downloadCV")}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Caja de comentarios */}
                {showCommentBox && (
                  <div className="mt-4 animate-fade-in-up rounded-xl border border-primary/30 bg-card/80 p-5 backdrop-blur">
                    <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wide text-foreground mb-4">
                      {t("comments.title")}
                    </h4>
                    
                    {commentStatus === "success" ? (
                      <div className="flex items-center gap-3 text-green-500 bg-green-500/10 rounded-lg p-4">
                        <CheckCircle className="h-6 w-6" />
                        <span className="font-medium">{t("comments.success")}</span>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <input
                          type="text"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder={t("comments.placeholder")}
                          className="flex-1 rounded-lg border border-primary/30 bg-input px-4 py-2 text-foreground outline-none focus:border-primary placeholder:text-muted-foreground"
                          onKeyDown={(e) => e.key === "Enter" && submitComment()}
                          disabled={commentStatus === "sending"}
                        />
                        <Button 
                          onClick={submitComment} 
                          className="gradient-red btn-racing"
                          disabled={commentStatus === "sending"}
                        >
                          {commentStatus === "sending" ? (
                            <span className="animate-pulse">{t("comments.sending")}</span>
                          ) : (
                            <Send className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    )}
                    
                    <p className="mt-3 text-xs text-muted-foreground">
                      Los comentarios se envian a: julirodriguezandrade@gmail.com
                    </p>
                  </div>
                )}
              </div>

              {/* Presentacion breve */}
              <div 
                id="presentacion"
                ref={(el) => { sectionRefs.current["presentacion"] = el }}
                className={`flex flex-col gap-4 rounded-lg p-4 transition-all duration-500 ${activeSection === "presentacion" ? "bg-primary/15" : ""}`}
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-foreground">
                  {t("presentation.title")}
                </h3>
                
                <div className="flex gap-4">
                  {/* Imagen pequena */}
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border-2 border-primary/30 bg-gradient-to-br from-red-600/40 to-red-900/30">
                    <img src="/images/miFoto.jpg" alt="Perfil" className="h-full w-full object-cover" />
                  </div>
                  
                  {/* Texto expandible */}
                  <div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t("presentation.text")}
                    </p>

                    {expandedPresentation && (
                      <div className="mt-4 space-y-4 animate-fade-in-up text-sm text-muted-foreground">
                        <p>{t("presentation.adaptText")}</p>
                        <p>{t("presentation.workText")}</p>
                      </div>

                    )}

                    <Button 
                      variant="link" 
                      onClick={() => setExpandedPresentation(!expandedPresentation)}
                      className="mt-2 h-auto p-0 text-primary"
                    >
                      {expandedPresentation ? t("btn.readLess") : t("btn.readMore")} 
                      <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${expandedPresentation ? "rotate-90" : ""}`} />
                    </Button>
                  </div>
                </div>
            
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
              {t("moments.title")}
            </h2>
            
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
          </div>
        </section>
      </main>

      {/* Reproductor de musica flotante */}
      <FloatingMusicPlayer />

      <Footer />
    </div>
  )
}
