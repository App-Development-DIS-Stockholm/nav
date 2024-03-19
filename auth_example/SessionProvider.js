import { useState } from "react";
import { AuthContext } from "./context";

export function SessionProvider({ children }) {
  const [session, setSession] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        signIn: () => setSession("mySession"),
        signOut: () => setSession(null),
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
