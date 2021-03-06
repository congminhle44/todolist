import React, { SVGAttributes } from "react";

const Delete = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      xmlSpace="preserve"
    >
      <title>Delete</title>
      <g
        className="nc-icon-wrapper"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        fill="#537fbe"
        stroke="#537fbe"
      >
        <polyline
          fill="none"
          stroke="#537fbe"
          strokeMiterlimit={10}
          points="40,16 40,46 8,46 8,16 "
        />{" "}
        <line
          fill="none"
          stroke="#537fbe"
          strokeMiterlimit={10}
          x1={2}
          y1={10}
          x2={46}
          y2={10}
        />{" "}
        <line
          data-color="color-2"
          fill="none"
          strokeMiterlimit={10}
          x1={24}
          y1={22}
          x2={24}
          y2={37}
        />{" "}
        <line
          data-color="color-2"
          fill="none"
          strokeMiterlimit={10}
          x1={16}
          y1={22}
          x2={16}
          y2={37}
        />{" "}
        <line
          data-color="color-2"
          fill="none"
          strokeMiterlimit={10}
          x1={32}
          y1={22}
          x2={32}
          y2={37}
        />{" "}
        <polyline
          fill="none"
          stroke="#537fbe"
          strokeMiterlimit={10}
          points="16,10 16,2 32,2 32,10 "
        />
      </g>
    </svg>
  );
};

export default Delete;
