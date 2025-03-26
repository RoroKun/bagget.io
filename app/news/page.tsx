"use client"

import React from "react";
import Hero from "@/components/sections/globalHero";
import Image from "next/image";
import { Heading, Text, Highlight } from "@/components/utility/typography";
import { newsData } from "@/data/news";
import { BetterButton } from "@/components/ui/button";
import { fadeIn } from "@/lib/animate";
import { motion } from "motion/react";

export default function NewsPage() {
    return (
        <main>
            <Hero image={{url: "/news-hero.webp", alt: "picture of newspapers"}}>
                See what <Highlight>we've</Highlight> been up to.
            </Hero>
            <News/>
            <div className="px-[15%] pt-[2%] pb-[5%] flex flex-col justify-center items-center bg-gradient-to-t from-green-950 to-emerald-900">
                <BetterButton link={"/news"} variant="secondary"><Text>Jump to top</Text></BetterButton>
            </div>
        </main>
    )
}

function News() {
    return (
        <section className="lg:px-[15%] px-[5%] py-[2%] flex flex-col gap-10 justify-center items-center bg-gradient-to-b from-green-950 to-emerald-900 text-center text-gray-50">
            <div className="flex flex-col lg:gap-14 md:gap-10 gap-5">
                {newsData.map((news, i) => (
                    <motion.div 
                        key={`${news.title}-id-${i}`} 
                        variants={fadeIn}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true}}
                        className="relative flex flex-col justify-center items-center gap-6 bg-green-950 shadow-lg md:rounded-full rounded-3xl md:px-20 lg:py-28 px-15 py-10 overflow-hidden"
                    >
                        <div className="flex flex-col gap-5 relate z-10">
                            <Heading size="big">{news.title}</Heading>
                            <Text>{news.location ? `${news.location} · ${news.date}` : news.date} </Text>
                        </div>
                        <div className="flex flex-col gap-8 lg:w-1/2 justify-center items-center relate z-10">
                            <Text>{news.blurb}</Text>
                            {news.link && <BetterButton link={news.link} newPage variant="secondary"><Text>Read More</Text></BetterButton>}
                        </div>
                        <div className="absolute z-0 w-full h-full">
                            <Image 
                                src={news.image.url}
                                alt={news.image.alt}
                                width={1920}
                                height={1080}
                                className="bg-lime-50 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}