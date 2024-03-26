"use client";
import Header from "@/components/Header";
import { heroAnimation, navAnimation } from "@/components/animation/animation";
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
    await heroAnimation();
    navAnimation();
  };

  return (
    <div ref={scope}>
      <Transition>
        <Header />
      </Transition>
    </div>
  );
}
