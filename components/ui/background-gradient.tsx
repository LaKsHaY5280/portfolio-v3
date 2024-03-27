import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div
      className={cn("relative p-[4px] group w-full h-full", containerClassName)}
    >
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,#846c5b,transparent),radial-gradient(circle_farthest-side_at_100%_0,#696773,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#696773,transparent),radial-gradient(circle_farthest-side_at_0_0,#e4d6a7,#1C110A)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-lg z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#846c5b,transparent),radial-gradient(circle_farthest-side_at_100%_0,#696773,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#696773,transparent),radial-gradient(circle_farthest-side_at_0_0,#e4d6a7,#1C110A)]"
        )}
      />

      <div className={cn("relative z-10 h-full", className)}>{children}</div>
    </div>
  );
};
