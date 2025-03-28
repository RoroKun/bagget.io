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