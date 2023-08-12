import Image from "next/image";
import styles from "../styles/card.module.css";
import { CardDivider } from "./svgs";

export const Card = ({
  bgImg,
  name,
  children,
  type,
}: {
  bgImg: string;
  name: string;
  children: React.ReactNode;
  type: "alt" | "default";
}) => {
  return (
    <div className={`${styles.card} ${type === "alt" && styles.alt}`}>
      <div className={styles["img-wrapper"]}>
        {type === "alt" ? (
          <Image
            src={bgImg}
            alt={`${name} background image to signify its meaning`}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        ) : (
          <Image
            src={bgImg}
            alt={`${name} background image to signify its meaning`}
            fill
            style={{
              objectFit: "cover",
              borderRadius: "2em 2em 0 0",
              filter: "brightness(60%)",
            }}
          />
        )}
      </div>
      <div className={styles["abs-content"]}>
        <CardDivider type={type} />
        {children}
      </div>
    </div>
  );
};
