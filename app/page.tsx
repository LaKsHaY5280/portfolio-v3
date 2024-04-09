"use client";
import Header from "@/components/Header";
import { heroAnimation, navAnimation } from "@/components/animation/animation";
import Transition from "@/components/elements/Transition";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/elements/Navbar";

export default function Home() {
  const [scope] = useAnimate();

  useEffect(() => {
    animation();
  }, []);

  const animation = async () => {
    await heroAnimation();
    navAnimation();
  };

  return (
    <div ref={scope}>
      <Transition>
        <Navbar />
        <Header />
      </Transition>
    </div>
  );
}
