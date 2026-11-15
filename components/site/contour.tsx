/* eslint-disable @next/next/no-img-element -- huge vector backgrounds; next/image can't optimize SVG */
import { cn } from "@/lib/utils"

/**
 * Topographic contour-line background used across the Framer site ("Variant 2" component),
 * with the swirl scribble in the middle. Purely decorative.
 *
 * `scale` resizes the artwork relative to the default (1 = 260% of the container, min 2500px):
 * 0.5 is half as large (bigger-looking lines, fewer of them), 2 is twice as large.
 * `scribbleScale` resizes the centre swirl relative to its default size.
 * `tilt` leans the artwork back in 3D (degrees around the x axis) so the spin reads like a
 * disc turning on a tilted surface. Defaults to 25° when spinning, 0 otherwise.
 * `perspective` (px) controls how strong that 3D effect looks; smaller = more dramatic.
 * `overflow` lets the artwork spill outside its container instead of being clipped to it
 * (any ancestor with overflow-hidden will still clip it).
 */
export function Contour({
  className,
  opacity = 1,
  spin = false,
  invert = false,
  scribble = true,
  scale = 1,
  scribbleScale = 1,
  tilt = spin ? 25 : 0,
  perspective = 2000,
  overflow = false,
}: {
  className?: string
  opacity?: number
  spin?: boolean
  invert?: boolean
  scribble?: boolean
  scale?: number
  scribbleScale?: number
  tilt?: number
  perspective?: number
  overflow?: boolean
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", !overflow && "overflow-hidden", className)}
      style={{ opacity, perspective: tilt ? perspective : undefined }}
    >
      {/* Outer layer holds the static 3D tilt; inner layer does the flat (z-axis) spin inside it. */}
      <div
        className="absolute left-1/2 top-1/2 aspect-[1.07] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: `max(${260 * scale}%, ${2500 * scale}px)`,
          transform: tilt ? `rotateX(${tilt}deg)` : undefined,
        }}
      >
        <div className={cn("relative size-full", spin && "animate-slow-spin", invert && "invert")}>
          <img src="/framer/brand/contour-bg.svg" alt="" className="size-full object-cover" />
          {scribble && (
            <img
              src="/framer/brand/scribble.svg"
              alt=""
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: `${14 * scribbleScale}%` }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
