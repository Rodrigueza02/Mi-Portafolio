"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavbarProps {
  searchPlaceholder?: string
  onSearch?: (query: string) => void
  showSearch?: boolean
}

export function Navbar({ searchPlaceholder = "Buscar...", onSearch, showSearch = true }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/archives", label: "Proyectos" },
    { href: "/collection", label: "Collection" },
  ]

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch?.(query)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Menu hamburguesa móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-primary/20 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Logo */}
        <Link 
          href="/" 
          className="font-[family-name:var(--font-display)] text-xl font-bold tracking-wider text-primary transition-colors hover:text-primary/80"
        >
          MI <span className="text-foreground">PORTAFOLIO</span>
        </Link>

        {/* Links de navegación desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium uppercase tracking-wide transition-colors hover:text-primary",
                pathname === link.href 
                  ? "text-primary" 
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buscador */}
        {showSearch && (
          <div className="hidden items-center gap-2 rounded-md border border-border bg-input px-3 py-1.5 md:flex">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={handleSearch}
              className="w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        )}

        {/* Buscador móvil */}
        {showSearch && (
          <div className="flex items-center gap-2 rounded-md border border-border bg-input px-2 py-1 md:hidden">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={handleSearch}
              className="w-24 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        )}
      </nav>

      {/* Menú móvil expandido */}
      {isMenuOpen && (
        <div className="absolute left-0 top-16 w-full border-b border-border bg-background/98 backdrop-blur md:hidden">
          <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "rounded-md px-4 py-3 font-medium uppercase tracking-wide transition-colors hover:bg-primary/20",
                  pathname === link.href 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
