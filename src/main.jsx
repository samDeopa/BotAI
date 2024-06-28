import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App1 from "./App1.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" Component={App} />
        <Route path="/App1" Component={App1} />
      </Routes>
    </Router>
  </React.StrictMode>
);
