import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import ApplicantsScreen from "../Screen/ApplicantsScreen/ApplicantsScreen";
import AddandEditScreen from "../Screen/AddandEditScreen/AddandEditScreen";

import UserTabIconSVG from "../constants/UserTabIconSVG";
import LogoutTabIconSVG from "../constants/LogoutTabIconSVG";
import AddTabIconSVG from "../constants/AddTabIconSVG";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
        name="User"
        component={ApplicantsScreen}
        options={{
          tabBarIcon: () => {
            return <UserTabIconSVG />;
          },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="AddandEdit"
        component={AddandEditScreen}
        options={({ route, navigation }) => ({
          title: route.params.title,
          tabBarIcon: () => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("AddandEdit", {
                    title: "Add User",
                  })
                }
              >
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
              </TouchableOpacity>
            );
          },
          tabBarShowLabel: false,
        })}
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
                  style={{ fontWeight: "600", color: "#FF6464", fontSize: 10 }}
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
