import { navlinks } from "@/constants";
import { useState } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { MotionConfig, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className=" absolute z-50 right-0 ">
      <nav className=" z-30 relative w-full">
        <ul className=" max-xl:hidden w-full h-fit flex justify-end items-start ">
          {navlinks.map((navlink, i) => (
            <NavDesktop key={i} navlink={navlink} />
          ))}
        </ul>
        <div
          className=" z-30 absolute top-0 right-0 xl:hidden m-10 cursor-pointer text-md text-primary"
          onClick={toggleMenu}
        >
          <AnimatedHamburger />
        </div>
      </nav>
      <NavMobile open={open} navlinks={navlinks} />
    </div>
  );
};

export default Navbar;

const AnimatedHamburger = () => {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-10 w-10 rounded-full bg-primary transition-colors hover:bg-secondary/50"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-5 bg-day rounded-full"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-5 bg-day rounded-full"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-day rounded-full"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "50%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};
const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "50%",
    },
  },
};
