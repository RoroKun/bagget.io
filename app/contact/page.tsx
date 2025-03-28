import ContactForm from "@/components/sections/contact-form";
import Hero from "@/components/sections/globalHero";
import { Heading, Text, Highlight } from "@/components/utility/typography";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Redirect } from "@/components/utility/link";

export default function ContactPage() {
    return (
        <main>
            <Hero image={{url: "/contact-hero.webp", alt: "picture of person ready to contact bag/get"}}>
               Want to talk <Highlight>more?</Highlight>
            </Hero>
            <ContactSection/>
            <SocialsPlug/>
        </main>
    )
}

function ContactSection() {
    return (
        <section className="md:px-[15%] px-[5%] py-[2%] flex flex-col gap-10 justify-center items-center bg-green-950 text-center text-gray-50">
            
            <Card className="lg:w-1/2 bg-gradient-to-br from-green-900 to-emerald-900 border-none outline-transparent">
                <CardHeader>
                    <CardTitle><Heading size="big">Get in touch</Heading></CardTitle>
                    <CardDescription><Text className="text-sm text-gray-300">Fill out the form and we{"'"}ll contact you.</Text></CardDescription>
                </CardHeader>
                <CardContent>
                    <ContactForm/>
                </CardContent>
            </Card>
        </section>
    )
}

function SocialsPlug() {
    return(
        <section className="px-[15%] py-[2%] flex flex-col gap-10 justify-center items-center bg-green-950 text-center text-gray-50">
            <Heading size="big">Well since you made it here...</Heading>
            <div className="flex flex-col gap-5">
                <Text size="big">Why don{"'"}t you check us out on LinkedIn?</Text>
                <Text className="text-sm text-gray-300 italic">Just press the big LinkedIn Icon</Text>
            </div>
            <Redirect redirect="https://www.linkedin.com/company/bagget" newPage>
                <div className="w-50 h-50 transition-transform duration-300 rotate-12 hover:rotate-0 hover:scale-110 ease-in-out">
                    <Image
                        src="/linkedin-icon.svg"
                        width={1000}
                        height={1000}
                        alt="linkedin logo"
                    />
                </div>
            </Redirect>
        </section>
    )
}