"use client";
import {
  navAnimation,
  skillsAnimation,
} from "@/components/animation/animation";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import Transition from "@/components/elements/Transition";
import Skills from "@/components/Skills";

const page = () => {
  const [scope] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.8 });

  useEffect(() => {
    // if (isInView) {
    animation();
    // }
  }, []);

  const animation = async () => {
    navAnimation();
    setTimeout(() => {
      skillsAnimation();
    }, 1000);
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
