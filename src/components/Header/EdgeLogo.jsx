import React from "react";

const EdgeLogo = () => (
  <svg
    width="90"
    height="32"
    viewBox="0 0 140 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Curve */}
    <path
      d="M22 20c0-7 6-12 12-12"
      stroke="#43D3C2"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />

    {/* Text */}
    <text
      x="42"
      y="50%"
      dominantBaseline="middle"
      fill="#43D3C2"
      fontSize="22"
      fontWeight="600"
      fontFamily="sans-serif"
      letterSpacing="1"
    >
      EDGE
    </text>
  </svg>
);

export default EdgeLogo;
