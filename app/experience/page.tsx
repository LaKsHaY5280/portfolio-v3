"use client";
import { navAnimation } from "@/components/animation/animation";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import Transition from "@/components/elements/Transition";
import Experience from "@/components/Experience";

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
        <Experience />
      </Transition>
    </div>
  );
};

export default page;
