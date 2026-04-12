"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Music, X, Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingMusicPlayer() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }

    audio.addEventListener("timeupdate", updateProgress)
    return () => audio.removeEventListener("timeupdate", updateProgress)
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log("Error al reproducir:", error))
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <audio ref={audioRef} loop src="/audio/MasqueAmor.mp3" />
      
      <div className="fixed bottom-4 right-4 z-50">
        {/* Boton minimizado */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all hover:scale-110",
              isPlaying 
                ? "border-primary bg-primary text-primary-foreground animate-pulse-glow" 
                : "border-primary/50 bg-card/90 text-primary hover:bg-primary/20 backdrop-blur-lg"
            )}
          >
            <Music className="h-6 w-6" />
          </button>
        )}

        {/* Player expandido */}
        {isExpanded && (
          <div className="animate-fade-in-up rounded-xl border border-primary/30 bg-card/95 p-4 shadow-2xl backdrop-blur-lg w-72">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full bg-primary/20",
                  isPlaying && "animate-spin"
                )} style={{ animationDuration: "3s" }}>
                  <Music className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Mas que Amor</p>
                  <p className="text-xs text-muted-foreground">Herencia de Timbiqui</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="rounded-full p-1 text-muted-foreground hover:bg-primary/20 hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-1 w-full bg-secondary rounded-full overflow-hidden mb-3">
              <div 
                className="h-full bg-primary transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={toggleMute}
                className="rounded-full p-2 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              
              <button
                onClick={togglePlay}
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all",
                  isPlaying 
                    ? "border-primary bg-primary text-primary-foreground" 
                    : "border-primary/50 bg-primary/10 text-primary hover:bg-primary/20"
                )}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
              </button>

              <div className="w-10" /> {/* Spacer for balance */}
            </div>

            <p className="text-center text-xs text-muted-foreground mt-3">
              {isPlaying ? "Reproduciendo..." : "Click para escuchar"}
            </p>
          </div>
        )}
      </div>
    </>
  )
}
