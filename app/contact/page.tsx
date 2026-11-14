import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight, Mail } from "lucide-react"
import { Contour } from "@/components/site/contour"
import { PageHeader } from "@/components/site/page-header"
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/data/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Whether you want to learn more, join our mission or pay for a food pantry license we would love to talk.",
}

// Shared look for the two big call-to-action cards (Contact + LinkedIn).
const ctaCard =
  "group flex items-center justify-between gap-4 rounded-[40px] px-6 py-7 text-[26px] font-medium leading-[1.2] transition-colors min-[810px]:px-10 min-[810px]:py-9 min-[810px]:text-[32px]"

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-ink">
      <Contour invert opacity={0.9} scribble={false} />
      <div className="relative px-6 pb-[70px] pt-[90px] min-[810px]:pt-[102px]">
        <PageHeader title="Contact Us" image="/framer/brand/pantry-shelves.webp" overlay={0.4} />

        <div className="mx-auto mt-9 grid max-w-[1047px] grid-cols-[minmax(0,1fr)] gap-[22px] min-[810px]:grid-cols-2 min-[810px]:gap-[30px]">
          <div className="flex flex-col gap-[22px]">
            <div className="rounded-[40px] bg-paper-bright px-6 py-7 min-[810px]:px-10 min-[810px]:py-9">
              <h2 className="text-[32px] font-medium leading-[1.2] text-ink">Want to chat?</h2>
              <p className="mt-4 font-display font-light leading-[1.2] text-ink">
                Whether you want to learn more, join our mission or pay for a food pantry license we would love to
                talk.
              </p>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className={`${ctaCard} bg-mint text-ink hover:bg-[#a7f3c3]`}>
              <span className="flex flex-col gap-2">
                Contact
                <span className="text-base font-normal text-ink/70">{CONTACT_EMAIL}</span>
              </span>
              <Mail className="size-8 shrink-0 transition-transform group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </a>
          </div>

          <div className="flex flex-col gap-[22px]">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaCard} bg-[#052e16] text-paper-bright hover:bg-[#0a3d1f]`}
            >
              Follow us on LinkedIn
              <ArrowUpRight
                className="size-8 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </a>
            <div className="flex flex-1 items-center justify-center rounded-[40px] bg-ink-soft px-6 py-12 min-[810px]:px-10">
              {/* The source drawing is portrait; rotate it to lie flat like the Framer layout. */}
              <div className="relative h-[118px] w-[370px] shrink-0 max-[480px]:scale-[0.75]">
                <Image
                  src="/framer/contact/bread.png"
                  alt=""
                  width={1097}
                  height={3438}
                  sizes="118px"
                  className="absolute left-1/2 top-1/2 h-[370px] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
