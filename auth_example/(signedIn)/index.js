import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../context";

export default function Frame() {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.link} onPress={() => signOut()}>
        {"Sign Out"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontSize: 30,
  },
});
