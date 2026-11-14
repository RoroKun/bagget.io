import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"

/** Centered section heading (Inter 32) + Plus Jakarta subtitle (24/36), fading in on view. */
export function SectionTitle({
  title,
  children,
  tone = "light",
  className,
}: {
  title: ReactNode
  children?: ReactNode
  tone?: "light" | "dark"
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        "mx-auto flex max-w-[960px] flex-col items-center gap-5 px-6 text-center",
        tone === "light" ? "text-paper" : "text-ink",
        className,
      )}
    >
      <h2 className="text-[26px] leading-[1.2] min-[810px]:text-[32px]">{title}</h2>
      {children && (
        <p className="font-display text-lg font-light leading-[1.5] min-[810px]:text-2xl">{children}</p>
      )}
    </Reveal>
  )
}
