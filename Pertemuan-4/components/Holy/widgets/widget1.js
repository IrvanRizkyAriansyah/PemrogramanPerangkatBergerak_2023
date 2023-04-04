import React from "react";
import { Image, Text, View } from "react-native";
import { org } from "../../const-data/Sabeb";

const Widget1 = ({ Item }) => {
  return (
    <View style={{ borderWidth: 2, borderRadius: 15 }}>
      <Image source={require("../../../assets/profile.png")} />
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>{org.nama}</Text>
      <Text>{org.desc}</Text>
    </View>
  );
};

export default Widget1;
