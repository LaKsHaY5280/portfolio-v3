import { htmllogo, ssbglg } from "@/assets/Index";
import Navbar from "./elements/Navbar";
import ProjectCard from "./elements/ProjectCard";
import { ScrollArea } from "./ui/scroll-area";

const Projects = () => {
  return (
    <div id="projects" className=" overflow-hidden">
      <Navbar />
      <div className=" bg-night max-h-screen w-full flex flex-col justify-around items-start pt-10 px-2 pb-2 overflow-hidden">
        <h1 className=" pgHeading text-day mb-7 px-10 ">Wonders I've made</h1>
        <ScrollArea className=" h-[45rem] w-full rounded-md boder flex flex-col justify-around items-center gap-10 overflow-hidden ">
          <div className=" h-full w-full flex flex-col justify-center items-center gap-10 pb-14">
            {/* <ProjectCard /> */}
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Projects;

const projects = [
  {
    id: 1,
    tag: "My Portfolio",
    title: "Portfolio",
    desc: "A simple portfolio website to showcase my projects and skills.Built using React, Tailwind CSS, and Framer Motion.A simple, cleanand responsive one page portfolio template for developers.",
    role: [
      {
        id: 1,
        name: "Developer",
      },
      {
        id: 2,
        name: "Designer",
      },
    ],
    software: [
      {
        id: 1,
        name: "Website",
      },
      {
        id: 2,
        name: "Android app",
      },
    ],

    tech: [
      {
        id: 1,
        name: "HTML",
        designation: "Advance",
        image: htmllogo,
      },
    ],
    github: "Github",
    live: "Live",
    img: [
      {
        id: 1,
        src: ssbglg,
        alt: "Portfolio",
      },
    ],
  },
  {
    id: 2,
    tag: "My Portfolio",
    title: "Portfolio",
    desc: "A simple portfolio website to showcase my projects and skills.Built using React, Tailwind CSS, and Framer Motion.A simple, cleanand responsive one page portfolio template for developers.",
    role: [
      {
        id: 1,
        name: "Developer",
      },
      {
        id: 2,
        name: "Designer",
      },
    ],
    software: [
      {
        id: 1,
        name: "Website",
      },
      {
        id: 2,
        name: "Android app",
      },
    ],

    tech: [
      {
        id: 1,
        name: "HTML",
        designation: "Advance",
        image: htmllogo,
      },
    ],
    github: "Github",
    live: "Live",
    img: [
      {
        id: 1,
        src: ssbglg,
        alt: "Portfolio",
      },
    ],
  },
  {
    id: 3,
    tag: "My Portfolio",
    title: "Portfolio",
    desc: "A simple portfolio website to showcase my projects and skills.Built using React, Tailwind CSS, and Framer Motion.A simple, cleanand responsive one page portfolio template for developers.",
    role: [
      {
        id: 1,
        name: "Developer",
      },
      {
        id: 2,
        name: "Designer",
      },
    ],
    software: [
      {
        id: 1,
        name: "Website",
      },
      {
        id: 2,
        name: "Android app",
      },
    ],

    tech: [
      {
        id: 1,
        name: "HTML",
        designation: "Advance",
        image: htmllogo,
      },
    ],
    github: "Github",
    live: "Live",
    img: [
      {
        id: 1,
        src: ssbglg,
        alt: "Portfolio",
      },
    ],
  },
];
