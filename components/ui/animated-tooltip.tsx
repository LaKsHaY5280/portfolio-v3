"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Skill } from "@/lib/types";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    skill: Skill;
  }[][];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const flattenedItems = items.flat();

  return (
    <>
      {flattenedItems.map((item, idx) => {
        const { name, level, img } = item.skill;
        return (
          <div
            className="  relative group"
            key={name}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-primary to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-day to-transparent h-px " />
                <div className="font-bold text-Day relative z-30 text-base mb-2">
                  {name}
                </div>
                <div className="text-primary text-xs">{level}</div>
              </motion.div>
            )}
            {/* <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={img}
            alt={name}
            className="object-cover !m-0 !p-0 object-top  h-14 w-14 group-hover:scale-105 group-hover:z-30   relative transition duration-500 max-lg:w-10 max-lg:h-10"
          /> */}
          </div>
        );
      })}
    </>
  );
};
