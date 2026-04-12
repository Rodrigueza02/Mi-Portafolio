"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo y copyright */}
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-wider text-primary">
              PORTAFOLIO
            </span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {t("footer.rights")}
            </span>
          </div>

          {/* Links rapidos */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link 
              href="/home" 
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t("nav.home")}
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t("nav.about")}
            </Link>
            <Link 
              href="/archives" 
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t("nav.projects")}
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Tagline */}
          <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-widest text-muted-foreground">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  )
}
