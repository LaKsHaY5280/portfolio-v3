"use client";
import { motion } from "framer-motion";

const Navbar = () => {

  const liClasses =
    "bg-secondary flex justify-center items-end pb-2 w-32 border border-primary border-t-0 text-xl leading-[3rem] tracking-[0.1rem] font-['Snow'] text-day ";

  const navlinks = [
    { name: "Home", link: "/", id: "navLi1" },
    { name: "About", link: "/about", id: "navLi2" },
    { name: "Experience", link: "/experience", id: "navLi3" },
    { name: "Skills", link: "/skills", id: "navLi4" },
    { name: "Project", link: "/project", id: "navLi5" },
    { name: "Contact", link: "/contact", id: "navLi6" },
  ];

  return (
    <div className=" absolute z-20 right-0 ">
      <nav className=" w-full">
        <ul className=" w-full flex justify-end items-start  ">
          {navlinks.map((navlink, i) => {
            return (
              <motion.li
                key={i}
                id={navlink.id}
                className={` ${liClasses} h-[${2 * (i + 2)}rem] `}
                initial={{
                  y: -300,
                }}
              >
                <a href={navlink.link}>{navlink.name}</a>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
