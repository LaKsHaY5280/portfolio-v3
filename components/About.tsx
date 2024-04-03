import Image from "next/image";
import Navbar from "./elements/Navbar";
import { ssbg } from "@/assets/Index";
import { about } from "@/constants";



const About = () => {
  return (
    <div id="about">
      <Navbar />
      <div className=" bg-night relative h-screen flex justify-end items-center">
        <div className=" absolute -z-10">
          {/* <Image src={ssbg} alt="ssbg" /> */}
        </div>
        <div className=" homeHeading text-day xl:w-8/12 xl:h-full pb-10 xl:flex flex-col justify-end items-center max-md:pt-32 ">
          <h2 className=" font-bold mx-10">
            <span>{about.headingp1}</span>
            <span className=" text-primary font-['Santika']">
              {" "}
              {about.headingp2}{" "}
            </span>
            <span>{about.headingp3}</span>
          </h2>
          <div className=" aboutBody ">
            <p className="mt-5 mx-10 ">
              {about.para1p1}
              <span className=" text-primary">{about.para1h1}</span>
              {about.para1p2}
              <span className=" text-primary">{about.para1h2}</span>
              {about.para1p3}
              <span className=" text-primary">{about.para1h3}</span>
              {about.para1p4}
            </p>
            {/* <p className="mt-5 mx-10 ">
              {about.parap2p1}
              <span className=" font-['Santika']">{about.parap2p2}</span>
              {about.para2p3}
            </p> */}
            <p className="mt-5 mx-10 ">{about.para3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
