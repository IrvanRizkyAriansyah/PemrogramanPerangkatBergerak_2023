import React, { Component } from "react";
import { View, StatusBar, SafeAreaView, StyleSheet } from "react-native";
import Widget1 from "./widgets/widget1";
import { org } from "../const-data/Sabeb";

class Daphne extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} style="light" />
        <View style={styles.header}></View>
        <View style={styles.body}>
          <Widget1 org={org} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Daphne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "grey",
  },
  body: {
    flex: 10,
    backgroundColor: "black",
  },
});
