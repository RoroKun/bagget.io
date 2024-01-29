import { teamData } from "./content/team";
import { stakeholderData } from "./content/stakeholders";
import { problemStuff, problemData } from "./content/problems";
import { awardData, awardsData } from "./content/achivements";
import { Card } from "./components/card";
import {
  Email,
  FooterSVG,
  HeroSVG,
  LinkedIn,
  Plate,
  ProblemSVG,
  TeamSVG,
} from "./components/svgs";
import { Horizontal } from "./components/horitzontal";
import heroStyles from "./styles/hero.module.css";
import stakeholderStyles from "./styles/stakeholder.module.css";
import problemStyles from "./styles/problem.module.css";
import teamStyles from "./styles/team.module.css";
import cardStyles from "./styles/card.module.css";
import contactStyles from "./styles/contact.module.css";
import achievementsStyles from "./styles/achievements.module.css";
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
        <section className={teamStyles.team}>
          <div className={`${teamStyles.wrapper} wrapper secondary-text`}>
            <div className={teamStyles.content}>
              <h2>
                This is where <span className="emph1">Bag/Get</span> comes in
              </h2>
              <p className="text-restraint">
                {/* bagget is a team of... */}
                We are Cal State Fullerton CS majors looking to create custom
                solutions for this ecosystem - So that our communities can{" "}
                <span className="emph2">Bag</span> their troubles and{" "}
                <span className="emph2">Get</span> one step close to food
                security.
              </p>
            </div>
            <div className={cardStyles["card-wrapper"]}>
              {teamData.map((member) => (
                <Card name={member.name} bgImg={member.badgeImg} type="alt">
                  <div>
                    <h3 className="primary-text">{member.name}</h3>
                    <p className="sub-text primary-text">{member.title}</p>
                  </div>
                  <div className={cardStyles["social-icons"]}>
                    <a
                      href={`https://www.linkedin.com/in/${member.linkedIn}/`}
                      rel="noopener noreferrer"
                      title={`Opens ${member.name}'s LinkedIn profile in a new tab`}
                      target="_blank"
                    >
                      <LinkedIn />
                    </a>
                    <a
                      href={`mailto: ${member.email}`}
                      rel="noopener noreferrer"
                      title={`Sends an email to ${member.name} in a new tab`}
                      target="_blank"
                    >
                      <Email />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className={achievementsStyles.achievement}>
          <h2>Our Achievements</h2>
          <div className="wrapper">
            <div className={achievementsStyles["content-wrapper"]}>
              {awardsData.map((achievement: awardData, i: number) => {
                return (
                  <Horizontal
                    layout={i % 2 === 0 ? "alt" : "default"}
                    imgURL={achievement.img}
                    imgDesign="alt"
                    imgAlt={achievement.imgAlt}
                  >
                    <div className={achievementsStyles.content}>
                      <div>
                        <h3>{achievement.eventName}</h3>
                        <p className="sub-text">
                          <b>{achievement.placement}</b> ·{" "}
                          {achievement.location} · {achievement.date}
                        </p>
                      </div>
                      <p>{achievement.blurb}</p>
                      {achievement.link && (
                        <a
                          href={achievement.link}
                          rel="noopener noreferrer"
                          title={`Opens the official ${achievement.eventName} article in a new tab`}
                          target="_blank"
                        >
                          <button className="alt-button">
                            <p className="sub-text primary-text">Read more</p>
                          </button>
                        </a>
                      )}
                    </div>
                  </Horizontal>
                );
              })}
            </div>
          </div>
        </section>
        <FooterSVG />
        <section className={contactStyles.contact}>
          <div className={`${contactStyles["contact-wrapper"]} wrapper`}>
            <h2 className="primary-text">Want to help?</h2>
            <p className="primary-text text-restraint">
              To truly create an impactful solution we need to hear everyone’s
              perspective. If you or someone you know has helped orchestrate
              Food Banks or Pantries - or if you just want to talk to us! Then
              we would love to...
            </p>
            <a
              href="mailto:rohan@bagget.io?cc=alan@bagget.io;cesar@bagget.io"
              rel="noopener noreferrer"
              title={`Sends an email to the Bag/Get team in a new tab`}
              target="_blank"
            >
              <button className="primary-text">chat today!</button>
            </a>
          </div>
        </section>
      </main>
      <footer>
        <p className="sub-text primary-text">© 2023 All rights reserved.</p>
      </footer>
    </>
  );
}
