"use client";
import { useAnimate } from "framer-motion";
import Transition from "@/components/elements/Transition";
import Experience from "@/components/Experience";

const page = () => {
  const [scope] = useAnimate();

  return (
    <div ref={scope}>
      <Transition>
        <Experience />
      </Transition>
    </div>
  );
};

export default page;
