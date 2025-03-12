import React, { useContext } from "react";
import Button from "./Button";
import { UserContext } from "../store/UserAuthContext";

function Login() {
  const { setIsLoggedIn } = useContext(UserContext);

  const handleSubmit = () => {
    setIsLoggedIn(true);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Login</h1>
      <label>
        {" "}
        Name
        <input type="text" />
      </label>
      <label>
        Email <input type="email" />{" "}
      </label>
      <Button type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </form>
  );
}

export default Login;
