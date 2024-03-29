// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const ItemTypograp = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.box}>
//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: "bold",
//             backgroundColor: "brown",
//             color: "#fff",
//             textAlign: "center",
//             textDecorationLine: "underline",
//             padding: 10,
//             marginBottom: 10,
//           }}
//         >
//           History Of Biscycle
//         </Text>

//         <Text style={StyleSheet.paragraph}>
//           A Bicycle,Also Called a pedal cycle,bike,push-bike, or cycle, is a
//           human-powered or motor powered assisted, single-track vehicle having
//           two wheels attached to a frame ,one behind the other.A bicycle rider
//           is called a cyclist. or bicyclist
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default ItemTypograp;

// const styles = StyleSheet.create({
//   paragraph: {
//     fontSize: 18,
//     textAlign: "justify",
//   },

//   container: {
//     padding: 10,
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   box: {
//     width: 200,
//   },
// });

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemTypograp = () => {
  return (
    <View style={styles.box}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "brown",
          color: "#fff",
          textAlign: "center",
          textDecorationLine: "underline",
          padding: 10,
          marginBottom: 10,
        }}
      >
        History of Bicycle
      </Text>
      <Text style={styles.paragrapf}>
        A Bicycle,Also Called a pedal cycle,bike,push-bike, or cycle, is a //
        human-powered or motor powered assisted, single-track vehicle having //
        two wheels attached to a frame ,one behind the other.A bicycle rider //
        is called a cyclist. or bicyclist
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paragrapf: {
    fontSize: 18,
    textAlign: "justify",
  },
  box: {
    width: 300,
  },
});

export { ItemTypograp };
