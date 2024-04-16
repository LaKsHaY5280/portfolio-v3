import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity";

type props = {
  sr: any;
};

export default function DynamicMotionImg({ sr }: props) {
  return <motion.img src={urlFor(sr).url()} alt="hu" width={50} height={50} />;
}
