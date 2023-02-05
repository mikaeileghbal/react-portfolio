import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Next, { Previous } from "./Next";
import Ribbon from "./Ribbon";

const pages = {
  "/": { nextPage: "portfolio", prevPage: null },
  "/portfolio": { nextPage: "contact", prevPage: "-" },
  "/contact": { nextPage: "resume", prevPage: "portfolio" },
  "/resume": { nextPage: null, prevPage: "contact" },
};
export default function Layout() {
  const [show, setShow] = useState(true);
  const location = useLocation();
  const { pathname } = location;
  const [currentPage, setCurrentPage] = useState(pathname);

  useEffect(() => {
    setCurrentPage(pathname);
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, [pathname]);

  useEffect(() => {
    console.log("sliced: ", currentPage);
  }, [currentPage]);

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
