import { cn } from "@/lib/utils"
import { ButtonLink, type ButtonVariant } from "./button-link"
import { Reveal } from "./reveal"

/** "Start 30-Day Free Trial / Book a Demo" row + follow-up line, shared by Home and Product. */
export function TrialCta({
  tone = "dark",
  secondaryVariant = "outline",
}: {
  tone?: "dark" | "light"
  secondaryVariant?: ButtonVariant
}) {
  return (
    <>
      <Reveal
        preset="rise"
        trigger="load"
        delay={2.75}
        className="flex w-full flex-col items-center gap-4 min-[810px]:w-auto min-[810px]:flex-row"
      >
        <ButtonLink href="/contact" className="w-full min-[810px]:w-auto">
          Start 30-Day Free Trial
        </ButtonLink>
        <ButtonLink href="/contact" variant={secondaryVariant} className="w-full min-[810px]:w-auto">
          Book a Demo
        </ButtonLink>
      </Reveal>
      <p
        className={cn(
          "font-display font-light leading-[1.5]",
          tone === "dark" ? "text-ink" : "text-paper",
        )}
      >
        <strong className="font-bold">Have a question or a feature in mind?</strong> Reach out and we’ll find a way to
        make Bag/Get work for you.
      </p>
    </>
  )
}
