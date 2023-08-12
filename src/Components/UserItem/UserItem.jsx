import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import UserAvatarIcon from "../../constants/UserAvatarIcon";
import { useNavigation } from "@react-navigation/native";
import styles from "./UserItemStyle";

export default function UserItem({ item }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("EditUser", { item });
  };
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
