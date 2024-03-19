import { Stack } from "expo-router";
import { SessionProvider } from "./SessionProvider";

export default function StackLayout() {
  return (
    <SessionProvider>
      <Stack />
    </SessionProvider>
  );
}
