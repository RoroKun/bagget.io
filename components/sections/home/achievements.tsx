"use client"

import { BetterButton } from "@/components/ui/button";
import { Heading, Text } from "@/components/utility/typography";
import { awards } from "@/data/awards"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel"
import { useEffect, useState } from "react";
import { fadeIn } from "@/lib/animate";
import { motion } from "motion/react";

export default function Achievements() {
    return (
      <section className="flex flex-col justify-center items-center lg:px-[15%] px-[10%] py-[2%] gap-15 bg-gradient-to-b from-green-950 to-emerald-950">
        <motion.div 
          variants={fadeIn}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true}}
          className="flex flex-col justify-center items-center gap-6"
        >
          <Heading size="big">
              See how far we've come.
          </Heading>
          <Text className="text-center lg:max-w-1/2  text-gray-50">
            We started as Cal State Fullerton computer science majors using our campus food pantry. 
            Since then we've researched, interviewed, volunteered to better understand this space 
            to build impactful software.
          </Text>
          <BetterButton variant="secondary" className="text-gray-950" link={"/our-story"}>
            <Text>Read Our Full Story</Text>
          </BetterButton>
        </motion.div>
        <AchievementsCarousel/>
      </section>
    )
}


function AchievementsCarousel() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
   
    useEffect(() => {
      if (!api) {
        return
      }
   
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
   
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])
  
    return (
      <div className="flex flex-col justify-center items-center">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
          className="lg:w-full md:w-11/12 w-1/3"
        >
          <CarouselContent>
            {awards.map((award, i) => (
              <CarouselItem key={i} className="basis-2/2 md:basis-1/2 lg:basis-1/3">
                <div>
                  <Card className="p-0 bg-transparent outline-none border-transparent">
                    <CardContent className="flex flex-col items-center justify-center p-0 gap-3">
                      <Image 
                          src={award.img}
                          alt={award.imgAlt}
                          width={1000}
                          height={500}
                          className="rounded-xl lg:h-80 md:h-60 h-40 object-cover bg-lime-50"
                      />
                      <div className="flex flex-col justify-center items-center">
                        <Heading size="small" className="text-center">
                          {award.eventName}
                        </Heading>
                        <Text className="text-gray-50">
                          {award.location} · {award.date}
                        </Text>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-gray-100">
          Slide {current} of {count}
        </div>
      </div>
    )
}