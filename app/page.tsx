import Hero from "./sections/hero";
import Stakeholders from "./sections/stakeholders";
import Challenges from "./sections/challenges";
import Team from "./sections/team";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stakeholders/>
        <Challenges />
        <Team />
        
        
      </main>
      <footer>
        <p className="sub-text primary-text">© 2023 All rights reserved.</p>
      </footer>
    </>
  );
}
