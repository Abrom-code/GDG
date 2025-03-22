import React from "react";
import MainNav from "../components/MainNav";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div>
      <MainNav />
      <Outlet />
    </div>
  );
}

export default RootLayout;
