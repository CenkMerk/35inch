import { Text, View } from "react-native";
import React from "react";
import styles from "./Styles.js";
import Button from "../../Components/Button/Button.jsx";

export default function OnBoardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lorem Ipsum</Text>
      <View style={styles.buttonsContainer}>
        <Text style={styles.title}>Korem ipsum dolor sit amet consectetur</Text>
        <Text style={styles.desc}>
          Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus
        </Text>
        <Button
          btnText="Login"
          btnColor="#FF6464"
          btnWidth={327}
          btnNavigate="Login"
        />
        <Button
          btnText="Sign Up"
          btnColor="#74C6F7"
          btnWidth={327}
          btnNavigate="Register"
        />
      </View>
    </View>
  );
}
