"use client";
import { AnimatePresence, motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { doorOpenAnimation } from "../animation/animation";

const Transition = ({ children }: { children: React.ReactNode }) => {
  const [scope] = useAnimate();

  const isInView = useInView(scope, { once: true, amount: 0.8 });

  useEffect(() => {
    if (isInView) {
      animation();
    }
  }, [isInView]);

  const animation = async () => {
    doorOpenAnimation();
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div ref={scope} className=" overflow-hidden">
        {children}
        <motion.div
          id="leftdoor"
          initial={{
            scaleX: 0,
          }}
          className=" absolute top-0 left-0 w-2/4 h-screen bg-primary z-50 origin-left overflow-hidden"
        />
        <motion.div
          id="rightdoor"
          initial={{
            scaleX: 0,
          }}
          className=" absolute top-0 right-0 w-2/4  h-screen bg-primary z-50 origin-right overflow-hidden"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
