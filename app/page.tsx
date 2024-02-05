import Hero from "./sections/hero";
import Stakeholders from "./sections/stakeholders";
import Challenges from "./sections/challenges";
import Team from "./sections/team";
import Awards from "./sections/awards";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Awards />
        <Stakeholders/>
        <Challenges />
        <Team />
        
      </main>
    </>
  );
}
