/* eslint-disable @next/next/no-img-element -- huge vector backgrounds; next/image can't optimize SVG */
import { cn } from "@/lib/utils"

/**
 * Topographic contour-line background used across the Framer site ("Variant 2" component),
 * with the swirl scribble in the middle. Purely decorative.
 */
export function Contour({
  className,
  opacity = 1,
  spin = false,
  invert = false,
  scribble = true,
}: {
  className?: string
  opacity?: number
  spin?: boolean
  invert?: boolean
  scribble?: boolean
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity }}
    >
      <div
        className={cn(
          "absolute left-1/2 top-1/2 aspect-[1.07] w-[max(260%,2500px)] -translate-x-1/2 -translate-y-1/2",
          spin && "animate-slow-spin",
          invert && "invert",
        )}
      >
        <img src="/framer/brand/contour-bg.svg" alt="" className="size-full object-cover" />
        {scribble && (
          <img
            src="/framer/brand/scribble.svg"
            alt=""
            className="absolute left-1/2 top-1/2 w-[14%] -translate-x-1/2 -translate-y-1/2"
          />
        )}
      </div>
    </div>
  )
}
