import { Variants } from "framer-motion"

interface FADE_VARIANT_PARAMS {
    yBot: number; 
    yTop: number; 
    duration: number; 
    delay?: number
};

export const fadeVariant: ({yBot, yTop, duration, delay}: FADE_VARIANT_PARAMS) => Variants = ({yBot, yTop, duration, delay}: FADE_VARIANT_PARAMS) => {
    return({
        offscreen: {
          y: yBot,
          opacity: 0
        },
        onscreen: {
          y: yTop,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.2,
            duration,
            delay
          }
        }
    })
  };