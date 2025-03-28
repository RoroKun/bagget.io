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
                    We first started this journey in December 2022 putting our minds to solve a social justice 
                    challenge for the debut Engineering Social Justice (ESJ) Competition. That is when we noticed 
                    our campus food pantry, a service which we used to supplement our food needs. We witnessed the 
                    every day impact food pantries had on students and that is when Bag/Get was created. 
                </Text>
                <Text>
                    Winning first place at ESJ opened doors for us to turn this software into a sustainable solution. 
                    That was just the beginning, we then spent the following year interviewing, volunteering and going 
                    to conventions, such as Food Access 2024, discussing the idea of food operations and solving food 
                    insecurity to better understand the current space.

                </Text>
                <Text>
                    Since then we{"'"}ve gone through programs such as the CSUF Incubator, Pando Days, NSF I-CORP, and even 
                    Larta Institute Venture Fellows to learn from industry leaders on how we turn our idea into measurable 
                    impact.
                </Text>
                <Text>
                    Today, we are refining our MVP as we get closer to piloting at local food pantries in Orange County 
                    and Inland Empire. After that, Bag/Get will continue growth and listen closely to what the community 
                    has to say so that we can both work towards serving more people, and wasting less resources.
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