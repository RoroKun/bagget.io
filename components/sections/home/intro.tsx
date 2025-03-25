"use client"

import { Heading, Text, Highlight } from "@/components/utility/typography";
import Image from "next/image";
import { fadeIn } from "@/lib/animate";
import { motion } from "motion/react";

export default function Intro() {
    return (
      <section className="flex px-[15%] py-[2%] justify-between bg-gradient-to-b from-green-950 to-emerald-950">
        <motion.div 
          variants={fadeIn}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true}}
          className="flex flex-col gap-10 max-w-1/2 text-gray-50">
          <Heading size="big">
            The <Highlight>All-in-One</Highlight> Solution Your
            Pantry's Been Waiting For.
          </Heading>
          <Text>
            Packed to the brim with quality of life automation and tools to make your distribution excel.
          </Text>
          <Text>
            Case Management, Volunteer Retention, Pantry Locator, Dynamic Report Generation, and more in one unified package.
          </Text>
        </motion.div>
        <motion.div 
          variants={fadeIn}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true}}
          className="w-1/2 h-1/2"
        >
          <Image 
            src='/bagget_teaser.webp' 
            alt='laptop and phone showing Bag/Get branding alluding to Bag/Get Software' 
            width={1000}
            height={1000}
            className="w-full"
          />
        </motion.div>
      </section>
    )
}