import Image from "next/image";
import styles from "../styles/horizontal.module.css";

export const Horizontal = ({
  children,
  layout,
  imgURL,
  imgDesign = "default",
  imgAlt,
}: {
  children: React.ReactNode;
  layout: "default" | "alt";
  imgURL: string;
  imgDesign?: "default" | "alt";
  imgAlt: string;
}) => {
  return (
    <div className={layout === "default" ? styles.default : styles.alt}>
      {children}
      {imgURL && (
        <div
          className={`${styles["img-wrapper"]} ${
            imgDesign === "alt" ? styles["alt-img"] : ""
          }`}
        >
          <Image
            src={imgURL}
            alt={imgAlt}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}
    </div>
  );
};
