import { Variants } from "motion/react"


interface FADE_VARIANT_PARAMS {
    yBot?: number; 
    yTop?: number; 
    duration?: number; 
    delay?: number
};

export const fadeIn = {
        offscreen: {
          y: 10,
          opacity: 0
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.95,
          }
        }
    }