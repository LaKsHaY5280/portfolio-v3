import { skills } from "@/constants";
import Navbar from "./elements/Navbar";
import { SkillCard } from "./elements/SkillCard";

const Skills = () => {
  return (
    <div id="skills">
      <Navbar />
      <div className="bg-day min-h-screen w-full flex flex-col justify-center items-center p-10">
        <h1 className=" homeHeading text-night my-7 lg:pt-16 w-9/12 flex justify-start items-center ">
          <span>{skills.heading}</span>
        </h1>
        <div className=" h-full w-full flex flex-wrap justify-around items-start gap-10 ">
          {skills.skills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
