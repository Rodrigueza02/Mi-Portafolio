"use client"

import { useState } from "react"
import { Eye, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

// Datos de imagenes de la coleccion
const collectionImages = [
  { id: 1, title: "Proyecto Web", category: "Desarrollo", color: "from-primary/40 to-secondary" },
  { id: 2, title: "Diseno UI", category: "Diseno", color: "from-secondary to-muted" },
  { id: 3, title: "App Movil", category: "Desarrollo", color: "from-muted to-primary/30" },
  { id: 4, title: "Dashboard", category: "Diseno", color: "from-primary/30 to-secondary" },
  { id: 5, title: "Trabajo en Equipo", category: "Eventos", color: "from-secondary to-primary/20" },
  { id: 6, title: "Hackathon", category: "Eventos", color: "from-primary/50 to-muted" },
  { id: 7, title: "Prototipo", category: "Diseno", color: "from-muted to-secondary" },
  { id: 8, title: "Entrega Final", category: "Eventos", color: "from-secondary to-primary/40" },
]

export default function CollectionPage() {
  const { t } = useLanguage()
  const [filterCategory, setFilterCategory] = useState("")
  const [selectedImage, setSelectedImage] = useState<typeof collectionImages[0] | null>(null)
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  const filteredImages = collectionImages.filter(
    (img) => !filterCategory || img.category === filterCategory
  )

  const handlePrevImage = () => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    setSelectedImage(filteredImages[prevIndex])
  }

  const handleNextImage = () => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(filteredImages[nextIndex])
  }

  return (
    <div className="flex min-h-screen flex-col racing-gradient smoke-overlay speed-stripes-overlay vignette relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="glow-orb-intense absolute -left-48 top-1/3 h-96 w-96 bg-red-600/45" />
      <div className="glow-orb-intense absolute -right-40 bottom-1/4 h-80 w-80 bg-red-700/40" style={{ animationDelay: "2s" }} />
      <div className="glow-orb-intense absolute left-1/2 top-1/4 h-64 w-64 bg-red-500/35" style={{ animationDelay: "3.5s" }} />
      <div className="glow-orb-intense absolute right-1/3 bottom-1/3 h-56 w-56 bg-red-800/30" style={{ animationDelay: "4s" }} />
      
      <div className="particles-container">
        <div className="light-streak absolute top-[15%] w-1/3" style={{ animationDelay: "0s" }} />
        <div className="light-streak absolute top-[35%] w-2/5" style={{ animationDelay: "1s" }} />
        <div className="light-streak absolute top-[55%] w-1/2" style={{ animationDelay: "2s" }} />
        <div className="light-streak absolute top-[75%] w-1/3" style={{ animationDelay: "3s" }} />
      </div>

      <Navbar />

      <main className="flex-1 py-8 md:py-12 relative z-10">
        <div className="container mx-auto px-4">
          {/* Titulo */}
          <div className="mb-8">
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl text-glow">
              {t("collection.title").split(" ")[0]} <span className="text-primary">{t("collection.title").split(" ").slice(1).join(" ")}</span>
            </h1>
            <div className="mt-3 h-1 w-32 bg-gradient-to-r from-primary to-transparent" />
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {t("collection.description")}
            </p>
          </div>

          {/* Filtros por categoria */}
          <div className="mb-6 flex flex-wrap gap-2">
            <Button
              variant={filterCategory === "" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterCategory("")}
              className={cn(
                "uppercase tracking-wide btn-racing",
                filterCategory === "" ? "gradient-red" : "border-primary/50 hover:bg-primary/10"
              )}
            >
              {t("collection.all")}
            </Button>
            {["Desarrollo", "Diseno", "Eventos"].map((cat) => (
              <Button
                key={cat}
                variant={filterCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory(filterCategory === cat ? "" : cat)}
                className={cn(
                  "uppercase tracking-wide btn-racing",
                  filterCategory === cat ? "gradient-red" : "border-primary/50 hover:bg-primary/10"
                )}
              >
                {cat === "Desarrollo" ? t("collection.development") : 
                 cat === "Diseno" ? t("collection.design") : t("collection.events")}
              </Button>
            ))}
          </div>

          {/* Grid de imagenes */}
          {filteredImages.length === 0 ? (
            <div className="flex h-64 items-center justify-center rounded-xl border border-border/50 bg-card/60 backdrop-blur-lg">
              <p className="text-muted-foreground">{t("collection.notFound")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                  onClick={() => setSelectedImage(image)}
                  className="group relative cursor-pointer"
                >
                  <div 
                    className={cn(
                      "aspect-square overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br transition-all duration-300 backdrop-blur-sm",
                      image.color,
                      hoveredImage === image.id && "scale-[1.05] shadow-xl shadow-primary/30 border-primary/50"
                    )}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-[family-name:var(--font-display)] text-6xl font-bold text-foreground/5">
                        {String(image.id).padStart(2, "0")}
                      </span>
                    </div>

                    <div 
                      className={cn(
                        "absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm transition-all duration-300",
                        hoveredImage === image.id ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 animate-pulse-glow">
                        <Eye className="h-7 w-7 text-primary" />
                      </div>
                      
                      <h3 className="text-center font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wide text-foreground">
                        {image.title}
                      </h3>
                      <span className="mt-1 text-xs text-muted-foreground">
                        {image.category === "Desarrollo" ? t("collection.development") : 
                         image.category === "Diseno" ? t("collection.design") : t("collection.events")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Contador de imagenes */}
          <div className="mt-8 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">
              {t("collection.showing")} <span className="font-semibold text-foreground">{filteredImages.length}</span> {t("collection.of")}{" "}
              <span className="font-semibold text-foreground">{collectionImages.length}</span> {t("collection.images")}
            </p>
          </div>
        </div>
      </main>

      {/* Modal de vista de imagen */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div className="glow-orb absolute left-1/4 top-1/4 h-64 w-64 bg-primary/20" />
          <div className="glow-orb absolute right-1/4 bottom-1/4 h-48 w-48 bg-primary/30" style={{ animationDelay: "1s" }} />

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-card/80 text-foreground transition-all hover:bg-primary/20 hover:scale-110"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
            className="absolute left-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-card/80 text-foreground transition-all hover:bg-primary/20 hover:scale-110"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
            className="absolute right-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-card/80 text-foreground transition-all hover:bg-primary/20 hover:scale-110"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div 
            className="mx-4 max-w-4xl relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className={cn(
                "aspect-video w-full overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br shadow-2xl racing-stripes",
                selectedImage.color
              )}
            >
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <ZoomIn className="mx-auto h-16 w-16 text-foreground/20" />
                  <span className="mt-4 block font-[family-name:var(--font-display)] text-9xl font-bold text-foreground/10">
                    {String(selectedImage.id).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-foreground text-glow">
                {selectedImage.title}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {t("collection.category")} <span className="font-medium text-primary">
                  {selectedImage.category === "Desarrollo" ? t("collection.development") : 
                   selectedImage.category === "Diseno" ? t("collection.design") : t("collection.events")}
                </span>
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {filteredImages.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(img)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    selectedImage.id === img.id 
                      ? "w-8 bg-primary animate-pulse-glow" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
