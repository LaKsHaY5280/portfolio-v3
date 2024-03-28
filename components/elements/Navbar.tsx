"use client";
import { motion } from "framer-motion";
import { doorCloseAnimation, navLinkPull } from "../animation/animation";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const liClasses = `bg-secondary flex justify-center items-end pb-2 w-32 border border-primary border-t-0 text-xl leading-[3rem] tracking-[0.1rem] font-['Snow'] text-day `;

  const navlinks = [
    {
      name: "Home",
      link: "/",
      id: "navLi1",
      hi: "h-[4rem]",
      animatedheight: 4,
      isCurrent: pathname === "/",
    },
    {
      name: "About",
      link: "/about",
      id: "navLi2",
      hi: "h-[6rem]",
      animatedheight: 6,
      isCurrent: pathname === "/about",
    },
    {
      name: "Experience",
      link: "/experience",
      id: "navLi3",
      hi: "h-[8rem]",
      animatedheight: 8,
      isCurrent: pathname === "/experience",
    },
    {
      name: "Skills",
      link: "/skills",
      id: "navLi4",
      hi: "h-[10rem]",
      animatedheight: 10,
      isCurrent: pathname === "/skills",
    },
    {
      name: "Project",
      link: "/project",
      id: "navLi5",
      hi: "h-[12rem]",
      animatedheight: 12,
      isCurrent: pathname === "/project",
    },
    {
      name: "Contact",
      link: "/contact",
      id: "navLi6",
      hi: "h-[14rem]",
      animatedheight: 14,
      isCurrent: pathname === "/contact",
    },
  ];

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
    // router.push(link);
  };
  return (
    <div className=" absolute z-50 right-0 ">
      <nav className=" w-full">
        <ul className=" w-full h-fit flex justify-end items-start ">
          {navlinks.map((navlink, i) => (
            <motion.li
              key={i}
              id={navlink.id}
              className={` ${liClasses} ${navlink.hi} ${
                navlink.isCurrent
                  ? "pointer-events-none cursor-not-allowed text-primary"
                  : ""
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
