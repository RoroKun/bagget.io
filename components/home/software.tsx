import Image from "next/image"
import type { ReactNode } from "react"
import {
  CalendarCheck,
  CalendarDays,
  CalendarSync,
  CalendarX,
  CircleCheck,
  CircleX,
  ClipboardPen,
  CloudSync,
  FileChartColumn,
  FileText,
  Laptop,
  MoveDown,
  MoveRight,
  QrCode,
  ScanSearch,
} from "lucide-react"
import { ButtonLink } from "@/components/site/button-link"
import { Contour } from "@/components/site/contour"
import { Reveal } from "@/components/site/reveal"
import { SectionTitle } from "@/components/site/section-title"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* Feature card illustrations                                          */
/* ------------------------------------------------------------------ */

const CHIPS = [
  { kind: "in", x: 13, y: 24 },
  { kind: "in", x: 73, y: 11 },
  { kind: "in", x: 53, y: 42 },
  { kind: "in", x: 175, y: 21 },
  { kind: "in", x: 169, y: 73 },
  { kind: "dup", x: 21, y: 63 },
  { kind: "dup", x: 235, y: 23 },
  { kind: "dup", x: 215, y: 51 },
] as const

function IntakeCluster() {
  return (
    <div className="relative mx-auto h-[85px] w-[285px]" aria-hidden>
      {CHIPS.map((c, i) =>
        c.kind === "in" ? (
          <span
            key={i}
            className="absolute flex items-center gap-1 rounded-full bg-mint px-1.5 py-[3px] text-[7px] leading-none text-moss"
            style={{ left: c.x, top: c.y }}
          >
            <CircleCheck className="size-2" strokeWidth={2.5} /> Checked In
          </span>
        ) : (
          <span
            key={i}
            className="absolute flex items-center gap-1 rounded-full bg-blush px-1.5 py-[3px] text-[7px] leading-none text-[#400404]"
            style={{ left: c.x, top: c.y }}
          >
            <CircleX className="size-2" strokeWidth={2.5} /> Duplicate
          </span>
        ),
      )}
      <span className="absolute left-[118px] top-[14px] flex size-[54px] rotate-[18deg] items-center justify-center rounded-lg bg-paper text-ink">
        <QrCode className="size-10" strokeWidth={1.6} />
      </span>
      {/* sparkle strokes */}
      <span className="absolute left-[168px] top-[2px] h-3 w-[2px] rotate-[25deg] rounded bg-paper" />
      <span className="absolute left-[176px] top-[10px] h-[2px] w-3 -rotate-[15deg] rounded bg-paper" />
    </div>
  )
}

const EVENT_ICONS = [
  { Icon: CalendarDays, bg: "bg-[#bcebf7]", fg: "text-[#0b3a47]" },
  { Icon: CalendarCheck, bg: "bg-mint", fg: "text-moss" },
  { Icon: CalendarX, bg: "bg-[#f7bcbc]", fg: "text-[#400404]" },
  { Icon: CalendarSync, bg: "bg-[#f7eabc]", fg: "text-[#3f3104]" },
]

function EventIcons() {
  return (
    <div className="flex justify-center gap-6" aria-hidden>
      {EVENT_ICONS.map(({ Icon, bg, fg }, i) => (
        <span key={i} className={cn("flex size-8 items-center justify-center rounded-md", bg, fg)}>
          <Icon className="size-5" />
        </span>
      ))}
    </div>
  )
}

function DigitizeIcons() {
  const box = "flex size-[30px] items-center justify-center rounded-md bg-mint text-moss"
  return (
    <div className="flex items-center justify-center gap-4 text-paper" aria-hidden>
      <span className={box}><FileText className="size-5" /></span>
      <MoveRight className="size-11" strokeWidth={1.25} />
      <span className={box}><Laptop className="size-5" /></span>
      <MoveRight className="size-11" strokeWidth={1.25} />
      <span className={box}><CloudSync className="size-5" /></span>
    </div>
  )
}

/* ------------------------------------------------------------------ */

type Feature = { title: string; body: string; art: ReactNode }

// Arranged in three masonry columns to match the Framer layout.
const FEATURE_COLUMNS: Feature[][] = [
  [
    {
      title: "Intake without stress",
      body: "Give your clients a QR Code to make their next check-in faster.",
      art: <IntakeCluster />,
    },
    {
      title: "Follow up on clients",
      body: "Write notes, assign tasks and send surveys to understand your community.",
      art: (
        <Image src="/framer/home/follow-up.png" alt="" width={3824} height={2701} sizes="281px" className="mx-auto w-[281px]" />
      ),
    },
  ],
  [
    {
      title: "Rally Your People",
      body: "Send SMS, Email, and in-app notifications to keep your people in the loop.",
      art: (
        <Image src="/framer/home/megaphone.png" alt="" width={1795} height={2418} sizes="180px" className="mx-auto w-[180px]" />
      ),
    },
    {
      title: "Manage Events",
      body: "Create repeatable distributions, volunteer shifts with the latest information people can find",
      art: <EventIcons />,
    },
  ],
  [
    {
      title: "Digitize Documents",
      body: "Upload training material, consent forms and more - ready to request signatures & review.",
      art: <DigitizeIcons />,
    },
    {
      title: "Data made easy",
      body: "Generate quick reports ready to send to your partners.",
      art: (
        <Image src="/framer/home/reports.png" alt="" width={2649} height={2718} sizes="260px" className="mx-auto w-[260px]" />
      ),
    },
  ],
]

