import {
  htmllogo,
  ssbglg,
  github,
  insta,
  linkedin,
  mail,
  xlogo,
} from "@/assets/Index";

import { getAboutData, getContactData, getExpData, getHeaderData, getNavData, getProjData, getSkillsData } from "@/lib/actions";

export const fetchNavlinks = async () => {
  return await getNavData();
};

export const fetchHeaderdata = async () => {
  return await getHeaderData();
};

export const fetchAboutdata = async () => {
  return await getAboutData();
};

export const fetchExpdata = async () => {
  return await getExpData();
};

export const fetchSkillsData = async () => {
  return await getSkillsData();
};

export const fetchProjData = async () => {
  return await getProjData();
};

export const fetchContactData = async () => {
  return await getContactData();
};


export const defnavlinks = [
  {
    name: "Home",
    link: "/",
    id: "navLi1",
    animatedheight: 4,
  },
  {
    name: "About",
    link: "/#about",
    id: "navLi2",
    animatedheight: 6,
  },
  {
    name: "Experience",
    link: "/#experience",
    id: "navLi3",
    animatedheight: 8,
  },
  {
    name: "Skills",
    link: "/#skills",
    id: "navLi4",
    animatedheight: 10,
  },
  {
    name: "Projects",
    link: "/#projects",
    id: "navLi5",
    animatedheight: 12,
  },
  {
    name: "Contact",
    link: "/#contact",
    id: "navLi6",
    animatedheight: 14,
  },
];

export const defheader = {
  logo: "L",
  name: "Lakshay Goyal",
  designation: "Web/App Developer",
  hightlight1: "problem solving",
  hightlight2: "collaborative spaces",
  currentJob: {
    cjob: {
      companyName: "LaungLaachi",
      link: "https://launglaachi.co/",
    },
  },
};

export const exp = {
  heading: "Where I've worked",
  card: {
    caption: "My experienced marvels!!",
    tableTitles: ["When", "What", "For", "As", "See"],
    workDetails: [
      {
        years: "Present",
        projectName: "LaaungLaachi store",
        companyName: "LaaungLaachi",
        role: "Shopify developer",
        link: "https://launglaachi.co",
      },
      {
        years: "2023",
        projectName: "TodoBlitz",
        companyName: "BharatiQ",
        role: "Full-stack developer",
        link: "https://www.bharatiq.com/",
      },
      {
        years: "2023",
        projectName: "CuraHunt site",
        companyName: "CuraHunt",
        role: "Back-end developer",
        link: "https://futureforward5-lakshay5280.vercel.app/",
      },
      //   {
      //     years: "2023",
      //     projectName: "TaskForge",
      //     companyName: "-",
      //     role: "Full-stack developer",
      //     link: "https://www.bharatiq.com/",
      //   },
    ],
  },
};

export const langs = {
  name: "Languages",
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
      name: "Git",
    },
  ],
};

export const frontend = {
  name: "Front - End",
  skills: [
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
};

export const backend = {
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
};

export const others = {
  name: "Others",
  skills: [
    {
      img: htmllogo,
      name: "Docker",
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
};
export const skills = {
  heading: "Capabilities I've acquired",
  skills: [langs, frontend, backend, others],
};

// export const db = {
//   name: "Databases",
//   skills: [
//     {
//       img: htmllogo,
//       name: "MongoDB",
//     },
//     {
//       img: htmllogo,
//       name: "Appwrite",
//     },
//     {
//       img: htmllogo,
//       name: "Sanity",
//     },
//     {
//       img: htmllogo,
//       name: "Firebase",
//     },
//     {
//       img: htmllogo,
//       name: "SupaBase",
//     },
//   ],
// };



export const projects = {
  heading: "Wonders I've Made",
  projects: [
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
  ],
};

export const socials = [
  {
    name: "@Akuma._.Lakshay",
    link: "",
    icon: insta,
  },
  {
    name: "@LaKsHaY5280",
    link: "",
    icon: github,
  },
  {
    name: "@Akuma_Laku",
    link: "",
    icon: xlogo,
  },
  {
    name: "Lakshay Goyal",
    link: "",
    icon: linkedin,
  },
  {
    name: "lakugoyal1@gmail.com",
    link: "",
    icon: mail,
  },
];

export const contact = {
  heading: "Wanna have a cup of coffee☕...",
  subHeading: "Shoot me :-",
  left: "An Email Here",
  or: "OR",
  right: "A Dm at",
  socials: socials,
};

