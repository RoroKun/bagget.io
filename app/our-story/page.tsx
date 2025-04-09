"use client"

import React from "react";
import Hero from "@/components/sections/globalHero";
import { Heading, Text, Highlight } from "@/components/utility/typography";
import { companyValuesData } from "@/data/company-values"
import Image from "next/image";
import { teamData } from "@/data/team";
import { fadeIn } from "@/lib/animate";
import { motion } from "motion/react";

export default function OurStoryPage() {
    return (
        <main>
            <Hero image={{url: "/our-story-hero.webp", alt: "picture of baguettes in a brown paper bag"}}>
                From idea to <Highlight>Impact</Highlight>
            </Hero>
            <History/>
            <CompanyValues/>
            <Team />
        </main>
    )
}

function History() {
    return(
        <section className="md:px-[15%] px-[10%] md:py-[2%] md:pb-[10%] pb-[7%] flex flex-col justify-center items-center bg-gradient-to-b from-green-950 to-emerald-950 text-center">
            <motion.div 
                variants={fadeIn}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true}}
                className="flex flex-col justify-center items-center md:gap-10 gap-5 lg:max-w-9/12 text-gray-50"
            >
                <Text>
                    Our team was in college when we started this journey in early 2023. Like 40% of the students in the 
                    California State University system, and a large percentage of students around the country, we were 
                    regular patrons of the on-campus Food Pantry. Despite the indispensable role it played in our lives 
                    at the time, the flaws of the arrangement felt glaring. The inaugural Engineering Social Justice 
                    competition gave us the perfect opportunity to explore the root of the problems we were experiencing - 
                    the difficult scheduling, inventory mismatch, the ineffectual communication. The research and interviews 
                    that ensued led to brainstorming sessions. Through this process is where Bag/Get was born. 
                </Text>
                <Text>
                    We went on to win 1st place at the ESJ competition, followed by a podium finish at the CSU-wide Startup 
                    Competition in San Jose. Bag/Get was then invited to receive residency at the CSUF Business School's 
                    Startup Incubator. We began a formal market research phase consisting of hundreds of interviews with 
                    food pantries and food banks as far north as Humboldt County, all the way down to San Diego. The team 
                    continued to receive validation with wins at competitions such as Titan Fast Pitch and SoCal Entrepreneurship.
                </Text>
                <Text>
                    This market research culminated in the start of development for us - the Bag/Get platform for staff, volunteers, 
                    and neighbors (pantry clients). During this time we were also being supported by an emerging partnership with the 
                    LA-based Pando Populus group during this period. We continued to strengthen relationships across California by attending
                    our first Food Bank Convention in Sacramento, sponsored by the NSF's I-Corp program.
                </Text>
                <Text>
                    Shortly after that, the team was invited to apply to the Larta Institute's Accelerator, the Venture Fellows program - a 
                    natural progression for us having just graduated from the business school's start up incubator. From hundreds of applicants, 
                    our startup was chosen to join the 9 other LA & Miami-based companies that made up the 2024 cohort. We continued to refine 
                    our MVP, whilst being to introduced to impact-oriented VC firms - this was valuable insight towards planning our pilot run 
                    and establishing our KPI's. 
                </Text>
                <Text>
                    We successfully completed residency at Larta Institute, and today are soon to deploy our pilot at 3 different pantries in Orange 
                    County and the Inland Empire. As we move along, Bag/Get will continue to grow and listen closely to what our community has to say. 
                    Please join us, on our journey to modernize the food equity landscape and help our neighbors!
                </Text>
            </motion.div>
        </section>
    )
}

