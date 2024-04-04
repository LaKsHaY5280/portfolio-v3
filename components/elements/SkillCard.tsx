"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { BackgroundGradient } from "../ui/background-gradient";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface SkillCardProps {
  skill: {
    name: string;
    skills: {
      img: any;
      name: string;
    }[];
  };
}

export function SkillCard({ skill: { name, skills } }: SkillCardProps) {
  const [hovered, setHovered] = React.useState(false);

  let skillImgId = "skillImg";
  let skillNameId = "skillName";

  if (name === "Front - End") {
    skillImgId = "frontEndSkillsImg";
    skillNameId = "frontEndSkillsName";
  } else if (name == "Back - End") {
    skillImgId = "backEndSkillsImg";
    skillNameId = "backEndSkillsName";
  } else if (name == "Languages") {
    skillImgId = "databasesSkillsImg";
    skillNameId = "databasesSkillsName";
  } else if (name == "Others") {
    skillImgId = "othersSkillsImg";
    skillNameId = "othersSkillsName";
  }

  return (
    <BackgroundGradient
      className=" h-full"
      containerClassName=" h-full md:w-[40%] lg:w-[25%] xl:w-[20%]  "
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className=" h-full  flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black gap-4 mx-auto px-8 relative rounded-lg"
      >
        <div className=" w-full h-full flex flex-col justify-start items-center md:text-2xl font-medium text-day relative z-20 max-w-2xl mx-auto py-10 font-['Snow'] ">
          <p className=" aboutBody mb-5">{name}</p>
          <ScrollArea className="h-full w-full flex flex-col justify-around items-center pt-3 ">
            <ul className=" w-full h-full flex flex-col justify-around items-start gap-4 text-sm leading-[2rem] tracking-[0.2rem]">
              {skills.map((s, i) => (
                <li
                  key={i}
                  className=" w-full flex justify-center items-center pl-5"
                >
                  <motion.div
                    id={skillImgId}
                    initial={{ x: 100, opacity: 0, scaleX: 0, scaleY: 0 }}
                  >
                    <Image src={s.img} alt={s.name} width={40} />
                  </motion.div>
                  <motion.div
                    id={skillNameId}
                    initial={{ x: -100, opacity: 0 }}
                    className=" w-full flex flex-col justify-center items-center"
                  >
                    <motion.div className=" aboutBody">
                      {s.name}
                      <Separator className=" bg-day" />
                    </motion.div>
                  </motion.div>
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
