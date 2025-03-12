import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserAuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext value={{ isLoggedIn, setIsLoggedIn }}>{children}</UserContext>
  );
}
