import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { CustomRoute, Layout } from "./components";
import { About, Portfolio, Contact, Resume, Project } from "./pages";
import NotFound404 from "./pages/NotFound404";

const pages = {
  about: 1,
  portfolio: 2,
  contact: 3,
  resume: 4,
};

function App() {
  const [direction, setDirection] = useState({
    path: "home",
    dir: "left",
  });

  const location = useLocation();

  useEffect(() => {
    console.log("path changed");
    setDirection((old) => {
      const prev = old.path;
      const path = location.pathname.split("/").filter((item) => item !== "");
      if (path.length === 0) path.push("about");
      const newPath = path[path.length - 1];

      return {
        path: newPath,
        dir: pages[newPath] >= pages[prev] ? "left" : "right",
      };
    });
  }, [location.pathname]);

  console.log(direction);

  return (
    <div className={direction.dir}>
      <TransitionGroup component="main" className="main">
        <CSSTransition timeout={1000} classNames="fade" key={location.pathname}>
          <div>
            <Routes>
              <Route exact path="/" element={<Layout />}>
                <Route index element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio/:title" element={<Project />} />
              </Route>
              <Route path="*" element={<NotFound404 />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
