"use client";
import { useEffect, useState } from "react";
import ExpTable from "./elements/ExpTable";
import Navbar from "./elements/Navbar";
import DotCursor from "./mousePointer/DotCursor";
import { fetchExpdata } from "@/constants";
import { exp } from "@/lib/types";

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

  const [exparr, setExparr] = useState<exp[]>([]);

  const loadData = async () => {
    const data = await fetchExpdata();
    setExparr(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const exp = exparr[0];

  return (
    <div>
      <Navbar />
      <div className="bg-night min-h-screen w-full h-full flex flex-col justify-center items-center p-5 lg:p-10 ">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className=" homeHeading text-day my-7 xl:pt-10 w-9/12 flex justify-start items-center "
        >
          <span>{exp?.heading || "Where I've worked"}</span>
        </h1>
        {exp?.card ? (
          <ExpTable
            card={exp.card}
            textEnter={textEnter}
            textLeave={textLeave}
          />
        ) : (
          <div className="text-day">Loading...</div>
        )}
      </div>
      <DotCursor variants={variants} cursorVariants={cursorVariant} />
    </div>
  );
};

export default Experience;

