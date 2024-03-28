"use client";
import Contact from "@/components/Contact";
import {
  heroAnimation,
  navAnimation,
  socialAnimation,
} from "@/components/animation/animation";
import Transition from "@/components/elements/Transition";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const [scope] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.8 });

  useEffect(() => {
    if (isInView) {
      animation();
    }
  }, [isInView]);

  const animation = async () => {
    navAnimation();
    setTimeout(() => {
      socialAnimation();
    }, 1000);
  };

  return (
    <div ref={scope}>
      <Transition>
        <Contact />
      </Transition>
    </div>
  );
}
