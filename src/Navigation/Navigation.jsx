import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import OnBoardingScreen from "../Screen/OnBoardingScreen/OnBoardingScreen";
import RegisterScreen from "../Screen/RegisterScreen/RegisterScreen";
import LoginScreen from "../Screen/LoginScreen/LoginScreen";
import ApplicantsScreen from "../Screen/ApplicantsScreen/ApplicantsScreen";
import AddandEditScreen from "../Screen/AddandEditScreen/AddandEditScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{
              headerShown: false,
            }}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Applicants" component={ApplicantsScreen} />
        <Stack.Screen name="AddandEdit" component={AddandEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
