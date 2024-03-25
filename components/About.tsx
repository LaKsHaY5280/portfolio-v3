import Image from "next/image";
import Navbar from "./elements/Navbar";
import { ssbg } from "@/assets/Index";

const About = () => {
  return (
    <div id="about">
      <Navbar />
      <div className=" relative h-screen flex justify-end items-center">
        <div className=" absolute -z-10">
          {/* image */}
          <Image src={ssbg} alt="ssbg" />
        </div>

        <div className=" text-day w-7/12 font-['Snow'] mt-28 ">
          <h2 className="text-5xl leading-[3.5rem] tracking-[0.2rem] font-bold text-center ">
            Welcome to my
            <span className=" text-primary font-['Santika']"> ꙳ little ꙳ </span>
            corner of the internet.
          </h2>
          <div className=" text-3xl leading-[2rem] tracking-[0.13rem] text-center">
            <p className="mt-5 mx-10 ">
              I'm a <span className=" text-primary"> full-stack </span>developer
              with a passion for creating beautiful and functional websites. I
              have made many projects where some of them are
              <span className=" text-primary"> personal projects </span>
              while some are industry grade well polished
              <span className=" text-primary"> SaaS </span> and I am always
              looking for new challenges.
            </p>
            <p className="mt-5 mx-10 ">
              At the end of <span className=" font-['Santika']">10</span>th
              grade I started learning web development and I have been hooked
              ever since. While I had no idea at the time, I now know that being
              a developer means thinking outside the frame.
            </p>
            <p className="mt-5 mx-10 ">
              Ready for a digital adventure? Reach out with your questions or
              requirements, and let's bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
