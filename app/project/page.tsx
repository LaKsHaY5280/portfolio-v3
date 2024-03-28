"use client";
import { navAnimation } from "@/components/animation/animation";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import Projects from "@/components/Projects";
import Transition from "@/components/elements/Transition";

const page = () => {
  const [scope] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      animation();
    }
  }, [isInView]);

  const animation = async () => {
    navAnimation();
  };

  return (
    <div ref={scope}>
      <Transition>
        <Projects />
      </Transition>
    </div>
  );
};

export default page;
