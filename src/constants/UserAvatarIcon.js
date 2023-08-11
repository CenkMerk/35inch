import React from "react";
import Svg, { Path, Mask,G,Circle } from "react-native-svg";

export default function UserAvatarIcon() {
  return (
    <Svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask
        id="mask0_5_4561"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="46"
        height="46"
      >
        <Circle cx="23" cy="23" r="23" fill="#6F2525" />
      </Mask>
      <G mask="url(#mask0_5_4561)">
        <Path
          d="M9.44907 44.6821C9.4501 44.7556 9.46558 44.828 9.49462 44.8955C9.52367 44.9629 9.56571 45.0239 9.61835 45.0751C9.67099 45.1263 9.7332 45.1666 9.80142 45.1937C9.86964 45.2209 9.94254 45.2343 10.016 45.2333H36.1076C36.1811 45.2344 36.2541 45.221 36.3224 45.194C36.3907 45.1669 36.453 45.1266 36.5057 45.0754C36.5584 45.0242 36.6005 44.9631 36.6296 44.8956C36.6587 44.8282 36.6742 44.7556 36.6752 44.6821V44.0242C36.6881 43.8257 36.7147 42.8367 36.0625 41.7424C35.6511 41.0522 35.0541 40.4567 34.288 39.9708C33.3614 39.3831 32.1825 38.9581 30.7563 38.7023C30.0323 38.6004 29.3142 38.4607 28.6049 38.2837C26.7186 37.8021 26.5538 37.3757 26.5523 37.3714C26.5414 37.3293 26.5255 37.2887 26.505 37.2503C26.4893 37.1715 26.4513 36.8719 26.5244 36.07C26.7093 34.0325 27.8022 32.8285 28.6801 31.861C28.9567 31.5564 29.2183 31.2676 29.4197 30.9852C30.289 29.7669 30.3693 28.3801 30.3729 28.2941C30.3762 28.1417 30.3551 27.9898 30.3105 27.8441C30.2245 27.5789 30.0647 27.4141 29.9472 27.2922C29.9194 27.2643 29.8924 27.2357 29.8662 27.2062C29.8576 27.1962 29.8347 27.169 29.8554 27.0321C29.9257 26.5911 29.9743 26.147 30.0009 25.7012C30.0411 24.9831 30.0719 23.9096 29.8863 22.8639C29.859 22.6642 29.8178 22.4667 29.763 22.2727C29.5673 21.5532 29.2534 20.9383 28.817 20.4309C28.7417 20.3484 26.9157 18.4242 21.6145 18.03C20.8813 17.9756 20.1568 18.0049 19.443 18.0415C19.2319 18.0462 19.0218 18.0721 18.8159 18.1189C18.2684 18.2601 18.1222 18.6069 18.0842 18.8012C18.0204 19.1237 18.1322 19.3731 18.206 19.5393C18.2168 19.563 18.2304 19.5924 18.2067 19.6698C18.0842 19.8604 17.89 20.0324 17.6929 20.1951C17.6356 20.2431 16.3069 21.3898 16.2338 22.8869C16.0367 24.0257 16.051 25.7994 16.2839 27.0256C16.2983 27.0937 16.3176 27.194 16.2854 27.2621C16.0345 27.4864 15.7507 27.7409 15.7514 28.3214C15.7543 28.3801 15.8353 29.7662 16.7046 30.9852C16.9053 31.2676 17.1669 31.5557 17.4428 31.8603L17.4442 31.861C18.3221 32.8285 19.415 34.0325 19.5999 36.0692C19.6723 36.8719 19.6343 37.1708 19.6193 37.2503C19.5985 37.2886 19.5824 37.3293 19.5713 37.3714C19.5706 37.3757 19.4064 37.8007 17.5288 38.2816C16.4452 38.5589 15.3788 38.7008 15.3465 38.7044C13.9605 38.9388 12.7887 39.3537 11.8635 39.9378C11.1003 40.4201 10.5019 41.0178 10.0862 41.713C9.42112 42.8238 9.43903 43.8358 9.44835 44.0207L9.44907 44.6821Z"
          fill="black"
          stroke="black"
          stroke-width="4"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}