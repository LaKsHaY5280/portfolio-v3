"use client";
import { useEffect, useState } from "react";
import ExpTable from "./elements/ExpTable";
import Navbar from "./elements/Navbar";
import DotCursor from "./mousePointer/DotCursor";

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
      <div className="bg-night min-h-screen w-full flex flex-col justify-around items-start p-10">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className=" pgHeading text-day my-7 px-10 "
        >
          Where I've worked
        </h1>
        <div className=" w-full ">
          <ExpTable textEnter={textEnter} textLeave={textLeave} />
        </div>
      </div>
      <DotCursor variants={variants} cursorVariants={cursorVariant} />
    </div>
  );
};

export default Experience;
