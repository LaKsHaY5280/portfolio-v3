"use client";
import { useAnimate } from "framer-motion";
import Projects from "@/components/Projects";
import Transition from "@/components/elements/Transition";

const page = () => {
  const [scope] = useAnimate();

  return (
    <div ref={scope}>
      <Transition>
        <Projects />
      </Transition>
    </div>
  );
};

export default page;
