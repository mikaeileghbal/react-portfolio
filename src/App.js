import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { CustomRoute, Layout } from "./components";
import { About, Portfolio, Contact, Resume, Project } from "./pages";
import NotFound404 from "./pages/NotFound404";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CustomRoute>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio/:title" element={<Project />} />
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </CustomRoute>
    </BrowserRouter>
  );
}

export default App;
