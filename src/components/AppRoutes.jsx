import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
};

export default AppRoutes;
