import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Index</Text>
      <Link style={styles.text} href="/frameOne">
        {">"}
      </Link>
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
  button: {
    width: "20%",
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  text: {
    fontSize: 40,
  },
});
