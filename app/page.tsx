import Hero from "./sections/hero";
import Stakeholders from "./sections/stakeholders";
import Challenges from "./sections/challenges";
import Team from "./sections/team";
import Awards from "./sections/awards";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stakeholders/>
        <Challenges />
        <Team />
        <Awards />
        <Contact />
      </main>
    </>
  );
}
