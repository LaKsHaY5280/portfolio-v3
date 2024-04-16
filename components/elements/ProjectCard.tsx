"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { ChevronRight, Github, SquareArrowOutUpRight } from "lucide-react";
import { StaticImageData } from "next/image";
import { Skill, Tech } from "@/lib/types";

interface ProjectCardProps {
  idx: number;
  project: {
    tag: string;
    title: string;
    desc: string;
    role: [];
    software: [];
    tech: Tech;
    github: string;
    live: string;
    img: { src: StaticImageData; alt: string }[];
  };
}

const ProjectCard = ({ idx, project }: ProjectCardProps) => {
  const { tag, title, desc, role, software, tech, github, live, img } = project;

  // console.log(img);

  const isEvenIdx = idx % 2 === 0;

  return (
    <div
      className={` bg-night h-full w-full flex ${
        isEvenIdx ? "flex-row-reverse" : "flex-row "
      } max-xl:flex-col-reverse justify-around items-center gap-0 `}
    >
      <div
        className={` ${
          isEvenIdx ? "mr-10" : "lg:ml-10"
        } w-4/5 xl:w-1/2 h-full text-xl leading-[2.27rem] tracking-[0.15rem] font-['Snow'] text-day `}
      >
        <div className=" my-14 py-5 h-full w-full dark:bg-black bg-secondary  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center">
          <p className=" absolute z-20 -top-10 left-0 px-5 projIndx font-['Santika'] ">
            #{idx} {tag}
          </p>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center da rk:bg-black bg-secondary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className=" z-20 bg-clip-text text-transparent bg-gradient-to-b from-day to-primary h-full w-full flex flex-col justify-around items-start gap-5 px-10 py-5">
            <h2 className=" font-bold homeBody">{title}</h2>
            <p className=" homeCaption ">{desc}</p>
            <div className=" -mt-3 text-sm font-bold leading-[2.27rem] tracking-[0.15rem] flex flex-wrap justify-around items-center gap-5">
              {role.map((role, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 border border-night bg-transparent text-night  dark:border-white relative group transition duration-200"
                >
                  <span className="absolute -bottom-2 -right-2 bg-day h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                  <span className="relative homeCaption">{role}</span>
                </span>
              ))}
            </div>
            <p className=" h-full w-full flex flex-wrap justify-start items-center gap-3 mt-3">
              {software.map((software, idx) => (
                <span
                  key={idx}
                  className="  h-full flex justify-start items-center homeCaption "
                >
                  <ChevronRight
                    size={32}
                    color="#846c5b"
                    strokeWidth={3}
                    absoluteStrokeWidth
                  />
                  <span>{software}</span>
                </span>
              ))}
            </p>
          </div>
          <div className=" absolute z-20 -bottom-32 left-0 w-full flex justify-between items-center mx-5 pr-10 my-10 ">
            <div className=" w-full flex flex-wrap justify-between items-center gap-10">
              <div className=" flex items-center">
                {tech ? <AnimatedTooltip items={[tech]} /> : <div>Loading</div>}
              </div>
              <div className=" flex justify-between items-center gap-10 ">
                <a href={github}>
                  <Github
                    color="#846c5b"
                    width={25}
                    strokeWidth={2}
                    absoluteStrokeWidth
                  />
                </a>
                <a href={live}>
                  <SquareArrowOutUpRight
                    width={25}
                    color="#846c5b"
                    strokeWidth={2}
                    absoluteStrokeWidth
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" xl:w-[45%] h-full flex justify-between items-center gap-10">
        <InfiniteMovingCards
          id={idx}
          items={img}
          direction={isEvenIdx ? "right" : "left"}
          speed="normal"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
