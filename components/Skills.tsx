import Navbar from "./elements/Navbar";
import { SkillCard } from "./elements/SkillCard";
import { htmllogo } from "@/assets/Index";

const Skills = () => {
  return (
    <div id="skills">
      <Navbar />
      <div className="bg-day min-h-screen w-full flex flex-col justify-around items-start p-10">
        <h1 className=" pgHeading text-night my-7 px-10 ">
          Technologies I've acquired
        </h1>
        <div className=" h-full w-full flex justify-around items-center gap-10 ">
          {skills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

const skills = [
  {
    name: "Front - End",
    skills: [
      {
        img: htmllogo,
        name: "HTML",
      },
      {
        img: htmllogo,
        name: "CSS",
      },
      {
        img: htmllogo,
        name: "JavaScript",
      },
      {
        img: htmllogo,
        name: "TypeScript",
      },
      {
        img: htmllogo,
        name: "React.JS",
      },
      {
        img: htmllogo,
        name: "Next.JS",
      },
      {
        img: htmllogo,
        name: "Bootstrap",
      },
      {
        img: htmllogo,
        name: "TailwindCSS",
      },
      {
        img: htmllogo,
        name: "Framer Motion",
      },
      {
        img: htmllogo,
        name: "Three.JS",
      },
      {
        img: htmllogo,
        name: "GSAP",
      },
    ],
  },
  {
    name: "Back - End",
    skills: [
      {
        img: htmllogo,
        name: "Node.js",
      },
      {
        img: htmllogo,
        name: "Express",
      },
      {
        img: htmllogo,
        name: "SQL",
      },
      {
        img: htmllogo,
        name: "PostgreSQL",
      },
      {
        img: htmllogo,
        name: "TypeScript",
      },
      {
        img: htmllogo,
        name: "JavaScript",
      },
    ],
  },
  {
    name: "Databases",
    skills: [
      {
        img: htmllogo,
        name: "MongoDB",
      },
      {
        img: htmllogo,
        name: "Appwrite",
      },
      {
        img: htmllogo,
        name: "Sanity",
      },
      {
        img: htmllogo,
        name: "Firebase",
      },
      {
        img: htmllogo,
        name: "SupaBase",
      },
    ],
  },
  {
    name: "Others",
    skills: [
      {
        img: htmllogo,
        name: "C",
      },
      {
        img: htmllogo,
        name: "C++",
      },
      {
        img: htmllogo,
        name: "Python",
      },
      {
        img: htmllogo,
        name: "Java",
      },
      {
        img: htmllogo,
        name: "Docker",
      },
      {
        img: htmllogo,
        name: "Git",
      },
      {
        img: htmllogo,
        name: "GitHub",
      },
      {
        img: htmllogo,
        name: "Vs Code",
      },
      {
        img: htmllogo,
        name: "Stripe",
      },
      {
        img: htmllogo,
        name: "Vercel",
      },
      {
        img: htmllogo,
        name: "Netlify",
      },
      {
        img: htmllogo,
        name: "Figma",
      },
    ],
  },
];
