import Navbar from "./elements/Navbar";
import ProjectCard from "./elements/ProjectCard";
import { ScrollArea } from "./ui/scroll-area";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <div id="projects" className=" overflow-hidden">
      <Navbar />
      <div className=" bg-night h-full w-full flex flex-col justify-center items-center pt-10 px-2 pb-2 overflow-hidden">
        <h1 className=" homeHeading text-day mb-7 px-10 lg:pt-16 w-9/12 flex justify-start items-center ">
          <span>{projects.heading}</span>
        </h1>
        {/* <ScrollArea className=" h-[45rem] w-full rounded-md boder flex flex-col justify-around items-center gap-10 overflow-hidden "> */}
        <div className=" h-full w-full flex flex-col justify-center items-center gap-32 xl:gap-10 pb-14 ">
          {projects.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* </ScrollArea> */}
      </div>
    </div>
  );
};

export default Projects;
