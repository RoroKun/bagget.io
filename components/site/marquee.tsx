"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Infinite ticker (Framer "Ticker"). Content is rendered twice and translated by -50%,
 * with the duration derived from the measured width so the speed is constant in px/s
 * (Framer site uses 50px/s).
 */
export function Marquee({
  children,
  direction = "left",
  speed = 50,
  className,
  trackClassName,
  pauseOnHover = false,
}: {
  children: ReactNode
  direction?: "left" | "right"
  speed?: number
  className?: string
  trackClassName?: string
  pauseOnHover?: boolean
}) {
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = track.current
    if (!el) return
    const update = () => {
      const half = el.scrollWidth / 2
      el.style.setProperty("--marquee-duration", `${half / speed}s`)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [speed])

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        ref={track}
        className={cn(
          "flex w-max",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          pauseOnHover && "hover:[animation-play-state:paused]",
          trackClassName,
        )}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
