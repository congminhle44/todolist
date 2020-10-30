import React, { SVGAttributes } from "react";

const Search = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
    >
      <title>zoom 2</title>
      <g className="nc-icon-wrapper" fill="#537fbe">
        <path
          fill="#537fbe"
          d="M52,27C52,13.215,40.785,2,27,2S2,13.215,2,27s11.215,25,25,25S52,40.785,52,27z M27,50 C14.318,50,4,39.682,4,27S14.318,4,27,4s23,10.318,23,23S39.682,50,27,50z"
        />{" "}
        <path
          data-color="color-2"
          d="M61.535,57.293L48.091,43.848c-1.253,1.566-2.676,2.989-4.242,4.242l13.444,13.445 c0.391,0.391,1.024,0.391,1.414,0l2.828-2.828C61.926,58.317,61.926,57.683,61.535,57.293z"
        />
      </g>
    </svg>
  );
};

export default Search;
