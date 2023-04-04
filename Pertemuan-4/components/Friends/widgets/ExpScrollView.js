import { ScrollView } from "react-native";
import React from "react";
import UserItems from "./UserItems";
// import { Users } from "../../const-data/Dummy";

const ExpScrollView = ({ Users }) => {
  return (
    <ScrollView>
      {Users.map((v, index) => (
        <UserItems item={v} key={index} />
      ))}
    </ScrollView>
  );
};

export default ExpScrollView;
