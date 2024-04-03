"use client";
import { useEffect, useState } from "react";
import ExpTable from "./elements/ExpTable";
import Navbar from "./elements/Navbar";
import DotCursor from "./mousePointer/DotCursor";
import { exp } from "@/constants";

const Experience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 50,
      width: 50,
      backgroundColor: "#e4d6a7",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div>
      <Navbar />
      <div className="bg-night min-h-screen w-full h-full flex flex-col justify-center items-start p-5 lg:p-10 ">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className=" homeHeading text-day my-7 xl:pt-10 w-full flex justify-center items-center "
        >
          <span>{exp.heading}</span>
        </h1>
        {/* <div className=" w-full h-full "> */}
        <ExpTable card={exp.card} textEnter={textEnter} textLeave={textLeave} />
        {/* </div> */}
      </div>
      <DotCursor variants={variants} cursorVariants={cursorVariant} />
    </div>
  );
};

export default Experience;

