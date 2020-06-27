import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import ProcessTable from "./Templates/ProcessTable";
import NavBar from "./Organisms/NavBar";
import Areas from "./Pages/Areas";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/table/:testId/:id" component={ProcessTable} />
        <Route path="/areas" component={Areas} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
