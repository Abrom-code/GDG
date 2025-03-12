import React, { useContext } from "react";
import Button from "./Button";
import { UserContext } from "../store/UserAuthContext";

function MainPage() {
  const { setIsLoggedIn } = useContext(UserContext);
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="main-page">
      <div className="main-page-head">
        <h2>Main</h2>
        <Button onClick={handleLogOut}>LogOut</Button>
      </div>
      <p>Welcome, User!</p>
    </div>
  );
}

export default MainPage;
