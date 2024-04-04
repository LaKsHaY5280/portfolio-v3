"use client";
import {
  AngleCornerBottom,
  AngleCornerTop,
} from "@/components/elements/AngleCorner";
import { usePathname } from "next/navigation";
import React from "react";

const Body = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <body className={` ${pathname === "/" ? "" : "relative"} `}>
      <AngleCornerTop />
      {children}
      <AngleCornerBottom />
    </body>
  );
};

export default Body;
