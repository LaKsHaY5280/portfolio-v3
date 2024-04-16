interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface navlinks {
  name: string;
  link: string;
  id: string;
  animatedheight: number;
}

export interface header {
  logo: string;
  name: string;
  designation: string;
  hightlight1: string;
  hightlight2: string;
  currentJob: {
    cjob: {
      companyName: string;
      link: string;
    };
  };
}

export interface about {
  headingp1: string;
  headingp2: string;
  headingp3: string;
  para1p1: string;
  para1h1: string;
  para1p2: string;
  para1h2: string;
  para1p3: string;
  para1h3: string;
  para1p4: string;
  parap2p1: string;
  parap2p2: string;
  para2p3: string;
  para3: string;
}

export interface exp {
  heading: string;
  card: {
    caption: string;
    tableTitles: string[];
    workDetails: {
      years: string;
      projectName: string;
      companyName: string;
      role: string;
      link: string;
    }[];
  };
}

export interface Skill {
  name: string;
  level: string;
  img: string;
}

export interface skills {
  heading: string;
  skillset: {
    skills: {
      name: string;
      skills: {
        skill: Skill;
      }[];
    }[];
  };
}

export interface Tech {
  skill: Skill;
}

export interface Project {
  tag: string;
  title: string;
  desc: string;
  role: [];
  software: [];
  tech: Tech[];
  live: string;
  github: string;
  img: Image[];
}

export interface Projects {
  heading: string;
  projects: Project[];
}

export interface Social {
  name: string;
  link: string;
  icon: Image;
}

export interface Contact {
  heading: string;
  subHeading: string;
  left: string;
  or: string;
  right: string;
  socials: Social[];
}
