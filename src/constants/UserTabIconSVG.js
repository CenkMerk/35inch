import React from "react";
import Svg, { Path,Circle } from "react-native-svg";

export default function UserTabIconSVG() {
  return (
    <Svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="27" cy="27" r="27" fill="#FF6464" />
      <Path
        d="M26.9997 37C23.0455 37 20.1824 37 18.3237 34.4545C16.465 31.9091 23.0455 30 26.9997 30C30.9539 30 37.5354 31.9091 35.6762 34.4545C33.8169 36.9999 30.9538 37 26.9997 37Z"
        fill="white"
      />
      <Circle cx="27" cy="22" r="5" fill="white" />
    </Svg>
  );
}
