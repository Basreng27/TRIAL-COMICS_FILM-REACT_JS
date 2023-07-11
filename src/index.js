import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css";
import "react-bootstrap"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
