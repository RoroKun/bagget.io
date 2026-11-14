import Link from "next/link"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const VARIANTS = {
  /** dark-green fill — primary CTA on any background */
  primary: "bg-forest text-paper border-forest hover:bg-moss",
  /** ink outline — secondary CTA on light backgrounds */
  outline: "bg-transparent text-ink border-ink hover:bg-ink/5",
  /** charcoal fill — secondary CTA on dark backgrounds */
  dark: "bg-ink-soft text-paper border-white/10 hover:bg-[#333]",
} as const

export type ButtonVariant = keyof typeof VARIANTS

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant }) {
  const external = typeof props.href === "string" && props.href.startsWith("http")
  return (
    <Link
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg border-2 px-[18px] py-2 font-display text-base font-medium leading-[1.2] transition-colors",
        VARIANTS[variant],
        className,
      )}
    />
  )
}
