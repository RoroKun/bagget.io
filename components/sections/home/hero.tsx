"use client"

import { Heading, Text, Highlight } from "@/components/utility/typography";
import Image from "next/image";
import { BetterButton } from "@/components/ui/button";
import { fadeIn } from "@/lib/animate";
import { motion } from "motion/react";

export default function Hero() {
    return (
      <section className="h-[60vh] relative overflow-hidden rounded-b-4xl bg-gradient-to-b from-emerald-950 to-green-950 ">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col justify-center items-center gap-10">
          <motion.div 
            variants={fadeIn}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true}}
            className="flex flex-col gap-2 justify-center items-center"
          >
            <Heading size="big">
                <Highlight>Revolutionizing</Highlight>
                Food Assistance
            </Heading>
            <Heading>
              Serve More, Waste Less.
            </Heading>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true}}
          >
            <BetterButton variant="secondary" className="text-gray-950" link={"/contact"}>
              <Text>Waitlist Today</Text>
            </BetterButton>
          </motion.div>
        </div>
        <div className="absolute z-0">
          <Image
            src="/hero-img.webp"
            width={1920}
            height={1800}
            alt="Picture of Volunteers packing and sending food to those in need"
            className="w-full h-full object-cover bg-lime-50"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </section>
    )
}