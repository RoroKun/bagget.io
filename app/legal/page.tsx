import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Contour } from "@/components/site/contour"

export const metadata: Metadata = {
  title: "Legal",
  description: "Bag/Get's privacy policy and terms of service.",
}

const DOCUMENTS = [
  {
    href: "/privacy",
    title: "Privacy Policy",
    body: "How we collect, use and protect the information handled through Bag/Get.",
    style: "bg-[linear-gradient(135deg,#bbf7d0_0%,#86efac_100%)] text-ink hover:brightness-95",
  },
  {
    href: "/terms",
    title: "Terms of Service",
    body: "The agreement that applies when you use the Bag/Get website and software.",
    style: "bg-[linear-gradient(135deg,#022c22_0%,#11211a_100%)] text-paper-bright hover:brightness-125",
  },
] as const

export default function LegalPage() {
  return (
    // `relative overflow-hidden` keeps the contour inside <main> so it never reaches the footer;
    // the content wrapper is `relative` so it paints above the (absolutely positioned) contour.
    <main className="relative overflow-hidden px-6 pb-24 pt-[130px] min-[810px]:pt-[160px]">
      <Contour spin opacity={0.15} scribbleScale={2.5} tilt={20} perspective={900} top="30%" />
      <div className="relative mx-auto max-w-[960px]">
        <h1 className="text-[40px] font-semibold leading-[1.2] text-ink min-[810px]:text-[56px]">Legal</h1>
        <p className="mt-3 max-w-[560px] font-display text-lg font-light leading-[1.4] text-ink min-[810px]:text-2xl">
          The policies and terms that govern how Bag/Get works.
        </p>

        <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-5 min-[810px]:grid-cols-2 min-[810px]:gap-[30px]">
          {DOCUMENTS.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className={`group flex min-h-[220px] flex-col justify-between gap-10 rounded-[40px] p-8 transition min-[810px]:min-h-[280px] min-[810px]:p-10 ${d.style}`}
            >
              <ArrowUpRight
                className="size-8 self-end transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
              <span className="flex flex-col gap-2">
                <span className="text-[26px] font-medium leading-[1.2] min-[810px]:text-[32px]">{d.title}</span>
                <span className="max-w-[360px] font-display font-light leading-[1.4] opacity-80">{d.body}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
