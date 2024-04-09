"use server";

import { urlFor } from "@/lib/sanity";
import Image from "next/image";

const Img = (img: {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
}) => {
  return (
    <Image src={urlFor(img.asset._ref).url()} alt={img.asset._ref} width={40} />
  );
};
export default Img;
