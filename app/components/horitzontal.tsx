import Image from "next/image";
import styles from "../styles/horizontal.module.css";

export const Horizontal = ({
  children,
  layout,
  imgURL,
  imgDesign = "default",
}: {
  children: React.ReactNode;
  layout: "default" | "alt";
  imgURL?: string;
  imgDesign?: "default" | "alt";
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
            // TODO: fix alt
            alt={`Image of ${imgURL.substring(1)} as symbolism`}
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
