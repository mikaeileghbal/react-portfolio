import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
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
  }, [pathname]);

  useEffect(() => {
    console.log("sliced: ", currentPage);
  }, [currentPage]);

  return (
    <>
      {/* <Header /> */}
      <Menu />
      <Ribbon />
      <main>
        <Outlet />
      </main>
      {pages[currentPage].nextPage && (
        <Next to={`/${pages[currentPage].nextPage}`}>
          {pages[currentPage].nextPage}
        </Next>
      )}
      {pages[currentPage].prevPage && (
        <Previous
          to={`/${
            pages[currentPage].prevPage === "-"
              ? ""
              : pages[currentPage].prevPage
          }`}
        >
          {pages[currentPage].prevPage === "-"
            ? "about"
            : pages[currentPage].prevPage}
        </Previous>
      )}
    </>
  );
}
