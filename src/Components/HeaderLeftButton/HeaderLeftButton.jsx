import { TouchableOpacity } from "react-native";
import React from "react";
import LeftArrowIcon from "../../constants/LeftArrowIcon";
import { useNavigation } from "@react-navigation/native";

export default function HeaderLeftButton() {
  const navigation = useNavigation();

  const HandleClick = () => {
    navigation.navigate("OnBoarding");
  };

  return (
    <TouchableOpacity onPress={HandleClick}>
      <LeftArrowIcon />
    </TouchableOpacity>
  );
}