function FeatureCard({ feature, delay }: { feature: Feature; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="flex flex-col gap-3.5 rounded-xl border border-white/10 bg-[linear-gradient(156deg,rgb(12,18,16)_0%,rgb(11,23,18)_100%)] px-5 py-5 text-center shadow-[0_2px_8px_rgb(0_0_0/0.4)]"
    >
      {feature.art}
      <h3 className="text-2xl leading-[1.2] text-paper">{feature.title}</h3>
      <p className="font-medium leading-[1.2] text-paper-bright">{feature.body}</p>
    </Reveal>
  )
}

const STEPS = [
  {
    Icon: ClipboardPen,
    title: "Online Registration",
    body: "Save time by having your people register ahead of time online or in-person once.",
    gradient: "bg-[linear-gradient(335deg,#000_-5%,rgb(17,33,26)_117%)]",
  },
  {
    Icon: ScanSearch,
    title: "Quick Check-in",
    body: "One quick scan checks people in, plus instant access to notes & pending paperwork.",
    gradient: "bg-[linear-gradient(23deg,#000_-5%,rgb(17,33,26)_117%)]",
  },
  {
    Icon: FileChartColumn,
    title: "Reports On-Demand",
    body: "Ready made report templates to visualize demographics, household information, returning visits & more.",
    gradient: "bg-[linear-gradient(197deg,#000_-5%,rgb(17,33,26)_117%)]",
  },
]

// Measured from the Framer site: the three step cards appear one after another.
const STEP_DELAYS = [0, 0.45, 1.1]

export function Software() {
  return (
    <section className="relative -mt-[180px] overflow-hidden rounded-t-[48px] bg-[linear-gradient(204deg,rgb(7,15,8)_43%,rgb(7,18,9)_100%)] pb-24 pt-[230px] min-[810px]:-mt-[290px] min-[810px]:rounded-t-[80px] min-[810px]:pt-[360px]">
      <Contour invert opacity={0.08} />

      <div className="relative">
        <SectionTitle title="Save time today and focus more on your people" className="max-w-[860px] [&>p]:max-w-[680px]">
          Whether you are a Food Pantry or Community Center we have everything you need for your day to day.
        </SectionTitle>

        <div className="mx-auto mt-[70px] grid max-w-[1046px] gap-10 px-6 min-[810px]:grid-cols-2 min-[1100px]:px-0 min-[1200px]:grid-cols-3">
          {FEATURE_COLUMNS.map((col, ci) => (
            <div key={ci} className="contents min-[1200px]:flex min-[1200px]:flex-col min-[1200px]:gap-10">
              {col.map((f, ri) => (
                <FeatureCard key={f.title} feature={f} delay={ri * 0.1} />
              ))}
            </div>
          ))}
        </div>

        <SectionTitle title="How do we help you serve your communities?" className="mt-[60px] max-w-[980px]">
          Bag/Get gives every person a QR code that connects them to you and our local partners. Customize intake to
          understand your community, then turn every distribution or shift into clear, ready-to-use reports.
        </SectionTitle>

        <ol className="mx-auto mt-12 flex max-w-[1132px] flex-col items-center gap-4 px-6 min-[1200px]:flex-row min-[1200px]:items-stretch">
          {STEPS.map(({ Icon, title, body, gradient }, i) => (
            <li key={title} className="flex flex-col items-center gap-4 min-[1200px]:flex-row">
              {i > 0 && (
                <>
                  <MoveRight className="hidden size-14 text-white/40 min-[1200px]:block" strokeWidth={1} aria-hidden />
                  <MoveDown className="size-14 text-white/40 min-[1200px]:hidden" strokeWidth={1} aria-hidden />
                </>
              )}
              <Reveal
                delay={STEP_DELAYS[i]}
                className={cn(
                  "flex min-h-[245px] w-full max-w-[322px] flex-col items-center justify-center gap-4 rounded-xl border border-white/15 px-6 text-center shadow-[0_2px_8px_rgb(0_0_0/0.4)] min-[1200px]:w-[322px]",
                  gradient,
                )}
              >
                <span className="flex size-9 items-center justify-center rounded-md bg-ink text-paper">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-2xl leading-[1.2] text-paper">{title}</h3>
                <p className="font-medium leading-[1.2] text-paper-bright">{body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-center gap-5 px-6 text-center">
          <p className="font-display font-light text-paper">
            To learn more about our offerings and how we can help you today
          </p>
          <Reveal
            preset="rise"
            trigger="load"
            delay={2.75}
            className="flex w-full flex-col items-center gap-4 min-[810px]:w-auto min-[810px]:flex-row"
          >
            <ButtonLink href="/contact" className="w-full min-[810px]:w-auto">
              Book a Sales Consultation
            </ButtonLink>
            <ButtonLink href="/product" variant="dark" className="w-full min-[810px]:w-auto">
              View More
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
