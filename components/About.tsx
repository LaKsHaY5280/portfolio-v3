import Image from "next/image";
import Navbar from "./elements/Navbar";
import { ssbg } from "@/assets/Index";
import { about } from "@/constants";



const About = () => {
  return (
    <div id="about">
      <Navbar />
      <div className=" relative h-screen flex justify-end items-center">
        <div className=" absolute -z-10">
          <Image src={ssbg} alt="ssbg" />
        </div>
        <div className=" text-day w-7/12 font-['Snow'] mt-28 ">
          <h2 className=" pgHeading font-bold mx-10">
            {about.headingp1}
            <span className=" text-primary font-['Santika']">
              {" "}
              {about.headingp2}{" "}
            </span>
            {about.headingp3}
          </h2>
          <div className=" text-xl leading-[2.27rem] tracking-[0.15rem] ">
            <p className="mt-5 mx-10 ">
              {about.para1p1}
              <span className=" text-primary">{about.para1h1}</span>
              {about.para1p2}
              <span className=" text-primary">{about.para1h2}</span>
              {about.para1p3}
              <span className=" text-primary">{about.para1h3}</span>
              {about.para1p4}
            </p>
            <p className="mt-5 mx-10 ">
              {about.parap2p1}
              <span className=" font-['Santika']">{about.parap2p2}</span>
              {about.para2p3}
            </p>
            <p className="mt-5 mx-10 ">{about.para3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
