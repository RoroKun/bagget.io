"use client"

import { motion, type HTMLMotionProps, type Transition } from "motion/react"

/**
 * Recreates Framer's "Appear" effects.
 *  - fade: opacity 0 -> 1, 0.4s spring (bounce 0.2)  — section titles, cards
 *  - rise: opacity 0 + y:150 -> 0, 1s spring (bounce 0.2) — hero lines, CTA rows, story pills
 *
 * trigger="load" plays on mount (hero), trigger="view" plays when scrolled into view.
 * replay=true reverses the animation when the element leaves the viewport (Framer "replay").
 */
type Preset = "fade" | "rise"

const PRESETS: Record<Preset, { hidden: { opacity: number; y?: number }; duration: number }> = {
  fade: { hidden: { opacity: 0 }, duration: 0.4 },
  rise: { hidden: { opacity: 0, y: 150 }, duration: 1 },
}

type RevealProps = HTMLMotionProps<"div"> & {
  preset?: Preset
  delay?: number
  duration?: number
  trigger?: "load" | "view"
  replay?: boolean
  /** Fraction of the element that must be visible before it animates. */
  amount?: number
  /** Element to render: span for lines inside a heading, li inside lists. */
  as?: "div" | "span" | "li"
}

export function Reveal({
  preset = "fade",
  delay = 0,
  duration,
  trigger = "view",
  replay = false,
  amount = 0.2,
  as = "div",
  children,
  ...props
}: RevealProps) {
  const Comp = { div: motion.div, span: motion.span, li: motion.li }[as] as typeof motion.div
  const { hidden, duration: presetDuration } = PRESETS[preset]
  const transition: Transition = {
    type: "spring",
    bounce: 0.2,
    duration: duration ?? presetDuration,
    delay,
  }
  const shown = { opacity: 1, y: 0 }

  return (
    <Comp
      initial={hidden}
      {...(trigger === "load"
        ? { animate: shown }
        : { whileInView: shown, viewport: { once: !replay, amount } })}
      transition={transition}
      {...props}
    >
      {children}
    </Comp>
  )
}
