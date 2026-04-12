"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"

export function Navbar() {
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const navLinks = [
    { href: "/home", labelKey: "nav.home" },
    { href: "/about", labelKey: "nav.about" },
    { href: "/archives", labelKey: "nav.projects" },
    { href: "/collection", labelKey: "nav.collection" },
    { href: "/contact", labelKey: "nav.contact" },
  ]

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-[family-name:var(--font-display)] text-lg font-bold tracking-wider text-primary transition-colors hover:text-primary/80 sm:text-xl"
        >
          MI <span className="text-foreground">PORTAFOLIO</span>
        </Link>

        {/* Links de navegación - siempre visibles en horizontal */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-medium uppercase tracking-wide transition-colors hover:text-primary sm:text-sm",
                pathname === link.href 
                  ? "text-primary" 
                  : "text-muted-foreground"
              )}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </div>

        {/* Botones de tema e idioma */}
        <div className="flex items-center gap-2">
          {/* Botón de tema */}
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

          {/* Botón de idioma */}
          <button
            onClick={toggleLanguage}
            className="flex h-9 items-center gap-1 rounded-lg border border-border/50 bg-card/60 px-2 text-foreground transition-all hover:bg-primary/20 hover:border-primary/50"
            aria-label="Cambiar idioma"
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs font-medium uppercase">{language}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
