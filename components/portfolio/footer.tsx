import Link from "next/link"

export function Footer() {
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
              © {new Date().getFullYear()} Todos los derechos reservados
            </span>
          </div>

          {/* Links rápidos */}
          <div className="flex items-center gap-6">
            <Link 
              href="/home" 
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              About Me
            </Link>
            <Link 
              href="/archives" 
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Proyectos
            </Link>
            <Link 
              href="/collection" 
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Collection
            </Link>
          </div>

          {/* Tagline */}
          <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-widest text-muted-foreground">
            Velocidad • Pasión • Excelencia
          </p>
        </div>
      </div>
    </footer>
  )
}
