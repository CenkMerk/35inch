import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import OnBoardingScreen from "../Screen/OnBoardingScreen/OnBoardingScreen";
import RegisterScreen from "../Screen/RegisterScreen/RegisterScreen";
import LoginScreen from "../Screen/LoginScreen/LoginScreen";
import HeaderLeftButton from "../Components/HeaderLeftButton/HeaderLeftButton";
import ApplicantsTabs from "./TabNavigation";

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: "Sign Up",
            headerStyle: {
              backgroundColor: "#F6F6F6",
            },
            headerShadowVisible: false,
            headerLeft: () => <HeaderLeftButton />,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: {
              backgroundColor: "#F6F6F6",
            },
            headerShadowVisible: false,
            headerLeft: () => <HeaderLeftButton />,
          }}
        />
        <Stack.Screen
          name="Applicants"
          component={ApplicantsTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
