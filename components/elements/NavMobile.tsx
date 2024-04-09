"use client";
import { AnimatePresence, motion } from "framer-motion";
import { doorCloseAnimation } from "../animation/animation";
import { usePathname, useRouter } from "next/navigation";
import { socials } from "@/constants";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";

const NavMobile = ({
  open,
  navlinks,
}: {
  open: boolean;
  navlinks: {
    id: string;
    name: string;
    link: string;
    animatedheight: number;
  }[];
}) => {
  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animation: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        dalay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.39, 1],
      },
    },
  };

  const linkParentVariants = {
    initial: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animation"
          exit="exit"
          className=" -z-20 origin-top fixed top-0 left-0 w-full h-screen bg-night text-day p-10"
        >
          <div className=" text-xl leading-[2.27rem] tracking-[0.15rem] font-['Snow'] h-full w-full flex flex-col justify-around items-center">
            <div className=" w-full flex justify-start items-center">
              <h1 className=" text-6xl font-['Santika']">L</h1>
            </div>
            <motion.div
              variants={linkParentVariants}
              initial="initial"
              animate="open"
              exit="initial"
              className=" flex flex-col justify-center items-center gap-5"
            >
              {navlinks.map((navlink, i) => {
                return (
                  <div key={i} className=" overflow-hidden">
                    <MobileNavLink key={i} data={navlink} />
                  </div>
                );
              })}
            </motion.div>
            <motion.div className=" w-full flex justify-around items-center">
              {socials.map((s, i) => (
                <div key={i} className=" flex justify-around items-center p-1">
                  <Link
                    href={s.link}
                    className=" w-full flex justify-center items-center gap-5"
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Image src={s.icon} alt={s.name} width={40} />
                    </motion.div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavMobile;
const MobileNavLink = ({
  data,
}: {
  data: {
    id: string;
    name: string;
    link: string;
    animatedheight: number;
  };
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleclick = async () => {
    await doorCloseAnimation();
    setTimeout(() => {
      router.push(data.link);
    }, 1000);
  };

  const MobileLinkVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  return (
    <motion.div
      variants={MobileLinkVariants}
      className={` cursor-pointer text-md text-day ${
        pathname === data.link &&
        "pointer-events-none cursor-not-allowed text-primary"
      }`}
      onClick={handleclick}
    >
      {data.name}
      <Separator className=" bg-primary" />
    </motion.div>
  );
};
