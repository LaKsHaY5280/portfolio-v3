import { fetchProjData } from "@/constants";
import Navbar from "./elements/Navbar";
import ProjectCard from "./elements/ProjectCard";
import { useEffect, useState } from "react";
import { Projects as ProjectsType } from "@/lib/types";

const Projects = () => {
  const [projdata, setProjdata] = useState<ProjectsType | undefined>();

  const loadData = async () => {
    const data = await fetchProjData();
    setProjdata(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Check if aboutdata is available before rendering
  if (!projdata) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  const projects = projdata as ProjectsType;

  return (
    <div id="projects" className=" overflow-hidden">
      <Navbar />
      <div className=" bg-night h-full w-full flex flex-col justify-center items-center pt-10 px-2 pb-16 overflow-hidden">
        <h1 className=" homeHeading text-day mb-7 px-10 lg:pt-16 w-9/12 flex justify-start items-center ">
          <span>{projects.heading}</span>
        </h1>
        <div className=" h-full w-full flex flex-col justify-center items-center gap-32 xl:gap-10 mb-14 ">
          {projects.projects.map((project, i) => (
            <ProjectCard key={i} idx={i + 1} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
