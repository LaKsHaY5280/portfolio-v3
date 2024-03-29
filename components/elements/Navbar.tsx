"use client";
import { motion } from "framer-motion";
import { doorCloseAnimation, navLinkPull } from "../animation/animation";
import { usePathname, useRouter } from "next/navigation";
import { navlinks } from "@/constants";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleclick = async ({
    id,
    link,
    animatedheight,
  }: {
    id: string;
    animatedheight: number;
    link: string;
  }) => {
    await navLinkPull({ id, animatedheight });
    await doorCloseAnimation();
    setTimeout(() => {
      router.push(link);
    }, 1000);
  };

  return (
    <div className=" absolute z-50 right-0 ">
      <nav className=" w-full">
        <ul className=" w-full h-fit flex justify-end items-start ">
          {navlinks.map((navlink, i) => (
            <motion.li
              key={i}
              id={navlink.id}
              className={` bg-secondary flex justify-center items-end pb-2 w-32 border border-primary border-t-0 text-xl leading-[3rem] tracking-[0.1rem] font-['Snow'] text-day ${
                navlink.hi
              } ${
                pathname === navlink.link &&
                "pointer-events-none cursor-not-allowed text-primary"
              }`}
              initial={{
                y: -300,
              }}
            >
              <a
                className="cursor-pointer w-full h-full flex justify-center items-end"
                onClick={() =>
                  handleclick({
                    id: navlink.id,
                    link: navlink.link,
                    animatedheight: navlink.animatedheight,
                  })
                }
              >
                {navlink.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
