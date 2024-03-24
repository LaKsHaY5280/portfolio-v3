"use client";
import { heroAnimation, navAnimation } from "@/components/animation/animation";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import About from "@/components/About";
import Transition from "@/components/elements/Transition";

const page = () => {
  const [scope] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.8 });

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
        <About />
      </Transition>
    </div>
  );
};

export default page;
