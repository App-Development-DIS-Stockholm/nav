import { StyleSheet, View } from "react-native";
import ContextExample from "./ContextExample";

export default function Index() {
  return (
    <View style={styles.container}>
      <ContextExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
