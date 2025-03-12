import React from "react";
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <>
      <Link to="/">Home</Link> <br />
      <Link to="/about">About Us</Link> <br />
      <Link to="/contact">Contact us</Link> <br /> <br />
    </>
  );
}

export default MainNavigation;
