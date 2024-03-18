import { StyleSheet, View } from "react-native";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

export default function DogCard({ darkMode }) {
  return (
    <View
      style={[
        styles.container,
        darkMode && { backgroundColor: "dimgray", borderColor: "white" },
      ]}
    >
      <CardHeader darkMode={darkMode} />
      <CardBody darkMode={darkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "90%",
    width: "90%",
    borderWidth: 1,
    paddingVertical: "10%",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
  },
});
