import { TouchableOpacity } from "react-native";
import React from "react";
import LeftArrowSVG from "../../constants/LeftArrowSVG";
import { useNavigation } from "@react-navigation/native";

export default function HeaderLeftButton() {
  const navigation = useNavigation();

  const HandleClick = () => {
    navigation.navigate("OnBoarding");
  };

  return (
    <TouchableOpacity onPress={HandleClick}>
      <LeftArrowSVG />
    </TouchableOpacity>
  );
}
