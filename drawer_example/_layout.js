import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{ drawerLabel: "Drawer One", title: "Drawer One" }}
        />
        <Drawer.Screen
          name="drawerTwo"
          options={{ drawerLabel: "Drawer Two", title: "Drawer Two" }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
