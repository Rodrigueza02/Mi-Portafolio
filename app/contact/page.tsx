"use client"

import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"
import { SiX } from "react-icons/si"

// Datos de contacto - CONFIGURA TUS DATOS AQUI
const contactData = {
  email: "julirodriguezandrade@gmail.com",
  emailSecondary: "mariaj.rodrigueza@campusucc.edu.co",
  phone: "+57 316 283 7593",
  phoneSecondary: "+57 300 000 0000",
  location: "San Juan de Pasto, Narino, Colombia",
  socialMedia: [
    { name: "GitHub", icon: Github, url: "https://github.com/Rodrigueza02", username: "@Rodrigueza02" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/juliana-rodriguez-3514282b1/", username: "Juliana Rodriguez" },
    { name: "X", icon: SiX, url: "https://x.com/Juliana67598650", username: "@Juliana67598650" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/juliguez.02?igsh=MWN5ZWMwazdrOXI0MQ==", username: "@juliguez.02" },
  ]
}

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: "", email: "", message: "", comment: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle")

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!formData.name || !formData.email || !formData.message) return

  setStatus("sending")

  try {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })

    console.log("RESPUESTA:", res)

    if (!res.ok) throw new Error("Error al enviar")

    setStatus("success")
    setFormData({ name: "", email: "", message: "", comment: "" })

    setTimeout(() => setStatus("idle"), 4000)

  } catch (error) {
    console.error("ERROR FRONT:", error)
    setStatus("idle")
  }
}

  return (
    <div className="flex min-h-screen flex-col racing-gradient smoke-overlay speed-stripes-overlay vignette relative overflow-hidden pt-14 md:pt-16">
      {/* Elementos decorativos de fondo */}
      <div className="glow-orb-intense absolute -left-40 top-1/4 h-80 w-80 bg-red-600/45" />
      <div className="glow-orb-intense absolute -right-48 bottom-1/3 h-96 w-96 bg-red-700/35" style={{ animationDelay: "2s" }} />
      <div className="glow-orb-intense absolute left-1/3 top-2/3 h-64 w-64 bg-red-500/40" style={{ animationDelay: "3s" }} />
      <div className="glow-orb-intense absolute right-1/4 top-1/4 h-56 w-56 bg-red-800/30" style={{ animationDelay: "4s" }} />
      
      {/* Lineas de luz en movimiento */}
      <div className="particles-container">
        <div className="light-streak absolute top-[15%] w-1/3" style={{ animationDelay: "0s" }} />
        <div className="light-streak absolute top-[35%] w-2/5" style={{ animationDelay: "1.5s" }} />
        <div className="light-streak absolute top-[55%] w-1/2" style={{ animationDelay: "2.5s" }} />
        <div className="light-streak absolute top-[75%] w-1/4" style={{ animationDelay: "3.5s" }} />
      </div>

      <Navbar />

      <main className="flex-1 py-6 md:py-12 relative z-10">
        <div className="container mx-auto px-4">
          {/* Titulo */}
          <div className="mb-6 md:mb-8 text-center">
            <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold uppercase tracking-wider text-foreground md:text-5xl text-glow">
              {t("contact.title")}
            </h1>
            <div className="mx-auto mt-3 md:mt-4 h-1 w-24 md:w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Informacion de contacto */}
            <div className="space-y-4 md:space-y-6">
              {/* Tarjetas de contacto */}
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                {/* Email principal */}
                <div className="rounded-lg md:rounded-xl border border-primary/30 bg-card/60 p-4 md:p-5 backdrop-blur-lg transition-all card-lift hover:border-primary/50">
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary/20">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground">{t("contact.email")}</h3>
                      <p className="text-[10px] md:text-xs text-muted-foreground">Principal</p>
                    </div>
                  </div>
                  <a href={`mailto:${contactData.email}`} className="text-xs md:text-sm text-primary hover:underline break-all">
                    {contactData.email}
                  </a>
                  <p className="mt-1 text-[10px] md:text-xs text-muted-foreground break-all">
                    {contactData.emailSecondary}
                  </p>
                </div>

                {/* Telefono */}
                <div className="rounded-lg md:rounded-xl border border-primary/30 bg-card/60 p-4 md:p-5 backdrop-blur-lg transition-all card-lift hover:border-primary/50">
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary/20">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground">{t("contact.phone")}</h3>
                      <p className="text-[10px] md:text-xs text-muted-foreground">WhatsApp disponible</p>
                    </div>
                  </div>
                  <a href={`tel:${contactData.phone.replace(/\s/g, "")}`} className="text-xs md:text-sm text-primary hover:underline">
                    {contactData.phone}
                  </a>
                </div>

                {/* Ubicacion */}
                <div className="sm:col-span-2 rounded-lg md:rounded-xl border border-primary/30 bg-card/60 p-4 md:p-5 backdrop-blur-lg transition-all card-lift hover:border-primary/50">
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary/20">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground">{t("contact.location")}</h3>
                      <p className="text-[10px] md:text-xs text-muted-foreground">Colombia</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">{contactData.location}</p>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="rounded-lg md:rounded-xl border border-primary/30 bg-card/60 p-4 md:p-6 backdrop-blur-lg">
                <h3 className="font-[family-name:var(--font-display)] text-base md:text-lg font-semibold uppercase tracking-wide text-foreground mb-3 md:mb-4">
                  {t("contact.socialMedia")}
                </h3>
                <div className="grid gap-2 md:gap-3 grid-cols-2">
                  {contactData.socialMedia.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 md:gap-3 rounded-lg border border-border/50 bg-secondary/30 p-2 md:p-3 transition-all hover:border-primary/50 hover:bg-primary/10 card-lift"
                    >
                      <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-primary/20 shrink-0">
                        <social.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-foreground text-xs md:text-sm">{social.name}</p>
                        <p className="text-[10px] md:text-xs text-muted-foreground truncate">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="rounded-lg md:rounded-xl border border-primary/30 bg-card/60 p-4 md:p-6 backdrop-blur-lg">
              <h3 className="font-[family-name:var(--font-display)] text-base md:text-lg font-semibold uppercase tracking-wide text-foreground mb-4 md:mb-6">
                {t("comments.title")}
              </h3>
              
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-8 md:py-12 text-center">
                  <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-green-500/20 mb-3 md:mb-4">
                    <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2">{t("comments.success")}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Te respondere lo antes posible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div>
                    <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">Nombre</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full rounded-lg border border-primary/30 bg-input px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground outline-none focus:border-primary placeholder:text-muted-foreground transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="w-full rounded-lg border border-primary/30 bg-input px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground outline-none focus:border-primary placeholder:text-muted-foreground transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">Mensaje</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t("comments.placeholder")}
                      rows={4}
                      className="w-full rounded-lg border border-primary/30 bg-input px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground outline-none focus:border-primary placeholder:text-muted-foreground transition-colors resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full gradient-red py-5 md:py-6 text-sm md:text-lg font-semibold uppercase tracking-wider btn-racing"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <span className="animate-pulse">{t("comments.sending")}</span>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                  
                  <p className="text-center text-[10px] md:text-xs text-muted-foreground">
                    Los mensajes se envian a: {contactData.email}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
