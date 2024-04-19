import {
  getAboutData,
  getContactData,
  getExpData,
  getHeaderData,
  getNavData,
  getProjData,
  getSkillsData,
  getSocialData,
} from "@/lib/actions";

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
export const fetchSocialData = async () => {
  return await getSocialData();
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
    link: "/about",
    id: "navLi2",
    animatedheight: 6,
  },
  {
    name: "Experience",
    link: "/experience",
    id: "navLi3",
    animatedheight: 8,
  },
  {
    name: "Skills",
    link: "/skills",
    id: "navLi4",
    animatedheight: 10,
  },
  {
    name: "Projects",
    link: "/projects",
    id: "navLi5",
    animatedheight: 12,
  },
  {
    name: "Contact",
    link: "/contact",
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
