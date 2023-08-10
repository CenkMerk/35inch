import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({ btnText, btnColor,btnWidth }) {
  const buttonBgColor = {
    backgroundColor: btnColor,
    width:btnWidth,
  };
  return (
    <TouchableOpacity style={[styles.container, buttonBgColor]}>
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
