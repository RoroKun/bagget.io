import { Contour } from "@/components/site/contour"
import { TrialCta } from "@/components/site/cta-buttons"
import { Reveal } from "@/components/site/reveal"

export function ClosingCta() {
  return (
    <section className="bg-[#d4d4d4]">
      <div className="relative mx-auto overflow-hidden bg-paper px-6 py-[120px]">
        <Contour spin opacity={0.2} scribbleScale={2} tilt={50} perspective={2000}/>
        <div className="relative flex flex-col items-center gap-5 text-center">
          <Reveal className="flex flex-col items-center gap-5">
            <h2 className="text-[26px] font-semibold leading-[1.2] text-ink min-[810px]:text-[32px]">
              Ready to <br className="min-[810px]:hidden" />
              Serve More &amp; Waste Less?
            </h2>
            <p className="max-w-[900px] font-display text-lg font-light leading-[1.5] text-ink min-[810px]:text-2xl">
              Join Bag/Get today and connect your community through one simple platform. Together, we can reach more
              people with less effort.
            </p>
          </Reveal>
          <TrialCta />
        </div>
      </div>
    </section>
  )
}
