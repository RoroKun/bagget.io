"use client";
import styles from "../styles/carousel.module.css";
import { awardData } from "../data/achivements";
import Image from "next/image";
import { useState } from "react";

export const Carousel = ({ info }: { info: awardData[] }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? info.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === info.length - 1 ? 0 : curr + 1));

  return (
    <div className={styles["carousel-wrapper"]}>
      {info.map((data) => (
        <div
          className={styles.card}
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          <div className={styles["card-content"]}>
            <h3 className="primary-text">{data.eventName}</h3>
            <p className="sub-text primary-text">
              {data.location} | {data.date} | {data.placement}
            </p>
            <p className="primary-text">{data.blurb}</p>
          </div>
          <Image
            src="/esj.jpg"
            alt={`competition background image`}
            fill
            style={{
              objectFit: "cover",
              filter: "brightness(40%)",
              borderRadius: "2em",
              zIndex: "1",
            }}
          />
        </div>
      ))}
      <div className={styles.buttons}>
        <button onClick={() => prev()}>left</button>
        <button onClick={() => next()}>right</button>
      </div>
    </div>
  );
};
