import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import OnBoardingScreen from "../Screen/OnBoardingScreen/OnBoardingScreen";
import RegisterScreen from "../Screen/RegisterScreen/RegisterScreen";
import LoginScreen from "../Screen/LoginScreen/LoginScreen";
import ApplicantsScreen from "../Screen/ApplicantsScreen/ApplicantsScreen";
import AddandEditScreen from "../Screen/AddandEditScreen/AddandEditScreen";
import HeaderLeftButton from "../Components/HeaderLeftButton/HeaderLeftButton";

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
          component={ApplicantsScreen}
          options={{
            title: "Users",
            headerStyle: {
              backgroundColor: "#F6F6F6",
            },
            headerShadowVisible: false,
            headerBackVisible: false
          }}
        />
        <Stack.Screen name="AddandEdit" component={AddandEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
