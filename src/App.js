import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { CustomRoute, Layout } from "./components";
import { About, Portfolio, Contact, Resume, Project } from "./pages";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CustomRoute>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/portfolio/:title" element={<Project />} />
        </Route>
      </CustomRoute>
    </BrowserRouter>
  );
}

export default App;
