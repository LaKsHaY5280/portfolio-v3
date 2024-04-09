import { fetchSkillsData } from "@/constants";
import Navbar from "./elements/Navbar";
import { SkillCard } from "./elements/SkillCard";
import { skills } from "@/lib/types";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skilldata, setSkilldata] = useState<skills | undefined>();

  const loadData = async () => {
    const data = await fetchSkillsData();
    setSkilldata(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Check if aboutdata is available before rendering
  if (!skilldata) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  const skills = skilldata as skills;

  return (
    <div id="skills">
      <Navbar />
      <div className="bg-day min-h-screen w-full flex flex-col justify-center items-center p-10">
        <h1 className=" homeHeading text-night my-7 lg:pt-16 w-9/12 flex justify-start items-center ">
          <span>{skills.heading}</span>
        </h1>
        <div className=" h-full w-full flex flex-wrap justify-around items-start gap-10 ">
          {skills.skillset.skills
            ? skills.skillset.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Skills;
