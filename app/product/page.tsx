import type { Metadata } from "next"
import Image from "next/image"
import type { ReactNode } from "react"
import { ButtonLink } from "@/components/site/button-link"
import { Contour } from "@/components/site/contour"
import { TrialCta } from "@/components/site/cta-buttons"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { SectionTitle } from "@/components/site/section-title"
import { AUDIENCES, SECURITY, TOOLS } from "@/data/product"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Product",
  description:
    "Intake, case management, volunteer scheduling, offline check-in and dynamic reports for food pantries, food banks and community centers.",
}

export default function ProductPage() {
  return (
    <main>
      <Audiences />
      <MissionOriented />
      <Participants />
      <Privacy />
      <ClosingVideoCta />
    </main>
  )
}

/* ------------------------------------------------------------------ */

function Audiences() {
  return (
    <section className="relative overflow-hidden px-6 pb-5 pt-[90px] min-[810px]:pt-[103px]">
      <Contour spin opacity={0.2} scribbleScale={3} tilt={40} perspective={1500} />
      <div className="relative">
        <PageHeader
          title="Who do we serve?"
          video="/framer/product/header.mp4"
          titleClassName="text-[44px] min-[810px]:text-[80px]"
        />
        <ul className="relative mx-auto mt-[27px] grid max-w-[1033px] gap-8 min-[810px]:grid-cols-3">
          {AUDIENCES.map(({ Icon, title, body }) => (
            <li
              key={title}
              className="flex flex-col items-center gap-3 rounded-xl bg-[linear-gradient(160deg,#171717_0%,#333_100%)] px-6 pb-10 pt-6 text-center shadow-[0_4px_12px_rgb(0_0_0/0.35)]"
            >
              <span className="flex size-[58px] items-center justify-center rounded-lg bg-ink text-paper">
                <Icon className="size-9" strokeWidth={2} />
              </span>
              <h2 className="text-2xl leading-[1.2] text-paper">{title}</h2>
              <p className="font-light leading-[1.5] text-paper-bright">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Showcase({
  title,
  body,
  image,
  alt,
  reverse = false,
}: {
  title: string
  body: string
  image: string
  alt: string
  reverse?: boolean
}) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-[1050px] flex-col items-center gap-10 px-6 min-[1100px]:px-0",
        reverse ? "min-[810px]:flex-row-reverse" : "min-[810px]:flex-row",
        "min-[810px]:justify-between",
      )}
    >
      <div className="flex max-w-[380px] flex-col items-start gap-4">
        <h3 className="text-[28px] font-medium leading-[1.2] text-paper-bright min-[810px]:text-[32px]">{title}</h3>
        <p className="font-display text-lg font-light leading-[1.35] text-paper-bright">{body}</p>
        <ButtonLink href="/contact" className="mt-6 px-5 py-3 text-lg">
          Request a demo
        </ButtonLink>
      </div>
      <Reveal preset="rise" amount={0.3} className="w-full min-[810px]:w-[620px]">
        <Image
          src={image}
          alt={alt}
          width={1874}
          height={911}
          sizes="(min-width: 810px) 620px, 100vw"
          className="h-auto w-full rounded-lg shadow-[0_10px_40px_rgb(0_0_0/0.5)]"
        />
      </Reveal>
    </div>
  )
}

function MissionOriented() {
  return (
    <section
      className="bg-dots bg-ink pb-[140px] pt-[60px]"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 91px), 0 100%)" }}
    >
      <SectionTitle title="For Mission Oriented Non-profitts" className="max-w-[860px]">
        Built for food pantries, food banks, and community resource centers, Bag/Get replaces stressful manual work
        with simple, user-friendly tools.
      </SectionTitle>

      <div className="mt-[100px] flex flex-col gap-[60px]">
        <Showcase
          title="Food Pantries"
          body="Everything your pantry needs, all in one place. Our intake tool checks in neighbors and volunteers whether you’re online or offline, and every distribution instantly becomes a dynamic report with live analytics."
          image="/framer/product/food-pantries.png"
          alt="Bag/Get reports dashboard showing families served and volunteer hours"
        />
        <Showcase
          reverse
          title="Community Centers"
          body="Building relationships shouldn’t require a binder full of paper notes. Get a complete 360 view of every neighbor, and keep their tasks, notes, and documents in one place so that they’re ready for what’s next."
          image="/framer/product/community-centers.png"
          alt="Bag/Get neighbor profile with household details and QR badge"
        />
      </div>

      <SectionTitle title="Built for How You Serve" className="mt-[70px] max-w-[860px]">
        Explore our suite of tools to make your day-to-day operations easier and stress-free.{" "}
        <em>No need for multiple applications.</em>
      </SectionTitle>

      <ul className="mx-auto mt-[60px] grid max-w-[1260px] gap-x-[90px] gap-y-[27px] px-6 min-[810px]:grid-cols-2 min-[1200px]:grid-cols-3">
        {TOOLS.map(({ Icon, title, body }, i) => (
          <Reveal
            as="li"
            key={title}
            delay={(i % 3) * 0.08}
            className="flex flex-col gap-4 rounded-xl border border-white/10 bg-[linear-gradient(160deg,#1e1e1e_0%,#141414_100%)] px-5 py-5 shadow-[0_4px_12px_rgb(0_0_0/0.45)]"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-ink text-paper">
                <Icon className="size-5" />
              </span>
              <h3 className="whitespace-nowrap text-[22px] leading-[1.2] text-paper min-[1200px]:text-2xl">{title}</h3>
            </div>
            <p className="max-w-[285px] leading-[1.5] text-paper-bright">{body}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

function Participant({
  title,
  children,
  cta,
  image,
  alt,
  reverse = false,
  imageClassName,
}: {
  title: string
  children: ReactNode
  cta: string
  image: string
  alt: string
  reverse?: boolean
  imageClassName?: string
}) {
  return (
    <Reveal
      className={cn(
        "mx-auto flex max-w-[750px] flex-col items-center gap-10",
        reverse ? "min-[810px]:flex-row-reverse" : "min-[810px]:flex-row",
        "min-[810px]:items-start min-[810px]:justify-between",
      )}
    >
      <div className="relative flex size-[260px] shrink-0 items-end justify-center overflow-hidden rounded-full bg-ink min-[810px]:size-[300px]">
        <Image src={image} alt={alt} width={1425} height={2381} sizes="300px" className={imageClassName} />
      </div>
      <div className="flex max-w-[380px] flex-col items-start gap-4 min-[810px]:pt-4">
        <h3 className="text-[32px] leading-[1.2] text-ink">{title}</h3>
        <div className="flex flex-col gap-3 font-display font-light leading-[1.5] text-ink">{children}</div>
        <ButtonLink href="/contact" className="mt-6">
          {cta}
        </ButtonLink>
      </div>
    </Reveal>
  )
}

function Participants() {
  return (
    <section className="relative -mt-[91px] overflow-hidden px-6 pb-20 pt-[100px]">
      <Contour spin opacity={0.2} scribbleScale={1.25} tilt={20} perspective={800}/>
      <div className="relative">
        <SectionTitle tone="dark" title="Every Participant is Included" className="max-w-[920px]">
          Your volunteers and neighbors will all have access to a mobile application where they can stay up to date
          with you and their community.
        </SectionTitle>
        <div className="mt-10 flex flex-col gap-16">
          <Participant
            title="Volunteers"
            cta="Volunteer Today"
            image="/framer/product/person-on-phone.png"
            alt="Line drawing of a volunteer using their phone"
            imageClassName="h-[93%] w-auto"
          >
            <p>
              Train and prepare your volunteers ahead of time. Assign documents and materials to give them a heads up
              on what they need to be ready.
            </p>
            <p>
              From signing documents, choosing a shift based on a role, or track their hours we get your people one
              step closer to serving their community sooner.
            </p>
          </Participant>
          <Participant
            reverse
            title="Neighbors"
            cta="Get Free Food"
            image="/framer/product/phone.png"
            alt="Bag/Get mobile app showing pantries near you"
            imageClassName="m-auto h-[88%] w-auto"
          >
            <p>
              Just like volunteers, neighbors can view their own tasks and documents in the app. They can also find
              other pantries in our network, making it easy for you to refer them to partner organizations. Best of
              all, they only register once, so there’s no filling out the same forms at every location.
            </p>
          </Participant>
        </div>
      </div>
    </section>
  )
}

function Privacy() {
  return (
    <section className="relative overflow-hidden px-6 pb-[70px] pt-10">
      <Contour spin invert opacity={0.4} scribbleScale={1} tilt={40} perspective={200}/>
      <div className="relative">
        <SectionTitle tone="dark" title="Privacy Out of the Box" className="max-w-[1000px]">
          Your clients privacy is our priority. We will never sell your information, and we <em>don&apos;t</em> charge
          extra for industry-standard security practices to keep your data safe.
        </SectionTitle>
        <ul className="mx-auto mt-10 grid max-w-[1024px] gap-x-10 gap-y-[63px] min-[810px]:grid-cols-2">
          {SECURITY.map(({ Icon, title, body }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={(i % 2) * 0.1}
              className="flex min-h-[158px] overflow-hidden rounded-xl shadow-[0_4px_12px_rgb(0_0_0/0.18)]"
            >
              <span className="flex w-[110px] shrink-0 items-center justify-center bg-[linear-gradient(150deg,#052e16_0%,#0b4d33_100%)] text-paper min-[810px]:w-[158px]">
                <Icon className="size-14 min-[810px]:size-[88px]" strokeWidth={1.5} />
              </span>
              <div className="flex flex-col justify-center gap-2 bg-[linear-gradient(180deg,#f2f2f2_0%,#dcdcdc_100%)] px-6 py-5 text-ink">
                <h3 className="text-xl leading-[1.2] min-[810px]:text-2xl">{title}</h3>
                <p className="leading-[1.2]">{body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ClosingVideoCta() {
  return (
    <section className="relative overflow-hidden rounded-t-[40px]">
      <video
        className="absolute inset-0 size-full object-cover"
        src="/framer/product/cta.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative flex flex-col items-center gap-5 px-6 py-[70px] text-center text-paper">
        <p className="font-display text-2xl leading-[1.2]">Together we can…</p>
        <h2 className="font-display text-[36px] font-bold leading-[1.2] min-[810px]:text-[64px]">
          SERVE MORE &amp; WASTE LESS
        </h2>
        <TrialCta tone="light" secondaryVariant="dark" />
      </div>
    </section>
  )
}
