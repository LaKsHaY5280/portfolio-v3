import * as React from "react";
const Arrow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke="#846c5b"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="m17.31 8 3.94 4-3.94 4M21.19 12H2.75" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#846c5b" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Arrow;
