import { client } from "./sanity";
import { about, exp, header, navlinks, skills } from "./types";

export const getNavData = async () => {
  const query = `*[_type == "navlinks"]{
            "navlinks": navlinks[]{
                name,
                link,
                id,
                animatedheight
            }
        }
        `;

  return (await client.fetch(query)) as navlinks[];
};

export const getHeaderData = async () => {
  const query = `*[_type == "header"][0]{
    logo,
    name,
    designation,
    hightlight1,
    hightlight2,
    currentJob{
        cjob->{
          companyName,
          link
        }
    }
    }
    `;

  return (await client.fetch(query)) as header;
};

export const getAboutData = async () => {
  const query = `*[_type == "about"][0]{
    headingp1,
    headingp2,
    headingp3,
    para1p1,
    para1p2,
    para1p3,
    para1p4,
    para2p3,
    para3,
    para1h1,
    para1h2,
    para1h3,
    }   
    `;

  return (await client.fetch(query)) as about;
};

export const getExpData = async () => {
  const query = `*[_type == "experience"]{
    heading,
    card{
      caption,
      tableTitles,
      workDetails[]->{
        years,
        projectName,
        CompanyName,
        link,
        role
      }
    }
  }
    `;

  return (await client.fetch(query)) as exp;
};

export const getSkillsData = async () => {
  const query = `*[_type == "skills"][0]{
    heading,
    skillset{
      skills[]->{
        name,
        skills[]->{
        skill{
        name,
        level,
        img
        }
        }
      }
    }
  }
    `;

  return (await client.fetch(query)) as skills;
};

export const getProjData = async () => {
  const query = `*[_type == "projects"][0]{
    heading,
    projects[]->{
      tag,
      title,
      desc,
      role[],
      software[],
      tech[]->{
      skill{
      name,
      level,
      img
      }
      },
      live,
      github,
      img
    }
  }
    `;

  return await client.fetch(query);
};

export const getContactData = async () => {
  const query = `*[_type == "contact"][0]{
    heading,
    subHeading,
    left,    
    or,
    right,
    socials[]->{
      name,
      link,
      icon
    }
  }
    `;

  return await client.fetch(query);
};
