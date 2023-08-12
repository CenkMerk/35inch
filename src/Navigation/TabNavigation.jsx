import { View, Text, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { useNavigation } from "@react-navigation/native";
//screens
import AddScreen from "../Screen/AddScreen/AddScreen";
import ApplicantsScreen from "../Screen/ApplicantsScreen/ApplicantsScreen";
//SVG
import UserTabIconSVG from "../constants/UserTabIconSVG";
import LogoutTabIconSVG from "../constants/LogoutTabIconSVG";
import AddTabIconSVG from "../constants/AddTabIconSVG";

import HeaderLeftButton from "../Components/HeaderLeftButton/HeaderLeftButton";

export default function ApplicantsTabs() {
  const navigation = useNavigation();
  const LogOut = () => {
    navigation.navigate("OnBoarding");
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "white", height: 70 },
        headerShadowVisible: false,
      }}
    >
      <Tab.Screen
        name="Users"
        component={ApplicantsScreen}
        options={{
          tabBarIcon: () => {
            return <UserTabIconSVG />;
          },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="AddButton"
        component={AddScreen}
        options={{
          title: "Add User",
          tabBarIcon: () => {
            return (
              <View
                style={{
                  backgroundColor: "white",
                  marginBottom: 65,
                  width: Platform.OS === "ios" ? 70 : 80,
                  height: Platform.OS === "ios" ? 70 : 80,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                }}
              >
                <AddTabIconSVG />
              </View>
            );
          },
          tabBarShowLabel: false,
          headerLeft: () => <HeaderLeftButton />,
          headerStyle: {
            backgroundColor: "#F6F6F6",
          },
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
      />
      <Tab.Screen
        name="Logut"
        component={LogOut}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <LogoutTabIconSVG />
                <Text
                  style={{
                    fontWeight: "600",
                    color: "#FF6464",
                    fontSize: 10,
                  }}
                >
                  Logout
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
