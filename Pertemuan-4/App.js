import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import Daphne from "./components/Holy/Daphne";
import MyFriends from "./components/Friends/MyFriends";

export default function App() {
  return <MyFriends />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
