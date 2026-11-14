import type { Metadata } from "next"
import Image from "next/image"
import type { ReactNode } from "react"
import { ButtonLink } from "@/components/site/button-link"
import { Contour } from "@/components/site/contour"
import { Marquee } from "@/components/site/marquee"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { MILESTONES, PARTNER_BADGES, TEAM } from "@/data/story"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How a group of Cal State Fullerton computer science students turned a campus food pantry into Bag/Get, a Public Benefit Corporation.",
}

type Chapter = { title: ReactNode; body: ReactNode; gradient: string; tall?: boolean }

const CHAPTERS: Chapter[] = [
  {
    title: "This all began in 2023",
    body: "Cal State Fullerton computer science students  using the campus food pantry.",
    gradient: "bg-[linear-gradient(120deg,#171717_0%,#262626_148%)]",
  },
  {
    title: "That is when we heard about a competition",
    body: (
      <>
        Putting our minds together we drafted, iterated and eventually proposed <strong className="font-black">BAG/GET</strong>.
      </>
    ),
    gradient: "bg-[linear-gradient(220deg,#171717_0%,#262626_109%)]",
  },
  {
    title: "But that is when the real work started",
    body: "We researched, interviewed, and volunteered to understand everything about Food Pantries.",
    gradient: "bg-[linear-gradient(152deg,#171717_0%,#262626_117%)]",
  },
  {
    title: (
      <>
        We were no longer <em>just</em> Computer Science kids
      </>
    ),
    body: "We took all we learned and created a production-ready application deployed to real Food Pantries. Now serving as a Public Benefit Corporation.",
    gradient: "bg-[linear-gradient(2deg,#171717_0%,#262626_100%)]",
    tall: true,
  },
  {
    title: "We couldn't have gotten here alone",
    body: "Thank you to our mentor Jeff Greenberg and everyone we met along the way. Our success is proof of your commitment and dedication to helping us.",
    gradient: "bg-[linear-gradient(142deg,#0a0a0a_0%,#171717_100%)]",
    tall: true,
  },
]

export default function OurStoryPage() {
  return (
    <main className="relative overflow-hidden">
      <Contour opacity={0.7} scribble={false} />
      <div className="relative px-6 pt-[90px] min-[810px]:pt-[134px]">
        <PageHeader title="OUR STORY" image="/framer/story/header-titan-fast-pitch.jpg" overlay={0.25} />
      </div>

      <Chapters />

      <div className="relative mt-[60px] flex justify-center">
        <Reveal duration={1}>
          <ButtonLink href="/news">Read more here</ButtonLink>
        </Reveal>
      </div>

      <Milestones />
      <Team />
    </main>
  )
}

function Chapters() {
  return (
    <div className="relative mx-auto mt-[60px] max-w-[1049px] px-6 min-[1100px]:px-0">
      <div className="flex flex-col gap-[60px]">
        {CHAPTERS.map((c, i) => (
          <Reveal
            key={i}
            preset={i === 0 ? "fade" : "rise"}
            trigger={i === 0 ? "load" : "view"}
            replay={i > 0}
            amount={0.1}
            className={cn(
              "flex flex-col items-center justify-center gap-5 rounded-[48px] px-6 py-10 text-center text-paper shadow-[0_8px_24px_rgb(0_0_0/0.25)] min-[810px]:rounded-full min-[810px]:px-16",
              c.tall ? "min-[810px]:min-h-[265px]" : "min-[810px]:min-h-[236px]",
              c.gradient,
            )}
          >
            <h2 className="text-[26px] font-medium leading-[1.2] min-[810px]:text-[32px]">{c.title}</h2>
            <p className="max-w-[600px] whitespace-pre-wrap font-display text-lg font-light leading-[1.2] min-[810px]:text-2xl">
              {c.body}
            </p>
          </Reveal>
        ))}
      </div>

      {/* Partner badges (desktop) */}
      <div className="pointer-events-none absolute inset-0 hidden min-[1200px]:block" aria-hidden>
        {PARTNER_BADGES.map((b) => (
          <div
            key={b.name}
            className="absolute size-[150px]"
            style={{ left: b.x - 75, top: b.y - 75, transform: `rotate(${b.rotate}deg)` }}
          >
            <Reveal className="size-full">
              <Image src={b.src} alt="" width={731} height={731} sizes="150px" className="size-full rounded-full" />
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  )
}

function Milestones() {
  return (
    <section aria-label="Milestones" className="relative mt-[60px]">
      <Marquee direction="left" pauseOnHover>
        {MILESTONES.map((m) => (
          <figure key={m.title} className="mr-[27px] w-[300px] shrink-0 min-[810px]:w-[452px]">
            <div className="relative aspect-[452/300] overflow-hidden rounded-[32px] min-[810px]:rounded-[40px]">
              <Image src={m.image} alt={m.title} fill sizes="452px" className="object-cover" />
            </div>
            <figcaption className="mt-[27px] rounded-[20px] bg-ink-soft px-[22px] py-[17px] text-paper-bright">
              <p className="truncate font-medium leading-[1.2]">{m.title}</p>
              <p className="mt-2 font-light leading-[1.2]">
                {m.place} · {m.date}
              </p>
            </figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  )
}

const panel = "bg-[linear-gradient(240deg,#e5e5e5_0%,#d4d4d4_100%)]"

function Team() {
  return (
    <section className="relative mx-auto mt-[90px] flex max-w-[1052px] flex-col gap-10 px-6 pb-[90px] min-[1100px]:px-0">
      <Reveal className={cn("rounded-br-[40px] rounded-tl-[40px] px-[45px] py-6", panel)}>
        <h2 className="text-[36px] font-semibold leading-[1.2] text-ink min-[810px]:text-[48px]">Meet the Team</h2>
        <p className="mt-4 font-display font-light leading-[1.2] text-ink">
          The faces who are actively advocating and pushing this software to <strong className="font-semibold">serve more</strong>{" "}
          and <strong className="font-semibold">waste less</strong> in our local communities.
        </p>
      </Reveal>

      {TEAM.map((m, i) => (
        <Reveal
          key={m.name}
          className={cn(
            "flex flex-col items-center gap-8 rounded-[40px] px-8 py-12 min-[810px]:min-h-[295px] min-[810px]:gap-[60px] min-[810px]:px-[97px]",
            i % 2 ? "min-[810px]:flex-row-reverse" : "min-[810px]:flex-row",
            panel,
          )}
        >
          <Image
            src={m.image}
            alt={`${m.name}, ${m.role}`}
            width={2768}
            height={4160}
            sizes="200px"
            className="size-[200px] shrink-0 rounded-full object-cover object-top"
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-[28px] font-semibold leading-[1.2] text-ink min-[810px]:text-[32px]">
              {m.name} · {m.role}
            </h3>
            <p className="font-display font-light leading-[1.2] text-black">{m.bio}</p>
            <p className="font-display text-[8px] font-light italic leading-[1.2] text-black">{m.funFact}</p>
          </div>
        </Reveal>
      ))}
    </section>
  )
}
