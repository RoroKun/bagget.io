"use client"

import { Heading } from "@/components/utility/typography";
import { IMAGE } from "@/data/utility/types";
import Image from "next/image";
import { fadeIn } from "@/lib/animate";
import { motion } from "motion/react";

export default function Hero({image, children}: {image: IMAGE; children: React.ReactNode;}) {
    return (
        <section className="md:pt-30 pt-10 pb-10 lg:px-40 px-10 flex flex-col gap-10 justify-center items-center bg-gradient-to-b from-emerald-950 to-green-950">
            <motion.div
                variants={fadeIn}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true}}
                className="text-center"
            >
                <Heading size="big">
                    {children}
                </Heading>
            </motion.div>

            <motion.div 
                variants={fadeIn}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true}}
                className="lg:w-1/2 lg:h-72 md:h-64 h-30 overflow-hidden rounded-full"
            >
                <Image
                    src={image.url}
                    width={1920}
                    height={1800}
                    alt={image.alt}
                    className="w-full bg-lime-50"
                />
            </motion.div>
        </section>
    )
}