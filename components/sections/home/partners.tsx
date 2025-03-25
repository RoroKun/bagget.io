"use client"

import { partners } from "@/data/partners"
import Image from "next/image";
import { fadeIn } from "@/lib/animate";
import { motion } from "motion/react";

export default function Partners() {
  return(
    <section className="flex flex-col justify-center items-center px-[15%] pb-[10%] gap-15 bg-gradient-to-t from-green-950 to-emerald-950">
        <motion.div 
            variants={fadeIn}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true}}
            className="flex gap-5 justify-center items-center flex-wrap"
        >
            {partners.map((partner, i) => (
                <div className="w-32 h-32" key={`${partner.name}-image-${i}`}>
                    <Image 
                        src={partner.icon}
                        alt={`${partner.name} logo`}
                        width={1000}
                        height={1000}
                        className="w-full"
                    />
                </div>
            ))}
        </motion.div>
    </section>
  )
}