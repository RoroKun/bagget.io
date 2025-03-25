import ContactForm from "@/components/sections/contact-form";
import Hero from "@/components/sections/globalHero";
import { Heading, Text, Highlight } from "@/components/utility/typography";
import React from "react";

export default function ContactPage() {
    return (
        <main>
            <Hero image={{url: "/news-hero.webp", alt: "picture of newspapers"}}>
               Want to talk <Highlight>more?</Highlight>
            </Hero>
            <ContactSection/>
        </main>
    )
}

function ContactSection() {
    return (
        <section className="px-[15%] py-[2%] flex flex-col gap-10 justify-center items-center bg-gradient-to-b from-green-950 to-emerald-900 text-center text-gray-50">
            <ContactForm/>
        </section>
    )
}