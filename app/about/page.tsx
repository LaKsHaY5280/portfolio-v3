"use client";
import { useAnimate } from "framer-motion";
import About from "@/components/About";
import Transition from "@/components/elements/Transition";

const page = () => {
  const [scope] = useAnimate();

  return (
    <div ref={scope}>
      <Transition>
        <About />
      </Transition>
    </div>
  );
};

export default page;
