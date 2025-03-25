"use client"

import React from "react";
import { Heading, Text, Highlight } from "@/components/utility/typography";
import Image from "next/image";
import { BetterButton } from "@/components/ui/button";
import { stakeholderData } from "@/data/stakeholders";
import { challengesData } from "@/data/challenges";
import { cn } from "@/lib/utils";
import CTA from "@/components/sections/cta";
import Hero from "@/components/sections/globalHero";
import { fadeIn } from "@/lib/animate";
import { motion } from "motion/react";

export default function TheChallengePage() {
    return (
        <main>
            <Hero image={{url: "/challenge-hero-picture.webp", alt: "picture of a stocked shelf of food in a food pantry"}}>
                Everyday these groups fight <Highlight>Food Insecurity.</Highlight>
            </Hero>
            <Stakeholders/>
            <UnderTheSurface/>
            <CTA videoURL="challenge-video.webm">
                <Heading size="big">
                    This is where <Highlight>Bag/Get</Highlight> comes in.
                </Heading>
                <div className="flex flex-col gap-5 justify-center items-center">
                    <Text className="text-center max-w-1/2 text-gray-50">
                        Bag/Get alleviates all of these pain points and more. 
                    </Text>
                    <Text className="text-center max-w-1/2 text-gray-50">
                        To truly create an impactful solution we need to hear everyone’s perspective. If you or someone you know has helped orchestrate Food Banks or Pantries - or if you just want to talk to us!
                    </Text>
                    <Text className="text-center max-w-1/2 text-gray-50">
                        Join us today on our mission to...
                    </Text>
                </div>
                <BetterButton variant="secondary" className="text-gray-950" link={"/contact"}>
                    <Text>Serve More and Waste Less</Text>
                </BetterButton>
            </CTA>
        </main>
    )
}

function Stakeholders() {
    return (
        <section className="px-[15%] py-[2%] bg-gradient-to-b from-green-950 to-emerald-950">
            <motion.div 
                variants={fadeIn}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true}}
                className="flex gap-10 flex-wrap justify-center items-center"
            >
                {stakeholderData.map((stakeholder, i) => (
                    <div className="max-w-50 flex flex-col justify-center items-center gap-5 text-center" key={`${stakeholder.title}-id-${i}`}>
                        <div className="w-32 h-32">
                            <Image 
                                src={stakeholder.icon}
                                alt={`${stakeholder.title} icon`}
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="flex flex-col gap-2 min-h-40">
                            <Heading size="small">
                                {stakeholder.title}
                            </Heading>
                            <Text className="text-center text-gray-50">
                                {stakeholder.description}
                            </Text>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}


function UnderTheSurface() {
    return(
        <section className="w-full px-[15%] py-[2%] relative bg-gradient-to-br from-green-900 to-emerald-900">
            <div className="absolute top-0 left-0 w-full z-10">
                <Image
                    src="/challenges-top-border.svg"
                    width={1920}
                    height={1800}
                    alt="border bottom of contact section"
                    className="w-full "
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-10 pt-8">
                <motion.div 
                    variants={fadeIn}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true}}
                >
                    <Heading size="big">
                        However, under the surface...
                    </Heading>
                </motion.div>
                <div className="flex flex-col gap-10">
                    {challengesData.map((challenge, i) => (
                        <motion.div 
                            key={`${challenge.stakeholder}-id-${i}`} 
                            variants={fadeIn}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true}}
                            className={cn(`h-64 rounded-4xl px-10 py-5 flex justify-between items-center shadow-xl ${i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`, challenge.highlightGradient)}
                        >
                            <div className="flex flex-col w-1/2 text-gray-50 gap-4">
                                <Heading size="small">
                                    <Highlight>{challenge.stakeholder}</Highlight> {challenge.title}
                                </Heading>
                                <ul className="list-disc pl-5 gap-2">
                                    {challenge.blurb.map((point, j) => (
                                        <li key={`${challenge.stakeholder}-point-${j}`}>
                                            <Text>{point}</Text>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-1/3 h-full overflow-hidden rounded-xl">
                                <Image
                                    src={challenge.image}
                                    width={1920}
                                    height={1800}
                                    alt={`${challenge.stakeholder} image`}
                                    className="bg-lime-50"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
