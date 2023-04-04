import React from "react";
import { FlatList } from "react-native";
import UserItems from "./UserItems";

const ExpFlatList = ({ Users }) => {
  return (
    <FlatList
      data={Users}
      renderItem={({ item }) => <UserItems item={item} />}
    />
  );
};

export default ExpFlatList;
