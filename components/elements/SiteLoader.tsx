"use client";
import { motion } from "framer-motion";

interface SiteLoaderProps {
  logo: string;
}

const SiteLoader = ({ logo }: SiteLoaderProps) => {
  return (
    <div
      id="bgDiv"
      className={` w-full h-screen absolute bg-night z-10 overflow-hidden`}
    >
      <motion.div
        initial={{
          x: 0,
          y: 0,
          opacity: 0,
          scaleY: 0,
          scaleX: 0,
        }}
        id="logoBox"
        className=" w-full h-full flex justify-center items-center overflow-hidden"
      >
        <p
          id="logoBoxP"
          className={` font-['Santika'] text-day text-6xl w-full h-full flex justify-center items-center text-[40rem] overflow-hidden`}
        >
          {logo}
        </p>
      </motion.div>
    </div>
  );
};

export default SiteLoader;
