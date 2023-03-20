import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import Motorcycle from "./src/components/Motorcycle";
// import Car from "./src/components/Car";
import Bicycle from "./src/components/Bicycle";

export default function App() {
  return (
    <>
      {/* <Motorcycle /> */}
      <Bicycle />
      {/* <Car /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
