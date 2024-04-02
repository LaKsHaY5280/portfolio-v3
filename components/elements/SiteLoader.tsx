"use client";
import { motion } from "framer-motion";

interface SiteLoaderProps {
  logo: string;
}

const SiteLoader = ({ logo }: SiteLoaderProps) => {
  return (
    <div
      id="bgDiv"
      className={` w-full lg:h-screen xl:absolute bg-night z-10 xl:overflow-hidden `}
    >
      <div className=" w-full h-full flex justify-center items-center max-lg:pt-[20rem]">
        <motion.div
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            scaleY: 0,
            scaleX: 0,
          }}
          id="logoBox"
          layout="size"
          className=" w-fit h-fit flex justify-center items-center overflow-hidden max-xl:hidden"
        >
          <p
            id="logoBoxP"
            className={` h-full w-full font-['Santika'] text-day flex justify-center items-center text-[35rem] overflow-hidden max-lg:text-[30rem] max-lg:ml-20 max-xl:text-[35rem]`}
          >
            {logo}
          </p>
        </motion.div>

        <motion.div
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            scaleY: 0,
            scaleX: 0,
          }}
          animate={{
            x: [0, 0, 0, 0, -300],
            y: [0, 0, 100],
            opacity: 1,
            scaleY: [0, 1.2, 1],
            scaleX: [0, 1.2, 1],
          }}
          // id="logoBox"
          layout="size"
          className=" w-fit h-fit flex justify-center items-center overflow-hidden max-lg:hidden xl:hidden"
        >
          <p
            id="logoBoxP"
            className={` h-full w-full font-['Santika'] text-day flex justify-center items-center text-[35rem] overflow-hidden max-lg:text-[30rem] max-lg:ml-20 max-xl:text-[35rem]`}
          >
            {logo}
          </p>
        </motion.div>

        <motion.div
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            scaleY: 0,
            scaleX: 0,
          }}
          animate={{
            x: [0, 0, 0],
            y: [0, 0, 100],
            opacity: 1,
            scaleY: [0, 1.2, 1],
            scaleX: [0, 1.2, 1],
          }}
          // id="logoBox"
          layout="size"
          className=" w-fit h-fit flex justify-center items-center overflow-hidden lg:hidden"
        >
          <p
            id="logoBoxP"
            className={` h-full w-full font-['Santika'] text-day flex justify-center items-center text-[35rem] overflow-hidden max-lg:text-[30rem] max-xl:text-[35rem]`}
          >
            {logo}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SiteLoader;
