import { View, FlatList } from "react-native";
import React from "react";
import styles from "./ApplicantScreenStyle";
//component
import UserItem from "../../Components/UserItem/UserItem";
//redux
import { useSelector } from "react-redux";

export default function ApplicantsScreen() {
  const { usersData } = useSelector((store) => store.users);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={usersData}
        renderItem={({ item }) => {
          return <UserItem item={item} />;
        }}
      />
    </View>
  );
}
