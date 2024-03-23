"use client";
import { motion } from "framer-motion";

const Navbar = () => {
  const liClasses =
    "bg-secondary flex justify-center items-end pb-2 w-32 border border-primary border-t-0 text-xl leading-[3rem] tracking-[0.1rem] font-['Snow'] text-day";

  return (
    <div className=" absolute z-20 right-0 ">
      <nav className=" w-full">
        <ul className=" w-full flex justify-end items-start  ">
          <motion.li
            id="navLi1"
            className={` ${liClasses} h-[4rem] `}
            initial={{
              y: -200,
            }}
          >
            <a href="#home">Home</a>
          </motion.li>
          <motion.li
            id="navLi2"
            className={` ${liClasses} h-[6rem] `}
            initial={{
              y: -200,
            }}
          >
            <a href="#about">About</a>
          </motion.li>
          <motion.li
            id="navLi3"
            className={` ${liClasses} h-[8rem] `}
            initial={{
              y: -200,
            }}
          >
            <a href="#">Experience</a>
          </motion.li>
          <motion.li
            id="navLi4"
            className={` ${liClasses} h-[10rem] `}
            initial={{
              y: -200,
            }}
          >
            <a href="#">Skills</a>
          </motion.li>
          <motion.li
            id="navLi5"
            className={` ${liClasses} h-[12rem] `}
            initial={{
              y: -200,
            }}
          >
            <a href="#">Project</a>
          </motion.li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
