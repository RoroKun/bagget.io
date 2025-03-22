import Achievements from "@/components/sections/home/achievements";
import HeroCTA from "@/components/sections/home/contact";
import Hero from "@/components/sections/home/hero";
import Intro from "@/components/sections/home/intro";
import Partners from "@/components/sections/home/partners";
import ValueProp from "@/components/sections/home/value-prop";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-green-950 to-green-900">
      <Hero/>
      <Intro/>
      <ValueProp/>
      <Achievements />
      <Partners />
      <HeroCTA />
    </main>
  );
}