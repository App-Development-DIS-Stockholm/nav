import { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";
import DogCard from "../context_example/DogCard";

export default function ContextExample() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <View
      style={[styles.container, darkMode && { backgroundColor: "dimgray" }]}
    >
      <Switch
        style={{ marginVertical: "2%" }}
        value={darkMode}
        onValueChange={() => setDarkMode(!darkMode)}
      />
      <DogCard darkMode={darkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 40,
  },
});
