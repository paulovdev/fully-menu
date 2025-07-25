import React from "react";
import { AnimatePresence, motion, Transition } from "framer-motion";

export const MenuSlideAnimations = ({
  isOpen,
  children,
  background = "black",
  width = "100vw",
  height = "100vh",
  padding = "10px",
  margin = "50px 10px",
  style = "SlideUp",
  durationInitial = 0.75,
  durationOnAnimate = 0.75,
  durationOnExit = 0.75,
  index = 90,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  background?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  style?: "SlideUp" | "SlideDown" | "SlideLeft" | "SlideRight";
  durationInitial?: number;
  durationOnAnimate?: number;
  durationOnExit?: number;
  index?: number;
}) => {
  const baseTransition: Transition = {
    type: "tween",
    ease: [0.76, 0, 0.24, 1],
  };

  const slideAnimations = {
    SlideUp: {
      initial: { top: "-100%" },
      animate: { top: "0%" },
      exit: { top: "-100%" },
    },
    SlideDown: {
      initial: { top: "100%" },
      animate: { top: "0%" },
      exit: { top: "100%" },
    },
    SlideLeft: {
      initial: { left: "-100%" },
      animate: { left: "0%" },
      exit: { left: "-100%" },
    },
    SlideRight: {
      initial: { left: "100%" },
      animate: { left: "0%" },
      exit: { left: "100%" },
    },
  };

  const selectedStyle = slideAnimations[style] || slideAnimations.SlideUp;

  const animationVariants = {
    initial: {
      ...selectedStyle.initial,
      transition: { ...baseTransition, duration: durationInitial },
    },
    animate: {
      ...selectedStyle.animate,
      transition: { ...baseTransition, duration: durationOnAnimate },
    },
    exit: {
      ...selectedStyle.exit,
      transition: { ...baseTransition, duration: durationOnExit },
    },
  };

  const opacityAnimation = {
    initial: {
      opacity: 0,
      transition: { ...baseTransition, duration: 0.5 },
    },
    animate: {
      opacity: 1,
      transition: { ...baseTransition, duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { ...baseTransition, duration: 0.5 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 overflow-hidden"
          style={{ width, height, background, zIndex: index }}
          variants={animationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={style}
        >
          <motion.div
            className="relative size-full"
            variants={opacityAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ padding, margin }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MenuStairsAnimations = ({
  isOpen,
  children,
  background = "black",
  width = "100vw",
  height = "100vh",
  padding = "10px",
  margin = "50px 10px",
  style = "StairsUp",
  stairsCount = 6,
  durationInitial = 0.75,
  durationOnAnimate = 0.75,
  durationOnExit = 0.75,
  delayInitial = 0.05,
  delayOnAnimate = 0.05,
  delayOnExit = 0.05,
  index = 90,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  background?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  style?: "StairsUp" | "StairsDown" | "StairsLeft" | "StairsRight";
  stairsCount?: number;
  durationInitial?: number;
  durationOnAnimate?: number;
  durationOnExit?: number;
  delayInitial?: number;
  delayOnAnimate?: number;
  delayOnExit?: number;
  index?: number;
}) => {
  const baseTransition: Transition = {
    type: "tween",
    ease: [0.76, 0, 0.24, 1],
  };

  const stairsTransition: Transition = {
    type: "tween",
    ease: [0.215, 0.61, 0.355, 1],
  };

  const stairsAnimations = {
    StairsUp: {
      initial: { top: "-100%" },
      animate: {
        top: "0%",
      },
      exit: {
        top: "-100%",
      },
    },
    StairsDown: {
      initial: { top: "100%" },
      animate: {
        top: "0%",
      },
      exit: {
        top: "100%",
      },
    },
    StairsLeft: {
      initial: { left: "100%" },
      animate: {
        left: "0%",
      },
      exit: {
        left: "100%",
      },
    },
    StairsRight: {
      initial: { left: "-100%" },
      animate: {
        left: "0%",
      },
      exit: {
        left: "-100%",
      },
    },
  };

  const selectedStyle = stairsAnimations[style] || stairsAnimations.StairsUp;

  const animationVariants = {
    initial: (custom: number) => ({
      ...selectedStyle.initial,
      transition: {
        ...stairsTransition,
        duration: durationInitial,
        delay: delayInitial * custom,
      },
    }),
    animate: (custom: number) => ({
      ...selectedStyle.animate,
      transition: {
        ...stairsTransition,
        duration: durationOnAnimate,
        delay: delayOnAnimate * custom,
      },
    }),
    exit: (custom: number) => ({
      ...selectedStyle.exit,
      transition: {
        ...stairsTransition,
        duration: durationOnExit,
        delay: delayOnExit * custom,
      },
    }),
  };

  const opacityAnimation = {
    initial: {
      opacity: 0,
      transition: { ...baseTransition, duration: 0.75 },
    },
    animate: {
      opacity: 1,
      transition: { ...baseTransition, duration: 0.75 },
    },
    exit: {
      opacity: 0,
      transition: { ...baseTransition, duration: 0.75 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex z-90 overflow-hidden"
          style={{ width, height, zIndex: index }}
        >
          <div
            className={`w-full grid grid-cols-2`}
            style={{
              gridTemplateColumns: `repeat(${stairsCount}, minmax(0, 1fr))`,
            }}
          >
            {[...Array(stairsCount)].map((_, i) => (
              <div className="size-full overflow-hidden" key={i}>
                <motion.div
                  custom={i}
                  variants={animationVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="relative size-full"
                  style={{ background }}
                />
              </div>
            ))}
          </div>
          <motion.div
            className="absolute size-full"
            variants={opacityAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ padding, margin }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const MenuCircleAnimation = ({
  isOpen,
  children,
  background = "black",
  width = "100vw",
  height = "100vh",
  padding = "10px",
  margin = "50px 10px",
  durationInitial = 0.75,
  durationOnAnimate = 0.75,
  durationOnExit = 0.75,
  index = 90,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  background?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  durationInitial?: number;
  durationOnAnimate?: number;
  durationOnExit?: number;
  index?: number;
}) => {
  const baseTransition: Transition = {
    type: "tween",
    ease: [0.76, 0, 0.24, 1],
  };

  const clipPathVariants = {
    initial: {
      clipPath: "circle(0% at 50% 50%)",
      transition: {
        ...baseTransition,
        duration: durationInitial,
      },
    },
    animate: {
      clipPath: "circle(150% at 50% 50%)",
      transition: {
        ...baseTransition,
        duration: durationOnAnimate,
      },
    },
    exit: {
      clipPath: "circle(0% at 50% 50%)",
      transition: {
        ...baseTransition,
        duration: durationOnExit,
      },
    },
  };

  const opacityAnimation = {
    initial: {
      opacity: 0,
      transition: { ...baseTransition, duration: 0.5 },
    },
    animate: {
      opacity: 1,
      transition: { ...baseTransition, delay: 0.2, duration: 0.6 },
    },
    exit: {
      opacity: 0,
      transition: { ...baseTransition, duration: 0.5 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0"
          style={{
            zIndex: index,
            width,
            height,
            background,
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={clipPathVariants}
        >
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{ padding, margin }}
            variants={opacityAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
