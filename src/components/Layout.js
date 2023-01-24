import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Ribbon from "./Ribbon";

export default function Layout() {
  return (
    <>
      {/* <Header /> */}
      <Menu />
      <Ribbon />
      <main>
        <Outlet />
      </main>
    </>
  );
}
