import { StyleSheet, Text, View } from "react-native";

export default function TabOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "deeppink",
  },
  text: {
    fontSize: 40,
  },
});
