"use client";
import { motion } from "framer-motion";
import Msg from "@/assets/Msg";
import SiteLoader from "@/components/elements/SiteLoader";
import Navbar from "./elements/Navbar";
import { MoveUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { header } from "@/lib/types";
import { defheader, fetchHeaderdata } from "@/constants";
import Link from "next/link";

const Header = () => {
  const [headerarr, setHeaderarr] = useState<header>(defheader);

  const loadData = async () => {
    const data = await fetchHeaderdata();
    setHeaderarr(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const header = headerarr;

  return (
    <div id="home">
      <Navbar />
      <div
        id="bgDiv"
        className=" w-full h-full flex justify-center items-start bg-night "
      >
        <SiteLoader logo={header.logo} />
        <motion.div
          id="textBox"
          className={` absolute text-day z-20 top-[30%] left-[40%] flex flex-col justify-betweeb items-start gap-10 pr-28 h-fit pt-10 w-fit max-xl:top-[20%] max-xl:left-[40%] max-xl:right-[2%] max-lg:top-10 max-lg:left-10 `}
          initial={{
            x: -100,
            y: 0,
            opacity: 0,
          }}
        >
          <div className=" homeHeading h-full w-full flex justify-start items-center gap-3">
            <div className=" flex justify-center items-center">
              <Msg color={"#846c5b"} />
            </div>
            <p className=" w-full h-full flex max-lg:flex-col justify-start lg:items-center gap-4 font-['Snow'] mt-2">
              <span>Hi, I'm</span>
              <span className=" font-['Santika'] text-primary underline decoration-secondary underline-offset-8">
                {header.name}
              </span>
            </p>
          </div>
          <p className=" homeBody ">
            A {header.designation} who thrives in
            <span className=" px-1 mx-1 relative whitespace-nowrap">
              {header.hightlight1}
              <motion.span
                id="highlight"
                className=" absolute top-2 bottom-1 left-0 right-0 z-[-1]"
                initial={{
                  right: 0,
                  width: 0,
                  height: "100%",
                }}
              />
            </span>
            and captivity in
            <span className=" px-1 mx-1 relative  whitespace-nowrap">
              {header.hightlight2}
              <motion.span
                id="highlight"
                className=" absolute top-1 bottom-1 left-0 right-0 z-[-1]"
                initial={{
                  right: 0,
                  width: 0,
                  height: "100%",
                }}
              />
            </span>
            .
          </p>
          <p className=" homeCaption flex max-lg:flex-col justify-start lg:items-center gap-1">
            <span>Currently an employee at</span>
            <span className=" flex justify-start items-center gap-2">
              <Link href={header.currentJob.cjob.link} target="blank">
                <MoveUpRight
                  className=" xl:w-10 xl:h-10"
                  color="#846c5b"
                  strokeWidth={2}
                  absoluteStrokeWidth
                />
              </Link>
              <span>{header.currentJob.cjob.companyName}.</span>
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
