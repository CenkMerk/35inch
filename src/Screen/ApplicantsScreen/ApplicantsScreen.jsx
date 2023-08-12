import { FlatList, Text, View } from "react-native";
import React from "react";
import styles from "./ApplicantScreenStyle";
import UserList from "../../Components/UserList/UserList";

export default function ApplicantsScreen() {
  return (
    <View style={styles.container}>
      <UserList />
    </View>
  );
}
