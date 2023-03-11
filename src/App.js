import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout } from "./components";
import { About, Portfolio, Contact, Resume, Project } from "./pages";
import NotFound404 from "./pages/NotFound404";
import { useDirection } from "./providers/DirectionProvider";

const pages = {
  "/": 0,
  "/portfolio": 1,
  "/contact": 2,
  "/resume": 3,
};

function App() {
  const { direction, setActiveLink } = useDirection();

  const location = useLocation();

  useEffect(() => {
    console.log(location);
    setActiveLink(pages[location.pathname]);
  }, [location.pathname]);
  // useEffect(() => {
  //   console.log("path changed");
  //   setDirection((old) => {
  //     const prev = old.path;
  //     const path = location.pathname.split("/").filter((item) => item !== "");
  //     if (path.length === 0) path.push("about");
  //     const newPath = path[path.length - 1];

  //     return {
  //       path: newPath,
  //       dir: pages[newPath] >= pages[prev] ? "left" : "right",
  //     };
  //   });
  // }, [location.pathname]);

  return (
    <div className={direction}>
      <TransitionGroup component="div" className="main">
        <CSSTransition timeout={1000} classNames="fade" key={location.pathname}>
          <div>
            <Routes location={location}>
              <Route exact path="/" element={<Layout />}>
                <Route index element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio/:title" element={<Project />} />
              </Route>
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
