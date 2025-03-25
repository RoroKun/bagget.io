import React from "react";
import Hero from "@/components/sections/globalHero";
import Image from "next/image";
import { Heading, Text, Highlight } from "@/components/utility/typography";
import { newsData } from "@/data/news";
import { BetterButton } from "@/components/ui/button";

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
        <section className="px-[15%] py-[2%] flex flex-col gap-10 justify-center items-center bg-gradient-to-b from-green-950 to-emerald-900 text-center text-gray-50">
            <div className="flex flex-col gap-14">
                {newsData.map((news, i) => (
                    <div key={`${news.title}-id-${i}`} className="relative flex flex-col justify-center items-center gap-6 bg-green-950 shadow-lg rounded-full px-20 py-28 overflow-hidden">
                        <div className="flex flex-col gap-5 relate z-10">
                            <Heading size="big">{news.title}</Heading>
                            <Text>{news.location ? `${news.location} · ${news.date}` : news.date} </Text>
                        </div>
                        <div className="flex flex-col gap-8 w-1/2 justify-center items-center relate z-10">
                            <Text>{news.blurb}</Text>
                            {news.link && <BetterButton link={news.link} newPage variant="secondary"><Text>Read More</Text></BetterButton>}
                        </div>
                        <div className="absolute z-0 w-full h-full">
                            <Image 
                                src={news.image.url}
                                alt={news.image.alt}
                                width={1920}
                                height={1080}
                                className="bg-lime-50"
                            />
                            <div className="absolute inset-0 bg-black opacity-90"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}