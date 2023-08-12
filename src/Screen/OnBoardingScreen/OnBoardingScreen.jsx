import { Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles.js";
//components
import ButtonComp from "../../Components/ButtonComp/ButtonComp.jsx";

export default function OnBoardingScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lorem Ipsum</Text>
      <View style={styles.buttonsContainer}>
        <Text style={styles.title}>Korem ipsum dolor sit amet consectetur</Text>
        <Text style={styles.desc}>
          Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus
        </Text>
        <ButtonComp
          btnText="Login"
          btnColor="#FF6464"
          btnWidth={327}
          btnClick={() => navigation.navigate("Login")}
        />
        <ButtonComp
          btnText="Sign Up"
          btnColor="#74C6F7"
          btnWidth={327}
          btnClick={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}
