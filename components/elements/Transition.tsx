"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const Transition = ({ children }: { children: React.ReactNode }) => {
  useEffect;

  return (
    <AnimatePresence mode="wait">
      <motion.div className=" overflow-hidden">
        {children}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className=" absolute top-0 left-0 w-2/4 h-screen bg-primary z-50 origin-left overflow-hidden"
        />
        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className=" absolute top-0 right-0 w-2/4  h-screen bg-primary z-50 origin-right overflow-hidden"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
