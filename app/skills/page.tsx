"use client";
import { skillsAnimation } from "@/components/animation/animation";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import Transition from "@/components/elements/Transition";
import Skills from "@/components/Skills";

const page = () => {
  const [scope] = useAnimate();

  useEffect(() => {
    animation();
  }, []);

  const animation = async () => {
    setTimeout(() => {
      skillsAnimation();
    }, 4000);
  };

  return (
    <div ref={scope}>
      <Transition>
        <Skills />
      </Transition>
    </div>
  );
};

export default page;
