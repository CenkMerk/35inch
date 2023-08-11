import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export default function LeftArrowSVG() {
  return (
    <Svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.25 22.2744L29.25 22.2744"
        stroke="#272A48"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.2998 28.2988L14.2498 22.2748L20.2998 16.2498"
        stroke="#272A48"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x="0.5" y="0.5" width="43" height="43" rx="14.5" stroke="#E4E4E4" />
    </Svg>
  );
}
