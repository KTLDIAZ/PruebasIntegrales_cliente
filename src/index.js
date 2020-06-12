import React from "react";
import ReactDOM from "react-dom";
import "./Styles/styles.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route component={AppRoutes} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
