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

export default function Home() {
  return (
    <>
      <main>
        <section className={heroStyles.hero}>
          <div className={`${heroStyles["hero-wrapper"]} wrapper`}>
            <div className={heroStyles["hero-text"]}>
              <h1 className="primary-text">
                <span className="emph1">13.5</span> Million
              </h1>
              <h2 className="primary-text">
                American households are{" "}
                <span className="emph1">food insecure.</span>
              </h2>
            </div>
            <Plate />
          </div>
        </section>

        <HeroSVG />
        <section className={stakeholderStyles.stakeholders}>
          <div
            className={`${stakeholderStyles["stakeholders-wrapper"]} wrapper secondary-text`}
          >
            <h2>
              But to understand the{" "}
              <span className="emph2">
                problem, <br /> you
              </span>{" "}
              need to understand the <span className="emph2">people...</span>
            </h2>
            <div className={cardStyles["card-wrapper"]}>
              {stakeholderData.map((stakeholder) => (
                <Card
                  name={stakeholder.name}
                  bgImg={stakeholder.backgroundImg}
                  type="default"
                >
                  <h3 className="primary-text">{stakeholder.name}</h3>
                  <p className="primary-text">{stakeholder.blurb}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <ProblemSVG />
        <section className={`${problemStyles.problem} primary-text`}>
          <h2>Under the surface...</h2>
          <div className="wrapper">
            <div className={problemStyles.content}>
              {problemData.map((problem: problemStuff, i: number) => {
                return (
                  <Horizontal
                    layout={i % 2 === 0 ? "default" : "alt"}
                    imgURL={problem.url}
                    imgAlt={problem.imgAlt}
                  >
                    <div className={problemStyles["text-layout"]}>
                      <p className={problemStyles.text}>
                      <span className="emph1">{problem.name}</span>{" "}
                      {problem.blurb}
                      </p>
                      <p className={problemStyles.text}>{problem.blurbPT2}</p>
                    </div>
                  </Horizontal>
                );
              })}
            </div>
          </div>
        </section>
        <TeamSVG />
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
                      target="_blank"
                    >
                      <LinkedIn />
                    </a>
                    <a href={`mailto: ${member.email}`} rel="noopener noreferrer" target="_blank">
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
                        <a href={achievement.link} rel="noopener noreferrer" target="_blank">
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
              perspective. If you or someone you know has helped orchestrate Food Banks or Pantries - or if you just want to talk to us! Then we would love to...
            </p>
            <a
              href="mailto:rohan@bagget.io?cc=alan@bagget.io;cesar@bagget.io"
              rel="noopener noreferrer"
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
