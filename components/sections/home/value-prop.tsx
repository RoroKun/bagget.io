"use client"

import { valuePropData } from "@/data/value-prop";
import { Heading, Text, Highlight } from "@/components/utility/typography";
import Image from "next/image";
import { fadeIn } from "@/lib/animate";
import { motion } from "motion/react";

export default function ValueProp() {
    return (
      <section className="flex flex-col justify-center items-center md:px-[5%] px-[15%] py-[2%] lg:gap-15 gap-10 bg-gradient-to-t from-green-950 to-emerald-950">
        <motion.div
          variants={fadeIn}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true}}
          className="text-center"
        >
          <Heading size="big">
              Achieve the following with <Highlight>Bag/Get.</Highlight>
          </Heading>
        </motion.div>
        <motion.div 
          variants={fadeIn}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true}}
          className="flex flex-wrap justify-center items-center lg:gap-34 md:gap-20 gap-10"
        >
          {valuePropData.map((valueProp, i) => (
            <div className="flex flex-col justify-center items-center gap-5 lg:w-44 w-24" key={`${valueProp.title}-id-${i}`}>
              <div className="md:w-32 md:h-32 h-20 w-20">
                <Image 
                  src={valueProp.icon}
                  alt={`${valueProp.title} icon`}
                  width={1000}
                  height={1000}
                />
              </div>
              <Heading size="big">
                {valueProp.title}
              </Heading>
              <Text className="text-center text-gray-50 h-32">
                {valueProp.description}
              </Text>
            </div>
          ))}
        </motion.div>
      </section>
    )
}