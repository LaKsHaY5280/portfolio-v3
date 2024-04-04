import Corner from "@/assets/corner";

export const AngleCornerTop = () => {
  return (
    <div className=" z-30 absolute top-0 left-0 h-32 w-32">
      <Corner />
    </div>
  );
};

export const AngleCornerBottom = () => {
  return (
    <div className=" z-30 absolute bottom-0 right-0 h-32 w-32 rotate-180">
      <Corner />
    </div>
  );
};
