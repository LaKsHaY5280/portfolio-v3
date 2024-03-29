"use client";
import { motion } from "framer-motion";
import Msg from "@/assets/Msg";
import SiteLoader from "@/components/elements/SiteLoader";
import Navbar from "./elements/Navbar";
import { MoveUpRight } from "lucide-react";
import { header } from "@/constants";

const Header = () => {
  return (
    <div id="home">
      <Navbar />
      <SiteLoader logo={header.logo} />
      <motion.div
        id="textBox"
        className={` absolute text-day z-20 top-[30%] left-[40%] flex flex-col justify-betweeb items-start gap-10 overflow-hidden pr-28 h-fit pt-10 w-fit`}
        initial={{
          x: -100,
          y: 0,
          opacity: 0,
        }}
      >
        <div className=" h-full w-full flex justify-start items-center gap-3 text-4xl">
          <div className=" flex justify-center items-center">
            <Msg color={"#846c5b"} />
          </div>
          <p className=" w-full h-full flex justify-start items-center gap-4 text-6xl tracking-wider font-['Snow'] mt-2">
            Hi, I'm
            <span className=" font-['Santika'] text-primary underline decoration-secondary underline-offset-8">
              {header.name}
            </span>
          </p>
        </div>
        <p className=" text-4xl leading-[3.5rem] tracking-[0.3rem] font-['Snow']">
          A {header.designation} who thrives in
          <span className=" px-1 mx-1 relative whitespace-nowrap">
            {header.hightlight1}
            <motion.span
              id="highlight1"
              className=" absolute top-2 bottom-1 left-0 right-0 z-[-1]"
              initial={{
                right: 0,
                width: 0,
                height: "100%",
              }}
            />
          </span>
          and captivity in
          <span className=" px-1 mx-1 relative  whitespace-nowrap">
            {header.hightlight2}
            <motion.span
              id="highlight2"
              className=" absolute top-1 bottom-1 left-0 right-0 z-[-1]"
              initial={{
                right: 0,
                width: 0,
                height: "100%",
              }}
            />
          </span>
          .
        </p>
        <div className=" leading-[3.75rem] tracking-[0.2rem] font-['Snow'] text-2xl flex justify-start items-center gap-1">
          Currently an employee at
          <span>
            <a href={header.currentJob.link} target="blank">
              <MoveUpRight
                size={40}
                color="#846c5b"
                strokeWidth={4}
                absoluteStrokeWidth
              />
            </a>
          </span>
          {header.currentJob.name}.
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
