import { motion, Variants } from "framer-motion";

interface DotCursorProps {
  variants: {
    default: { x: number; y: number };
    text: {
      x: number;
      y: number;
      height: number;
      width: number;
      backgroundColor: string;
      mixBlendMode: string;
    };
  };
  cursorVariants: string;
}

const DotCursor = ({ variants, cursorVariants }: DotCursorProps) => (
  <motion.div
    variants={variants as Variants}
    animate={cursorVariants}
    transition={{ type: "spring", stiffness: 100, damping: 10 }}
    className="h-4 w-4 rounded-full border-primary border-2 fixed top-0 left-0 pointer-events-none"
  />
);

export default DotCursor;
