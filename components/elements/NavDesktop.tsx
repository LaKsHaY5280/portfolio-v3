"use client";
import { motion } from "framer-motion";
import { doorCloseAnimation, navLinkPull } from "../animation/animation";
import { usePathname, useRouter } from "next/navigation";

interface NavDesktopprops {
  navlink: {
    id: string;
    name: string;
    link: string;
    animatedheight: number;
  };
}

const NavDesktop = (navlink: NavDesktopprops) => {
  const router = useRouter();
  const pathname = usePathname();

  const { id, name, link, animatedheight } = navlink.navlink;

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
    <motion.li
      id={id}
      style={{
        height: `${animatedheight}rem`,
      }}
      className={` bg-secondary flex justify-center items-end pb-2 w-32 border border-primary border-t-0 text-xl leading-[3rem] tracking-[0.1rem] font-['Snow'] text-day  ${
        pathname === link &&
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
            id: id,
            link: link,
            animatedheight: animatedheight,
          })
        }
      >
        {name}
      </a>
    </motion.li>
  );
};

export default NavDesktop;
