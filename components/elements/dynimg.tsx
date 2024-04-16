import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity";

type props = {
  sr: any;
  alt?: string;
  width?: number;
  height?: number;
  onMouseMove?: any;
  className?: string;
};

export default function DynamicMotionImg({
  sr,
  alt,
  width,
  height,
  onMouseMove,
  className,
}: props) {
  return (
    <motion.img
      src={urlFor(sr).url()}
      alt={alt || "hi"}
      width={width || 5}
      height={height || 50}
      onMouseMove={onMouseMove}
      className={className}
    />
  );
}
