import { StyleSheet, Text, View } from "react-native";
import ButtonPanel from "./ButtonPanel";

export default function CardBody({ darkMode }) {
  return (
    <View style={styles.container}>
      <Text style={darkMode && { color: "white" }}>
        Duis quis ipsum molestie, lacinia ligula ac, fringilla libero. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Etiam vel
        consectetur lacus, vel viverra augue. Nam mollis bibendum lorem quis
        bibendum. Sed nunc felis, convallis at rhoncus ac, interdum sit amet
        sapien. Proin mattis ipsum ut euismod fringilla. Donec condimentum
        tempus enim a dignissim. Morbi eleifend tellus sed justo lobortis
        convallis. Curabitur ut vehicula diam, eget faucibus turpis. Curabitur
        id lacinia sapien.
      </Text>
      <ButtonPanel darkMode={darkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: "90%",
    padding: "5%",
    justifyContent: "space-between",
  },
});
