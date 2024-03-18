import { Image, StyleSheet, Text, View } from "react-native";

export default function CardHeader({ darkMode }) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require("../assets/borzoi.jpeg")}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={[styles.detailsText, darkMode && { color: "white" }]}>
          Rolf
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "40%",
    width: "90%",
    flexDirection: "row",
    padding: "5%",
  },
  avatarContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  detailsText: {
    fontSize: 30,
  },
  avatar: {
    height: "60%",
    aspectRatio: 1,
    borderRadius: 200,
  },
});
