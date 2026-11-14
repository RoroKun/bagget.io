"use client"

import Image from "next/image"
import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { cn } from "@/lib/utils"

/**
 * Rounded media banner with an oversized display title (Product / Our Story / News / Contact).
 * Like the Framer site, it fades out as it scrolls out of view.
 */
export function PageHeader({
  title,
  image,
  video,
  overlay = 0.5,
  className,
  titleClassName,
  priority = true,
}: {
  title: ReactNode
  image?: string
  video?: string
  overlay?: number
  className?: string
  titleClassName?: string
  priority?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={cn(
        "relative mx-auto flex h-[200px] w-full max-w-[1050px] items-center justify-center overflow-hidden rounded-[32px] min-[810px]:h-[313px] min-[810px]:rounded-[40px]",
        className,
      )}
    >
      {video ? (
        <video
          className="absolute inset-0 size-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : image ? (
        <Image src={image} alt="" fill priority={priority} sizes="(min-width: 1100px) 1050px, 100vw" className="object-cover" />
      ) : null}
      <div className="absolute inset-0" style={{ backgroundColor: `rgb(23 23 23 / ${overlay})` }} />
      <h1
        className={cn(
          "relative z-10 px-4 text-center font-display font-extrabold leading-[1.2] text-paper",
          titleClassName ?? "text-[52px] min-[810px]:text-[120px] min-[1200px]:text-[160px]",
        )}
      >
        {title}
      </h1>
    </motion.div>
  )
}
