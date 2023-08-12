import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import UserAvatarIcon from "../../constants/UserAvatarIcon";
import { useNavigation } from "@react-navigation/native";

export default function UserItem({ item }) {
  const navigation = useNavigation();

  const handlePress =()=>{
    navigation.navigate("AddandEdit")
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.AvatarContainer}>
        <UserAvatarIcon />
      </View>
      <Text style={styles.nameText}>{item.fullName}</Text>
      <View
        style={{
          ...styles.statusTextContainer,
          backgroundColor: item.status === "Active" ? "#D2FBD4" : "#FFF0F0",
        }}
      >
        <Text
          style={{
            ...styles.statusText,
            color: item.status === "Active" ? "#12AA18" : "#FF6464",
          }}
        >
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 20,
    width: 345,
    borderRadius: 17,
    height: 76,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  AvatarContainer: {
    backgroundColor: "#F6F6F6",
    width: 46,
    height: 46,
    borderRadius: "50%",
  },
  nameText: {
    fontWeight: "600",
    fontSize: 14,
    letterSpacing: 1,
    marginLeft: 20,
  },
  statusTextContainer: {
    width: 70,
    height: 27,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: "auto",
  },
  statusText: {
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 1,
  },
});
