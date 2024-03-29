import { skills } from "@/constants";
import Navbar from "./elements/Navbar";
import { SkillCard } from "./elements/SkillCard";

const Skills = () => {
  return (
    <div id="skills">
      <Navbar />
      <div className="bg-day min-h-screen w-full flex flex-col justify-around items-start p-10">
        <h1 className=" pgHeading text-night my-7 px-10 ">{skills.heading}</h1>
        <div className=" h-full w-full flex justify-around items-center gap-10 ">
          {skills.skills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
