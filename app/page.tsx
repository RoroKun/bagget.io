import { Button } from "@/components/ui/button";
import { Heading, Text, Highlight } from "@/components/utility/typography";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Intro/>
    </main>
  );
}


function Hero() {
  return (
    <section>
        <Heading size="big">
            <Highlight>Revolutionizing</Highlight>
             Food Assistance
        </Heading>
        <Heading>
          Serve More, Waste Less.
        </Heading>
        <Button link={"/"}>
          <Text>Waitlist Today</Text>
        </Button>
    </section>
  )
}

function Intro() {
  return (
    <section>
      <div>
        <Heading size="big">
          The <Highlight>All-in-One</Highlight> Solution Your
          Pantry's Been Waiting For.
        </Heading>
        <Text>
          Packed to the brim with quality of life automation and tools to make your distribution excel.
        </Text>
        <Text>
          Case Management, Volunteer Retention, Pantry Locator, Dynamic Report Generation, and more in one unified package.
        </Text>
      </div>
      <Image 
        src='/stakeholder-img.webp' 
        alt='TODO' 
        width={1000}
        height={1000}
        style={{ width: '100%', height: 'auto' }}
      />
    </section>
  )
}

function ValueProp() {
  return (
    <section>
      
    </section>
  )
}