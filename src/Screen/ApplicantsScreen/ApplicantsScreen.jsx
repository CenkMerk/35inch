import { View, FlatList } from "react-native";
import React from "react";
import styles from "./ApplicantScreenStyle";
//data
import UsersData from "../../Data/UsersData";
//component
import UserItem from "../../Components/UserItem/UserItem";


export default function ApplicantsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={UsersData}
        renderItem={({ item }) => {
          return <UserItem item={item} />;
        }}
      />
    </View>
  );
}
