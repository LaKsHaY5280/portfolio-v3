"use client";

import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicMotionImg = dynamic(() => import("@/components/elements/dynimg"), {
  ssr: false,
});

export const InfiniteMovingCards = ({
  id,
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  id: number;
  items: {
    src: StaticImageData;
    alt: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  console.log("items", items);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.id = `container-${id}`;
    }
  }, [id]);

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.id = `scroller-${id}`;
    }
  }, [id]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller z-20  max-w-3xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[20rem] rounded-2xl flex-shrink-0  md:w-[40rem]"
            key={idx}
          >
            <DynamicMotionImg
              className=" rounded-lg w-3/4 h-full object-cover"
              sr={item.src}
              alt={item.alt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
