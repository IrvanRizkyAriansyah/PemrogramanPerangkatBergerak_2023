import React from "react";
import { FlatList } from "react-native";
import Widget1 from "./widget1";

const Flatlist = ({ org }) => {
  return (
    <FlatList data={org} renderItem={({ Item }) => <Widget1 Item={Item} />} />
  );
};

export default Flatlist;
