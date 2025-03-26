import Achievements from "@/components/sections/home/achievements";
import CTA from "@/components/sections/cta";
import Hero from "@/components/sections/home/hero";
import Intro from "@/components/sections/home/intro";
import Partners from "@/components/sections/home/partners";
import ValueProp from "@/components/sections/home/value-prop";
import { Heading, Text, Highlight } from "@/components/utility/typography";
import { BetterButton } from "@/components/ui/button";


export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-green-950 to-green-900">
      <Hero/>
      <Intro/>
      <ValueProp/>
      <Achievements />
      <Partners />
      <CTA videoURL="packing-food.webm" haveBorders>
        <Heading size="big">
          Save time with <Highlight>Bag/Get.</Highlight>
        </Heading>
        <Text className="text-center lg:max-w-1/2 md:w-2/3 text-gray-50">
          We are currently rolling out our software and piloting at various location 
          across California. If you want to be next and see how Bag/Get can alleviate 
          your pain then all you have to do is...
        </Text>
        <BetterButton variant="secondary" className="text-gray-950" link={"/contact"}>
          <Text>Waitlist Today</Text>
        </BetterButton>
      </CTA>
    </main>
  );
}