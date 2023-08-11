import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function ButtonComp({
  btnText,
  btnColor,
  btnWidth,
  btnClick,
  btnMarginTop,
}) {
  const buttonBgColor = {
    backgroundColor: btnColor,
    width: btnWidth,
    marginTop: btnMarginTop,
  };

  return (
    <TouchableOpacity
      style={[styles.container, buttonBgColor]}
      onPress={btnClick}
    >
      <Text style={styles.buttonText}>{btnText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 52,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
  },
});
