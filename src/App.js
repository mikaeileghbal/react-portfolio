import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import { About, Portfolio, Contact, Resume, Project } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/resume" element={<Resume />} />
        </Route>
        <Route exact path="/portfolio/:title" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
