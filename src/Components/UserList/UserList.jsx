import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import UsersData from "../../Data/UsersData";
import UserItem from "../UserItem/UserItem";

export default function UserList() {
  return (
    <View>
      <FlatList
        data={UsersData}
        renderItem={({ item }) => {
          return <UserItem item={item} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
