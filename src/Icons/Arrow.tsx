import React, { SVGAttributes } from "react";

const Arrow = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <title>Arrow</title>
      <g className="nc-icon-wrapper" fill="#537fbe">
        <path d="M14.83 16.42L24 25.59l9.17-9.17L36 19.25l-12 12-12-12z" />
      </g>
    </svg>
  );
};

export default Arrow;
