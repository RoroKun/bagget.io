"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Marquee } from "@/components/site/marquee"
import { Reveal } from "@/components/site/reveal"

function Ticker({ word, direction }: { word: string; direction: "left" | "right" }) {
  return (
    <Marquee direction={direction} className="bg-night py-[15px]">
      {Array.from({ length: 16 }, (_, i) => (
        <span key={i} className="px-[23px] text-2xl font-semibold leading-[1.2] text-paper">
          {word}
        </span>
      ))}
    </Marquee>
  )
}

const spring = { type: "spring", bounce: 0.2, duration: 1 } as const

/** Soft green halo behind the illustrations. */
function Halo({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute aspect-square rounded-full bg-[radial-gradient(circle,rgb(17,33,26)_0%,rgb(17_33_26/0.6)_55%,transparent_72%)] ${className}`}
    />
  )
}

export function QuickFeatures() {
  return (
    <section>
      <Ticker word="Serve More" direction="left" />

      {/* No Wifi */}
      <div className="relative overflow-hidden bg-[linear-gradient(90deg,rgb(17,33,26)_0%,rgb(10,10,10)_67%)]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-6 py-20 min-[810px]:flex-row min-[810px]:justify-between min-[810px]:px-[60px] min-[810px]:py-[100px]">
          <Reveal className="max-w-[570px] text-paper">
            <h2 className="text-[26px] leading-[1.2] min-[810px]:text-[32px]">No Wifi? No Problem.</h2>
            <p className="mt-10 font-display text-lg font-light leading-[1.2] min-[810px]:text-2xl">
              Having to worry about a stable connection should be your last concern. With Bag/Get you get access to
              an offline application during your shifts and distributions.
            </p>
            <p className="mt-8 font-display text-lg font-light leading-[1.2] min-[810px]:text-2xl">
              Manage, check-in, and serve your neighbors. After the distribution when you have stable internet sync
              with one click and breath.
            </p>
          </Reveal>
          <div className="relative flex w-[300px] items-center justify-center min-[810px]:mr-[30px] min-[810px]:w-[383px]">
            <Halo className="-right-10 w-[420px]" />
            <motion.div
              initial={{ x: -174, y: -149, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={spring}
              className="relative w-full"
            >
              <Image
                src="/framer/home/laptop.png"
                alt="Line drawing of a laptop with no wifi signal"
                width={2076}
                height={1777}
                sizes="383px"
                className="h-auto w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <Ticker word="Waste Less" direction="right" />

      {/* Empower */}
      <div className="relative overflow-hidden bg-[linear-gradient(270deg,rgb(17,33,26)_0%,rgb(10,10,10)_65%)]">
        <div className="mx-auto flex max-w-[1440px] flex-col-reverse items-center gap-10 px-6 py-20 min-[810px]:flex-row min-[810px]:justify-between min-[810px]:px-[60px] min-[810px]:py-[100px]">
          <div className="relative -mb-20 flex w-[220px] items-center justify-center self-end min-[810px]:-mb-[100px] min-[810px]:ml-[60px] min-[810px]:w-[250px]">
            <Halo className="-left-16 w-[420px]" />
            <motion.div
              initial={{ rotate: -21, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={spring}
              className="relative w-full"
            >
              <Image
                src="/framer/home/mobile-app.png"
                alt="Hand holding a phone showing a Bag/Get QR code"
                width={1819}
                height={2811}
                sizes="250px"
                className="h-auto w-full"
              />
            </motion.div>
          </div>
          <Reveal className="max-w-[570px] text-paper">
            <h2 className="text-[26px] leading-[1.2] min-[810px]:text-[32px]">Empower your community.</h2>
            <p className="mt-10 font-display text-lg font-light leading-[1.2] min-[810px]:text-2xl">
              Let neighbors book and manage their appointments in one simple portal.
            </p>
            <p className="mt-8 font-display text-lg font-light leading-[1.2] min-[810px]:text-2xl">
              Enable volunteers to learn more about shift roles, access training documents and more ahead of time.
              Making them prepares and ready to serve their community.
            </p>
          </Reveal>
        </div>
      </div>

      <Ticker word="Do More" direction="left" />
    </section>
  )
}
