import { Redirect, Stack } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "../context";

export default function SignedInLayout() {
  const { session } = useContext(AuthContext);

  if (!session) return <Redirect href="/sign-in" />;
  return <Stack />;
}
