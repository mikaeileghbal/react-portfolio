import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import DirectionProvider from "./providers/DirectionProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <DirectionProvider>
        <App />
      </DirectionProvider>
    </Router>
  </React.StrictMode>
);
