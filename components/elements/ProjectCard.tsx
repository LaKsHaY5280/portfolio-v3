"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { ChevronRight, Github, SquareArrowOutUpRight } from "lucide-react";
import { StaticImageData } from "next/image";

interface ProjectCardProps {
  project: {
    id: number;
    tag: string;
    title: string;
    desc: string;
    role: { id: number; name: string }[];
    software: { id: number; name: string }[];
    tech: { id: number; name: string; designation: string; image: string }[];
    github: string;
    live: string;
    img: { id: number; src: StaticImageData; alt: string }[];
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { id, tag, title, desc, role, software, tech, github, live, img } =
    project;

  const isEvenIdx = id % 2 === 0;

  return (
    <div
      className={` bg-night h-full w-full flex ${
        isEvenIdx ? "flex-row-reverse" : "flex-row"
      } justify-around items-center gap-0 `}
    >
      <div
        className={` ${
          isEvenIdx ? "mr-10" : "ml-10"
        } w-1/2 h-full my-20 text-xl leading-[2.27rem] tracking-[0.15rem] font-['Snow'] text-day `}
      >
        <div className=" py-5 h-full w-full dark:bg-black bg-secondary  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center">
          <p className=" absolute z-20 -top-10 left-0 px-5 text-lg leading-[2.27rem] tracking-[0.15rem] font-['Santika'] ">
            #{id} {tag}
          </p>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center da rk:bg-black bg-secondary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className=" z-20 bg-clip-text text-transparent bg-gradient-to-b from-day to-primary h-full w-full flex flex-col justify-around items-start gap-5 px-10 py-5">
            <h2 className=" font-bold text-3xl">{title}</h2>
            <p className=" text-lg leading-[2.27rem] tracking-[0.15rem] ">
              {desc}
            </p>
            <div className=" -mt-3 text-sm font-bold leading-[2.27rem] tracking-[0.15rem] flex justify-around items-center gap-5">
              {role.map((role) => (
                <span
                  key={role.id}
                  className="px-4 py-2 border border-night bg-transparent text-night  dark:border-white relative group transition duration-200"
                >
                  <span className="absolute -bottom-2 -right-2 bg-day h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                  <span className="relative">{role.name}</span>
                </span>
              ))}
            </div>
            <p className=" h-full w-full flex justify-start items-center gap-3 mt-3">
              {software.map((software) => (
                <span className="  h-full flex justify-start items-center ">
                  <ChevronRight
                    size={32}
                    color="#846c5b"
                    strokeWidth={3}
                    absoluteStrokeWidth
                  />
                  <span>{software.name}</span>
                </span>
              ))}
            </p>
          </div>
          <div className=" absolute z-20 -bottom-32 left-0 right-0 flex justify-between items-center mx-5 my-10 w-full">
            <div className=" flex items-center">
              <AnimatedTooltip items={project.tech} />
            </div>
            <div className=" flex justify-between items-center gap-10 mr-28">
              <a href={github}>
                <Github
                  size={32}
                  color="#846c5b"
                  strokeWidth={2}
                  absoluteStrokeWidth
                />
              </a>
              <a href={live}>
                <SquareArrowOutUpRight
                  size={32}
                  color="#846c5b"
                  strokeWidth={2}
                  absoluteStrokeWidth
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[45%] h-full flex justify-between items-center gap-10">
        <InfiniteMovingCards
          items={img}
          direction={isEvenIdx ? "right" : "left"}
          speed="slow"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
