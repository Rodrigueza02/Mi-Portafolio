"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Globe, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"

const NAV_LINKS = [
  { href: "/home", labelKey: "nav.home" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/archives", labelKey: "nav.projects" },
  { href: "/collection", labelKey: "nav.collection" },
  { href: "/contact", labelKey: "nav.contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  // Cerrar menu al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevenir scroll cuando el menu esta abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-14 items-center justify-between px-4 md:h-16">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-[family-name:var(--font-display)] text-base font-bold tracking-wider text-primary transition-colors hover:text-primary/80 sm:text-lg md:text-xl"
        >
          MI <span className="text-foreground">PORTAFOLIO</span>
        </Link>

        {/* Links de navegacion - Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary",
                pathname === link.href 
                  ? "text-primary" 
                  : "text-muted-foreground"
              )}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </div>

        {/* Botones de tema, idioma y menu hamburguesa */}
        <div className="flex items-center gap-2">
          {/* Boton de tema */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card/60 text-foreground transition-all hover:bg-primary/20 hover:border-primary/50"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {theme === "dark" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>

          {/* Boton de idioma */}
          <button
            onClick={toggleLanguage}
            className="flex h-9 items-center gap-1 rounded-lg border border-border/50 bg-card/60 px-2 text-foreground transition-all hover:bg-primary/20 hover:border-primary/50"
            aria-label="Cambiar idioma"
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs font-medium uppercase">{language}</span>
          </button>

          {/* Boton de menu hamburguesa - Solo mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card/60 text-foreground transition-all hover:bg-primary/20 hover:border-primary/50"
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu mobile - Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-14 z-40 md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-4"
        )}
      >
        {/* Fondo completamente opaco */}
        <div className="absolute inset-0 bg-background" />
        
        <div className="relative flex flex-col h-full">
          {/* Links de navegacion mobile */}
          <nav className="flex flex-col px-6 py-6 gap-2">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-4 text-lg font-medium uppercase tracking-wide transition-all",
                  pathname === link.href 
                    ? "bg-primary/20 text-primary border border-primary/30 shadow-lg shadow-primary/10" 
                    : "text-foreground hover:bg-primary/10 hover:text-primary border border-border/30 bg-card/50"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-[family-name:var(--font-display)]">
                  {t(link.labelKey)}
                </span>
              </Link>
            ))}
          </nav>

          {/* Separador */}
          <div className="mx-6 h-px bg-border/50" />

          {/* Info adicional */}
          <div className="px-6 py-6">
            <p className="text-sm text-muted-foreground text-center">
              Juliana Rodriguez - Portafolio Personal
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
