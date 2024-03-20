"use client";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const SiteLoader = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.8 });

  useEffect(() => {
    if (isInView) {
      logoAnimation();
    }
  }, [isInView]);
  const logoAnimation = async () => {
    await animate("#logoBox", {
      x: [0, 0, 0],
      y: [0, 0, 100],
      opacity: 1,
      scaleY: [0, 1.2, 1],
      scaleX: [0, 1.2, 1],
    });
    animate(
      "#logoBox",
      {
        x: [0, -400],
        y: [100, 100],
        opacity: 1,
      },
      {
        delay: 0.5,
      }
    );
  };

  return (
    <div ref={scope} className=" w-full h-screen absolute bg-night">
      <div
        id="logoBox"
        className=" w-full h-full flex justify-center items-center"
      >
        <p className=" font-['Santika'] text-day text-6xl w-full h-full flex justify-center items-center text-[40rem] overflow-hidden">
          L
        </p>
      </div>
    </div>
  );
};

export default SiteLoader;
