import Image from "next/image"
import { ButtonLink } from "@/components/site/button-link"
import { Contour } from "@/components/site/contour"
import { Reveal } from "@/components/site/reveal"

// Staggered load-in timings copied from the Framer appear config.
const LINES = [
  { delay: 0.75, content: <>Our Neighbors <em>you</em> serve</> },
  { delay: 1.5, content: <>The Volunteers <em>who</em> serve</> },
  { delay: 2.25, content: <>All in one platform.</> },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] min-[810px]:pt-[150px]">
      <Contour spin opacity={0.2} scribbleScale={2} tilt={40} perspective={1500}/>
      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center px-6 text-center">
        <h1 className="text-[26px] font-semibold leading-[1.2] text-ink min-[400px]:text-[28px] min-[810px]:text-[52px] min-[1200px]:text-[64px]">
          {LINES.map((l) => (
            <Reveal key={l.delay} as="span" preset="rise" trigger="load" delay={l.delay} className="block pb-1.5">
              {l.content}
            </Reveal>
          ))}
        </h1>
        <Reveal preset="rise" trigger="load" delay={2.75}>
          <p className="mt-6 max-w-[600px] font-display text-lg leading-[1.5] text-ink min-[810px]:text-2xl">
            Client Management Software made simple to intake, manage, and serve our communities.
          </p>
        </Reveal>
        <Reveal
          preset="rise"
          trigger="load"
          delay={2.75}
          className="mt-10 flex w-full flex-col items-center gap-4 min-[810px]:w-auto min-[810px]:flex-row"
        >
          <ButtonLink href="/contact" className="w-full min-[810px]:w-auto">
            Book a Sales Consultation
          </ButtonLink>
          <ButtonLink href="/our-story" variant="outline" className="w-full min-[810px]:w-auto">
            Who are we?
          </ButtonLink>
        </Reveal>
      </div>

      {/* Product demo — overlaps into the dark section below */}
      <div className="relative z-10 mx-auto mt-12 max-w-[1046px] px-6 min-[1100px]:px-0">
        <div className="overflow-hidden rounded-xl border-4 border-[#2a2a2a] shadow-[0_20px_60px_rgb(0_0_0/0.35)]">
          <Image
            src="/framer/home/dashboard-demo.gif"
            alt="Bag/Get staff dashboard adding a neighbor to a distribution queue"
            width={1869}
            height={912}
            unoptimized
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
