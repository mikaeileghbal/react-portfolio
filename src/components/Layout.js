import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";

export default function Layout() {
  return (
    <>
      {/* <Header /> */}
      <Menu />
      <main>
        <Outlet />
      </main>
    </>
  );
}
