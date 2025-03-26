"use client"

import { Heading, Text, Highlight } from "@/components/utility/typography";
import Image from "next/image";
import { fadeIn } from "@/lib/animate";
import { motion } from "motion/react";

export default function Intro() {
    return (
      <section className="flex lg:flex-row flex-col px-[15%] py-[5%] justify-between items-center bg-gradient-to-b from-green-950 to-emerald-950 gap-10">
        <motion.div 
          variants={fadeIn}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true}}
          className="flex flex-col lg:gap-10 gap-5 lg:max-w-1/2 text-gray-50 lg:text-start text-center"
        >
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
          className="lg:w-1/2 lg:h-1/2 md:w-2/3 md:h-2/3"
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