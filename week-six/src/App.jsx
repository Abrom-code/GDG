import React, { useContext } from "react";
import "./App.css";

import { UserAuthProvider, UserContext } from "./store/UserAuthContext";

import Login from "./components/Login";

import MainPage from "./components/MainPage";

export default function App() {
  return (
    <UserAuthProvider>
      <Main />
    </UserAuthProvider>
  );
}

export function Main() {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? <MainPage /> : <Login />;
}
