import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Menu from "./Menu";

import Ribbon from "./Ribbon";

export default function Layout() {
  const [show, setShow] = useState(true);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, [pathname]);

  return (
    <>
      {/* <Header /> */}
      <Menu show={show} />
      <Ribbon show={show} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
