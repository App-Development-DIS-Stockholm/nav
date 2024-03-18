import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function FrameOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Frame One</Text>
      <Link href="/frameTwo" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.text}>{">"}</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rebeccapurple",
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
