"use client";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import Msg from "@/assets/Msg";
import SiteLoader from "@/components/elements/SiteLoader";
import Arrow from "@/assets/Arrow";
import Navbar from "./elements/Navbar";

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
        backgroundColor: "#e4d6a7", //day
      },
      {
        duration: 1,
        delay: 0.5,
      }
    );
    animate(
      "#textBox",
      {
        color: "#090c08", //night
      },
      {
        duration: 1,
        delay: 0.5,
      }
    );
    await animate(
      "#logoBoxP",
      {
        color: "#1C110A", //secondary
      },
      {
        duration: 1,
        delay: 0.5,
      }
    );
    animate(
      "#highlight1",
      {
        backgroundColor: "#846c5b", //primary
        right: "100%",
        width: "100%",
        height: "100%",
      },
      {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      }
    );
    await animate(
      "#highlight2",
      {
        backgroundColor: "#846c5b", //primary
        right: "100%",
        width: "100%",
        height: "100%",
      },
      {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      }
    );
    animate(
      "#navLi1",
      {
        backgroundColor: "#1C110A", //secondary
        y: 0,
      },
      {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      }
    );
    animate(
      "#navLi2",
      {
        backgroundColor: "#1C110A", //secondary
        y: 0,
      },
      {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      }
    );
    animate(
      "#navLi3",
      {
        backgroundColor: "#1C110A", //secondary
        y: 0,
      },
      {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      }
    );
    animate(
      "#navLi4",
      {
        backgroundColor: "#1C110A", //secondary
        y: 0,
      },
      {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      }
    );
    animate(
      "#navLi5",
      {
        backgroundColor: "#1C110A", //secondary
        y: 0,
      },
      {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      }
    );
  };

  return (
    <div ref={scope} id="home">
      <Navbar />
      <SiteLoader logo="L" />
      <motion.div
        id="textBox"
        className={` absolute text-day z-20 top-[30%] left-[40%] flex flex-col justify-betweeb items-start gap-10 overflow-hidden pr-28`}
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
          <p className=" text-6xl tracking-wider font-['Snow'] mt-2">
            Hi, I'm{" "}
            <span className=" font-['Santika'] text-primary underline decoration-secondary underline-offset-8">
              Lakshay Goyal
            </span>
          </p>
        </div>
        <p className=" text-4xl leading-[3.5rem] tracking-[0.3rem] font-['Snow']">
          A Web/App Developer who thrives in
          <span className=" px-1 mx-1 relative">
            problem solving
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
          <span className=" px-1 mx-1 relative">
            collaborative spaces
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
          Currently an employee at{" "}
          <span className=" -rotate-45 text-4xl">
            <Arrow />
          </span>{" "}
          LaungLaachi.
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
