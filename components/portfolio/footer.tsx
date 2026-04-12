"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-card/50 relative z-10">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          {/* Logo y copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
            <span className="font-[family-name:var(--font-display)] text-base md:text-lg font-bold tracking-wider text-primary">
              PORTAFOLIO
            </span>
            <span className="text-xs md:text-sm text-muted-foreground">
              © {new Date().getFullYear()} {t("footer.rights")}
            </span>
          </div>

          {/* Links rapidos - Ocultos en mobile muy pequeno, se usa el menu hamburguesa */}
          <div className="hidden sm:flex items-center gap-3 md:gap-6 flex-wrap justify-center">
            <Link 
              href="/home" 
              className="text-xs md:text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t("nav.home")}
            </Link>
            <Link 
              href="/about" 
              className="text-xs md:text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t("nav.about")}
            </Link>
            <Link 
              href="/archives" 
              className="text-xs md:text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t("nav.projects")}
            </Link>
            <Link 
              href="/contact" 
              className="text-xs md:text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Tagline */}
          <p className="font-[family-name:var(--font-display)] text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground text-center">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  )
}
