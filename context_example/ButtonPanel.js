import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export default function ButtonPanel({ darkMode }) {
  return (
    <View style={styles.container}>
      <View style={[styles.button, darkMode && { borderColor: "white" }]}>
        <AntDesign
          name="leftcircleo"
          size={40}
          color={darkMode ? "white" : "black"}
        />
      </View>
      <View style={[styles.button, darkMode && { borderColor: "white" }]}>
        <AntDesign
          name="rightcircleo"
          size={40}
          color={darkMode ? "white" : "black"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "25%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    height: 65,
    aspectRatio: 2,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