function CompanyValues() {
    return(
        <section className="relative overflow-hidden md:px-[15%] px-[10%] py-[7%] flex flex-col md:gap-10 gap-10 justify-center items-center bg-gradient-to-t from-green-950 to-emerald-950 text-center text-gray-50">
            <motion.div 
                variants={fadeIn}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true}}
                className="relative z-10 flex flex-col md:gap-10 gap-2 lg:w-1/2"
            >
                <Heading size="big">
                    Our Values
                </Heading>
                <Text>
                    During this journey so far we came to a conclusion that Bag/Get should follow these core principles. 
                    These factors are what drives our development and focus to deliver the best software.
                </Text>
            </motion.div>
            <motion.div 
                variants={fadeIn}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true}}
                className="relative z-10 flex flex-wrap justify-center items-center md:gap-30 gap-5"
            >
                {companyValuesData.map((value, i) => (
                    <div key={`${value.title}-id-${i}`} className="flex flex-col flex-wrap justify-center items-center w-20 gap-5">
                        <div className="lg:w-32 lg:h-32 md:w-20 md:h-20 w-10 h-10">
                            <Image 
                                src={value.icon}
                                alt={`${value.title} icon`}
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <Heading size="small">
                            {value.title}
                        </Heading>
                    </div>
                ))}
            </motion.div>
            <div className="absolute z-0 w-full h-full">
                <Image 
                    src="/our-values.webp"
                    alt="image of bag/get team members creating accessible software based on our market research"
                    width={1920}
                    height={1080}
                    className="bg-lime-50"
                />
                <div className="absolute inset-0 bg-black opacity-90"></div>
            </div>
        </section>
    )
}

function Team() {
    return (
        <section className="lg:px-[24%] md:px-[15%] px-[10%] lg:pt-[2%] pt-[7%] pb-[5%] flex flex-col justify-center items-center lg:gap-22 md:gap-14 gap-3 bg-gradient-to-b from-green-950 to-emerald-950 text-center text-gray-50">
            <motion.div 
                variants={fadeIn}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true}}
                className="flex flex-col gap-5 lg:w-1/2"
            >
                <Heading size="big">
                    The <Highlight>faces behind</Highlight> our values.
                </Heading>
                <Text>
                    Meet the team who is actively programming, advocating and pushing this software to local communities 
                    to <b>serve more people</b>, and <b>waste less.</b>
                </Text>
            </motion.div>
            <div className="flex flex-col lg:gap-30 gap-0 justify-center items-center">
                {teamData.map((member, i) => (
                    <motion.div 
                        key={`${member.name}-id-${i}`} 
                        variants={fadeIn}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true}}
                        className={`lg:h-64 md:px-5 py-5 flex flex-col-reverse md:gap-8 gap-10 justify-between items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                    >
                        <div className="md:w-1/2 flex flex-col gap-5 md:justify-start md:items-start justify-center items-center">
                            <div className="flex flex-col text-gray-50 gap-2 md:justify-start md:items-start justify-center items-center">
                                <Heading size="big" className="lg:text-2xl">
                                    {member.name}
                                </Heading>
                                <Text>{member.title}</Text>
                            </div>
                            <div className="flex flex-wrap gap-5">
                                <div className="flex gap-2 justify-center items-center">
                                    <div className="lg:w-10 lg:h-10 md:w-7 md:h-7 w-5 h-5">
                                        <Image
                                            src="/mail.svg"
                                            width={1000}
                                            height={1000}
                                            alt="email icon"
                                        />
                                    </div>
                                    <Text>{member.email}</Text>
                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                    <div className="lg:w-10 lg:h-10 md:w-7 md:h-7 w-5 h-5">
                                        <Image
                                            src="/linkedin-icon.svg"
                                            width={1000}
                                            height={1000}
                                            alt="linkedin logo"
                                        />
                                    </div>
                                    <Text>{member.linkedIn}</Text>
                                </div>
                            </div>
                            <Text className="md:text-start text-center">{member.blurb}</Text>
                        </div>
                        <div className="lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[300px] w-[200px] h-[250px] overflow-hidden rounded-full">
                            <Image
                                src={member.image}
                                width={1920}
                                height={1800}
                                alt={`headshot of ${member.name}`}
                                className="bg-lime-50"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}