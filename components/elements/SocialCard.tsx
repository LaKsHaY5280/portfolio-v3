"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { BackgroundGradient } from "../ui/background-gradient";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Social } from "@/lib/types";
import dynamic from "next/dynamic";

const DynamicMotionImg = dynamic(() => import("./dynimg"), {
  ssr: false,
});

interface SocialCardProps {
  heading: string;
  socials: Social[];
}

export function SocialCard({ heading, socials }: SocialCardProps) {
  const [hovered, setHovered] = React.useState(false);

  let socialImgId = "socialImg";
  let socialNameId = "socialName";

  return (
    <BackgroundGradient>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className=" h-full flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative rounded-lg"
      >
        <div className=" w-full h-full flex flex-col justify-start items-center md:text-2xl font-medium text-day relative z-20 max-w-2xl mx-auto py-10 ">
          <p className=" homeBody mb-5"> {heading} </p>
          <ScrollArea className="h-full w-full flex flex-col justify-around items-center pt-3 ">
            <ul className=" w-full h-full flex flex-col justify-around items-start gap-4 aboutBody">
              {socials.map((s, i) => (
                <li
                  key={i}
                  className=" w-full flex justify-center items-center p-3 pl-5"
                >
                  <Link
                    href={s.link}
                    className=" w-full flex justify-center items-center gap-5"
                  >
                    <motion.div
                      id={socialImgId}
                      initial={{ x: 100, opacity: 0, scaleX: 0, scaleY: 0 }}
                    >
                      <DynamicMotionImg sr={s.icon} width={50} />
                    </motion.div>
                    <motion.div
                      id={socialNameId}
                      initial={{ x: -100, opacity: 0 }}
                      className=" w-2/4 flex flex-col justify-center items-center"
                    >
                      <motion.div className=" text-xl font-['Santika']">
                        {s.name}
                        <Separator className=" bg-day" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [105, 103, 115],
                [132, 108, 91],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={6}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      </div>
    </BackgroundGradient>
  );
}
