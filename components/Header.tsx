"use client";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import Msg from "@/assets/Msg";
import SiteLoader from "@/components/elements/SiteLoader";

const Header = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.8 });

  useEffect(() => {
    if (isInView) {
      heroAnimation();
    }
  }, [isInView]);

  const heroAnimation = async () => {
    await animate("#logoBox", {
      x: [0, 0, 0],
      y: [0, 0, 100],
      opacity: 1,
      scaleY: [0, 1.2, 1],
      scaleX: [0, 1.2, 1],
    });
    await animate(
      "#logoBox",
      {
        x: [0, -400],
        y: [100, 100],
        opacity: 1,
      },
      {
        duration: 0.5,
        delay: 0.1,
      }
    );
    await animate(
      "#textBox",
      {
        x: 0,
        opacity: 1,
      },
      {
        duration: 1,
        delay: 0.5,
      }
    );
    animate(
      "#bgDiv",
      {
        backgroundColor: "#e4d6a7",
      },
      {
        duration: 1,
        delay: 0.5,
      }
    );
    animate(
      "#textBox",
      {
        color: "#090c08",
      },
      {
        duration: 1,
        delay: 0.5,
      }
    );
    animate(
      "#logoBoxP",
      {
        color: "#1C110A",
      },
      {
        duration: 1,
        delay: 0.5,
      }
    );
  };

  return (
    <div ref={scope}>
      <SiteLoader logo="L" />
      <motion.div
        id="textBox"
        className={` absolute text-day z-20 top-1/3 left-[40%] flex flex-col justify-betweeb items-start gap-10 overflow-hidden`}
        initial={{
          x: -100,
          y: 0,
          opacity: 0,
        }}
      >
        <div className=" flex justify-start items-center gap-3 text-4xl">
          <div className=" flex justify-center items-center">
            <Msg color={"#846c5b"} />
          </div>
          <p>
            Hi, I'm
            <span className=" font-['Santika'] text-primary underline decoration-secondary underline-offset-8">
              {" "}
              Lakshay Goyal
            </span>
          </p>
        </div>
        <div className=" text-2xl leading-10">
          A Web/App Developer who thrives in <span> problem solving </span> and
          captivity in <span> collaborative spaces</span>.
        </div>
        <div className=" text-lg">
          Currently an employee at (link arrow) LaungLaachi.
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
