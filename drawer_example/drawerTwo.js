import { StyleSheet, Text, View } from "react-native";

export default function TabTwo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Drawer Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "seagreen",
  },
  text: {
    fontSize: 40,
  },
});
